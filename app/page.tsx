import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TrustSection } from "@/components/trust-section"
import { FinalCtaSection } from "@/components/final-cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <TrustSection />
      <FinalCtaSection />
    </main>
  )
}
