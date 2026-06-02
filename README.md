# OraDigitals Website

Express + EJS website for OraDigitals with API-driven page sections.

## Stack

- Node.js
- Express.js
- EJS templates
- Plain CSS (`public/express.css`)

## Architecture

- `server.js` boots the app from `src/server.js`.
- `src/server.js` handles:
  - Page rendering
  - API endpoints (`/api/site`, `/api/components`, `/api/page`)
  - Form submission endpoints (`/api/contact`, `/api/apply`)
- `src/data/site-content.js` stores site/page/component data.
- `src/views/page.ejs` renders all sections dynamically via component partials.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start app:

```bash
npm run dev
```

3. Open:

`http://localhost:3000`

## Production

```bash
npm start
```

## Main Routes

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

## API Endpoints

- `GET /health`
- `GET /api/site`
- `GET /api/components`
- `GET /api/components/:name`
- `GET /api/page?slug=...`
- `POST /api/contact`
- `POST /api/apply`

## Project Layout

- `server.js`
- `src/server.js`
- `src/data/site-content.js`
- `src/views/page.ejs`
- `src/views/components/*.ejs`
- `public/express.css`
- `archive/` (legacy Next files and tooling backups)

## Deployment

See `DEPLOYMENT.md` for Node hosting instructions.

## License

Copyright © 2026 OraDigitals. All rights reserved.
