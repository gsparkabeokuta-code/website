import { IconPillList } from "@/components/agritech-hackathon/icon-pill-list"
import { SplitHeading } from "@/components/agritech-hackathon/split-heading"

const rulesAndConduct = [
  "Code must be developed after the official kick-off (no full pre-built projects)",
  "Use of open-source libraries and APIs is allowed (must be declared)",
  "All prototypes must be safe, legal, and ethical",
  "Respect for diversity and inclusion is mandatory",
  "Decisions of judges are final",
]

export function RulesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#DEF5E2]">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <SplitHeading
          parts={[
            { text: "Rules &", className: "text-agri-forest" },
            { text: "Code of Conduct", className: "text-[#4EAC63]" },
          ]}
          className="mb-6"
        />

        <IconPillList
          items={rulesAndConduct}
          iconSrc="/red-flower.png"
          containerClassName="max-w-3xl"
          pillClassName="bg-[#f5d0cc] px-4 py-2 text-xs sm:text-sm font-medium text-agri-forest"
        />
      </div>
    </section>
  )
}
