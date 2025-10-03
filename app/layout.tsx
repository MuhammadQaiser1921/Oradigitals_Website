import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OraDigitals - Innovating Digital Solutions | Software Development & ERP Solutions',
  description: 'OraDigitals is a leading software house providing custom software development, ERP solutions (SAP, Odoo, Oracle EBS), system integrations, and IT services. Transform your business with our innovative digital solutions.',
  keywords: 'software development, ERP solutions, SAP, Odoo, Oracle EBS, system integration, custom software, mobile app development, web development, IT services, automation, FinTech, database solutions',
  authors: [{ name: 'OraDigitals' }],
  creator: 'OraDigitals',
  publisher: 'OraDigitals',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oradigitals.com',
    title: 'OraDigitals - Innovating Digital Solutions',
    description: 'Leading software house providing custom software development, ERP solutions, and IT services.',
    siteName: 'OraDigitals',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OraDigitals - Innovating Digital Solutions',
    description: 'Leading software house providing custom software development, ERP solutions, and IT services.',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}