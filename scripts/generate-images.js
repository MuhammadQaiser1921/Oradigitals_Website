// Generates the share pictures shown when a page is shared on WhatsApp, LinkedIn, Facebook or X
// (1200 x 630: the site default plus one per case study and product) and the app / home-screen icons.
//
//   npm run images
//
// Run it after adding a case study or product. Uses headless Google Chrome (set CHROME_PATH if it
// is not in the default location) and needs Node 20.10 or newer.
const { spawn } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')
const { getSite, getProducts } = require('../src/data/site-content')
const { getAllCaseStudies } = require('../src/data/case-studies-data')

const root = path.join(__dirname, '..')
const shareDir = path.join(root, 'public', 'images', 'share')
const iconDir = path.join(root, 'public', 'icons')
const CHROME =
  process.env.CHROME_PATH ||
  {
    win32: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  }[process.platform] ||
  'google-chrome'
const PORT = 9341

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const esc = (text) => String(text).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

function shareHtml({ eyebrow, title, text }) {
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&display=block" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; overflow: hidden; position: relative; color: #fff;
    font-family: Inter, 'Segoe UI', sans-serif; background: linear-gradient(135deg, #284763 0%, #1c344a 100%); }
  .ring { position: absolute; right: -150px; top: 35px; width: 560px; height: 560px; border-radius: 50%;
    border: 60px solid rgba(255, 255, 255, 0.07); }
  .dot { position: absolute; right: 150px; top: 60px; width: 84px; height: 84px; border-radius: 50%; background: #f09b4a; }
  .wrap { position: absolute; inset: 64px 80px 70px; display: flex; flex-direction: column; justify-content: space-between; }
  .brand { font-weight: 800; font-size: 38px; letter-spacing: -0.02em; }
  .brand span { color: #f09b4a; }
  .eyebrow { color: #f09b4a; font-weight: 700; font-size: 22px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px; }
  h1 { font-weight: 800; font-size: 62px; line-height: 1.08; letter-spacing: -0.02em; max-width: 920px; }
  p { margin-top: 22px; font-size: 27px; line-height: 1.4; font-weight: 500; color: rgba(255, 255, 255, 0.8); max-width: 900px;
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .foot { font-size: 23px; font-weight: 500; color: rgba(255, 255, 255, 0.7); }
  .bar { position: absolute; left: 0; bottom: 0; width: 100%; height: 10px; background: #f09b4a; }
</style></head><body>
  <div class="ring"></div><div class="dot"></div>
  <div class="wrap">
    <div class="brand"><span>ORA</span>DIGITALS</div>
    <div>
      ${eyebrow ? `<div class="eyebrow">${esc(eyebrow)}</div>` : ''}
      <h1>${esc(title)}</h1>
      ${text ? `<p>${esc(text)}</p>` : ''}
    </div>
    <div class="foot">oradigitals.com</div>
  </div>
  <div class="bar"></div>
</body></html>`
}

// The favicon mark drawn edge to edge: phones add their own rounded corners
function iconHtml(size) {
  return `<!doctype html><html><head><style>* { margin: 0; } body { width: ${size}px; height: ${size}px; overflow: hidden; }</style></head><body>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}" style="display:block">
  <rect width="64" height="64" fill="#284763"/>
  <circle cx="32" cy="32" r="18" fill="none" stroke="#ffffff" stroke-width="5"/>
  <circle cx="44" cy="20" r="5" fill="#f09b4a"/>
</svg></body></html>`
}

async function connect(profileDir) {
  const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profileDir}`, '--no-first-run', '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' })
  let target
  for (let i = 0; i < 40 && !target; i++) {
    try {
      target = (await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()).find((t) => t.type === 'page')
    } catch (e) {
      await sleep(250)
    }
  }
  if (!target) {
    chrome.kill()
    throw new Error(`Could not start Chrome at ${CHROME} (set CHROME_PATH)`)
  }
  const ws = new WebSocket(target.webSocketDebuggerUrl)
  await new Promise((resolve) => ws.addEventListener('open', resolve))
  let id = 0
  const pending = new Map()
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data)
    if (pending.has(message.id)) {
      pending.get(message.id)(message.result)
      pending.delete(message.id)
    }
  })
  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const callId = ++id
      pending.set(callId, resolve)
      ws.send(JSON.stringify({ id: callId, method, params }))
    })
  return { send, close: () => (ws.close(), chrome.kill()) }
}

async function render(browser, html, width, height, file, workDir) {
  const htmlFile = path.join(workDir, 'render.html')
  fs.writeFileSync(htmlFile, html)
  await browser.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false })
  await browser.send('Page.navigate', { url: `file:///${htmlFile.replace(/\\/g, '/')}` })
  await sleep(300)
  await browser.send('Runtime.evaluate', { expression: 'document.fonts.ready.then(() => true)', awaitPromise: true })
  await sleep(150)
  const shot = await browser.send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width, height, scale: 1 } })
  fs.writeFileSync(file, Buffer.from(shot.data, 'base64'))
  console.log(`  ${path.relative(root, file)}`)
}

async function main() {
  const site = getSite()
  const shares = [
    {
      name: 'oradigitals',
      title: site.tagline,
      text: 'Oracle Fusion & EBS · FBR, ZATCA & UAE FTA e-invoicing · Bank, courier & e-commerce integrations',
    },
    ...getAllCaseStudies().map((cs) => ({ name: `case-study-${cs.slug}`, eyebrow: 'Case Study', title: cs.client, text: cs.title })),
    ...getProducts().map((product) => ({ name: `product-${product.slug}`, eyebrow: 'Product', title: product.name, text: product.tagline })),
  ]
  const icons = [
    { file: 'apple-touch-icon.png', size: 180 },
    { file: 'icon-192.png', size: 192 },
    { file: 'icon-512.png', size: 512 },
  ]

  fs.mkdirSync(shareDir, { recursive: true })
  fs.mkdirSync(iconDir, { recursive: true })
  const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'oradigitals-images-'))
  const browser = await connect(path.join(workDir, 'chrome-profile'))
  try {
    await browser.send('Page.enable')
    console.log('Share pictures:')
    for (const share of shares) {
      await render(browser, shareHtml(share), 1200, 630, path.join(shareDir, `${share.name}.png`), workDir)
    }
    console.log('Icons:')
    for (const icon of icons) {
      await render(browser, iconHtml(icon.size), icon.size, icon.size, path.join(iconDir, icon.file), workDir)
    }
  } finally {
    browser.close()
  }
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
