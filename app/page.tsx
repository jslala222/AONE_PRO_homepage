'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  Star,
  ChevronRight,
  Play
} from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const features = [
  {
    icon: Zap,
    title: '빠른 시작',
    description: '별도 설치 없이 웹 브라우저에서 즉시 이용 가능',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Shield,
    title: '안전한 보안',
    description: ' enterprise급 데이터 암호화 및 보안 시스템',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: '성장 지원',
    description: '비즈니스 성장에 맞춘 유연한 확장성',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Users,
    title: '팀 협업',
    description: '실시간 협업으로 팀 생산성 극대화',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: '언제 어디서나',
    description: '모바일, 태블릿, PC 모든 기기 지원',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Star,
    title: '프리미엄 지원',
    description: '24/7 전문 고객센터 팀의 체계적인 기술 지원',
    color: 'from-pink-500 to-rose-500',
  },
]

const services = [
  {
    title: 'SaaS 구독서비스',
    description: '클라우드 기반의 Subscription 서비스, 언제든지 구독 및 해지 가능',
    features: ['월간/연간 구독', '자동 업데이트', '무제한 사용자'],
    href: '/services#saas',
  },
  {
    title: '회사관리 프로그램',
    description: '회사 운영에 필요한 모든 기능을 한 플랫폼에서',
    features: ['인사관리', '회계관리', '업무관리', '문서관리'],
    href: '/services#management',
  },
  {
    title: 'PG 결제 연동',
    description: '안전하고 빠른 결제 시스템 연동',
    features: ['다양한 결제수단', '안심결제', '빠른 정산'],
    href: '/services#payment',
  },
]

const stats = [
  { value: '10,000+', label: '사용자' },
  { value: '99.9%', label: '가용성' },
  { value: '500+', label: '기업 고객' },
  { value: '24/7', label: '고객지원' },
]

const testimonials = [
  {
    name: '김지은',
    role: 'IT팀장',
    company: '테크 솔루션',
    content: '에이원PRO 덕분에 업무 효율이 200% 향상됐어요. 특히 팀 협업 기능이 정말 만족스럽습니다.',
    rating: 5,
  },
  {
    name: '이민호',
    role: '대표',
    company: '스타트업 엑스코',
    content: 'SaaS Subscription 방식이 초기 비용 부담 없이 서비스 도입이 가능해서 정말 좋아요.',
    rating: 5,
  },
  {
    name: '박서연',
    role: '관리자',
    company: '글로벌 커머스',
    content: 'PG 결제 연동이 간편하고 정산이 빠르네요. 고객 지원도 친절하게 대응해 주셨어요.',
    rating: 5,
  },
]

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects - Theme Aware */}
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
            className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            style={{ backgroundColor: theme.colors.primary }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            style={{ backgroundColor: theme.colors.secondary }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            style={{ backgroundColor: theme.colors.accent }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full opacity-20"
              style={{ backgroundColor: theme.colors.primary }}
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg mb-8"
              style={{ boxShadow: `0 10px 40px ${theme.colors.shadow}` }}
            >
              <span 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#22c55e' }}
              />
              <span className="text-sm font-medium text-gray-700">신규 가입 시 30일 무료 체험</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span style={{ color: theme.colors.text }}>비즈니스의 미래를</span>
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent})`
                }}
              >
                디지털로 연결하다
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg sm:text-xl mb-10 leading-relaxed"
              style={{ color: theme.colors.textMuted }}
            >
              에이원PRO는 SaaS 구독서비스와 회사관리 프로그램을 통해 
              기업의 디지털 전환을 돕는 혁신적인 솔루션을 제공합니다.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  boxShadow: `0 20px 40px ${theme.colors.shadow}`
                }}
              >
                무료로 시작하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group w-full sm:w-auto px-8 py-4 rounded-full bg-white font-semibold text-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2"
                style={{ 
                  color: theme.colors.text,
                  boxShadow: `0 4px 20px ${theme.colors.shadow}`
                }}
              >
                <Play className="w-5 h-5" style={{ color: theme.colors.primary }} />
                서비스 알아보기
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50"
                >
                  <div 
                    className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm mt-1" style={{ color: theme.colors.textMuted }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 flex justify-center p-2"
            style={{ borderColor: theme.colors.textMuted }}
          >
            <motion.div 
              className="w-1 h-2 rounded-full" 
              style={{ backgroundColor: theme.colors.textMuted }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
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
              핵심 가치
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: theme.colors.text }}>
              왜 <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
                }}
              >에이원PRO</span>인가?
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: theme.colors.textMuted }}>
              혁신 기술과 고객 중심 서비스로 비즈니스의 성장을 돕습니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl border transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #f9fafb 0%, white 100%)',
                  borderColor: theme.colors.border,
                  boxShadow: `0 4px 20px ${theme.colors.shadow}`
                }}
              >
                <div 
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.text }}>{feature.title}</h3>
                <p style={{ color: theme.colors.textMuted }} className="leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="py-20 lg:py-32"
        style={{
          background: `linear-gradient(to bottom, #f9fafb, white)`
        }}
      >
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
              서비스 소개
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: theme.colors.text }}>
              당신의 비즈니스를 위한
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.accent})`
                }}
              >
                올인원 솔루션
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: theme.colors.textMuted }}>
              SaaS부터 회사관리, PG 결제까지 한 곳에서
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 border transition-all duration-500 overflow-hidden"
                style={{ borderColor: theme.colors.border }}
              >
                {/* Gradient Overlay on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, 
                      color-mix(in srgb, ${theme.colors.secondary} 5%, transparent), 
                      color-mix(in srgb, ${theme.colors.accent} 5%, transparent))`
                  }}
                />
                
                <div className="relative">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.accent})`
                    }}
                  >
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text }}>{service.title}</h3>
                  <p className="mb-6 leading-relaxed" style={{ color: theme.colors.textMuted }}>{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3" style={{ color: theme.colors.textMuted }}>
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300"
                    style={{ color: theme.colors.secondary }}
                  >
                    자세히 보기
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-20 lg:py-32 text-white overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, #111827, #000000)`
        }}
      >
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
              고객 후기
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              이미{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent})`
                }}
              >
                믿고 계신 분들
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-400">
              에이원PRO를 사용하고 계신 고객들의 생생한 후기
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent})`
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              지금 시작하세요
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              30일 무료 체험으로 에이원PRO의 모든 기능을 경험해 보세요.
              <br />
              신용카드 불필요.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{ 
                  backgroundColor: 'white',
                  color: theme.colors.secondary,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                무료 상담 신청
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
              >
                서비스 둘러보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
