import { Card } from "@/components/ui/card"
import { Mic, Users, Trophy } from "lucide-react"

const features = [
  {
    icon: Mic,
    title: "World-Class Speakers",
    description:
      "Learn from industry leaders including founders of Paystack, Flutterwave, and Interswitch. Get insights on building unicorns and scaling African innovation.",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description:
      "Connect with 2,000+ innovators, students, and industry professionals. Build meaningful relationships with mentors and peers in tech and entrepreneurship.",
  },
  {
    icon: Trophy,
    title: "Amazing Competitions",
    description:
      "Compete in Agritech Hackathon and AI/ML Research Challenge with ₦4M+ prize pool. Win laptops, internships, and cloud credits from partners.",
  },
]

export function Features() {
  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Event Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience an incredible day of learning, networking, and competition
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-background border border-border p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
