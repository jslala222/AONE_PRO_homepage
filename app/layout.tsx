import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '에이원PRO | SaaS 구독서비스 & 회사관리 프로그램',
  description: '에이원PRO는 IT/정보통신업 분야의 응용 소프트웨어 개발 및 공급 전문 기업입니다. SaaS 구독서비스와 회사관리 프로그램을 제공합니다.',
  keywords: 'SaaS, 회사관리, 프로그램, 구독서비스, IT, 소프트웨어',
  authors: [{ name: '에이원PRO' }],
  openGraph: {
    title: '에이원PRO',
    description: 'SaaS 구독서비스 & 회사관리 프로그램',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
