"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
        setOpenMobileSection(null)
      }
    }

    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  const toggleSection = (section: string) => {
    setOpenMobileSection((current) => (current === section ? null : section))
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenMobileSection(null)
  }

  return (
    <nav className="bg-white/95 text-gray-800 sticky top-0 z-50 backdrop-blur border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="text-2xl font-bold">
              <span className="text-accent">ORA</span>
              <span className="text-primary">DIGITALS</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown (first) */}
            <div className="relative group">
              <button className="hover:text-accent transition-colors flex items-center gap-1">
                Services <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/services#erp" className="block px-4 py-3 hover:bg-gray-100">
                  ERP Solutions
                </Link>
                <Link href="/services#integration" className="block px-4 py-3 hover:bg-gray-100">
                  System Integration
                </Link>
                <Link href="/services#development" className="block px-4 py-3 hover:bg-gray-100">
                  Custom Development
                </Link>
                <Link href="/services#ecommerce" className="block px-4 py-3 hover:bg-gray-100">
                  E-commerce Solutions
                </Link>
                <Link href="/services#automation" className="block px-4 py-3 hover:bg-gray-100">
                  Automation
                </Link>
              </div>
            </div>

            {/* Products */}
            <Link href="/products" className="text-gray-800 hover:text-accent transition-colors">
              Products
            </Link>

            {/* About dropdown (About, Team, Clients) */}
            <div className="relative group">
              <button className="hover:text-accent transition-colors flex items-center gap-1">
                About <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/about" className="block px-4 py-3 hover:bg-gray-100">
                  About
                </Link>
                <Link href="/compliance" className="block px-4 py-3 hover:bg-gray-100">
                  Compliance
                </Link>
                <Link href="/team" className="block px-4 py-3 hover:bg-gray-100">
                  Team
                </Link>
                <Link href="/clients" className="block px-4 py-3 hover:bg-gray-100">
                  Clients
                </Link>
              </div>
            </div>

            {/* Careers dropdown (Life, Job Opportunity, Summer Internship) */}
            <div className="relative group">
              <button className="hover:text-accent transition-colors flex items-center gap-1">
                Careers <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/life" className="block px-4 py-3 hover:bg-gray-100">
                  Life @ OraDigitals
                </Link>
                <Link href="/career" className="block px-4 py-3 hover:bg-gray-100">
                  Job Opportunity
                </Link>
                <Link href="/career/internship" className="block px-4 py-3 hover:bg-gray-100">
                  Summer Internship
                </Link>
              </div>
            </div>

            <Link href="/contact" className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden text-2xl text-primary cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[80vh] pb-4' : 'max-h-0'}`}>
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => toggleSection('services')}
              className="w-full text-left py-2 hover:text-accent transition-colors flex items-center justify-between"
            >
                <span>Services</span>
                <FaChevronDown className={`text-xs transition-transform ${openMobileSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-2 transition-all ${openMobileSection === 'services' ? 'max-h-72 mt-2' : 'max-h-0 overflow-hidden'}`}>
              <Link href="/services#erp" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">ERP Solutions</Link>
              <Link href="/services#integration" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">System Integration</Link>
              <Link href="/services#development" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">Custom Development</Link>
              <Link href="/services#ecommerce" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">E-commerce Solutions</Link>
              <Link href="/services#automation" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">Automation</Link>
            </div>

            <Link href="/products" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-accent transition-colors">Products</Link>

            <button
              type="button"
              onClick={() => toggleSection('about')}
              className="w-full text-left py-2 hover:text-accent transition-colors flex items-center justify-between"
            >
              <span>About</span>
              <FaChevronDown className={`text-xs transition-transform ${openMobileSection === 'about' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-2 transition-all ${openMobileSection === 'about' ? 'max-h-72 mt-2' : 'max-h-0 overflow-hidden'}`}>
              <Link href="/about" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">About</Link>
              <Link href="/compliance" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">Compliance</Link>
              <Link href="/team" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">Team</Link>
              <Link href="/clients" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">Clients</Link>
            </div>

            <button
              type="button"
              onClick={() => toggleSection('careers')}
              className="w-full text-left py-2 hover:text-accent transition-colors flex items-center justify-between"
            >
              <span>Careers</span>
              <FaChevronDown className={`text-xs transition-transform ${openMobileSection === 'careers' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-2 transition-all ${openMobileSection === 'careers' ? 'max-h-72 mt-2' : 'max-h-0 overflow-hidden'}`}>
              <Link href="/life" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">Life @ OraDigitals</Link>
              <Link href="/career" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">Job Opportunity</Link>
              <Link href="/career/internship" onClick={closeMenu} className="block py-1 text-sm hover:text-accent">Summer Internship</Link>
            </div>

            <Link href="/contact" onClick={closeMenu} className="block py-2 bg-primary text-white rounded-md text-center">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
