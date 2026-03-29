import { MapPin } from "lucide-react"
import { RegisterButton } from "@/components/agritech-hackathon/register-button"

type HeroSectionProps = {
  badgeText?: string
  titleAccent?: string
  titleBase?: string
  themeLabel?: string
  themeText?: string
  dateText?: string
  locationText?: string
  registerLabel?: string
  registerHref?: string
  themeImage?: string
}

export function HeroSection({
  badgeText = "Hackathon 2026",
  titleAccent = "Agritech Hackathon",
  titleBase = "Guidelines",
  themeLabel = "Theme:",
  themeText = "Innovative Technology Solutions for Sustainable Agriculture and Food Security in Africa",
  dateText = "SAT. 25TH APRIL'26",
  locationText = "FUNAAB Ceremonial Building",
  registerLabel,
  registerHref,
  themeImage = "/flower.png"
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 px-4 sm:pt-28 sm:pb-16 sm:px-6 lg:px-8 bg-agri-hero">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none bg-[#f2b4b2] mask-[url('/bg-pattern.svg')] mask-size-[90vmin_90vmin] mask-center mask-no-repeat [-webkit-mask-image:url('/bg-pattern.svg')] [-webkit-mask-size:90vmin_90vmin] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-agri-green/30 bg-white/70 px-4 py-2 text-sm font-semibold text-agri-green">
        <span
          className="h-4 w-4 bg-red-500 mask-[url('/bg-pattern.svg')] mask-center mask-no-repeat mask-contain [-webkit-mask-image:url('/bg-pattern.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
          aria-hidden="true"
        />
          <span>{badgeText}</span>
          <span
            className="h-4 w-4 bg-red-500 mask-[url('/bg-pattern.svg')] mask-center mask-no-repeat mask-contain [-webkit-mask-image:url('/bg-pattern.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
            aria-hidden="true"
          />
        </div>

        <div className="mt-6 space-y-5 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-agri-green">{titleAccent}</span>{" "}
            <span className="text-agri-forest">{titleBase}</span>
          </h1>
          {themeImage  && <img src={themeImage} alt="" className="h-10 w-10" aria-hidden="true" />}
          <div className="space-y-2 max-w-2xl">
            <p className="text-base sm:text-lg font-medium text-agri-green">{themeLabel}</p>
            <p className="text-base sm:text-lg font-medium text-agri-forest">
              {themeText}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="text-center">
            <p className="text-sm font-semibold text-agri-green">{dateText}</p>
            <div className="mt-2 flex items-center justify-center gap-2 text-agri-forest">
              <MapPin className="h-4 w-4" />
              <span className="text-base font-bold">{locationText}</span>
            </div>
          </div>
          <RegisterButton label={registerLabel} href={registerHref} />
        </div>
      </div>
    </section>
  )
}
