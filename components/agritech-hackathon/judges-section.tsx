import { SplitHeading } from "@/components/agritech-hackathon/split-heading"

const defaultJudges = [
  { name: "Gbadebo Bello", role: "AgriTech Venture Lead", color: "#FFCBC8" },
  { name: "Sodiq Akinjobi", role: "Product Innovation Director", color: "#EFB7FF" },
  { name: "Chioma Okeke", role: "AI Research Scientist", color: "#B0D1FF" },
  { name: "Samuel Adeyemi", role: "Startup Growth Partner", color: "#EFB7FF" },
]

type Judge = {
  name: string
  role: string
  color: string
}

type JudgesSectionProps = {
  judges?: Judge[]
  titleParts?: { text: string; className: string }[]
  sectionId?: string
  showComingSoon?: boolean
  comingSoonText?: string
}

export function JudgesSection({
  judges = defaultJudges,
  titleParts = [
    { text: "Our", className: "text-agri-forest" },
    { text: "Judges", className: "text-agri-green" },
  ],
  sectionId,
  showComingSoon = false,
  comingSoonText = "Lineup coming soon.",
}: JudgesSectionProps) {
  return (
    <section id={sectionId} className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAF6]">
      <div className="max-w-6xl mx-auto">
        <SplitHeading parts={titleParts} />

        {showComingSoon ? (
          <div className="mt-10 rounded-3xl border border-agri-forest/10 bg-white px-6 py-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-agri-forest">{comingSoonText}</p>
            <p className="mt-2 text-sm text-agri-forest/70">We will announce the full lineup soon.</p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-0">
            {judges.map((judge) => (
              <div
                key={judge.name}
                className="p-6 flex flex-col items-center text-center"
                style={{ backgroundColor: judge.color }}
              >
                <span className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-agri-forest">
                  {judge.name}
                </span>
                <img
                  src="/person.png"
                  alt=""
                  className="mt-4 h-24 w-24 object-contain"
                  aria-hidden="true"
                />
                <p className="mt-3 text-sm font-medium text-agri-forest">{judge.role}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
