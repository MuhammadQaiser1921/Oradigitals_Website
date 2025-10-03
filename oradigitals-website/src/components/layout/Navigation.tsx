'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'ERP Solutions', href: '/services#erp' },
      { label: 'System Integrations', href: '/services#integrations' },
      { label: 'Custom Software Development', href: '/services#development' },
      { label: 'Shopify & WooCommerce', href: '/services#ecommerce' },
      { label: 'Automation Solutions', href: '/services#automation' },
      { label: 'FinTech & Database', href: '/services#fintech' },
      { label: 'Support & Maintenance', href: '/services#support' },
    ],
  },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Life at OraDigitals', href: '/life' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-primary-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center font-bold text-white">
                OD
              </div>
              <span className="font-heading font-bold text-xl">OraDigitals</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-accent-300 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
                  >
                    <span>{item.label}</span>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-primary-900 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-primary-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-800 focus:ring-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-800">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="text-white hover:text-accent-300 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="text-primary-300 hover:text-accent-300 block px-3 py-2 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg text-sm font-medium block text-center transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}