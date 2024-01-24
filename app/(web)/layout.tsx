import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import ThemeProvider from '../components/themeProvider/ThemeProvider'
import { NextAuthProvider } from '../components/auth_provider/auth_provider'
import Toast from '../components/toast/Toast'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight:['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
 })

export const metadata: Metadata = {
  title: 'Hotel Management App',
  description: 'monolithic service app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <NextAuthProvider>
        <ThemeProvider >
          <Toast />
          <Header></Header>
            <main className='font-normal'>
              {children}
            </main>
            <Footer></Footer>
        </ThemeProvider>
       </NextAuthProvider>
       </body>
    </html>
  )
}
