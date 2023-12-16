'use client'
import Header from '@/components/Header/main'
import {Baloo_2} from 'next/font/google'
import './globals.css'
import Container from '@/components/Container/main';

const ballo_2 = Baloo_2({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ballo_2.className}>
      <body>
        <Header/>
        <Container>
          <div>{children}</div>
        </Container>
      </body>
    </html>
  )
}
