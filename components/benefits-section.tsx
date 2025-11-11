import { Card, CardContent } from "@/components/ui/card"
import { Shield, TrendingUp, Zap, Trash2, CheckCircle, MousePointerClick, Users, Leaf } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "안전한 거래 보장",
    description: "믿을 수 있는 거래 시스템",
  },
  {
    icon: TrendingUp,
    title: "투명한 시세 제공",
    description: "실시간 시세 기반 가격",
  },
  {
    icon: Zap,
    title: "24시간매입",
    description: "당일 입금 가능",
  },
  {
    icon: Trash2,
    title: "데이터 완전 삭제",
    description: "개인정보 안전 보장",
  },
  {
    icon: CheckCircle,
    title: "정품/불량기 판별",
    description: "전문 감정 시스템",
  },
  {
    icon: MousePointerClick,
    title: "편리한 매입 절차",
    description: "간편한 프로세스",
  },
  {
    icon: Users,
    title: "고객 신뢰도 확보",
    description: "검증된 서비스",
  },
  {
    icon: Leaf,
    title: "환경 보호 기여",
    description: "지속 가능한 소비",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          왜 중고폰 아울렛을
          <br />
          선택해야 하나?
        </h2>
        <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl">8가지 확실한 이유</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
