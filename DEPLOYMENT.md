# OraDigitals Website Deployment Guide (Express)

This project runs as a standard Node.js Express application.

## Requirements

- Node.js 18+
- npm
- Node-compatible hosting (cPanel Node.js App Manager, VPS, etc.)

## Local Verification

1. Install dependencies:

```bash
npm install
```

2. Start app:

```bash
npm run dev
```

3. Verify:

- `http://localhost:3000`
- `http://localhost:3000/health`

## cPanel Node.js App Manager

1. Upload project files.
2. Create/Edit Node app in cPanel.
3. Set:
   - Node version: 18+
   - Application mode: Production
   - Application root: folder containing `package.json`
   - Startup file: `server.js`
4. Run `npm install`.
5. Start/Restart app.

## Environment Variables

- `NODE_ENV=production`
- `PORT` (usually provided by host)
- `HOST` (optional, defaults to `0.0.0.0`)

## Post-Deploy Checks

- Homepage and all routes load.
- API endpoints respond.
- Contact and career forms submit and redirect with success flash message.
- Static CSS loads from `/public/express.css`.

## Troubleshooting

### App fails to start

- Confirm startup file is `server.js`.
- Confirm `npm install` ran in application root.
- Check hosting logs.

### Styles missing

- Confirm `public/express.css` exists and static serving is active.

### Route returns 404

- Confirm page slug exists in `src/data/site-content.js`.
