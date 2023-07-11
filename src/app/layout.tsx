import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          paddingTop: '32px',
          paddingBottom: '32px',
          marginBottom: '32px',
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
        }}>
          <Link href="/converter">Converter</Link>
          <Link href="/cryptocurrencies">Cryptocurrencies</Link>
        </header>
        {children}
      </body>
    </html>
  )
}
