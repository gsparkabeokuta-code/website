import { IconPillList } from "@/components/agritech-hackathon/icon-pill-list"
import { SplitHeading } from "@/components/agritech-hackathon/split-heading"

const defaultRulesAndConduct = [
  "Code must be developed after the official kick-off (no full pre-built projects)",
  "Use of open-source libraries and APIs is allowed (must be declared)",
  "All prototypes must be safe, legal, and ethical",
  "Respect for diversity and inclusion is mandatory",
  "Decisions of judges are final",
]

type RulesSectionProps = {
  rules?: string[]
  iconSrc?: string
  pillClassName?: string
}

export function RulesSection({
  rules = defaultRulesAndConduct,
  iconSrc = "/red-flower.png",
  pillClassName = "bg-[#f5d0cc] px-4 py-2 text-xs sm:text-sm font-medium text-agri-forest",
}: RulesSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF6F5]">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <SplitHeading
          parts={[
            { text: "Rules &", className: "text-agri-forest" },
            { text: "Code of Conduct", className: "text-[#D7453D]" },
          ]}
          className="mb-6"
        />

        <IconPillList items={rules} iconSrc={iconSrc} containerClassName="max-w-3xl" pillClassName={pillClassName} />
      </div>
    </section>
  )
}
