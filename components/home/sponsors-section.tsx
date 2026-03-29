const sponsors = [
  { name: "Vertex Labs", initials: "VL" },
  { name: "Greenfield Capital", initials: "GC" },
  { name: "Nimbus Cloud", initials: "NC" },
  { name: "PulsePay", initials: "PP" },
]

const partners = [
  { name: "FUNAAB", initials: "FA" },
  { name: "TechUplift", initials: "TU" },
  { name: "AgriBridge", initials: "AB" },
  { name: "AI4Africa", initials: "AA" },
]

export function HomeSponsorsSection() {
  return (
    <section id="sponsors" className="w-full bg-[#2A3D34]">
      <div className="px-4 py-10 sm:px-8 sm:py-12 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <h2 className="lg:text-5xl text-agri-mint leading-tight text-center text-2xl font-extrabold sm:text-4xl">
            Our Partners & Sponsors
          </h2>
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-center text-sm font-semibold text-white/80">Sponsors</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                {sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="flex items-center justify-center rounded-full border border-[#4EAC63] bg-[#DEF5E2] px-4 py-2.5 text-center sm:px-5 sm:py-3"
                  >
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#4EAC63] bg-white text-sm font-bold text-[#2A3D34]">
                      {sponsor.initials}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-center text-sm font-semibold text-white/80">Partners</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center justify-center rounded-full border border-[#D7453D] bg-[#FFE3E2] px-4 py-2.5 text-center sm:px-5 sm:py-3"
                  >
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#D7453D] bg-white text-sm font-bold text-[#2A3D34]">
                      {partner.initials}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
