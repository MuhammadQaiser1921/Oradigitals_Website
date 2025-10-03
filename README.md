# OraDigitals - Company Website

A modern, responsive, and professional website for OraDigitals - a leading software house providing ERP solutions, custom software development, system integrations, and IT services.

## 🚀 Features

- **Modern Design**: Clean, professional UI with brand colors (#233b56 primary, #ff7828 accent)
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags, sitemap, robots.txt for better search visibility
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **Static Export**: Can be deployed on any shared hosting via cPanel

## 📄 Pages

- **Home**: Hero slider, services overview, products showcase, testimonials, clients
- **About Us**: Mission, vision, values, company story, timeline
- **Services**: ERP solutions, system integration, custom development, e-commerce, automation
- **Products**: ERP systems, POS, mobile solutions, automation tools
- **Team**: Leadership and technical team members
- **Career**: Job openings with application form
- **Life @ OraDigitals**: Company culture, perks, benefits, photo gallery
- **Contact**: Contact form with Google Maps integration
- **Clients/Partners**: Client logos and technology partners

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Static Export (compatible with cPanel/shared hosting)

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to `http://localhost:3000`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out` directory that can be uploaded to any web server.

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions including:
- Local development setup
- Building for production
- Deploying to cPanel/shared hosting
- .htaccess configuration
- Troubleshooting guide

## 🎨 Customization

### Update Brand Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#233b56',  // Dark navy blue
  accent: '#ff7828',   // Orange
}
```

### Update Contact Information

Edit the following files:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Add Your Logo

1. Place logo in `public` directory
2. Update `components/Navigation.tsx`

### Update Google Maps

Replace the map embed URL in `app/contact/page.tsx` with your location.

## 📁 Project Structure

```
oradigitals-website/
├── app/                    # Next.js app directory
│   ├── about/             # About Us page
│   ├── career/            # Career page
│   ├── clients/           # Clients & Partners page
│   ├── contact/           # Contact page
│   ├── life/              # Life at OraDigitals page
│   ├── products/          # Products page
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer component
│   ├── HeroSlider.tsx     # Homepage hero slider
│   ├── ServiceCard.tsx    # Service card component
│   ├── ProductCard.tsx    # Product card component
│   ├── TeamCard.tsx       # Team member card
│   └── TestimonialCard.tsx # Testimonial card
├── public/                # Static assets
├── DEPLOYMENT.md          # Deployment guide
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies

```

## 🎯 Key Features

### Home Page
- Dynamic hero slider with 3 slides
- Services overview section
- Products showcase
- Client testimonials
- Partner logos
- Call-to-action sections

### Navigation
- Responsive mobile menu
- Dropdown for services
- Sticky header
- Smooth scrolling

### Forms
- Contact form with validation
- Career application form with file upload
- Client-side form handling (can be integrated with backend)

### SEO
- Meta tags on all pages
- Dynamic sitemap.xml
- Robots.txt
- Open Graph tags
- Semantic HTML structure

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production and create static export
- `npm run start` - Start production server (not needed for static hosting)
- `npm run lint` - Run ESLint

## 📝 Content Updates

All content is currently using dummy data. To update:

1. **Job Openings**: Edit `app/career/page.tsx`
2. **Team Members**: Edit `app/team/page.tsx`
3. **Testimonials**: Edit `app/page.tsx` and `app/clients/page.tsx`
4. **Services**: Edit `app/services/page.tsx`
5. **Products**: Edit `app/products/page.tsx`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

This is a private project for OraDigitals. For any changes or updates, contact the development team.

## 📄 License

Copyright © 2025 OraDigitals. All rights reserved.

## 📧 Contact

For any questions or support:
- Email: info@oradigitals.com
- Website: https://oradigitals.com

---

Built with ❤️ by OraDigitals Development Team