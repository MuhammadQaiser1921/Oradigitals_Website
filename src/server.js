const express = require('express')
const path = require('path')
const {
  getSite,
  getComponents,
  getPageByPath,
  getPageBySlug,
} = require('./data/site-content')

const app = express()
const port = parseInt(process.env.PORT || '3000', 10)
const host = process.env.HOST || '127.0.0.1'
const submissions = []

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static(path.join(process.cwd(), 'public')))

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

app.post('/api/contact', (req, res) => {
  const payload = {
    type: 'contact',
    createdAt: new Date().toISOString(),
    data: req.body || {},
  }
  submissions.push(payload)

  if ((req.headers.accept || '').includes('application/json')) {
    return res.status(201).json({ ok: true, message: 'Message received successfully.' })
  }

  return res.redirect('/contact?status=success&message=Message%20received%20successfully')
})

app.post('/api/apply', (req, res) => {
  const payload = {
    type: 'career',
    createdAt: new Date().toISOString(),
    data: req.body || {},
  }
  submissions.push(payload)

  if ((req.headers.accept || '').includes('application/json')) {
    return res.status(201).json({ ok: true, message: 'Application submitted successfully.' })
  }

  return res.redirect('/career?status=success&message=Application%20submitted%20successfully')
})

app.get('*', (req, res) => {
  const page = getPageByPath(req.path)
  const site = getSite()
  const flash = {
    status: req.query.status ? String(req.query.status) : '',
    message: req.query.message ? String(req.query.message) : '',
  }

  if (!page) {
    return res.status(404).render('page', {
      site,
      currentPath: req.path,
      flash,
      page: {
        title: 'Page Not Found - OraDigitals',
        description: 'The requested page does not exist.',
        sections: [
          {
            component: 'hero',
            props: {
              badge: '404',
              heading: 'Page not found',
              subheading: 'The route you requested does not exist.',
              text: 'Use the navigation to continue browsing the site.',
              actions: [{ label: 'Go to Home', href: '/', style: 'primary' }],
            },
          },
        ],
      },
    })
  }

  return res.render('page', {
    site,
    currentPath: req.path,
    flash,
    page,
  })
})

app.listen(port, host, () => {
  console.log(`Express API-rendered app running on http://${host}:${port}`)
})
