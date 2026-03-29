import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HomeHackathonSection() {
  return (
    <section id="hackathon" className="w-full bg-[#F5F7F2]">
      <div className="px-4 py-10 sm:px-8 sm:py-12 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="lg:text-5xl leading-tight text-center text-2xl font-extrabold text-[#2A3D34] sm:text-4xl">
            G-Spark Hackathon
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="group relative flex flex-col gap-4 sm:gap-5 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E3EDE6] bg-white px-5 py-5 sm:px-6 sm:py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#4EAC63]" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#E9F7EC] text-sm font-semibold text-[#2A3D34]">
                  01
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#2A3D34]">Agritech Hackathon</h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#4EAC63]">Build + Demo</p>
                </div>
              </div>
              <p className="text-sm sm:text-base font-medium text-[#2A3D34] leading-relaxed">
                Build practical solutions for sustainable agriculture and food security across Africa, from
                smart farming tools to data-driven supply chains.
              </p>
              <div>
                <Button asChild className="w-full sm:w-auto bg-[#4EAC63] text-white hover:bg-[#3f9857]">
                  <Link href="/agritech-hackathon">View Agritech Hackathon</Link>
                </Button>
              </div>
            </div>
            <div className="group relative flex flex-col gap-4 sm:gap-5 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E3EDE6] bg-white px-5 py-5 sm:px-6 sm:py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#D7453D]" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#FFE3E2] text-sm font-semibold text-[#2A3D34]">
                  02
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#2A3D34]">AI/ML Research Challenge</h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#D7453D]">Research + Showcase</p>
                </div>
              </div>
              <p className="text-sm sm:text-base font-medium text-[#2A3D34] leading-relaxed">
                Tackle real African challenges with rigorous AI/ML research, responsible innovation, and
                publishable results.
              </p>
              <div>
                <Button asChild className="w-full sm:w-auto bg-[#D7453D] text-white hover:bg-[#c33b33]">
                  <Link href="/ai-ml-research">View AI/ML Research Challenge</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
