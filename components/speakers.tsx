import { Users, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Speakers() {
  return (
    <section id="speakers" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Distinguished Speakers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from Africa's top tech entrepreneurs, innovators, and government leaders
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-secondary/50 border border-border rounded-3xl p-12 md:p-16">
          {/* Icon */}
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-primary" />
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-sm font-medium">Coming Soon</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Speaker Lineup Dropping Soon!
          </h3>
          
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            We're curating an incredible lineup of tech leaders, innovators, and changemakers. 
            Stay tuned for the big reveal!
          </p>

          {/* Placeholder Avatars */}
          <div className="flex justify-center items-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-12 h-12 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xl"
                style={{ marginLeft: i > 0 ? '-8px' : '0' }}
              >
                ?
              </div>
            ))}
            <div 
              className="w-12 h-12 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-sm font-bold text-primary"
              style={{ marginLeft: '-8px' }}
            >
              +10
            </div>
          </div>

          {/* Notify Button */}
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-lg"
          >
            <Bell className="w-5 h-5 mr-2" />
            Notify Me When Announced
          </Button>
        </div>

        {/* Teaser Text */}
        <p className="text-muted-foreground text-sm mt-8">
          💡 Hint: Expect top voices from Fintech, AI, Agritech, and more!
        </p>
      </div>
    </section>
  )
}
