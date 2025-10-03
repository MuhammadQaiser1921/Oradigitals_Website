import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
];

const services = [
  { label: 'ERP Solutions', href: '/services#erp' },
  { label: 'System Integration', href: '/services#integrations' },
  { label: 'Custom Development', href: '/services#development' },
  { label: 'Shopify & WooCommerce', href: '/services#ecommerce' },
  { label: 'Automation Solutions', href: '/services#automation' },
  { label: 'Support & Maintenance', href: '/services#support' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center font-bold text-white">
                OD
              </div>
              <span className="font-heading font-bold text-xl">OraDigitals</span>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              Leading software house providing innovative digital solutions, ERP systems,
              system integrations, and comprehensive IT services to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-primary-300 hover:text-accent-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-primary-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                <div className="text-primary-300 text-sm">
                  <div>123 Business Avenue</div>
                  <div>Tech District, TD 12345</div>
                  <div>Pakistan</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a
                  href="mailto:info@oradigitals.com"
                  className="text-primary-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  info@oradigitals.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                <div className="text-primary-300 text-sm">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 10:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-300 text-sm">
              © {new Date().getFullYear()} OraDigitals. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-primary-300 hover:text-accent-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-300 hover:text-accent-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-primary-300 hover:text-accent-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}