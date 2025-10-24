import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-primary py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            새폰 마련의 첫걸음,
            <br />
            중고폰 매입 서비스
          </h1>
          <p className="mb-8 text-pretty text-lg text-primary-foreground/90 md:text-xl lg:text-2xl">
            중고폰 · 미납폰 · 오늘 개통한 폰 매입 전문
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="w-full text-lg sm:w-auto">
              상담하러가기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-primary-foreground bg-transparent text-lg text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto"
            >
              단가보러가기
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
            <Phone className="h-5 w-5" />
            <span className="text-lg font-semibold">24시간 상담 가능</span>
            <span className="text-lg font-bold">010-5782-5248</span>
          </div>
        </div>
      </div>
    </section>
  )
}
