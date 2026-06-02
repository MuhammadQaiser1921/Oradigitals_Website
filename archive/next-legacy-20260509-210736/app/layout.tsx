import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OraDigitals - Innovating Digital Solutions',
  description: 'Leading software house providing ERP solutions, custom software development, integrations, and IT services.',
  keywords: 'software development, ERP solutions, SAP, Odoo, Oracle EBS, system integration, web development, mobile apps, IT services',
  authors: [{ name: 'OraDigitals' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
      <body className={sora.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
