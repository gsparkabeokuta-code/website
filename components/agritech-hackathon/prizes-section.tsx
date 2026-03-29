import { CornerPattern } from "@/components/agritech-hackathon/corner-pattern"
import { SplitHeading } from "@/components/agritech-hackathon/split-heading"

const defaultPrizeHighlights = [
  { position: "1st", emoji: "🥇", amount: "₦500, 000" },
  { position: "2nd", emoji: "🥈", amount: "₦300, 000" },
  { position: "3rd", emoji: "🥉", amount: "₦200, 000" },
]

type PrizeHighlight = {
  position: string
  emoji: string
  amount: string
}

type PrizeNote = {
  title: string
  text: string
}

type PrizesSectionProps = {
  highlights?: PrizeHighlight[]
  notes?: PrizeNote[]
}

const defaultNotes: PrizeNote[] = [
  {
    title: "4th-10th:",
    text: "Consolation prizes (swag, certificates, cloud credit).",
  },
  {
    title: "Special Awards:",
    text: "Best Female-Led Team, Best FUNAAB Team, Most Innovative Use of AI, People's Choice.",
  },
]

export function PrizesSection({
  highlights = defaultPrizeHighlights,
  notes = defaultNotes,
}: PrizesSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-agri-hero">
      <CornerPattern />
      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        <SplitHeading
          parts={[
            { text: "Prizes &", className: "text-agri-forest" },
            { text: "Rewards", className: "text-agri-green" },
          ]}
        />

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.position}
              className="border-4 border-t-agri-forest px-6 py-6 text-agri-forest"
            >
              <div className="flex items-center justify-between text-base font-semibold">
                <span>{item.position}</span>
                <span>{item.emoji}</span>
              </div>
              <p className="mt-6 text-2xl font-semibold">{item.amount}</p>
            </div>
          ))}
        </div>
          {notes.length > 0 && (

          <div className="grid gap-4 md:grid-cols-2">
            {notes.map((note) => (
              <div
                key={note.title}
                className="text-left border border-white/60 bg-agri-hero px-6 py-5 text-sm font-medium text-agri-forest shadow-[inset_4px_0_0_0_#FFFFFF] border-l-8 border-l-agri-green"
              >
                <span className="font-semibold">{note.title}</span> {note.text}
              </div>
            ))}
          </div>
          )}
      </div>
    </section>
  )
}
