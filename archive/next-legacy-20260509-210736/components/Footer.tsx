import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { companyInfo } from '@/lib/company'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">ORA</span>
              <span className="text-accent">DIGITALS</span>
            </h3>
            <p className="text-gray-300 mb-4">
              ERP, integrations, e-commerce, mobile apps, and IT services built for practical business growth.
            </p>
            <p className="text-sm text-gray-400 mb-4">{companyInfo.name}</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BVh2VF98W/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.linkedin.com/company/oradigitals" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/oradigitals" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-accent transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-300 hover:text-accent transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-300 hover:text-accent transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#erp" className="text-gray-300 hover:text-accent transition-colors">
                  ERP Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#integration" className="text-gray-300 hover:text-accent transition-colors">
                  System Integration
                </Link>
              </li>
              <li>
                <Link href="/services#development" className="text-gray-300 hover:text-accent transition-colors">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="text-gray-300 hover:text-accent transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="text-gray-300 hover:text-accent transition-colors">
                  Automation & AI
                </Link>
              </li>
              <li>
                <Link href="/services#integration" className="text-gray-300 hover:text-accent transition-colors">
                  OIC, OCI & Fusion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>{companyInfo.address}, {companyInfo.cityAddress}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FaPhone />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-accent transition-colors">
                  {companyInfo.formattedPhone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FaEnvelope />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-accent transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="text-sm text-gray-400">
                FBR: {companyInfo.fbrNumber} | PRA: {companyInfo.praNumber}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} OraDigitals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
