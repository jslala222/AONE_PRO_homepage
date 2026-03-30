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
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: '김민수',
    role: 'CTO',
    description: '전 Google 엔지니어',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: '이서연',
    role: 'COO',
    description: '10년 이상의 경영 경험',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: '박지훈',
    role: 'CFO',
    description: '전 금융권 재무 전문가',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              회사 소개
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Innovation으로
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                비즈니스를이끌다
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  "아시아 태평양 지역 최고의 SaaS 기업으로 성장하여, 
                  모든 기업이 디지털 기술의 혜택을 누릴 수 있는 세상을 만든다."
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">고객 중심의 혁신적인 솔루션 제공</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">최고의 사용자 경험 추구</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">지속적인 기술 발전과 투자</p>
                  </div>
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  "간편하고 강력한 SaaS 솔루션을 통해, 
                  기업의 생산성 향상과 비용 절감을 실현하고 행복한 일터를 만든다."
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">손쉬운 접근성과 직관적인 인터페이스</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">합리적인 가격대의 프리미엄 서비스</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">신속하고 친절한 고객 지원</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
              핵심 가치
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
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
                className="text-center p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              연혁
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              에이원PRO의 성장 과정
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2" />

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
                    <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{milestone.event}</h3>
                  </div>

                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-white shadow-lg z-10" />

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-blue-400 text-sm font-medium mb-4">
              리더십
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
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
                <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.color} p-1 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-4xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-purple-600 font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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
