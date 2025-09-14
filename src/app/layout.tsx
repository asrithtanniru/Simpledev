import type { Metadata } from 'next'
import { Rethink_Sans } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/next'

const outfit = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rethink-sans',
})

export const metadata: Metadata = {
  title: 'Asrith Tanniru',
  description: "Asrith's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen relative font-rethink-sans">
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
