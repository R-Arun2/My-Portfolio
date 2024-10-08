import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Digital Hub",
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/g2.png" /> 
      <meta name="description" content="Your site description" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
