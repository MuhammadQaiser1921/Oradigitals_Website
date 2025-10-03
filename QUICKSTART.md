# Quick Start Guide - OraDigitals Website

Get your website up and running in minutes!

## ⚡ Quick Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, TailwindCSS, and React Icons.

### 2. Start Development Server

```bash
npm run dev
```

Your website will be available at: `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

This creates a static export in the `out` directory ready for deployment.

## 🎨 Quick Customizations

### Change Your Company Logo

1. Save your logo as `logo.png` or `logo.svg` in the `public` folder
2. Open `components/Navigation.tsx`
3. Replace the logo section (around line 16) with:

```tsx
<Link href="/" className="flex items-center space-x-2">
  <img src="/logo.png" alt="OraDigitals" className="h-10" />
</Link>
```

### Update Contact Information

Open `components/Footer.tsx` and update:
- Phone number (line 70)
- Email addresses (lines 75-80)
- Office address (line 64)

Also update `app/contact/page.tsx` with the same information.

### Add Your Google Maps Location

1. Go to Google Maps
2. Find your office location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `app/contact/page.tsx` (line 147)

### Update Social Media Links

In `components/Footer.tsx`, update the social media URLs (lines 32-48):
- Facebook
- Twitter
- LinkedIn
- Instagram

### Change Job Openings

Open `app/career/page.tsx` and edit the `jobOpenings` array starting at line 6.

### Update Team Members

Open `app/team/page.tsx` and edit the team member details in each section.

## 🚀 Deploy to cPanel

### Method 1: Quick Upload

1. Run `npm run build`
2. Go to your cPanel File Manager
3. Navigate to `public_html`
4. Upload all files from the `out` folder
5. Done! Your site is live.

### Method 2: FTP Upload

1. Run `npm run build`
2. Connect via FTP (FileZilla, etc.)
3. Upload contents of `out` folder to `public_html`
4. Visit your domain

### Important: Add .htaccess

Create a `.htaccess` file in `public_html` with this content:

```apache
RewriteEngine On

# Redirect to HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ /$1/ [L,R=301]

# Serve HTML files
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]
```

## 📝 Common Tasks

### Add a New Page

1. Create a folder in `app` directory (e.g., `app/pricing`)
2. Create `page.tsx` inside that folder
3. Add your page content
4. Add link to Navigation component

### Add Images

1. Place images in `public` folder (e.g., `public/team-photo.jpg`)
2. Reference in code: `<img src="/team-photo.jpg" alt="Team" />`

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#233b56',  // Your primary color
  accent: '#ff7828',   // Your accent color
}
```

### Update Meta Tags for SEO

Each page has metadata. Example in `app/about/page.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'About Us - OraDigitals',
  description: 'Learn about OraDigitals...',
}
```

## 🐛 Troubleshooting

### Issue: npm install fails

**Solution**: Make sure you have Node.js 18+ installed
```bash
node --version  # Should be v18 or higher
```

### Issue: Page shows but no styling

**Solution**: 
- Stop the dev server (Ctrl+C)
- Delete `.next` folder
- Run `npm run dev` again

### Issue: Build fails

**Solution**: Check for TypeScript errors
```bash
npm run lint
```

## 📚 Next Steps

1. Read the full [README.md](./README.md) for detailed information
2. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment guide
3. Customize content in each page
4. Add real images and client logos
5. Set up form backend (EmailJS, Formspree, or custom API)
6. Configure Google Analytics (optional)
7. Set up SSL certificate in cPanel

## 💡 Tips

- Test on mobile devices before deploying
- Optimize images before adding them (use TinyPNG or similar)
- Keep dependencies updated: `npm update`
- Always test the build locally before deploying: `npm run build`
- Take backups before major changes

## 🆘 Need Help?

- Next.js Docs: https://nextjs.org/docs
- TailwindCSS Docs: https://tailwindcss.com/docs
- React Icons: https://react-icons.github.io/react-icons

---

Ready to launch? Run `npm run build` and upload to your server! 🚀
