import type { Metadata } from 'next'
import Link from 'next/link'
import { FaBuilding, FaCheckCircle, FaEnvelope, FaGlobe, FaIdCard, FaMapMarkerAlt } from 'react-icons/fa'
import { companyInfo } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Company Compliance - OraDigitals',
  description: 'Registration, verification, and business compliance information for ORADIGITALS (PRIVATE) LIMITED.',
}

export default function CompliancePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Company Compliance & Registration</h1>
            <p className="text-xl text-gray-200">
              Registration, taxation, verification, and director information for {companyInfo.name}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <FaBuilding className="text-accent text-3xl mb-4" />
              <h2 className="text-xl font-semibold text-primary mb-2">Business Name</h2>
              <p className="text-gray-700">{companyInfo.name}</p>
            </div>
            <div className="card">
              <FaIdCard className="text-accent text-3xl mb-4" />
              <h2 className="text-xl font-semibold text-primary mb-2">SECP Number</h2>
              <p className="text-gray-700 mb-3">{companyInfo.secpNumber}</p>
              <a href={companyInfo.secpVerificationLink} target="_blank" rel="noreferrer" className="text-accent font-medium hover:underline">
                Verify on SECP
              </a>
            </div>
            <div className="card">
              <FaCheckCircle className="text-accent text-3xl mb-4" />
              <h2 className="text-xl font-semibold text-primary mb-2">FBR Registration</h2>
              <p className="text-gray-700">{companyInfo.fbrNumber}</p>
            </div>
            <div className="card">
              <FaCheckCircle className="text-accent text-3xl mb-4" />
              <h2 className="text-xl font-semibold text-primary mb-2">PRA / Sales Tax</h2>
              <p className="text-gray-700">{companyInfo.praNumber}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title">Registered Directors</h2>
            <div className="space-y-6">
              {companyInfo.directors.map((director) => (
                <div key={director.email} className="card">
                  <h3 className="text-xl font-semibold text-primary mb-1">{director.name}</h3>
                  <p className="text-accent font-medium mb-3">{director.title}</p>
                  <a href={`mailto:${director.email}`} className="text-gray-700 hover:text-accent transition-colors inline-flex items-center gap-2">
                    <FaEnvelope />
                    {director.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title">Certificates & Verification</h2>
            <div className="card mb-6">
              <p className="text-gray-700 mb-4">
                SECP verification is publicly available online. For copies of the SECP certificate, FBR certificate, and PRA certificate, please contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={companyInfo.secpVerificationLink} target="_blank" rel="noreferrer" className="btn-primary text-center">
                  Verify SECP
                </a>
                <a href={`mailto:${companyInfo.email}`} className="btn-outline text-center">
                  Request Certificates
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-primary mb-3">Business Location</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-accent" /> <span>{companyInfo.address}, {companyInfo.cityAddress}</span></p>
                <p className="flex items-center gap-2"><FaGlobe className="text-accent" /> <a href={companyInfo.mapLink} target="_blank" rel="noreferrer" className="hover:text-accent">Open in Google Maps</a></p>
                <p>{companyInfo.coordinates}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src={companyInfo.mapEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OraDigitals Business Location"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Verification Documents?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us and we will share the relevant registration documents and business details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <a href={`mailto:${companyInfo.email}`} className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-block">
              Email {companyInfo.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}