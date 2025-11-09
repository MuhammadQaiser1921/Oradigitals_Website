import Link from 'next/link'
import { FaBars, FaChevronDown } from 'react-icons/fa'

export default function Navigation() {
  return (
    <nav className="bg-white text-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
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

          {/* Mobile Menu Button (CSS-only) */}
          {/* hidden checkbox controls mobile menu via peer classes */}
          <input id="nav-toggle" type="checkbox" className="peer hidden" />
          <label htmlFor="nav-toggle" className="lg:hidden text-2xl text-primary cursor-pointer">
            <span className="peer-checked:hidden block"><FaBars /></span>
            <span className="hidden peer-checked:block">✕</span>
          </label>
        </div>
        {/* Mobile Menu (CSS-controlled by #nav-toggle) */}
        <div className="lg:hidden pb-4 hidden peer-checked:block">
          <div className="space-y-2">
            <details className="group">
              <summary className="w-full text-left py-2 hover:text-accent transition-colors flex items-center justify-between list-none">
                <span>Services</span>
                <FaChevronDown className="text-xs" />
              </summary>
              <div className="pl-4 space-y-2 mt-2">
                <Link href="/services#erp" className="block py-1 text-sm hover:text-accent">ERP Solutions</Link>
                <Link href="/services#integration" className="block py-1 text-sm hover:text-accent">System Integration</Link>
                <Link href="/services#development" className="block py-1 text-sm hover:text-accent">Custom Development</Link>
                <Link href="/services#ecommerce" className="block py-1 text-sm hover:text-accent">E-commerce Solutions</Link>
                <Link href="/services#automation" className="block py-1 text-sm hover:text-accent">Automation</Link>
              </div>
            </details>

            <Link href="/products" className="block py-2 text-gray-800 hover:text-accent transition-colors">Products</Link>

            <details className="group">
              <summary className="w-full text-left py-2 hover:text-accent transition-colors flex items-center justify-between list-none">
                <span>About</span>
                <FaChevronDown className="text-xs" />
              </summary>
              <div className="pl-4 space-y-2 mt-2">
                <Link href="/about" className="block py-1 text-sm hover:text-accent">About</Link>
                <Link href="/team" className="block py-1 text-sm hover:text-accent">Team</Link>
                <Link href="/clients" className="block py-1 text-sm hover:text-accent">Clients</Link>
              </div>
            </details>

            <details className="group">
              <summary className="w-full text-left py-2 hover:text-accent transition-colors flex items-center justify-between list-none">
                <span>Careers</span>
                <FaChevronDown className="text-xs" />
              </summary>
              <div className="pl-4 space-y-2 mt-2">
                <Link href="/life" className="block py-1 text-sm hover:text-accent">Life @ OraDigitals</Link>
                <Link href="/career" className="block py-1 text-sm hover:text-accent">Job Opportunity</Link>
                <Link href="/career/internship" className="block py-1 text-sm hover:text-accent">Summer Internship</Link>
              </div>
            </details>

            <Link href="/contact" className="block py-2 bg-primary text-white rounded-md text-center">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
