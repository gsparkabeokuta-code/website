import { IconPillList } from "@/components/agritech-hackathon/icon-pill-list"

const defaultFocusStatements = [
  "Precision Farming & Smart Irrigation",
  "Crop Disease Detection & Pest Management (AI/computer vision)",
  "Soil Health Monitoring & Fertility Recommendation Systems",
  "Farm-to-Market Logistics & Supply Chain Optimization",
  "Climate-Resilient Agriculture & Weather Forecasting for Farmers",
  "Financial Inclusion for Smallholder Farmers (credit scoring, insurance, payments)",
  "Post-Harvest Loss Reduction & Storage Solutions",
  "Livestock Health Monitoring & Management",
  "Mechanization & Robotics for Smallholder Farms",
  "Sustainable Aquaculture & Fisheries Tech",
  "Market Access Platforms for Farmers (e-commerce, pricing intelligence)",
  "Carbon Credit & Regenerative Agriculture Tracking",
]

type FocusAreasSectionProps = {
  titleLines?: string[]
  subtitle?: string
  items?: string[]
  iconSrc?: string
  pillClassName?: string
}

export function FocusAreasSection({
  titleLines = ["Focus Areas & Problem", "Statements"],
  subtitle = "Teams must address at least one of the following areas:",
  items = defaultFocusStatements,
  iconSrc = "/apple.png",
  pillClassName = "bg-white/15 px-4 py-2 text-xs sm:text-sm font-medium text-agri-mint",
}: FocusAreasSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-agri-forest flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-agri-mint">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="text-center mt-3 text-sm sm:text-base text-agri-mint/80">{subtitle}</p>
          
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
