# OraDigitals Project Summary

- **Runtime**: Node.js + Express 4, server-rendered EJS templates, one stylesheet (`public/express.css`).
- **Content**: page data in `src/data/site-content.js`; case studies in `src/data/case-studies-data.js`.
- **Pages (32)**: home; services hub and 13 service pages; products hub and 2 product pages; about, team, life, career, internship; customers, case studies hub and 4 case studies; compliance; contact; HTML sitemap.
- **Forms**: contact, job and internship forms are validated on the server, spam-trapped and rate-limited. Submissions are saved to `data/submissions.json` and emailed once SMTP is configured (`src/mailer.js`).
- **SEO**: unique titles and descriptions, canonical URLs, Open Graph / Twitter tags with per-page share pictures, organization and article structured data, `sitemap.xml`, `robots.txt`, `noindex` on error pages, permanent redirects for old and trailing-slash URLs.
- **Security and speed**: helmet security headers (including a Content Security Policy), gzip compression, a week of browser caching for static files in production, and a versioned stylesheet URL.
- **Tests**: `npm test` (routes, redirects, forms, structured data, headers).
- **Not in git**: `archive/` (old Next.js version), `scratch/`, `data/submissions.json`.

See `README.md` for how the code is organised and `TODO.md` for open items.
