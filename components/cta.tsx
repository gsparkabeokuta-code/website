import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl border border-border p-12 md:p-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Miss Nigeria's Premier Tech Summit</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 2,000+ innovators, entrepreneurs, and industry leaders. Network with top tech executives, compete for
            ₦4M+ in prizes, and discover your next opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Register Now
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline">
              View Schedule
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            ✓ Early bird pricing • ✓ 40% transport subsidy • ✓ Free accommodation for speakers
          </p>
        </div>
      </div>
    </section>
  )
}
