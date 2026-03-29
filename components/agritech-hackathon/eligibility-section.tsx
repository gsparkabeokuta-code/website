import { CornerPattern } from "@/components/agritech-hackathon/corner-pattern"

import { RegisterButton } from "@/components/agritech-hackathon/register-button"

import { SplitHeading } from "@/components/agritech-hackathon/split-heading"

const defaultEligibilityItems = [
  "Open to individuals and teams (max 5 members per team)",
  "Non-students (professionals, farmers, developers) are welcome in mixed teams",
  "Open to individuals and teams (max 5 members per team)",
  
  "Participants under 18 require parental/guardian consent",
  "At least one team member must be a registered student (undergraduate or postgraduate) from any recognized tertiary institution in Africa",
  "No restriction on nationality, but priority consideration for African residents",
]

type EligibilitySectionProps = {
  items?: string[]
  registerLabel?: string
  registerHref?: string
}

export function EligibilitySection({
  items = defaultEligibilityItems,
  registerLabel,
  registerHref,
}: EligibilitySectionProps) {
  return (
    <section className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center bg-[#F8FAF6]">
      <CornerPattern />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SplitHeading
          parts={[
            { text: "Participant", className: "text-agri-forest" },
            { text: "Eligibility", className: "text-agri-green" },
          ]}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="text-left font-bold border border-white/60 bg-agri-hero px-6 py-5 text-sm text-agri-forest shadow-[inset_4px_0_0_0_#FFFFFF] border-l-8 border-l-agri-green"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <RegisterButton label={registerLabel} href={registerHref} />
        </div>
      </div>
    </section>
  )
}
