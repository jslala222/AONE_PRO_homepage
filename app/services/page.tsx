'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Cloud, 
  Building2, 
  CreditCard, 
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Headphones,
  TrendingUp,
  Lock,
  RefreshCw,
  Smartphone,
  Users,
  Maximize2
} from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const services = [
  {
    id: 'saas',
    icon: Cloud,
    title: 'SaaS 구독서비스',
    subtitle: '클라우드 기반 구독 서비스',
    description: '별도의 설치나 관리가 필요 없는 클라우드 기반 SaaS 서비스를 제공합니다. 인터넷만 연결되면 언제 어디서나 서비스 이용이 가능합니다.',
    features: [
      { icon: Zap, text: '즉시 이용 가능 - 설치 불필요' },
      { icon: RefreshCw, text: '자동 업데이트 - 항상 최신 버전' },
      { icon: Users, text: '무제한 사용자 추가' },
      { icon: Maximize2, text: 'PC, 태블릿, 모바일 지원' },
    ],
    price: '월 29,000원~',
    highlight: '30일 무료 체험',
  },
  {
    id: 'management',
    icon: Building2,
    title: '회사관리 프로그램',
    subtitle: '올인원 비즈니스 솔루션',
    description: '회사 운영에 필요한 모든 기능을 하나의 플랫폼에서 관리하세요. 인사, 회계, 업무, 문서 관리를 통합하여 업무 효율을 극대화합니다.',
    features: [
      { icon: Users, text: '인사관리 - 근태, 급여, 조직도' },
      { icon: TrendingUp, text: '회계관리 - 매출, 지출, 분석' },
      { icon: CheckCircle2, text: '업무관리 - 프로젝트, 이슈트래킹' },
      { icon: Lock, text: '문서관리 - 보안된 문서 저장' },
    ],
    price: '월 49,000원~',
    highlight: '기업 맞춤 설계 가능',
  },
  {
    id: 'payment',
    icon: CreditCard,
    title: 'PG 결제 연동',
    subtitle: '안전하고 빠른 결제 시스템',
    description: '다양한 결제수단을 지원하며, 안전한 결제 환경과 빠른 정산 서비스를 제공합니다. 주요 PG사와의 연동을 지원합니다.',
    features: [
      { icon: Shield, text: '안전한 결제 환경' },
      { icon: Smartphone, text: '다양한 결제수단 지원' },
      { icon: Clock, text: '빠른 정산 서비스' },
      { icon: Headphones, text: '24/7 결제 모니터링' },
    ],
    price: '이용료 별도 문의',
    highlight: '설치 지원 무료',
  },
]

const pricingPlans = [
  {
    name: '스타터',
    price: '29,000',
    period: '월',
    description: '소규모 팀에 적합',
    features: [
      '사용자 5명',
      '기본 기능',
      '이메일 지원',
      '10GB 스토리지',
    ],
    notIncluded: [
      '고급 분석',
      'API 연동',
      '맞춤형 교육',
    ],
    popular: false,
  },
  {
    name: '프로',
    price: '79,000',
    period: '월',
    description: '성장하는 팀에 적합',
    popular: true,
    features: [
      '사용자 무제한',
      '모든 기능',
      '24/7 우선 지원',
      '100GB 스토리지',
      '고급 분석',
      'API 연동',
    ],
    notIncluded: [],
  },
  {
    name: '엔터프라이즈',
    price: '문의',
    period: '',
    description: '대규모 기업에 적합',
    popular: false,
    features: [
      '프로 모든 기능',
      '전담 매니저',
      '맞춤형 교육',
      '무제한 스토리지',
      '온프레미스 설치',
      'SLA 보장',
    ],
    notIncluded: [],
  },
]

const faq = [
  {
    q: '구독은 언제든 해지할 수 있나요?',
    a: '네, 언제든 구독을 해지하실 수 있습니다. 해지 시 남은 기간까지는 서비스를 계속 이용하실 수 있으며, 별도의 위약금이나 해지료는 없습니다.',
  },
  {
    q: '무료 체험 기간이 있나요?',
    a: '모든 서비스는 30일 무료 체험 기간을 제공하고 있습니다. 무료 체험 기간 중에는 모든 기능을 제한 없이 이용하실 수 있습니다.',
  },
  {
    q: '결제 방법은 어떤 것이 있나요?',
    a: '신용카드, 체크카드, 계좌이체, 무통장입금 등 다양한 결제 방법을 지원하고 있습니다. 법인카드 결제도 가능합니다.',
  },
  {
    q: '환불은 어떻게 하나요?',
    a: '구독료는 이용 기간에 비례하여 환불해 드리고 있습니다. 자세한 환불 정책은 환불정책 페이지를 참고해 주세요.',
  },
  {
    q: '데이터 백업은 되나요?',
    a: '네, 모든 데이터는 자동 백업되며, 필요 시 데이터를 내보내기(Export) 하실 수도 있습니다.',
  },
]

export default function ServicesPage() {
  const { theme } = useTheme()

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom right, 
              color-mix(in srgb, ${theme.colors.secondary} 10%, white), 
              color-mix(in srgb, ${theme.colors.primary} 10%, white), 
              color-mix(in srgb, ${theme.colors.accent} 10%, white))`
          }}
        />
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-40 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ backgroundColor: theme.colors.secondary }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ backgroundColor: theme.colors.accent }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-6"
              style={{ 
                backgroundColor: `color-mix(in srgb, ${theme.colors.secondary} 15%, white)`,
                color: theme.colors.secondary 
              }}
            >
              서비스 소개
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: theme.colors.text }}>
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
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: theme.colors.textMuted }}>
              SaaS 구독서비스부터 회사관리 프로그램, PG 결제까지.
              <br />
              비즈니스에 필요한 모든 것을 하나의 플랫폼에서.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="py-20 lg:py-32"
          style={{
            background: `linear-gradient(to bottom, 
              color-mix(in srgb, ${index % 2 === 0 ? theme.colors.primary : theme.colors.secondary} 5%, white), 
              white)`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                  }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: theme.colors.text }}>
                  {service.title}
                </h2>
                <p className="text-lg font-medium mb-6" style={{ color: theme.colors.secondary }}>
                  {service.subtitle}
                </p>
                <p className="text-lg leading-relaxed mb-8" style={{ color: theme.colors.textMuted }}>
                  {service.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                        }}
                      >
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <span style={{ color: theme.colors.text }}>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-3xl font-bold" style={{ color: theme.colors.text }}>{service.price}</div>
                    <div className="text-sm" style={{ color: theme.colors.textMuted }}>{service.highlight}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{
                      background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
                      boxShadow: `0 10px 20px ${theme.colors.shadow}`
                    }}
                  >
                    문의하기
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div 
                  className="aspect-square rounded-3xl p-1"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                    <div className="text-center p-8">
                      <div 
                        className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-6"
                        style={{
                          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                        }}
                      >
                        <service.icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text }}>{service.title}</h3>
                      <p style={{ color: theme.colors.textMuted }}>{service.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div 
                  className={`absolute -z-10 w-32 h-32 rounded-full blur-3xl opacity-30 ${
                    index % 2 === 0 ? '-right-8 -bottom-8' : '-left-8 -bottom-8'
                  }`}
                  style={{ backgroundColor: theme.colors.primary }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
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
              요금제
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: theme.colors.text }}>
              합리적인 가격으로
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
                }}
              >
                시작하세요
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: theme.colors.textMuted }}>
              성장에 맞춘 유연한 요금제. 언제든 업그레이드 또는 다운그레이드 가능.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 border-2 ${
                  plan.popular ? '' : ''
                }`}
                style={{
                  borderColor: plan.popular ? theme.colors.primary : theme.colors.border,
                  boxShadow: plan.popular ? `0 20px 40px ${theme.colors.shadow}` : `0 4px 20px ${theme.colors.shadow}`
                }}
              >
                {plan.popular && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-medium"
                    style={{
                      background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
                    }}
                  >
                    가장 인기
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text }}>{plan.name}</h3>
                  <p className="text-sm mb-4" style={{ color: theme.colors.textMuted }}>{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold" style={{ color: theme.colors.text }}>{plan.price}</span>
                    {plan.period && <span style={{ color: theme.colors.textMuted }}>{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span style={{ color: theme.colors.textMuted }}>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 opacity-50">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-gray-300" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-full text-center font-semibold transition-all duration-300 ${
                    plan.popular ? 'text-white' : ''
                  }`}
                  style={
                    plan.popular
                      ? {
                          background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
                          boxShadow: `0 10px 20px ${theme.colors.shadow}`
                        }
                      : {
                          backgroundColor: '#f3f4f6',
                          color: theme.colors.text,
                        }
                  }
                >
                  시작하기
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32" style={{ background: 'linear-gradient(to bottom, #f9fafb, white)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              자주 묻는 질문
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: theme.colors.text }}>
              FAQ
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border overflow-hidden"
                style={{ borderColor: theme.colors.border }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold" style={{ color: theme.colors.text }}>{item.q}</span>
                    <span className="transition-transform group-open:rotate-180" style={{ color: theme.colors.textMuted }}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="leading-relaxed" style={{ color: theme.colors.textMuted }}>{item.a}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-20 lg:py-32"
        style={{
          background: `linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.accent}, ${theme.colors.primary})`
        }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              지금 시작하면 30일 무료!
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              에이원PRO의 모든 기능을 제한 없이 경험해 보세요.
              <br />
              신용카드 불필요.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{ 
                  backgroundColor: 'white',
                  color: theme.colors.secondary,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                무료로 시작하기
              </Link>
              <Link
                href="/policy/refund"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
              >
                환불정책 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
