# OraDigitals Project Summary

## Current Status

- Runtime: Express.js
- Rendering: EJS templates
- Data model: API-driven page sections from `src/data/site-content.js`
- Styles: `public/express.css`
- Legacy Next sources/tooling: archived under `archive/`

## Delivered Architecture

- `server.js` bootstrap entrypoint
- `src/server.js` Express app
- `src/data/site-content.js` site/page/component catalog
- `src/views/page.ejs` generic page renderer
- `src/views/components/*.ejs` reusable section partials
- `public/express.css` responsive UI styling

## API Surface

- `GET /health`
- `GET /api/site`
- `GET /api/components`
- `GET /api/components/:name`
- `GET /api/page?slug=...`
- `POST /api/contact`
- `POST /api/apply`

## Routes Covered

- `/`
- `/about`
- `/services`
- `/products`
- `/team`
- `/career`
- `/career/internship`
- `/life`
- `/clients`
- `/compliance`
- `/contact`

## Operational Notes

- Form submissions are currently stored in-memory in `src/server.js`.
- For production persistence, integrate database or email pipeline.

## Deployment

- Node.js host
- Startup file: `server.js`
- See `DEPLOYMENT.md` for details.
