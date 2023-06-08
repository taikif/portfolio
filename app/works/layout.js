import 'app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function WorksLayout({ children }) {
    return (
      <html lang="ja">
        <body className={inter.className}>{children}</body>
      </html>
    )
  }