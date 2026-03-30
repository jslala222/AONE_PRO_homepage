import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, RefreshCw, CreditCard, Clock, Shield, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: '환불정책 | 에이원PRO',
  description: '에이원PRO 환불정책입니다.',
}

export default function RefundPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            뒤로 가기
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">환불정책</h1>
          <p className="text-gray-500 mt-2">에이원PRO는 전자상거래법 등 관련 법령을 준수합니다.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                <Clock className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">7일 이내</h3>
                <p className="text-sm text-gray-600">결제일로부터 7일 이내 청약철회 가능</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <RefreshCw className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">신속한 처리</h3>
                <p className="text-sm text-gray-600">확인 후 신속히 처리해 드립니다</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                <Shield className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">투명한 환불</h3>
                <p className="text-sm text-gray-600">법령 준수 환불 정책</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. 청약철회 및 환불 기간</h2>
              <p className="text-gray-600 leading-relaxed">
                이용자는 유료 이용권을 결제한 날로부터 <strong>7일 이내</strong>에 청약철회(환불)를 요청할 수 있습니다.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. 환불의 제한</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>구매한 프리미엄 이용권을 사용하여 메시지를 1회 이상 발송한 경우, 디지털 콘텐츠의 특성상 청약철회가 제한될 수 있습니다.</li>
                <li>이용자의 단순 변심에 의한 환불 시 발생할 수 있는 결제 수수료 등은 이용자가 부담할 수 있습니다.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. 환불 절차</h2>
              <p className="text-gray-600 leading-relaxed">
                환불 신청은 고객센터 또는 이메일을 통해 접수해 주시면 확인 후 신속히 처리해 드립니다.
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2 mt-4">
                <li>고객센터(010-2737-7229) 또는 이메일(jslala222@gmail.com)로 환불 요청</li>
                <li>환불 대상 확인 및 검토</li>
                <li>승인 후 결제수단으로 환불 처리</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. 환불 불가 사유</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>서비스를 이미 이용한 경우 (메시지 발송 완료)</li>
                <li>결제일로부터 7일이 경과한 경우</li>
                <li>디지털 콘텐츠의 특성에 따라 환불이 제한되는 경우</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. 환불 문의</h2>
              <p className="text-gray-600 leading-relaxed">
                환불 관련 문의사항이 있으시면 아래 연락처로 언제든지 문의주시기 바랍니다.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="text-xl font-bold mb-4">환불을 요청하시겠어요?</h3>
              <p className="text-white/80 mb-6">
                신속하게 처리해 드리겠습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:010-2737-7229"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-purple-600 font-semibold hover:shadow-lg transition-all"
                >
                  <Phone className="w-5 h-5" />
                  010-2737-7229
                </a>
                <a
                  href="mailto:jslala222@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/30 font-semibold hover:bg-white/20 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  jslala222@gmail.com
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Link 
                  href="/policy/terms"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  ← 이용약관
                </Link>
                <Link 
                  href="/policy/privacy"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  개인정보처리방침 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
