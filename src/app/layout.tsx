import type { Metadata } from 'next'
import { Rethink_Sans } from 'next/font/google'
import './globals.css'
import ConditionalFooter from './components/ConditionalFooter'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from './components/Theme-provider'

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
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="min-h-screen relative font-rethink-sans bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
          <Analytics />
          <ConditionalFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
