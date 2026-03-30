'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  User,
  Building2,
  ChevronDown
} from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: '이메일',
    value: 'jslala222@gmail.com',
    description: '24시간 이내 답변',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: '고객센터',
    value: '010-2737-7229',
    description: '평일 09:00 - 18:00',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    title: '본사',
    value: '경기도 화성시',
    description: '만세구 향남읍 하길로 9',
    color: 'from-purple-500 to-pink-500',
  },
]

const faqItems = [
  {
    q: '서비스 이용 중 문제가 발생했어요.',
    a: '고객센터(010-2737-7229) 또는 jslala222@gmail.com으로 연락주세요. 빠르게 대응해 드리겠습니다.',
  },
  {
    q: '구독 변경은 어떻게 하나요?',
    a: '마이페이지 > 구독관리에서 직접 변경하실 수 있으며, 변경 시 즉시 적용됩니다.',
  },
  {
    q: '법인카드로 결제하고 싶어요.',
    a: '결제 페이지에서 법인카드 선택 후 결제하실 수 있습니다. 세금계산서 발행도 가능합니다.',
  },
  {
    q: '기술 지원은 어떤 채널로 받나요?',
    a: '이메일, 전화 채널로 기술 지원을 제공하고 있으며, 프로 이상 요금제는 전담 매니저가 배정됩니다.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              문의하기
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              언제든지
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                연락주세요
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              서비스에 대한 문의, 맞춤 설계, 기술 지원 등
              <br />
              다양한 채널로 도움을 드리고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-lg text-gray-700 mb-1">{method.value}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">무료 상담 신청</h2>
              <p className="text-gray-600 mb-8">
                아래 양식을 작성해주시면 빠른 시일 내에 연락드리겠습니다.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        이름 *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="홍길동"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        회사명
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="(주)OOOO"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        이메일 *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="example@email.com"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        전화번호
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="010-0000-0000"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      관심 서비스 *
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none appearance-none bg-white"
                      >
                        <option value="">선택하세요</option>
                        <option value="saas">SaaS 구독서비스</option>
                        <option value="management">회사관리 프로그램</option>
                        <option value="payment">PG 결제 연동</option>
                        <option value="enterprise">기업 맞춤 설계</option>
                        <option value="other">기타</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      메시지 *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="문의 내용을 입력해주세요..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        전송 중...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        무료 상담 신청하기
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    신청이 완료되었습니다!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    빠른 시일 내에 담당자가 연락드리겠습니다.
                    <br />
                    감사합니다.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                      })
                    }}
                    className="px-6 py-3 rounded-full border border-gray-200 font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    새 문의하기
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* FAQ */}
            <motion.div
              id="faq"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">자주 묻는 질문</h2>
              <p className="text-gray-600 mb-8">
                빠르게 찾으시는 답변을 확인하세요.
              </p>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="font-semibold text-gray-900">{item.q}</span>
                        <span className="transition-transform group-open:rotate-180">
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </span>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">고객센터 운영시간</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>평일: 09:00 - 18:00</p>
                  <p>점심시간: 12:00 - 13:00</p>
                  <p>주말 및 공휴일: 휴무</p>
                </div>
                <p className="mt-4 text-sm text-blue-600">
                  ※ 업무시간 외에는 이메일(jslala222@gmail.com)로 문의주시면 빠른 답변 드리겠습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-80 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600">경기도 화성시 만세구 향남읍 하길로 9, 1102동 1002호</p>
          </div>
        </div>
      </section>
    </div>
  )
}
