import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OraDigitals - Software Development & IT Solutions",
  description: "OraDigitals is a leading software house providing ERP solutions, system integrations, custom software development, and comprehensive IT services.",
  keywords: "software development, ERP solutions, system integration, IT services, custom software, SAP, Odoo, Shopify, WooCommerce",
  authors: [{ name: "OraDigitals" }],
  creator: "OraDigitals",
  publisher: "OraDigitals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://oradigitals.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OraDigitals - Software Development & IT Solutions",
    description: "Leading software house providing ERP solutions, system integrations, custom software development, and comprehensive IT services.",
    url: "https://oradigitals.com",
    siteName: "OraDigitals",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OraDigitals - Software Development & IT Solutions",
    description: "Leading software house providing ERP solutions, system integrations, custom software development, and comprehensive IT services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
