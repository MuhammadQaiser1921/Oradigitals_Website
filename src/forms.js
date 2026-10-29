// Contact and job application forms: validation, spam protection, rate limiting and the fixed
// messages shown after sending. Form fields are defined once, in the page data (contact-form
// sections), and the same definition drives both the rendered form and the checks here.
const { getPageByPath } = require('./data/site-content')

// Hidden field that people never see or fill in; bots that fill every field give themselves away
const HONEYPOT_FIELD = 'website'

const MAX_TEXT_LENGTH = 200
const MAX_MESSAGE_LENGTH = 5000

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/

// Messages are built in, never taken from the URL, so a link can't make the site show arbitrary text
function flashMessage(status, formType, site) {
  const messages = {
    success:
      formType === 'career'
        ? 'Thank you. Your application has been submitted and our team will review it.'
        : 'Thank you. Your message has been sent and our team will get back to you shortly.',
    invalid: 'Some required details are missing or not valid. Please check the form and try again.',
    limited: `Too many submissions from your connection. Please try again in a few minutes, or email ${site.email}.`,
    error: `Something went wrong while sending. Please try again, or email ${site.email}.`,
  }
  return messages[status] || ''
}

// The form section of a page, e.g. '/career/internship' -> its contact-form props (or null)
function findForm(sourcePath) {
  if (typeof sourcePath !== 'string' || !/^\/[a-z0-9/-]*$/.test(sourcePath)) return null
  const page = getPageByPath(sourcePath)
  const section = page && page.sections.find((s) => s.component === 'contact-form')
  return section ? section.props : null
}

function cleanValue(value, multiline) {
  if (typeof value !== 'string') return ''
  const trimmed = value.trim()
  // Single-line fields never need line breaks or control characters (keeps email headers safe)
  return multiline ? trimmed.replace(/\r\n/g, '\n') : trimmed.replace(/[\u0000-\u001f\u007f]+/g, ' ')
}

// Returns { data, errors }. Only fields the form defines are kept; anything else in the request is dropped.
function validateSubmission(form, body) {
  const fields = form ? form.fields : [
    { name: 'name', label: 'Full Name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'phone', label: 'Phone Number' },
    { name: 'service', label: 'Service of Interest' },
    { name: 'subject', label: 'Subject' },
    { name: 'message', label: 'Message', type: 'textarea' },
  ]
  const data = {}
  const errors = {}

  fields.forEach((field) => {
    const multiline = field.type === 'textarea'
    const value = cleanValue(body[field.name], multiline)
    const maxLength = multiline ? MAX_MESSAGE_LENGTH : MAX_TEXT_LENGTH

    if (!value) {
      if (field.required) errors[field.name] = `${field.label} is required.`
      return
    }
    if (value.length > maxLength) {
      errors[field.name] = `${field.label} must be ${maxLength} characters or fewer.`
    } else if (field.type === 'email' && !EMAIL_PATTERN.test(value)) {
      errors[field.name] = 'Enter a valid email address, e.g. name@company.com.'
    } else if (field.type === 'tel' && !PHONE_PATTERN.test(value)) {
      errors[field.name] = 'Enter a valid phone number, e.g. +92 300 1234567.'
    } else if (field.type === 'select' && form && !(field.options || []).includes(value)) {
      errors[field.name] = `Choose an option for ${field.label}.`
    }
    data[field.name] = value
  })

  return { data, errors, fields }
}

function isSpam(body) {
  return typeof body[HONEYPOT_FIELD] === 'string' && body[HONEYPOT_FIELD].trim() !== ''
}

// Simple in-memory limit per visitor IP: FORM_RATE_LIMIT submissions per FORM_RATE_WINDOW_MINUTES
function createRateLimiter() {
  const limit = parseInt(process.env.FORM_RATE_LIMIT || '5', 10)
  const windowMs = parseInt(process.env.FORM_RATE_WINDOW_MINUTES || '10', 10) * 60 * 1000
  const hits = new Map()

  const cleanup = setInterval(() => {
    const cutoff = Date.now() - windowMs
    hits.forEach((times, ip) => {
      const recent = times.filter((t) => t > cutoff)
      if (recent.length) hits.set(ip, recent)
      else hits.delete(ip)
    })
  }, windowMs)
  cleanup.unref()

  return function isLimited(ip) {
    const now = Date.now()
    const recent = (hits.get(ip) || []).filter((t) => t > now - windowMs)
    recent.push(now)
    hits.set(ip, recent)
    return recent.length > limit
  }
}

module.exports = {
  HONEYPOT_FIELD,
  MAX_TEXT_LENGTH,
  MAX_MESSAGE_LENGTH,
  flashMessage,
  findForm,
  validateSubmission,
  isSpam,
  createRateLimiter,
}
