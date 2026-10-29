const express = require('express')
const path = require('path')
const fs = require('fs')
const compression = require('compression')
const helmet = require('helmet')
const {
  getSite,
  getComponents,
  getPageByPath,
  getPageBySlug,
  getAllRoutes,
  getBreadcrumbs,
} = require('./data/site-content')
const { resolveSlug } = require('./data/case-studies-data')
const { flashMessage, findForm, validateSubmission, isSpam, createRateLimiter } = require('./forms')
const { sendSubmissionEmail, isEmailEnabled } = require('./mailer')

const app = express()
const port = parseInt(process.env.PORT || '3000', 10)
const host = process.env.HOST || '0.0.0.0'
const isProduction = process.env.NODE_ENV === 'production'
const publicDir = path.join(__dirname, '..', 'public')
const cssFile = path.join(publicDir, 'express.css')
const submissionsFile = process.env.SUBMISSIONS_FILE
  ? path.resolve(process.env.SUBMISSIONS_FILE)
  : path.join(__dirname, '..', 'data', 'submissions.json')
const siteUrl = 'https://oradigitals.com'

let submissions = []
try {
  if (fs.existsSync(submissionsFile)) {
    submissions = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'))
  }
} catch (e) {
  console.error('Warning: Could not read submissions file:', e.message)
}

function recordSubmission(entry) {
  submissions.push(entry)
  try {
    fs.mkdirSync(path.dirname(submissionsFile), { recursive: true })
    fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2), 'utf8')
  } catch (e) {
    console.error('Warning: Failed to persist submission:', e.message)
  }
}

// Behind a reverse proxy (nginx, a hosting platform), set TRUST_PROXY=1 so visitor IPs are read correctly
if (process.env.TRUST_PROXY) {
  app.set('trust proxy', parseInt(process.env.TRUST_PROXY, 10) || process.env.TRUST_PROXY)
}

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

let cachedCssVersion = null
function cssVersion() {
  if (cachedCssVersion && isProduction) return cachedCssVersion
  try {
    cachedCssVersion = Math.floor(fs.statSync(cssFile).mtimeMs).toString(36)
  } catch (e) {
    cachedCssVersion = '1'
  }
  return cachedCssVersion
}

// Security headers. Pages use small inline scripts, Google Fonts and the Google Maps embed.
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:'],
        frameSrc: ['https://www.google.com'],
        connectSrc: ["'self'"],
        formAction: ["'self'"],
        frameAncestors: ["'self'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        upgradeInsecureRequests: isProduction ? [] : null,
      },
    },
    // Subdomains such as the support desk are managed separately, so HSTS covers this host only
    strictTransportSecurity: { maxAge: 15552000, includeSubDomains: false },
    // Let share previews and other sites load public images
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
)

app.use(compression())
app.use((req, res, next) => {
  res.locals.currentPath = req.path
  res.locals.cssVersion = cssVersion()
  next()
})

app.use(express.urlencoded({ extended: false, limit: '20kb', parameterLimit: 50 }))
app.use(express.json({ limit: '20kb' }))

// Static files are cached for a week in production; the stylesheet URL carries a version so changes show at once
const staticMaxAge = isProduction ? '7d' : 0
app.use('/public', express.static(publicDir, { maxAge: staticMaxAge }))

// One address per page: /about/ redirects to /about (multiple slashes collapse, so the target is always on this site)
app.use((req, res, next) => {
  if ((req.method === 'GET' || req.method === 'HEAD') && req.path.length > 1 && req.path.endsWith('/')) {
    const queryIndex = req.originalUrl.indexOf('?')
    const query = queryIndex >= 0 ? req.originalUrl.slice(queryIndex) : ''
    const target = `/${req.path.replace(/^\/+|\/+$/g, '')}`
    return res.redirect(301, target + query)
  }
  return next()
})

// Direct Favicon Route
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(publicDir, 'favicon.ico'), { maxAge: staticMaxAge })
})

// iPhones and iPads look for the home-screen icon at the site root
app.get('/apple-touch-icon.png', (req, res) => {
  res.sendFile(path.join(publicDir, 'icons', 'apple-touch-icon.png'), { maxAge: staticMaxAge })
})

// Crawler rules: index every page, skip the JSON API and health check, and point to the sitemap
app.get('/robots.txt', (req, res) => {
  res.type('text/plain')
  res.send(`User-agent: *
Allow: /
Disallow: /api/
Disallow: /health

Sitemap: ${siteUrl}/sitemap.xml
`)
})

// Last-modified date for the sitemap: a page's own `updated` date, or when the file holding its content last changed
const contentFiles = {
  pages: path.join(__dirname, 'data', 'site-content.js'),
  caseStudies: path.join(__dirname, 'data', 'case-studies-data.js'),
}

function lastModified(slug) {
  const page = getPageBySlug(slug)
  if (page && page.updated) return page.updated
  const file = slug.startsWith('customers/case-studies/') ? contentFiles.caseStudies : contentFiles.pages
  try {
    return fs.statSync(file).mtime.toISOString().split('T')[0]
  } catch (e) {
    return null
  }
}

// Dynamic XML Sitemap Endpoint (for Search Engines & SEO)
app.get('/sitemap.xml', (req, res) => {
  const routes = getAllRoutes()
  const baseUrl = siteUrl

  const xmlUrls = routes
    .map((slug) => {
      const urlPath = slug ? `/${slug}` : ''
      const lastmod = lastModified(slug)
      let priority = '0.7'
      let changefreq = 'monthly'
      if (!slug) {
        priority = '1.0'
        changefreq = 'weekly'
      } else if (slug === 'services') {
        priority = '0.9'
        changefreq = 'weekly'
      } else if (slug.startsWith('services/')) {
        priority = '0.85'
        changefreq = 'monthly'
      } else if (slug === 'contact' || slug === 'about') {
        priority = '0.8'
      }

      return `  <url>
    <loc>${baseUrl}${urlPath}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`

  res.header('Content-Type', 'application/xml')
  return res.send(sitemapXml)
})

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, runtime: 'express' })
})

app.get('/api/site', (req, res) => {
  res.json({ site: getSite() })
})

app.get('/api/components', (req, res) => {
  res.json({ components: getComponents() })
})

app.get('/api/components/:name', (req, res) => {
  const components = getComponents()
  const entry = components[req.params.name]
  if (!entry) {
    return res.status(404).json({ error: 'Component not found' })
  }
  return res.json({ component: { name: req.params.name, ...entry } })
})

app.get('/api/page', (req, res) => {
  const slug = req.query.slug ? String(req.query.slug) : ''
  const page = getPageBySlug(slug)

  if (!page) {
    return res.status(404).json({ error: 'Page not found', slug })
  }

  return res.json({ slug, page })
})

// Form submissions. Forms send `source` (the page they are on); its form definition decides which
// fields are required, and visitors without JavaScript are sent back to that form with a fixed message.
const isRateLimited = createRateLimiter()

function wantsJson(req) {
  return (req.headers.accept || '').includes('application/json')
}

function replyToForm(req, res, { type, source, status, httpStatus, errors }) {
  const message = flashMessage(status, type, getSite())
  if (wantsJson(req)) {
    return res.status(httpStatus).json({ ok: status === 'success', message, ...(errors ? { errors } : {}) })
  }
  const target = findForm(source) ? source : type === 'career' ? '/career' : '/contact'
  const form = findForm(target)
  return res.redirect(303, `${target}?status=${status}${form && form.id ? `#${form.id}` : ''}`)
}

function handleSubmission(type) {
  return (req, res) => {
    const body = req.body && typeof req.body === 'object' ? req.body : {}
    const source = typeof body.source === 'string' ? body.source : ''
    const form = findForm(source)
    const reply = (status, httpStatus, errors) => replyToForm(req, res, { type, source, status, httpStatus, errors })

    if (isRateLimited(req.ip)) return reply('limited', 429)
    // Bots get the normal success reply, so they have no reason to retry; nothing is stored or sent
    if (isSpam(body)) return reply('success', 201)

    const { data, errors, fields } = validateSubmission(form, body)
    if (Object.keys(errors).length) return reply('invalid', 400, errors)

    const entry = { type, page: form ? source : null, createdAt: new Date().toISOString(), data }
    recordSubmission(entry)
    sendSubmissionEmail(entry, fields).catch((e) => console.error('Warning: Failed to email submission:', e.message))
    return reply('success', 201)
  }
}

app.post('/api/contact', handleSubmission('contact'))
app.post('/api/apply', handleSubmission('career'))

// Alias URLs redirect permanently so every page has a single canonical URL
app.get('/clients', (req, res) => res.redirect(301, '/customers'))
app.get('/case-studies', (req, res) => res.redirect(301, '/customers/case-studies'))
app.get('/case-studies/:slug', (req, res) => res.redirect(301, `/customers/case-studies/${resolveSlug(req.params.slug)}`))

app.get('/customers/case-studies/:slug', (req, res, next) => {
  const canonical = resolveSlug(req.params.slug)
  if (canonical && canonical !== req.params.slug) {
    return res.redirect(301, `/customers/case-studies/${canonical}`)
  }
  return next()
})

app.get('*', (req, res) => {
  const page = getPageByPath(req.path)
  const site = getSite()

  if (!page) {
    return res.status(404).render('page', {
      site,
      currentPath: req.path,
      flash: {},
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: '404 Not Found', href: req.path },
      ],
      page: {
        title: 'Page Not Found - OraDigitals',
        description: 'The requested page does not exist.',
        noindex: true,
        sections: [
          {
            component: 'cta',
            props: {
              title: 'Page not found',
              text: 'The page you requested does not exist or the link is out of date. Use the menu above or browse the sitemap to find what you need.',
              actions: [
                { label: 'Go to Home', href: '/', style: 'primary' },
                { label: 'Browse Sitemap', href: '/sitemap', style: 'outline' },
              ],
            },
          },
        ],
      },
    })
  }

  // Result of a form sent without JavaScript (?status=success etc.), shown inside the page's form
  const form = page.sections.find((section) => section.component === 'contact-form')
  const status = form && typeof req.query.status === 'string' ? req.query.status : ''
  const message = status ? flashMessage(status, form.props.type, site) : ''

  return res.render('page', {
    site,
    currentPath: req.path,
    flash: message ? { status, message } : {},
    page,
    breadcrumbs: getBreadcrumbs(req.path),
  })
})

app.use((err, req, res, next) => {
  // Oversized or malformed form data
  if (err.status >= 400 && err.status < 500 && req.path.startsWith('/api/')) {
    const type = req.path === '/api/apply' ? 'career' : 'contact'
    let source = ''
    try {
      source = new URL(req.headers.referer || '').pathname
    } catch (e) {
      source = ''
    }
    return replyToForm(req, res, { type, source, status: 'invalid', httpStatus: err.status })
  }

  if (err.status >= 400 && err.status < 500) {
    return res.status(err.status).type('text/plain').send('Bad request')
  }

  console.error('Unhandled Application Error:', err)
  const site = getSite()
  res.status(500).render('page', {
    site,
    currentPath: req.path,
    flash: { status: 'error', message: 'An internal server error occurred.' },
    page: {
      title: '500 Server Error - OraDigitals',
      description: 'An internal server error occurred.',
      noindex: true,
      sections: [
        {
          component: 'cta',
          props: {
            title: 'Something went wrong',
            text: 'Please try again later or contact our team directly.',
            actions: [{ label: 'Return Home', href: '/', style: 'primary' }],
          },
        },
      ],
    },
  })
})

const server = app.listen(port, host, () => {
  console.log(`Express API-rendered app running on http://${host}:${port}`)
  console.log(isEmailEnabled() ? 'Form emails: on' : 'Form emails: off (set SMTP_HOST, MAIL_FROM and MAIL_TO to turn on)')
})

app.server = server
module.exports = app
