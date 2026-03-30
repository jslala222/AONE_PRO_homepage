import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '개인정보처리방침 | 에이원PRO',
  description: '에이원PRO 개인정보처리방침입니다.',
}

export default function PrivacyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">개인정보처리방침</h1>
          <p className="text-gray-500 mt-2">시크릿 메신저 서비스</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. 수집하는 개인정보 항목</h2>
              <p className="text-gray-600 leading-relaxed">
                회사는 유료 서비스 결제 및 고객 상담을 위해 아래와 같은 개인정보를 수집할 수 있습니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li><strong>필수항목:</strong> 이름, 이메일, 결제 기록 (결제사 통보 정보)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. 개인정보의 이용 목적</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>유료 서비스 제공에 따른 본인 확인 및 결제 이행</li>
                <li>고객 상담 및 불만 처리, 고지사항 전달</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. 개인정보의 보유 및 이용기간</h2>
              <p className="text-gray-600 leading-relaxed">
                이용자의 개인정보는 원칙적으로 개인정보 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 
                단, 전자상거래법 등 관련 법령에 의하여 보존할 필요가 있는 경우 일정 기간 보관합니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li><strong>결제 및 계약 취소 등에 관한 기록:</strong> 5년</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. 개인정보의 제3자 제공</h2>
              <p className="text-gray-600 leading-relaxed">
                회사는 이용자의 개인정보를 제1항에서 명시한 목적 범위를 초과하여 이용하거나, 원칙적으로 제3자에게 제공하지 않습니다. 
                다만, 아래의 경우에는 예외로 합니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령에 의해 요구되는 경우</li>
                <li>결제 처리를 위해 PG사 등에 정보 제공하는 경우</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. 개인정보의 안전성 확보</h2>
              <p className="text-gray-600 leading-relaxed">
                회사는 개인정보의 안전성을 확보하기 위해 다음과 같은 조치를 취합니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>개인정보 암호화 (SSL/TLS 적용)</li>
                <li>방화벽 및 접근 제어 시스템 운영</li>
                <li>정기적인 보안 점검 및 업데이트</li>
                <li>개인정보 접근 권한의 최소화</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. 이용자의 권리</h2>
              <p className="text-gray-600 leading-relaxed">이용자는 다음과 같은 권리를 가지고 있습니다.</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>개인정보 열람 요청</li>
                <li>개인정보 정정 요청</li>
                <li>개인정보 삭제 요청</li>
                <li>개인정보 처리 정지 요청</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                위 권리 행사 요청은 고객센터(010-2737-7229) 또는 이메일(jslala222@gmail.com)으로 연락주시기 바랍니다.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. 개인정보 보호책임자</h2>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p className="text-gray-600"><strong>대표자:</strong> 김정식</p>
                <p className="text-gray-600"><strong>고객센터:</strong> 010-2737-7229</p>
                <p className="text-gray-600"><strong>이메일:</strong> jslala222@gmail.com</p>
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
                  href="/policy/refund"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  환불정책 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
