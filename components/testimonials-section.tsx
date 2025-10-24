import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "김민수",
    comment: "예상보다 빠른 입금! 당일 바로 현금 받았어요.",
    rating: 5,
  },
  {
    name: "이지은",
    comment: "숨겨진 수수료 없이 투명하게 거래했습니다.",
    rating: 5,
  },
  {
    name: "박준호",
    comment: "데이터 삭제 서비스 덕분에 안심하고 팔았어요.",
    rating: 5,
  },
  {
    name: "최서연",
    comment: "현장 정산이 너무 편리했습니다. 추천해요!",
    rating: 5,
  },
  {
    name: "정우진",
    comment: "미납폰도 매입해주셔서 정말 감사합니다.",
    rating: 5,
  },
  {
    name: "강혜진",
    comment: "친절한 상담과 빠른 처리, 최고의 서비스!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">고객 후기</h2>
        <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl">실제 이용 고객들의 생생한 후기</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-pretty leading-relaxed">{testimonial.comment}</p>
                <p className="font-semibold text-muted-foreground">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
