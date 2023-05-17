'use client'

import Navbar from '../components/header/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sensores Invernadero',
  description: 'UI para el monitoreo de sensores de un invernadero',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
