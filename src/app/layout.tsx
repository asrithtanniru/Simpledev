import type { Metadata } from "next";
import { Jura } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from './components/Theme-provider'
import Footer from "./components/Footer";

const jura = Jura({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Asrith Tanniru",
  description: "Asrith's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jura.className}>
      <body className="min-h-screen pb-16 bg-grid-pattern bg-grid ">
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
