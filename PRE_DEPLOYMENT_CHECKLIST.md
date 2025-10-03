# Pre-Deployment Checklist

Use this checklist before deploying the OraDigitals website to production.

## 📋 Content Updates

### Company Information
- [ ] Update company phone number in `components/Footer.tsx` (line ~70)
- [ ] Update company email in `components/Footer.tsx` (line ~75-80)
- [ ] Update office address in `components/Footer.tsx` (line ~64)
- [ ] Update contact information in `app/contact/page.tsx`

### Logo & Branding
- [ ] Add company logo to `/public` folder (logo.png or logo.svg)
- [ ] Update Navigation component to display logo (`components/Navigation.tsx` line ~16)
- [ ] Add favicon.ico to `/public` folder (replace placeholder)

### Social Media
- [ ] Update Facebook link in `components/Footer.tsx` (line ~32)
- [ ] Update Twitter link in `components/Footer.tsx` (line ~35)
- [ ] Update LinkedIn link in `components/Footer.tsx` (line ~38)
- [ ] Update Instagram link in `components/Footer.tsx` (line ~41)

### Team Page
- [ ] Update CEO information in `app/team/page.tsx`
- [ ] Update CTO information in `app/team/page.tsx`
- [ ] Update COO information in `app/team/page.tsx`
- [ ] Add real team member photos (save in `/public/team/`)
- [ ] Update LinkedIn profile links for all team members

### Career Page
- [ ] Update job openings in `app/career/page.tsx` (starting line ~6)
- [ ] Verify job descriptions are current
- [ ] Update department names if needed
- [ ] Set up email notification for form submissions (currently shows alert)

### Contact Page
- [ ] Replace Google Maps embed with your actual location (`app/contact/page.tsx` line ~147)
- [ ] Update business hours if different from default
- [ ] Set up contact form backend/email service

### Clients & Partners
- [ ] Add actual client logos to `/public/clients/` folder
- [ ] Update client names in `app/clients/page.tsx`
- [ ] Add real testimonials with client approval
- [ ] Update technology partner information

### Life @ OraDigitals
- [ ] Add office photos to `/public/gallery/` folder
- [ ] Update gallery images in `app/life/page.tsx`
- [ ] Update perks and benefits if different
- [ ] Add real employee testimonials

## 🎨 Customization

### Colors (if needed)
- [ ] Verify brand colors are correct in `tailwind.config.js`
  - Primary: #233b56
  - Accent: #ff7828

### SEO
- [ ] Update domain URL in `app/sitemap.ts` (line ~4)
- [ ] Update domain URL in `app/robots.ts` (line ~4)
- [ ] Review meta descriptions on all pages
- [ ] Add Google Analytics tracking code (optional)

## 🧪 Testing

### Local Testing
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and verify all pages load
- [ ] Test navigation on all pages
- [ ] Test mobile responsiveness (use browser dev tools)
- [ ] Test all forms (contact, career application)
- [ ] Verify all internal links work
- [ ] Check for any console errors

### Content Review
- [ ] Proofread all page content
- [ ] Verify all images load correctly
- [ ] Check grammar and spelling
- [ ] Ensure consistent tone and messaging
- [ ] Verify contact information is accurate

### Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test in Edge
- [ ] Test on mobile devices (iOS and Android)

## 🏗️ Build Process

### Before Building
- [ ] All content updated
- [ ] All images added and optimized
- [ ] All links verified
- [ ] No TypeScript errors (`npm run lint`)

### Build
- [ ] Run `npm run build` successfully
- [ ] Verify `/out` folder is created
- [ ] Check that all pages exist in `/out` folder
- [ ] Test the built site locally (can use a local server)

## 🚀 Deployment

### Pre-Deployment
- [ ] Backup current website (if replacing existing site)
- [ ] Prepare cPanel/FTP credentials
- [ ] Have `.htaccess` file ready (see DEPLOYMENT.md)

### Upload
- [ ] Clear `public_html` folder (or backup first)
- [ ] Upload all files from `/out` folder to `public_html`
- [ ] Upload `.htaccess` file to `public_html`
- [ ] Verify all files uploaded successfully
- [ ] Check file permissions (644 for files, 755 for folders)

### Post-Deployment Testing
- [ ] Visit homepage - loads correctly
- [ ] Test all navigation links
- [ ] Check each page individually
  - [ ] Home page
  - [ ] About Us page
  - [ ] Services page
  - [ ] Products page
  - [ ] Team page
  - [ ] Career page
  - [ ] Life @ OraDigitals page
  - [ ] Contact page
  - [ ] Clients/Partners page
- [ ] Test forms submission
- [ ] Verify Google Maps loads
- [ ] Check mobile responsiveness on real devices
- [ ] Test load speed (use PageSpeed Insights)
- [ ] Verify HTTPS is working (SSL certificate)

## 🔒 Security & Performance

### Security
- [ ] SSL certificate installed and working
- [ ] HTTPS redirect active (via `.htaccess`)
- [ ] No sensitive information in code
- [ ] Forms have basic validation

### Performance
- [ ] Images optimized (compressed)
- [ ] Page load time acceptable (< 3 seconds)
- [ ] Caching enabled (via `.htaccess`)
- [ ] Compression enabled (via `.htaccess`)

## 📊 Post-Launch

### SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (optional)
- [ ] Verify all meta tags are correct
- [ ] Check robots.txt is accessible

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Monitor contact form submissions
- [ ] Check for broken links regularly
- [ ] Monitor website performance

### Marketing
- [ ] Update Google My Business with website
- [ ] Share on social media
- [ ] Update email signatures with new website
- [ ] Inform clients/partners of new website

## 📝 Documentation

### For Team
- [ ] Save FTP/cPanel credentials securely
- [ ] Document how to update content
- [ ] Create backup schedule
- [ ] Assign website maintenance responsibility

## ✅ Final Check

Before going live, verify:
- [ ] All dummy content replaced with real information
- [ ] All links working
- [ ] All images displaying
- [ ] Forms working and going to correct email
- [ ] Mobile version looks good
- [ ] SSL certificate active
- [ ] Fast load times
- [ ] No console errors
- [ ] SEO tags in place

## 🎉 Launch!

Once all items are checked:
1. Take a screenshot/backup of the checklist
2. Announce the launch internally
3. Monitor the website for the first 24 hours
4. Gather feedback from team
5. Make any necessary quick fixes

---

**Need Help?** Refer to:
- README.md - General information
- QUICKSTART.md - Quick setup guide
- DEPLOYMENT.md - Detailed deployment instructions
- PROJECT_SUMMARY.md - Complete project overview

**Ready to launch?** 🚀 Let's make OraDigitals shine online!
