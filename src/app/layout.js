'use client';
import Footer from './components/Footer';
import Header from './components/Header'
import './globals.css'
import { Mulish } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
