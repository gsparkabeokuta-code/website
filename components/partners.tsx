import { Card } from "@/components/ui/card"

const partners = [
  { name: "Google" },
  { name: "NVIDIA" },
  { name: "Microsoft" },
  { name: "MTN" },
  { name: "PayPal" },
  { name: "Mastercard" },
  { name: "Postman" },
  { name: "Solana Foundation" },
  { name: "DeepLearning Indaba" },
  { name: "SheCodeAfrica" },
  { name: "Zummit Africa" },
  { name: "GOMYCODE" },
]

export function Partners() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Partners & Sponsors</h2>
          <p className="text-lg text-muted-foreground">Proudly supported by Africa's leading tech companies</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="bg-background border border-border p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300"
            >
              <span className="font-semibold text-foreground text-center">{partner.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
