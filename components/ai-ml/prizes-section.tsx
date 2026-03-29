import { CornerPattern } from "@/components/agritech-hackathon/corner-pattern"
import { SplitHeading } from "@/components/agritech-hackathon/split-heading"

const prizeHighlights = [
  { position: "1st", emoji: "🥇", amount: "₦500000" },
  { position: "2nd", emoji: "🥈", amount: "₦300000" },
  { position: "3rd", emoji: "🥉", amount: "₦200000" },
]

export function PrizesSection() {
  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-agri-hero">
      <CornerPattern />
      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        <SplitHeading
          parts={[
            { text: "Prizes &", className: "text-agri-forest" },
            { text: "Rewards", className: "text-[#D7453D]" },
          ]}
        />

        <div className="grid gap-4 md:grid-cols-3">
          {prizeHighlights.map((item) => (
            <div
              key={item.position}
              className="border-t-4 border-t-agri-forest bg-linear-to-br from-agri-hero via-[#D7453D] to-agri-green/60 px-6 py-6 text-agri-forest"
            >
              <div className="flex items-center justify-between text-base font-semibold">
                <span>{item.position}</span>
                <span>{item.emoji}</span>
              </div>
              <p className="mt-6 text-2xl font-semibold">{item.amount}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="text-left border border-white/60 bg-agri-hero px-6 py-5 text-sm font-medium text-agri-forest shadow-[inset_4px_0_0_0_#FFFFFF] border-l-8 border-l-agri-green">
            <span className="font-semibold">4th-10th:</span> Consolation prizes (swag, certificates,
            3-month incubation at FUNAAB CENTS).
          </div>
          <div className="text-left border border-white/60 bg-agri-hero px-6 py-5 text-sm font-medium text-agri-forest shadow-[inset_4px_0_0_0_#FFFFFF] border-l-8 border-l-agri-green">
            <span className="font-semibold">Special Awards:</span> Best Female-Led Team, Best FUNAAB
            Team, Most Innovative Use of AI, People's Choice.
          </div>
        </div>
      </div>
    </section>
  )
}
