// Emails each form submission to the office. Off until the SMTP settings below are provided as
// environment variables; submissions are always saved to the submissions file as well, so nothing
// is lost if email is off or a send fails.
//
//   SMTP_HOST, SMTP_PORT (default 587; 465 uses SSL), SMTP_USER, SMTP_PASS
//   MAIL_FROM  sender address, e.g. "OraDigitals Website <website@oradigitals.com>"
//   MAIL_TO    recipient(s), comma-separated, e.g. "info@oradigitals.com"
//
// MAIL_TRANSPORT=json builds the emails without sending them (used by the tests).
const nodemailer = require('nodemailer')

const mailTo = process.env.MAIL_TO
const mailFrom = process.env.MAIL_FROM || process.env.SMTP_USER

function createTransport() {
  if (process.env.MAIL_TRANSPORT === 'json') return nodemailer.createTransport({ jsonTransport: true })
  if (!process.env.SMTP_HOST || !mailTo || !mailFrom) return null
  const port = parseInt(process.env.SMTP_PORT || '587', 10)
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
  })
}

const transport = createTransport()

function isEmailEnabled() {
  return Boolean(transport)
}

// entry: { type, page, createdAt, data }, fields: the form's field definitions (for labels and order)
async function sendSubmissionEmail(entry, fields) {
  if (!transport) return null
  const kind = entry.type !== 'career' ? 'Website enquiry' : entry.page === '/career/internship' ? 'Internship application' : 'Job application'
  const lines = fields
    .filter((field) => entry.data[field.name])
    .map((field) => `${field.label}:\n${entry.data[field.name]}\n`)

  return transport.sendMail({
    from: mailFrom || 'website@oradigitals.com',
    to: mailTo || 'test@example.com',
    replyTo: entry.data.email,
    subject: `${kind} from ${entry.data.name || 'the website'}`,
    text: [
      `${kind} received on ${entry.createdAt} from ${entry.page || 'the website'}.`,
      '',
      ...lines,
    ].join('\n'),
  })
}

module.exports = { isEmailEnabled, sendSubmissionEmail }
