import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    author: "Chukwu Emmanuel",
    role: "Computer Science Student, FUNAAB",
    content:
      "G-SPARK is the platform I needed to connect with industry leaders and showcase my skills. The hackathon opportunity changed my career trajectory.",
    rating: 5,
  },
  {
    author: "Zainab Oluwaseun",
    role: "Agritech Founder",
    content:
      "Outstanding summit bringing together brilliant minds in tech and agriculture. The networking connections alone made it invaluable for my startup.",
    rating: 5,
  },
  {
    author: "David Okafor",
    role: "AI/ML Researcher",
    content:
      "The research defense session was incredibly enriching. Getting feedback from top tech leaders and the prize pool helped fund our research.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Participant Testimonials</h2>
          <p className="text-lg text-muted-foreground">Hear from past attendees about their G-SPARK experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary border border-border p-8 flex flex-col gap-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
