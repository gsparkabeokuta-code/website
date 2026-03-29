import { IconPillList } from "@/components/agritech-hackathon/icon-pill-list"

const defaultSubmissionItems = [
  "Source code (GitHub public repo link)",
  "Pitch deck (max 12 slides – PDF)",
  "3-minute maximum video demo (YouTube unlisted or Loom)",
  "One-page executive summary",
  "Working prototype (web/mobile app, hardware demo, ML model, etc.)",
]

type SubmissionRequirementsSectionProps = {
  title?: string
  subtitle?: string
  items?: string[]
  iconSrc?: string
  pillClassName?: string
}

export function SubmissionRequirementsSection({
  title = "Submission Requirements",
  subtitle = "Every team must submit via the official hackathon portal:",
  items = defaultSubmissionItems,
  iconSrc = "/apple.png",
  pillClassName = "bg-white/15 px-4 py-2 text-xs sm:text-sm font-medium text-agri-mint",
}: SubmissionRequirementsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-agri-forest">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-agri-mint">
          {title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-agri-mint/80">{subtitle}</p>

        <IconPillList
          items={items}
          iconSrc={iconSrc}
          containerClassName="max-w-3xl"
          pillClassName={pillClassName}
        />
      </div>
    </section>
  )
}
