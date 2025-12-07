import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Asrith Tanniru',
  description: 'Thoughts on development, technology, and building great products.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background transition-colors duration-300">{children}</div>
}
