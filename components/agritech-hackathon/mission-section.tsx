import { AgritechStatCard } from "@/components/agritech-stat-card"

type MissionStat = {
  kicker: string
  value: string
  label: string
}

type MissionSectionProps = {
  missionText?: string
  stats?: MissionStat[]
  bgColor?: string
  image?: string
}

const defaultMissionText =
  "To develop functional prototypes, apps, AI/ML models, IoT devices, robotics, or data-driven solutions that solve real-world problems faced by African farmers, agribusinesses, and the agricultural value chain."

const defaultStats: MissionStat[] = [
  { kicker: "1.", value: "₦3.2M", label: "Total Prize Money" },
  { kicker: "2.", value: "4 Authors", label: "Max Team Size" },
  { kicker: "3.", value: "7 Weeks", label: "Building Phase" },
]

export function MissionSection({ missionText = defaultMissionText, stats = defaultStats, bgColor = "#FFF6F5", image ="/apple.png" }: MissionSectionProps) {
  return (
    <section className={`bg-[${bgColor}] w-full`}>
      <div className="space-y-8">
        <div className="relative overflow-hidden px-6 py-12 sm:px-12 sm:py-14">
          {/* <img src="/flower-2.png" alt="" className="absolute left-4 top-4 h-10 w-10" aria-hidden="true" />
          <img src="/flower-2.png" alt="" className="absolute right-4 top-4 h-10 w-10" aria-hidden="true" />
          <img src="/flower.png" alt="" className="absolute bottom-4 left-4 h-10 w-10" aria-hidden="true" />
          <img src="/flower.png" alt="" className="absolute bottom-4 right-4 h-10 w-10" aria-hidden="true" /> */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <img src={image} alt="" className="h-14 w-14" aria-hidden="true" />
            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed sm:leading-8 font-medium text-agri-forest">
              {missionText}
            </p>
          </div>
        </div>
            {
              stats.length !== 0 && (
            <div className="bg-white px-6 py-8 shadow-sm">
              <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
                {stats.map((stat) => (
                  <AgritechStatCard key={stat.kicker} kicker={stat.kicker} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
              )
            }
      </div>
    </section>
  )
}
