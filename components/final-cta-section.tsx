import { Button } from "@/components/ui/button"
import { Phone, Zap, Truck } from "lucide-react"
import { CTA_CONFIG } from "@/lib/cta-config"

export function FinalCtaSection() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            이제는 매입도 판매도
            <br />
            아울렛에서 즐기자
          </h2>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="secondary" 
              className="w-full text-lg sm:w-auto"
              asChild
            >
              <a href={CTA_CONFIG.consultation.href}>
                {CTA_CONFIG.consultation.text}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-primary-foreground bg-transparent text-lg text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto"
              asChild
            >
              <a href={CTA_CONFIG.pricing.href}>
                {CTA_CONFIG.pricing.text}
              </a>
            </Button>
          </div>
          <div className="mb-6 flex flex-col items-center justify-center gap-4 text-primary-foreground/90 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">당일 매입!</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">당일 현금 지급!</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span className="font-semibold">전국 퀵 전문</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary-foreground">
            <Phone className="h-6 w-6" />
            <span className="text-xl font-semibold">{CTA_CONFIG.phone.displayText}</span>
            <span className="text-xl font-bold">{CTA_CONFIG.phone.number}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
