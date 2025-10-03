# OraDigitals Website - Deployment Guide

This guide provides step-by-step instructions for deploying the OraDigitals website to a shared hosting environment via cPanel.

## Prerequisites

- Node.js 18+ installed on your local machine
- Access to cPanel File Manager or FTP
- Domain configured and pointing to your hosting

## Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the website locally.

### 3. Test the Build

```bash
npm run build
```

This will create an optimized production build.

## Deployment to Shared Hosting (cPanel)

### Step 1: Build for Production

Run the following command to create a static export:

```bash
npm run build
```

This command will:
1. Build the Next.js application
2. Generate static HTML files in the `out` directory
3. Optimize all assets (images, CSS, JavaScript)

### Step 2: Locate the Output

After the build completes, you'll find the static files in the `out` directory at the root of your project.

### Step 3: Upload to cPanel

#### Option A: Using File Manager

1. Log in to your cPanel account
2. Open **File Manager**
3. Navigate to `public_html` (or your domain's document root)
4. **Delete** all existing files in the directory (or backup first)
5. **Upload** all files and folders from the `out` directory
6. Make sure the folder structure is preserved

#### Option B: Using FTP

1. Connect to your hosting via FTP (FileZilla, Cyberduck, etc.)
2. Navigate to `public_html` or your domain's root directory
3. Upload all contents from the `out` directory
4. Ensure all files are transferred completely

### Step 4: Configure .htaccess (Important!)

Create a `.htaccess` file in your `public_html` directory with the following content:

```apache
# Enable Rewrite Engine
RewriteEngine On

# Redirect to HTTPS (if SSL is available)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ /$1/ [L,R=301]

# Serve HTML files without .html extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]

# Custom Error Pages
ErrorDocument 404 /404.html
ErrorDocument 500 /500.html

# Enable Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

### Step 5: Verify Deployment

1. Visit your domain in a web browser
2. Check all pages are loading correctly
3. Test navigation and all links
4. Verify forms are working (contact form, career application)
5. Test on mobile devices

## Directory Structure After Deployment

```
public_html/
├── _next/
│   ├── static/
│   └── ...
├── about/
│   └── index.html
├── services/
│   └── index.html
├── products/
│   └── index.html
├── team/
│   └── index.html
├── career/
│   └── index.html
├── life/
│   └── index.html
├── contact/
│   └── index.html
├── clients/
│   └── index.html
├── index.html
├── sitemap.xml
├── robots.txt
├── .htaccess
└── ...
```

## Updating the Website

To update the website:

1. Make your changes locally
2. Test thoroughly with `npm run dev`
3. Build the static export with `npm run build`
4. Upload the new `out` directory contents to your hosting
5. Clear browser cache and verify changes

## Customization

### Update Company Information

1. **Contact Details**: Edit `components/Footer.tsx` and `app/contact/page.tsx`
2. **Google Maps**: Replace the map embed URL in `app/contact/page.tsx` with your location
3. **Social Media Links**: Update links in `components/Footer.tsx`
4. **Domain**: Update the base URL in `app/sitemap.ts` and `app/robots.ts`

### Add Your Logo

1. Place your logo file (PNG/SVG) in the `public` directory
2. Update the logo reference in `components/Navigation.tsx`

### Update Brand Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#233b56',  // Your primary color
  accent: '#ff7828',   // Your accent color
}
```

## Troubleshooting

### Issue: Pages return 404

**Solution**: Make sure the `.htaccess` file is properly configured and uploaded.

### Issue: Styles not loading

**Solution**: 
- Check that all files from the `_next` directory are uploaded
- Clear your browser cache
- Verify file permissions (should be 644 for files, 755 for directories)

### Issue: Images not displaying

**Solution**:
- Ensure the `public` directory contents are in the root of `public_html`
- Check image file paths are correct
- Verify file permissions

### Issue: Forms not working

**Solution**: 
- Forms currently use client-side JavaScript alerts
- For production, integrate with a backend service or email API
- Consider using services like Formspree, EmailJS, or custom PHP scripts

## Performance Optimization

1. **Enable Gzip Compression**: Already configured in `.htaccess`
2. **Browser Caching**: Already configured in `.htaccess`
3. **CDN**: Consider using Cloudflare for better performance
4. **Image Optimization**: All images are optimized during build

## Security

1. Keep dependencies updated: `npm update`
2. Use HTTPS (SSL certificate from your hosting provider)
3. Regularly backup your website files
4. Monitor for security updates

## Support

For issues or questions:
- Email: info@oradigitals.com
- Check Next.js documentation: https://nextjs.org/docs

## License

Copyright © 2025 OraDigitals. All rights reserved.
