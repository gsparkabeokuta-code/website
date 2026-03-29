import { SplitHeading } from "@/components/agritech-hackathon/split-heading"

const defaultTimelineItems = [
  { date: "13 Feb 2026", title: "Registration opens" },
  { date: "28 February 2026", title: "Registration & team formation closes" },
  { date: "1–2 March 2026", title: "Official kick-off" },
  { date: "March 03 – 03 April 2026", title: "Building Phase (4 weeks of remote hacking + weekly reviews)" },
  { date: "04 Apr – 10 Apr", title: "Project Submission Window" },
  { date: "25 Apr", title: "Grand Finale & Live Pitch at G-SPARK SUMMIT 1.0" },
]

type TimelineItem = {
  date: string
  title: string
}

type TimelineSectionProps = {
  items?: TimelineItem[]
}

export function TimelineSection({ items = defaultTimelineItems }: TimelineSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SplitHeading
          parts={[
            { text: "Dates &", className: "text-agri-forest" },
            { text: "Timeline", className: "text-agri-green" },
          ]}
        />

        <div className="relative mt-8">
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-agri-green/40 md:block" />
          <div className="grid gap-6">
            {items.map((item, index) => {
              const isEven = index % 2 === 1
              return (
                <div key={item.title} className="grid items-center md:grid-cols-2">
                  <div className={isEven ? "md:order-2 md:pl-8" : "md:pr-8"}>
                    <div className="bg-agri-hero px-5 py-4 sm:px-6 sm:py-5 shadow-[inset_-4px_0_0_0_var(--agri-green)]">
                      <p className="text-sm font-semibold text-agri-green">{item.date}</p>
                      <p className="mt-2 text-sm font-medium text-agri-forest">{item.title}</p>
                    </div>
                  </div>
                  <div className={isEven ? "md:order-1 md:pr-8" : "md:pl-8"}>
                    <div className="hidden md:flex h-full items-center justify-center" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
