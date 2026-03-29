import { AgritechStatCard } from "@/components/agritech-stat-card"

export function MissionSection() {
  return (
    <section className="bg-[#DEF5E2] w-full">
      <div className="space-y-8">
        <div className="relative overflow-hidden px-6 py-14 sm:px-12">
          <img src="/flower-2.png" alt="" className="absolute left-4 top-4 h-10 w-10" aria-hidden="true" />
          <img src="/flower-2.png" alt="" className="absolute right-4 top-4 h-10 w-10" aria-hidden="true" />
          <img src="/flower.png" alt="" className="absolute bottom-4 left-4 h-10 w-10" aria-hidden="true" />
          <img src="/flower.png" alt="" className="absolute bottom-4 right-4 h-10 w-10" aria-hidden="true" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <img src="/apple.png" alt="" className="h-14 w-14" aria-hidden="true" />
            <p className="mt-4 max-w-xl leading-10 tracking-widest text-[20px] font-medium text-agri-forest">
              To develop functional prototypes, apps, AI/ML models, IoT devices, robotics, or
              data-driven solutions that solve real-world problems faced by African farmers,
              agribusinesses, and the agricultural value chain.
            </p>
          </div>
        </div>

        <div className="bg-white px-6 py-8 shadow-sm">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <AgritechStatCard kicker="1." value="₦1M" label="Total Prize Money" />
            <AgritechStatCard kicker="2." value="5 Members" label="Max Team Size" />
            <AgritechStatCard kicker="3." value="4 Weeks" label="Building Phase" />
          </div>
        </div>
      </div>
    </section>
  )
}
