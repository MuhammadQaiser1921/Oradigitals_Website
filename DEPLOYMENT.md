# Deployment Guide

The site is a standard Node.js Express app.

## Requirements

- Node.js 20 or newer, npm
- A Node host (cPanel Node.js App Manager, VPS with nginx, or a Node hosting platform)

## Steps

1. Upload the project (without `node_modules/`, `archive/` and `scratch/`).
2. Run `npm install --omit=dev` in the project folder.
3. Set the environment variables below, with `NODE_ENV=production`.
4. Start with `npm start` (startup file: `server.js`).
5. Check `https://oradigitals.com/health` returns `{"ok":true}`.

On cPanel: create a Node.js app with application mode *Production*, the project folder as application root, and `server.js` as startup file; add the variables under *Environment variables*, run *NPM Install*, then restart.

## Environment variables

| Variable | Purpose |
|---|---|
| `NODE_ENV=production` | Turns on browser caching of images, CSS and fonts (7 days), template caching and the HTTPS upgrade rule |
| `PORT`, `HOST` | Listening port (usually set by the host) and address (default `0.0.0.0`) |
| `TRUST_PROXY=1` | Set when the app runs behind nginx or a hosting proxy, so visitor IPs (used by the form limit) are read correctly. Leave unset otherwise. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Mail server for form emails. Port 587 (default) uses STARTTLS; 465 uses SSL. |
| `MAIL_FROM` | Sender, e.g. `OraDigitals Website <website@oradigitals.com>` |
| `MAIL_TO` | Who receives submissions, e.g. `info@oradigitals.com` (comma-separate several) |
| `SUBMISSIONS_FILE` | Optional: where submissions are saved (default `data/submissions.json`) |
| `FORM_RATE_LIMIT`, `FORM_RATE_WINDOW_MINUTES` | Optional: submissions allowed per visitor and window (default 5 per 10 minutes) |

Form emails stay off until `SMTP_HOST`, `MAIL_FROM` and `MAIL_TO` are set; the start-up log says `Form emails: on` or `off`. Every submission is also saved to the submissions file, so nothing is lost if email is off or a send fails. Back that file up; it is not in git.

## Domain and HTTPS

The site declares `https://oradigitals.com` as its main address (canonical URLs, sitemap). Configure the host or proxy to:

- redirect `http://` to `https://`;
- redirect `www.oradigitals.com` to `oradigitals.com`.

The app sends an HSTS header for this host only (not subdomains such as the support desk).

## After deploying

- Open the home page and a few inner pages; check the browser console shows no errors.
- Send a test message from `/contact` and confirm it arrives by email (if configured) and in the submissions file.
- Check `https://oradigitals.com/sitemap.xml` and `https://oradigitals.com/robots.txt`.
- Submit `sitemap.xml` in Google Search Console.
- Paste a page link into WhatsApp or LinkedIn to confirm the share picture appears.

## Troubleshooting

- **App fails to start**: check the startup file is `server.js`, that `npm install` ran in the project folder, and the host logs.
- **Styles missing**: `public/express.css` must be uploaded; static files are served from `/public`.
- **A page returns 404**: the page's key must exist in `pages` in `src/data/site-content.js` (or the case study in `src/data/case-studies-data.js`); restart after data changes.
- **Every visitor hits the form limit at once**: the app is behind a proxy; set `TRUST_PROXY=1`.
