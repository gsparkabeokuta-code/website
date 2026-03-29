import { IconPillList } from "@/components/agritech-hackathon/icon-pill-list"
import { SplitHeading } from "@/components/agritech-hackathon/split-heading"

const judgingCriteria = [
  "Problem-Solution Fit & Real-World Impact",
  "Innovation & Creativity",
  "Technical Implementation & Functionality",
  "Scalability & Business Viability",
  "Design, UX & Accessibility",
  "Pitch Quality & Team Presentation",
]

export function JudgingCriteriaSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#DEF5E2]">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <SplitHeading
          parts={[
            { text: "Judging", className: "text-agri-forest" },
            { text: "Criteria" },
          ]}
          className="text-[#4EAC63] mb-6"
        />

        <IconPillList
          items={judgingCriteria}
          iconSrc="/red-flower.png"
          containerClassName="max-w-3xl"
          pillClassName="bg-[#f5d0cc] px-4 py-2 text-xs sm:text-sm font-medium text-agri-forest"
        />
      </div>
    </section>
  )
}
