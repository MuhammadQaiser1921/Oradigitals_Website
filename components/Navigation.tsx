'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">ORA</span>
              <span className="text-accent">DIGITALS</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About Us
            </Link>
            
            {/* Services Dropdown */}
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

            <Link href="/products" className="hover:text-accent transition-colors">
              Products
            </Link>
            <Link href="/team" className="hover:text-accent transition-colors">
              Team
            </Link>
            <Link href="/career" className="hover:text-accent transition-colors">
              Career
            </Link>
            <Link href="/life" className="hover:text-accent transition-colors">
              Life @ OraDigitals
            </Link>
            <Link href="/clients" className="hover:text-accent transition-colors">
              Clients
            </Link>
            <Link href="/contact" className="bg-accent hover:bg-accent/90 px-6 py-2 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <Link href="/" className="block py-2 hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="block py-2 hover:text-accent transition-colors">
              About Us
            </Link>
            
            {/* Services Mobile Dropdown */}
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left py-2 hover:text-accent transition-colors flex items-center justify-between"
              >
                Services <FaChevronDown className={`text-xs transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/services#erp" className="block py-1 text-sm hover:text-accent">
                    ERP Solutions
                  </Link>
                  <Link href="/services#integration" className="block py-1 text-sm hover:text-accent">
                    System Integration
                  </Link>
                  <Link href="/services#development" className="block py-1 text-sm hover:text-accent">
                    Custom Development
                  </Link>
                  <Link href="/services#ecommerce" className="block py-1 text-sm hover:text-accent">
                    E-commerce Solutions
                  </Link>
                  <Link href="/services#automation" className="block py-1 text-sm hover:text-accent">
                    Automation
                  </Link>
                </div>
              )}
            </div>

            <Link href="/products" className="block py-2 hover:text-accent transition-colors">
              Products
            </Link>
            <Link href="/team" className="block py-2 hover:text-accent transition-colors">
              Team
            </Link>
            <Link href="/career" className="block py-2 hover:text-accent transition-colors">
              Career
            </Link>
            <Link href="/life" className="block py-2 hover:text-accent transition-colors">
              Life @ OraDigitals
            </Link>
            <Link href="/clients" className="block py-2 hover:text-accent transition-colors">
              Clients
            </Link>
            <Link href="/contact" className="block py-2 hover:text-accent transition-colors">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
