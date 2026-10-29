# Pre-Deployment Checklist

## Content

- [ ] Open content questions in `TODO.md` answered (company facts, client figures, certifications)
- [ ] Contact details, address and registration numbers checked in `src/data/site-content.js`
- [ ] Real photos in place of the sample portraits and AI images

## Checks

- [ ] `npm install` and `npm test` pass
- [ ] `npm run dev` starts; home page and inner pages load without console errors
- [ ] Contact, career and internship forms send and show the success message
- [ ] Phone, tablet and desktop layouts checked
- [ ] `data/submissions.json` holds only real submissions (it starts as `[]`)

## Production

- [ ] `NODE_ENV=production` set
- [ ] `TRUST_PROXY=1` set if the app runs behind a proxy
- [ ] SMTP settings, `MAIL_FROM` and `MAIL_TO` set; start-up log shows `Form emails: on`
- [ ] HTTPS on; `http://` and `www.` redirect to `https://oradigitals.com`
- [ ] Submissions file backed up regularly

## After going live

- [ ] Test message received by email
- [ ] `sitemap.xml` submitted in Google Search Console
- [ ] Share picture appears when a link is pasted into WhatsApp / LinkedIn
- [ ] No errors in the host logs
