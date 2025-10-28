import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Asrith Tanniru',
  description: 'Thoughts on development, technology, and building great products.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-white">{children}</div>
}
