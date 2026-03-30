'use client'

import Link from 'next/link'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const footerLinks = {
  company: [
    { label: '회사 소개', href: '/about' },
    { label: '연혁', href: '/about#history' },
    { label: 'VISION', href: '/about#vision' },
  ],
  services: [
    { label: 'SaaS 구독서비스', href: '/services#saas' },
    { label: '회사관리 프로그램', href: '/services#management' },
    { label: 'PG 결제', href: '/services#payment' },
  ],
  support: [
    { label: '문의하기', href: '/contact' },
    { label: 'FAQ', href: '/contact#faq' },
    { label: '고객센터', href: '/contact' },
  ],
  legal: [
    { label: '이용약관', href: '/policy/terms' },
    { label: '개인정보처리방침', href: '/policy/privacy' },
    { label: '환불정책', href: '/policy/refund' },
  ],
}

const socialLinks = [
  { icon: Mail, href: 'mailto:jslala222@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:010-2737-7229', label: 'Phone' },
]

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(to bottom, #111827, #000000)' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent})`
                }}
              >
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span 
                className="text-xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
                }}
              >
                에이원PRO
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              에이원PRO는 IT/정보통신업 분야의 응용 소프트웨어 개발 및 공급 전문 기업입니다. 
              혁신적인 SaaS 솔루션과 회사관리 프로그램을 통해 고객의 비즈니스 성장을 지원합니다.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" style={{ color: theme.colors.primary }} />
                <span>jslala222@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" style={{ color: theme.colors.primary }} />
                <span>010-2737-7229</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" style={{ color: theme.colors.primary }} />
                <span>경기도 화성시 만세구 향남읍 하길로 9, 1102동 1002호</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold mb-4 text-white">회사</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:underline transition-colors" style={{ textDecorationColor: theme.colors.primary }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">서비스</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:underline transition-colors" style={{ textDecorationColor: theme.colors.primary }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">고객지원</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:underline transition-colors" style={{ textDecorationColor: theme.colors.primary }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-gray-400 text-sm">
              대표자: 김정식 | 사업자등록번호: 544-19-02359
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 에이원PRO. All rights reserved.
            </p>
              <div className="flex items-center gap-4 text-sm">
                {footerLinks.legal.map((link) => (
                  <Link key={link.label} href={link.href} className="text-gray-400 hover:underline transition-colors" style={{ textDecorationColor: theme.colors.primary }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))'
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
