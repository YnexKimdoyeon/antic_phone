import { Award } from "lucide-react"

export function TrustSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Award className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            체계적인 감정 시스템과
            <br />
            최신 시세 기반의 투명한 가격 산정
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            전문가의 정확한 감정과 실시간 시세 반영으로
            <br />
            공정하고 투명한 거래를 약속드립니다.
          </p>
          <div className="mt-12 text-xs text-muted-foreground/60">
            <p>통신판매업 신고번호: 제 2020-부산북구-0224호</p>
            <p className="mt-1">사이트명: 중고폰 아울렛</p>
          </div>
        </div>
      </div>
    </section>
  )
}
