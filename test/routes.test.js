const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');
const assert = require('assert');

// Tests save form submissions to a temporary file (never the real data/submissions.json), build emails
// without sending them, and use a low form limit so the rate limiting can be checked.
const subsFile = path.join(os.tmpdir(), `oradigitals-test-submissions-${process.pid}.json`);
process.env.SUBMISSIONS_FILE = subsFile;
process.env.MAIL_TRANSPORT = 'json';
process.env.FORM_RATE_LIMIT = '5';

// 1. Verify CSS syntax
console.log('--- 1. Testing CSS Syntax Integrity ---');
const cssContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'express.css'), 'utf8');
let depth = 0;
let cssErrors = 0;
const lines = cssContent.split('\n');
for (let i = 0; i < lines.length; i++) {
  for (const ch of lines[i]) {
    if (ch === '{') depth++;
    if (ch === '}') depth--;
    if (depth < 0) {
      console.error(`Unmatched closing brace at line ${i + 1}`);
      cssErrors++;
      depth = 0;
    }
  }
}
assert.strictEqual(depth, 0, 'CSS has unclosed blocks');
assert.strictEqual(cssErrors, 0, 'CSS has bracket mismatches');
console.log('CSS bracket integrity: PASS (0 errors)');

// 2. Start server and run endpoint integration tests
console.log('\n--- 2. Testing HTTP Endpoints & Dedicated Service Routes ---');
process.env.PORT = '0'; // Dynamic ephemeral port
const app = require('../src/server');

const server = app.server;

const testCases = [
  // Core pages
  { path: '/', method: 'GET', expected: 200 },
  { path: '/about', method: 'GET', expected: 200 },
  { path: '/services', method: 'GET', expected: 200 },
  { path: '/products', method: 'GET', expected: 200 },
  { path: '/products/eastftp', method: 'GET', expected: 200 },
  { path: '/products/pimidrome', method: 'GET', expected: 200 },
  { path: '/team', method: 'GET', expected: 200 },
  { path: '/career', method: 'GET', expected: 200 },
  { path: '/career/internship', method: 'GET', expected: 200 },
  { path: '/life', method: 'GET', expected: 200 },
  { path: '/customers', method: 'GET', expected: 200 },
  { path: '/customers/case-studies', method: 'GET', expected: 200 },
  { path: '/compliance', method: 'GET', expected: 200 },
  { path: '/contact', method: 'GET', expected: 200 },
  { path: '/sitemap', method: 'GET', expected: 200 },

  // Dedicated Service Pages
  { path: '/services/oracle-erp', method: 'GET', expected: 200 },
  { path: '/services/custom-erp', method: 'GET', expected: 200 },
  { path: '/services/fbr-integration', method: 'GET', expected: 200 },
  { path: '/services/zatca-integration', method: 'GET', expected: 200 },
  { path: '/services/dubai-fta-integration', method: 'GET', expected: 200 },
  { path: '/services/system-integration', method: 'GET', expected: 200 },
  { path: '/services/shopify-solutions', method: 'GET', expected: 200 },
  { path: '/services/ecommerce-solutions', method: 'GET', expected: 200 },
  { path: '/services/bank-integration', method: 'GET', expected: 200 },
  { path: '/services/courier-integration', method: 'GET', expected: 200 },
  { path: '/services/oracle-apex', method: 'GET', expected: 200 },
  { path: '/services/data-analytics', method: 'GET', expected: 200 },
  { path: '/services/system-upgrade-migration', method: 'GET', expected: 200 },

  // Dedicated Single Case Study Pages (children of Customers)
  { path: '/customers/case-studies/treet-corporation', method: 'GET', expected: 200 },
  { path: '/customers/case-studies/primmeshiper', method: 'GET', expected: 200 },
  { path: '/customers/case-studies/gulf-logistics-zatca', method: 'GET', expected: 200 },
  { path: '/customers/case-studies/investmenter-dubai', method: 'GET', expected: 200 },
  { path: '/customers/case-studies/zatca-integration', method: 'GET', expected: 301 },

  // Old URLs redirect permanently to their new home under /customers
  { path: '/clients', method: 'GET', expected: 301 },
  { path: '/case-studies', method: 'GET', expected: 301 },
  { path: '/case-studies/treet-corporation', method: 'GET', expected: 301 },

  // Dynamic XML Sitemap
  { path: '/sitemap.xml', method: 'GET', expected: 200 },
  { path: '/robots.txt', method: 'GET', expected: 200 },

  // Static Assets & APIs
  { path: '/health', method: 'GET', expected: 200 },
  { path: '/api/site', method: 'GET', expected: 200 },
  { path: '/api/components', method: 'GET', expected: 200 },
  { path: '/api/components/map', method: 'GET', expected: 200 },
  { path: '/api/components/faq', method: 'GET', expected: 200 },
  { path: '/api/components/case-studies', method: 'GET', expected: 200 },
  { path: '/api/page?slug=services/oracle-erp', method: 'GET', expected: 200 },
  { path: '/favicon.ico', method: 'GET', expected: 200 },
  { path: '/public/favicon.svg', method: 'GET', expected: 200 },
  { path: '/public/express.css', method: 'GET', expected: 200 },
  { path: '/public/images/office-hq.jpg', method: 'GET', expected: 200 },
  { path: '/public/images/team-consultants.jpg', method: 'GET', expected: 200 },
  { path: '/public/images/internship-collaboration.jpg', method: 'GET', expected: 200 },
  { path: '/public/images/treet-logo.png', method: 'GET', expected: 200 },
  { path: '/public/images/primmeshiper-logo.png', method: 'GET', expected: 200 },
  { path: '/public/images/agilecentral-logo.svg', method: 'GET', expected: 200 },
  { path: '/public/images/investmenter-logo.svg', method: 'GET', expected: 200 },
  { path: '/public/images/team/placeholder-portrait.svg', method: 'GET', expected: 200 },
  { path: '/public/images/share/oradigitals.png', method: 'GET', expected: 200 },
  { path: '/public/images/share/case-study-treet-corporation.png', method: 'GET', expected: 200 },
  { path: '/public/site.webmanifest', method: 'GET', expected: 200 },
  { path: '/public/icons/icon-512.png', method: 'GET', expected: 200 },
  { path: '/apple-touch-icon.png', method: 'GET', expected: 200 },
  {
    path: '/non-existent-page',
    method: 'GET',
    expected: 404,
    check: (res, body) => {
      assert.ok(body.includes('<meta name="robots" content="noindex" />'), '404 page should be noindex');
      assert.ok(!body.includes('rel="canonical"'), '404 page should not have a canonical URL');
    },
  },

  // One address per page: trailing slashes redirect, and never to another site
  { path: '/about/', method: 'GET', expected: 301, check: (res) => assert.strictEqual(res.headers.location, '/about') },
  { path: '/services/oracle-erp/?ref=x', method: 'GET', expected: 301, check: (res) => assert.strictEqual(res.headers.location, '/services/oracle-erp?ref=x') },
  { path: '//evil.example/', method: 'GET', expected: 301, check: (res) => assert.strictEqual(res.headers.location, '/evil.example') },

  // Security headers and compression
  {
    path: '/',
    method: 'GET',
    headers: { 'Accept-Encoding': 'gzip' },
    expected: 200,
    check: (res) => {
      assert.ok(res.headers['content-security-policy'], 'Missing Content-Security-Policy header');
      assert.strictEqual(res.headers['x-content-type-options'], 'nosniff');
      assert.strictEqual(res.headers['x-powered-by'], undefined, 'X-Powered-By should be hidden');
      assert.strictEqual(res.headers['content-encoding'], 'gzip', 'Pages should be gzip-compressed');
    },
  },

  // A link can't make the site show its own text: only the built-in form messages appear
  {
    path: '/contact?status=success&message=FAKE-NOTICE',
    method: 'GET',
    expected: 200,
    check: (res, body) => {
      assert.ok(!body.includes('FAKE-NOTICE'), 'Message text from the URL must not be shown');
      assert.ok(body.includes('Your message has been sent'), 'Built-in success message should be shown in the form');
    },
  },

  // Form Submissions (5 allowed per visitor in this test run, then rate limited)
  {
    path: '/api/contact',
    method: 'POST',
    body: JSON.stringify({ name: 'Enterprise Lead', email: 'lead@enterprise.com', service: 'Oracle ERP' }),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    expected: 201,
  },
  {
    path: '/api/apply',
    method: 'POST',
    body: JSON.stringify({ name: 'Intern Candidate', email: 'intern@university.edu' }),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    expected: 201,
  },
  {
    // The contact page's form requires phone, subject and message, and the email must be valid
    path: '/api/contact',
    method: 'POST',
    body: JSON.stringify({ source: '/contact', name: 'No Details', email: 'not-an-email' }),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    expected: 400,
    check: (res, body) => {
      const errors = JSON.parse(body).errors;
      assert.ok(errors.email && errors.phone && errors.subject && errors.message, 'Expected errors for email, phone, subject and message');
    },
  },
  {
    // Spam trap filled in: looks successful to the bot, but nothing is stored
    path: '/api/contact',
    method: 'POST',
    body: JSON.stringify({ name: 'Spam Bot', email: 'bot@spam.example', website: 'http://spam.example' }),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    expected: 201,
  },
  {
    // Without JavaScript: the internship form posts normally and returns to the internship form
    path: '/api/apply',
    method: 'POST',
    body: new URLSearchParams({
      source: '/career/internship',
      name: 'Form Applicant',
      email: 'applicant@university.edu',
      phone: '+92 300 1234567',
      university: 'University of Okara',
      degree: 'BS Computer Science 2026',
      message: 'I would like to join the internship program.',
    }).toString(),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    expected: 303,
    check: (res) => assert.strictEqual(res.headers.location, '/career/internship?status=success#apply'),
  },
  {
    path: '/api/contact',
    method: 'POST',
    body: JSON.stringify({ name: 'Sixth Try', email: 'six@enterprise.com' }),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    expected: 429,
  },
];

async function runTests() {
  if (!server.listening) {
    await new Promise((resolve) => server.once('listening', resolve));
  }
  const address = server.address();
  const port = address.port;
  console.log(`Server listening on dynamic test port ${port}`);

  let passed = 0;
  let failed = 0;

  for (const tc of testCases) {
    await new Promise((resolve) => {
      const options = {
        hostname: '127.0.0.1',
        port,
        path: tc.path,
        method: tc.method,
        headers: tc.headers || {},
      };

      const req = http.request(options, (res) => {
        let body = '';
        // Compressed responses are only checked for their headers
        if (res.headers['content-encoding']) res.resume();
        else res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          let checkError = null;
          try {
            if (tc.check && res.statusCode === tc.expected) tc.check(res, body);
          } catch (err) {
            checkError = err;
          }
          if (res.statusCode === tc.expected && !checkError) {
            console.log(`  [PASS] ${tc.method} ${tc.path} -> ${res.statusCode}`);
            passed++;
          } else if (checkError) {
            console.error(`  [FAIL] ${tc.method} ${tc.path} -> ${checkError.message}`);
            failed++;
          } else {
            console.error(`  [FAIL] ${tc.method} ${tc.path} -> got ${res.statusCode}, expected ${tc.expected}`);
            failed++;
          }
          resolve();
        });
      });

      req.on('error', (err) => {
        console.error(`  [ERROR] ${tc.method} ${tc.path} -> ${err.message}`);
        failed++;
        resolve();
      });

      if (tc.body) req.write(tc.body);
      req.end();
    });
  }

  // 3. Verify submissions file persistence: the 3 valid submissions are saved; the invalid one, the
  // spam-trap one and the rate-limited one are not
  console.log('\n--- 3. Testing Submission Persistence ---');
  assert.ok(fs.existsSync(subsFile), 'Submissions file was not created');
  const subsData = JSON.parse(fs.readFileSync(subsFile, 'utf8'));
  assert.strictEqual(subsData.length, 3, 'Expected exactly 3 saved submissions');
  assert.ok(!subsData.some((entry) => entry.data.name === 'Spam Bot'), 'Spam-trap submission was saved');
  assert.strictEqual(subsData[2].page, '/career/internship', 'Submission should record the page it came from');
  fs.unlinkSync(subsFile);
  console.log(`Submissions file verified: ${subsData.length} records persisted on disk.`);

  // Email for a submission is built with the form's labels and replies to the sender
  const { sendSubmissionEmail } = require('../src/mailer');
  const mail = await sendSubmissionEmail(subsData[2], [
    { name: 'name', label: 'Full Name' },
    { name: 'email', label: 'Email Address' },
  ]);
  const message = JSON.parse(mail.message);
  assert.strictEqual(message.subject, 'Internship application from Form Applicant');
  assert.strictEqual(message.replyTo[0].address, 'applicant@university.edu');
  assert.ok(message.text.includes('Full Name:\nForm Applicant'), 'Email should list the submitted fields');
  console.log('Submission email verified.');

  // 4. Verify Pure English UI and Absence of Multilingual Elements
  console.log('\n--- 4. Testing Pure English UI & Absence of Language Switcher ---');
  await new Promise((resolve) => {
    http.get(`http://localhost:${port}/`, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        assert.ok(body.includes('lang="en"'), 'Missing lang="en" on HTML tag');
        assert.ok(body.includes('dir="ltr"'), 'Missing dir="ltr" on HTML tag');
        assert.ok(!body.includes('class="lang-selector"'), 'Found obsolete lang-selector class');
        assert.ok(!body.includes('family=Cairo'), 'Found unwanted Cairo font');
        assert.ok(!body.includes('hreflang='), 'Found unwanted multilingual hreflang links');
        assert.ok(body.includes('Support Desk'), 'Missing Support Desk button in header');
        assert.ok(body.includes('Contact Us'), 'Missing Contact Us button in header');
        assert.ok(body.includes('Put your enterprise operations'), 'Missing English hero heading');
        assert.ok(body.includes('SECP Reg:'), 'Missing SECP Reg label in English');
        assert.ok(body.includes('PSEB Reg:'), 'Missing PSEB Reg label in English');
        assert.ok(body.includes('FBR NTN:'), 'Missing FBR NTN label in English');
        console.log('  [PASS] Pure English homepage, header, and footer verified with 0 language switcher elements');
        resolve();
      });
    }).on('error', (err) => {
      console.error('  [FAIL] English homepage test error:', err.message);
      failed++;
      resolve();
    });
  });

  await new Promise((resolve) => {
    http.get(`http://localhost:${port}/services/oracle-erp`, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        assert.ok(body.includes('Oracle ERP Implementation &amp; Cloud Consulting'), 'Missing English Oracle ERP title');
        assert.ok(body.includes('Oracle Financials Cloud'), 'Missing English Oracle ERP content');
        assert.ok(!body.includes('class="hero '), 'Inner pages should not render a hero');
        assert.ok(!body.includes('aria-label="Breadcrumb"'), 'Inner pages should not show a breadcrumb trail');
        assert.strictEqual((body.match(/<h1[\s>]/g) || []).length, 1, 'Service page should have exactly one H1');
        assert.ok(/<h1 class="customer-heading">\s*<span class="customer-heading-main">Oracle ERP Implementation Modules</.test(body), 'First section heading should be the page H1');
        assert.ok(body.includes('class="nav-link active">Services'), 'Services menu item should be highlighted on a service page');
        assert.ok(body.includes('Read the Treet Corporation case study'), 'Oracle ERP page should link to the related Treet case study');
        const jsonLd = body.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
        const organization = JSON.parse(jsonLd[1]);
        assert.strictEqual(organization.description, 'Enterprise Digital Systems, Oracle ERP & Compliance Integrations', 'Structured data should not double-encode "&"');
        assert.ok(organization.logo.endsWith('.png'), 'Structured data logo should be a PNG');
        assert.strictEqual(organization.contactPoint.length, 2, 'Structured data should list both phone numbers');
        console.log('  [PASS] English dedicated service page, page heading & menu highlight verified');
        resolve();
      });
    }).on('error', (err) => {
      console.error('  [FAIL] Service test error:', err.message);
      failed++;
      resolve();
    });
  });

  await new Promise((resolve) => {
    http.get(`http://localhost:${port}/customers/case-studies/treet-corporation`, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        assert.ok(body.includes('Integrating E-Commerce and Enterprise Operations'), 'Missing English case study title');
        assert.ok(body.includes('The Challenge'), 'Missing English Challenge header');
        assert.ok(body.includes('The Solution: A Custom Order Management System'), 'Missing English Solution header');
        assert.ok(body.includes('Treet Corporation'), 'Missing Treet Corporation client name');
        assert.ok(!body.includes('aria-label="Breadcrumb"'), 'Case study page should not show a breadcrumb trail');
        assert.strictEqual((body.match(/<h1[\s>]/g) || []).length, 1, 'Case study page should have exactly one H1');
        assert.ok(/class="nav-link active">\s*Customers/.test(body), 'Customers menu item should be highlighted on a case study');
        assert.ok(!body.includes('class="lang-selector"'), 'Found lang-selector on single case study page');
        const title = body.match(/<title>([^<]*)<\/title>/)[1];
        assert.ok(title.length <= 65, `Case study title is ${title.length} characters (keep it near 60)`);
        assert.ok(body.includes('href="/services/oracle-erp" class="cs-related-link"'), 'Case study should link to the services it used');
        assert.ok(body.includes('"@type":"Article"'), 'Case study should have article structured data');
        assert.ok(body.includes('/public/images/share/case-study-treet-corporation.png'), 'Case study should have its own share picture');
        console.log('  [PASS] English single case study page, heading & menu highlight verified');
        resolve();
      });
    }).on('error', (err) => {
      console.error('  [FAIL] Case study test error:', err.message);
      failed++;
      resolve();
    });
  });

  console.log(`\nTest Summary: ${passed} passed, ${failed} failed out of ${testCases.length} routes + English integrity suites.`);
  server.close(() => {
    process.exit(failed === 0 ? 0 : 1);
  });
}

runTests();
