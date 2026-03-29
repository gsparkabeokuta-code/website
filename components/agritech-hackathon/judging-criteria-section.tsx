import { IconPillList } from "@/components/agritech-hackathon/icon-pill-list"
import { SplitHeading } from "@/components/agritech-hackathon/split-heading"

const defaultJudgingCriteria = [
  "Problem-Solution Fit & Real-World Impact",
  "Innovation & Creativity",
  "Technical Implementation & Functionality",
  "Scalability & Business Viability",
  "Design, UX & Accessibility",
  "Pitch Quality & Team Presentation",
]

type JudgingCriteriaSectionProps = {
  criteria?: string[]
  iconSrc?: string
  pillClassName?: string
  bgColor?: string
  criteriaClassName?: string
}

export function JudgingCriteriaSection({
  criteria = defaultJudgingCriteria,
  iconSrc = "/red-flower.png",
  pillClassName = "bg-[#f5d0cc] px-4 py-2 text-xs sm:text-sm font-medium text-agri-forest",
  bgColor = "#FFF6F5",
  criteriaClassName,
}: JudgingCriteriaSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <SplitHeading
          parts={[
            { text: "Judging", className: "text-agri-forest" },
            { text: "Criteria", className: criteriaClassName },
          ]}
          className="text-[#D7453D] mb-6"
        />

        <IconPillList items={criteria} iconSrc={iconSrc} containerClassName="max-w-3xl" pillClassName={pillClassName} />
      </div>
    </section>
  )
}
