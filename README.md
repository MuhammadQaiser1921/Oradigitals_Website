# OraDigitals Website

Company website for ORADIGITALS (PRIVATE) LIMITED: an Express + EJS app. Pages are described as data and rendered server-side from reusable section components.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # route, form, SEO and security checks
```

`npm run dev` and `npm start` both run `node server.js`. After editing anything in `src/data/`, restart the server: the data files are loaded once at start-up. Templates and CSS changes show on the next page load.

## Project layout

| Path | What it holds |
|---|---|
| `server.js` | Entry point (loads `src/server.js`) |
| `src/server.js` | Express app: pages, redirects, `sitemap.xml`, `robots.txt`, JSON API, form endpoints, security headers, caching |
| `src/forms.js` | Form validation, spam trap, rate limiting and the built-in result messages |
| `src/mailer.js` | Emails each form submission (off until SMTP settings are provided, see `DEPLOYMENT.md`) |
| `src/data/site-content.js` | Company details, main menu, products, team, and every page's sections |
| `src/data/case-studies-data.js` | Case studies (each becomes `/customers/case-studies/<slug>`) |
| `src/views/page.ejs` | The single page layout: head tags, header and menu, sections, footer, scripts |
| `src/views/components/*.ejs` | Section components (`hero`, `cards`, `split`, `case-studies`, `contact-form`, `faq`, `map`, `cta`, …) |
| `src/views/partials/*.ejs` | Shared pieces (section heading, person card, header buttons, icons) |
| `public/express.css` | All styles |
| `public/images/share/`, `public/icons/` | Share pictures and app icons, made by `npm run images` |
| `scripts/generate-images.js` | Generates the share pictures and icons with headless Chrome |
| `test/routes.test.js` | Test suite |

## Editing content

- **Pages** are entries in `pages` in `src/data/site-content.js`, keyed by URL (`'services/oracle-erp'` → `/services/oracle-erp`). Each has a `title`, `description` and a list of `sections` (`{ component, props }`).
- **Section colours and the page heading are automatic**: sections alternate white / grey, and the first section's heading becomes the page's H1. Only the home page has a hero.
- **Services menu, footer and HTML sitemap** are built from `site.nav`, so a renamed or added service updates all three.
- **Case studies**: add an entry to `src/data/case-studies-data.js`. List the services it used in `services` (service URL slugs); the case study then links to those service pages and appears under *Related Case Studies* on each of them. Keep `seoTitle` to about 45 characters and `metaDescription` under 160.
- **Products**: add an entry to `products` in `src/data/site-content.js`; the menu, product cards and `/products/<slug>` page follow.
- **Share pictures**: after adding a case study or product, run `npm run images` (needs Google Chrome) to create its picture in `public/images/share/`. Until then the page uses the default picture.

## URLs

- Customers: `/customers`, `/customers/case-studies`, `/customers/case-studies/<slug>`
- Old addresses redirect permanently: `/clients`, `/case-studies`, `/case-studies/<slug>`; trailing slashes redirect to the address without one (`/about/` → `/about`).
- `/sitemap.xml` and the HTML `/sitemap` list every page; `/robots.txt` points to the XML sitemap.

## Forms

`/contact`, `/career` and `/career/internship` post to `POST /api/contact` or `POST /api/apply`. The fields are defined once in each page's `contact-form` section, and the server checks submissions against that definition (required fields, email and phone format, lengths, select options). Submissions are:

- saved to `data/submissions.json` (not in git);
- emailed when SMTP is configured;
- protected by a hidden spam-trap field and a limit of 5 submissions per visitor per 10 minutes.

With JavaScript the form sends in place and shows the result inside the form; without it, the browser posts normally and returns to the form with a built-in message.

## API

`GET /health`, `GET /api/site`, `GET /api/components`, `GET /api/components/:name`, `GET /api/page?slug=…`, `POST /api/contact`, `POST /api/apply`.

## Deployment

See `DEPLOYMENT.md` (environment variables, email, hosting) and `PRE_DEPLOYMENT_CHECKLIST.md`.

## License

Copyright © 2026 OraDigitals. All rights reserved.
