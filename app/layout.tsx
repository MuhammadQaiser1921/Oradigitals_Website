import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OraDigitals - Innovating Digital Solutions',
  description: 'Leading software house providing ERP solutions, custom software development, integrations, and IT services.',
  keywords: 'software development, ERP solutions, SAP, Odoo, Oracle EBS, system integration, web development, mobile apps, IT services',
  authors: [{ name: 'OraDigitals' }],
  openGraph: {
    title: 'OraDigitals - Innovating Digital Solutions',
    description: 'Leading software house providing ERP solutions, custom software development, integrations, and IT services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'OraDigitals',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OraDigitals - Innovating Digital Solutions',
    description: 'Leading software house providing ERP solutions, custom software development, integrations, and IT services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
