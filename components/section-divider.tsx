type SectionDividerProps = {
  tone?: "green" | "red"
  className?: string
}

const maskClassName =
  "mask-[url('/bg-pattern.svg')] mask-center mask-no-repeat mask-contain [-webkit-mask-image:url('/bg-pattern.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"

export function SectionDivider({ tone = "green", className }: SectionDividerProps) {
  const backgroundColor = tone === "red" ? "#D7453D" : "#4EAC63"

  const dividerRow = (
    <div className="flex items-center gap-3 pr-5">
      <span className="text-white text-lg sm:text-xl font-extrabold whitespace-nowrap">Hackathon</span>
      <span className={`h-5 w-5 bg-white ${maskClassName}`} aria-hidden="true" />
      <span className="text-transparent text-lg sm:text-xl font-extrabold whitespace-nowrap [-webkit-text-stroke:1.5px_#fff]">
        Hackathon
      </span>
      <span className={`h-5 w-5 bg-white ${maskClassName}`} aria-hidden="true" />
    </div>
  )

  return (
    <div className={`marquee w-full overflow-hidden py-2 ${className ?? ""}`.trim()} style={{ backgroundColor }}>
      <div className="marquee-track">
        <div className="marquee-group">
          {dividerRow}
          {dividerRow}
          {dividerRow}
          {dividerRow}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {dividerRow}
          {dividerRow}
          {dividerRow}
          {dividerRow}
        </div>
      </div>
    </div>
  )
}
