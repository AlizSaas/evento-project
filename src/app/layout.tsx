import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

const inter = localFont({
  src: [
    { path: '../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Evento _find events around you',
  description: 'Browse more then 10,000 events around you',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-gray-950 text-white overflow-y-scroll`}>
        <Container>
        <Header/>
        {children}
        <Footer/>

        </Container>
       
        </body>
    </html>
  )
}
