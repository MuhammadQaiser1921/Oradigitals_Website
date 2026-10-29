# Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

| To change | Edit |
|---|---|
| Company details, menu, page text, team, products | `src/data/site-content.js` (restart the server afterwards) |
| Case studies | `src/data/case-studies-data.js` (restart, then `npm run images` for its share picture) |
| Page layout, header, footer | `src/views/page.ejs` |
| A section's markup | `src/views/components/<name>.ejs` |
| Styles | `public/express.css` |

Run `npm test` before deploying. More detail is in `README.md`.
