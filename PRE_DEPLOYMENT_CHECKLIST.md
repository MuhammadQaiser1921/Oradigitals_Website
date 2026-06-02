# Pre-Deployment Checklist (Express)

## Content and Branding

- [ ] Confirm company information in `src/data/site-content.js`
- [ ] Confirm all page titles/descriptions are correct
- [ ] Confirm contact details, compliance numbers, and links

## Functional Checks

- [ ] `npm install` succeeds
- [ ] `npm run dev` starts successfully
- [ ] Homepage and all page routes load
- [ ] `GET /health` returns 200
- [ ] `GET /api/site` returns JSON
- [ ] `GET /api/page?slug=services` returns JSON
- [ ] Contact form submits (`POST /api/contact`)
- [ ] Career apply form submits (`POST /api/apply`)

## UI and Responsiveness

- [ ] Desktop layout verified
- [ ] Tablet layout verified
- [ ] Mobile layout verified
- [ ] Navigation and CTA links verified

## Production Readiness

- [ ] Node.js app configured in hosting panel
- [ ] Startup file set to `server.js`
- [ ] `NODE_ENV=production` configured
- [ ] App restart procedure documented

## Post-Deploy Validation

- [ ] Public domain loads homepage
- [ ] Key routes are reachable
- [ ] API endpoints reachable in production
- [ ] Forms submit successfully in production
- [ ] No critical errors in host logs

## Repository Hygiene

- [ ] Confirm `archive/` contains legacy Next files/tooling
- [ ] Confirm active runtime files are only Express/EJS stack
