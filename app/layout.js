import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taikif\'s Portfolio',
  description: 'A page that introduces yourself, summarizing your skills, activities, contact information, etc.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
