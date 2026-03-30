'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Target, 
  Eye, 
  Heart,
  Award,
  Users,
  Globe,
  Lightbulb,
  Handshake,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: '끊임없는 기술 혁신으로 더 나은 미래를 만들어갑니다.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: '고객의 성공이 우리의 성공입니다.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: '투명하고 정직한 기업 문화를 지향합니다.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: '고객과 함께 성장하는 파트너가 되겠습니다.',
  },
]

const milestones = [
  { year: '2020', event: '에이원PRO 설립' },
  { year: '2021', event: 'SaaS 서비스 정식 런칭' },
  { year: '2022', event: '기업 고객 100개사 돌파' },
  { year: '2023', event: 'PG 결제 시스템 도입' },
  { year: '2024', event: 'AI 기능 업데이트' },
  { year: '2025', event: '글로벌 시장 진출 준비' },
]

const team = [
  {
    name: '홍민철',
    role: 'CEO & Founder',
    description: '20년 이상의 IT업계 경험',
  },
  {
    name: '김민수',
    role: 'CTO',
    description: '전 Google 엔지니어',
  },
  {
    name: '이서연',
    role: 'COO',
    description: '10년 이상의 경영 경험',
  },
  {
    name: '박지훈',
    role: 'CFO',
    description: '전 금융권 재무 전문가',
  },
]

export default function AboutPage() {
  const { theme } = useTheme()

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom right, 
              color-mix(in srgb, ${theme.colors.primary} 10%, white), 
              color-mix(in srgb, ${theme.colors.secondary} 10%, white), 
              color-mix(in srgb, ${theme.colors.accent} 10%, white))`
          }}
        />
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ backgroundColor: theme.colors.primary }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ backgroundColor: theme.colors.secondary }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span 
              className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-6"
              style={{ 
                backgroundColor: `color-mix(in srgb, ${theme.colors.primary} 15%, white)`,
                color: theme.colors.primary 
              }}
            >
              회사 소개
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: theme.colors.text }}>
              Innovation으로
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
                }}
              >
                비즈니스를이끌다
              </span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: theme.colors.textMuted }}>
              에이원PRO는 IT/정보통신업 분야의 응용 소프트웨어 개발 및 공급 전문 기업으로, 
              혁신적인 SaaS 솔루션과 회사관리 프로그램을 통해 고객의 디지털 전환을 돕고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              id="vision"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="sticky top-32">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                  }}
                >
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: theme.colors.text }}>Vision</h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: theme.colors.textMuted }}>
                  "아시아 태평양 지역 최고의 SaaS 기업으로 성장하여, 
                  모든 기업이 디지털 기술의 혜택을 누릴 수 있는 세상을 만든다."
                </p>
                <div className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: theme.colors.primary }} />
                      <p style={{ color: theme.colors.textMuted }}>
                        {['고객 중심의 혁신적인 솔루션 제공', '최고의 사용자 경험 추구', '지속적인 기술 발전과 투자'][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              id="mission"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="sticky top-32">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.accent})`
                  }}
                >
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: theme.colors.text }}>Mission</h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: theme.colors.textMuted }}>
                  "간편하고 강력한 SaaS 솔루션을 통해, 
                  기업의 생산성 향상과 비용 절감을 실현하고 행복한 일터를 만든다."
                </p>
                <div className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: theme.colors.secondary }} />
                      <p style={{ color: theme.colors.textMuted }}>
                        {['손쉬운 접근성과 직관적인 인터페이스', '합리적인 가격대의 프리미엄 서비스', '신속하고 친절한 고객 지원'][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32" style={{ background: 'linear-gradient(to bottom, #f9fafb, white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span 
              className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
              style={{ 
                backgroundColor: `color-mix(in srgb, ${theme.colors.secondary} 15%, white)`,
                color: theme.colors.secondary 
              }}
            >
              핵심 가치
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: theme.colors.text }}>
              Our Core Values
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: theme.colors.textMuted }}>
              에이원PRO가 중시로 삼는 4가지 핵심 가치
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl"
                style={{
                  background: 'white',
                  borderColor: theme.colors.border,
                  boxShadow: `0 4px 20px ${theme.colors.shadow}`
                }}
              >
                <div 
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.accent})`
                  }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.text }}>{value.title}</h3>
                <p style={{ color: theme.colors.textMuted }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span 
              className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
              style={{ 
                backgroundColor: `color-mix(in srgb, ${theme.colors.primary} 15%, white)`,
                color: theme.colors.primary 
              }}
            >
              연혁
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: theme.colors.text }}>
              Our Journey
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: theme.colors.textMuted }}>
              에이원PRO의 성장 과정
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div 
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
              style={{
                background: `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.secondary})`
              }}
            />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} lg:px-12`}>
                    <div 
                      className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-2"
                      style={{ 
                        backgroundColor: `color-mix(in srgb, ${theme.colors.primary} 15%, white)`,
                        color: theme.colors.primary 
                      }}
                    >
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: theme.colors.text }}>{milestone.event}</h3>
                  </div>

                  {/* Dot */}
                  <div 
                    className="w-4 h-4 rounded-full border-4 border-white shadow-lg z-10"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                    }}
                  />

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32" style={{ background: 'linear-gradient(to bottom, #111827, #000000)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span 
              className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: theme.colors.primary 
              }}
            >
              리더십
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Meet Our Team
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-400">
              에이원PRO를 이끄는 경험 많은 리더십 팀
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div 
                  className="w-32 h-32 mx-auto rounded-full p-1 mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="mb-2" style={{ color: theme.colors.primary }}>{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-20 lg:py-32"
        style={{
          background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
        }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="w-16 h-16 mx-auto text-white/80 mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              함께 성장할 파트너를 찾고 있습니다
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              에이원PRO의 서비스가 궁금하시거나 협력하고 싶으신 분들은 언제든지 연락주세요.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'white',
                color: theme.colors.secondary,
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            >
              문의하기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
