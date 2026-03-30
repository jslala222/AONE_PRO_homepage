import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '이용약관 | 에이원PRO',
  description: '에이원PRO 서비스 이용약관입니다.',
}

export default function TermsPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">이용약관</h1>
          <p className="text-gray-500 mt-2">시크릿 메신저 서비스</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제 1 조 (목적)</h2>
              <p className="text-gray-600 leading-relaxed">
                본 약관은 에이원PRO(이하 "회사"라 함)가 제공하는 시크릿 메신저 서비스 및 제반 서비스(이하 "서비스"라 함)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제 2 조 (용어의 정의)</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>"서비스"라 함은 이용자가 모바일 기기를 통해 암호화된 메시지를 생성, 전송, 수신할 수 있도록 하는 제반 서비스를 의미합니다.</li>
                <li>"회원"이라 함은 서비스에 접속하여 본 약관에 동의하고 회사가 제공하는 서비스를 이용하는 고객을 의미합니다.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제 3 조 (결제 및 환불)</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>유료 서비스의 이용요금 및 결제 방식은 서비스 내 개시된 바에 따릅니다.</li>
                <li>회사는 신용카드, 실시간 계좌이체 등 다양한 결제 수단을 제공할 수 있습니다.</li>
                <li>환불에 관한 상세 사항은 별도의 &apos;환불 정책&apos; 규정에 따릅니다.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제 4 조 (회사의 의무)</h2>
              <p className="text-gray-600 leading-relaxed">
                회사는 관련법과 본 약관이 금지하거나 미풍양속에 어긋나는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제 5 조 (서비스의 제공)</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>회사는 시크릿 메신저 서비스를 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</li>
                <li>회사는 시스템 점검, 서버 증설 및 교체 등 불가피한 경우 서비스를 일시적으로 중단할 수 있으며, 이 경우 사전에 공지합니다.</li>
                <li>천재지변 등 불가항력에 의한 서비스 중단은 책임을 지지 않습니다.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제 6 조 (이용자의 의무)</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>이용자는 본 약관 및 관련법령을 준수하여야 합니다.</li>
                <li>이용자는 회사의 사전 동의 없이 서비스를 부정하게 이용하거나 해킹 등 불법행위를 하여서는 안 됩니다.</li>
                <li>이용자는 자신의 계정 정보를 안전하게 관리하여야 합니다.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제 7 조 (면책)</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>회사는 이용자의 서비스 이용 행위에 대하여 책임을 지지 않습니다.</li>
                <li>이용자가 제6조의 의무를 위반하여 발생한 문제에 대해 회사는 책임을 지지 않습니다.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">제 8 조 (관할 법원)</h2>
              <p className="text-gray-600 leading-relaxed">
                이 약관에 의한 서비스 이용과 관련하여 발생하는 분쟁에 관하여는 대한민국법을 적용하며, 관할 법원은 회사의 본점 소재지 관할 법원으로 합니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Link 
                  href="/policy/privacy"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  ← 개인정보처리방침
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
