type AgritechStatCardProps = {
  kicker: string
  value: string
  label: string
}

export function AgritechStatCard({ kicker, value, label }: AgritechStatCardProps) {
  return (
      <div className="text-center flex flex-col border-t-8 border-agri-green  bg-agri-hero px-6 py-5 shadow-sm">
      <div className="mt-4 space-y-2">
              <p className="text-xl font-semibold text-agri-forest bg-white inline">{kicker}</p>
        <p className="text-2xl font-semibold text-agri-green">{value}</p>
        <p className="text-sm font-semibold text-agri-forest">{label}</p>
      </div>
    </div>
  )
}
