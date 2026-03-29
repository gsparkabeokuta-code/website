export function HomeEventHighlightsSection() {
  return (
    <section id="highlights" className="w-full bg-white">
      <div className="px-4 py-10 sm:px-8 sm:py-12 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="text-center text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="text-[#2A3D34]">Event </span>
            <span className="text-[#4EAC63]">Highlights</span>
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col border-t-8 border-[#50C878] bg-[#E8F8F0] px-5 py-5 sm:px-6 sm:py-6 shadow-sm">
              <div className="space-y-3 text-center">
                <p className="text-lg sm:text-xl font-semibold text-[#2A3D34]">1.</p>
                <p className="text-xl sm:text-2xl font-semibold text-[#50C878]">Project Exhibition</p>
                <p className="text-sm sm:text-base font-semibold text-[#2A3D34] leading-relaxed">
                  Showcasing groundbreaking innovation and solutions in Agritech and Research from
                  innovators and researchers.
                </p>
              </div>
            </div>
            <div className="flex flex-col border-t-8 border-[#FF6B6B] bg-[#FFE8E8] px-5 py-5 sm:px-6 sm:py-6 shadow-sm">
              <div className="space-y-3 text-center">
                <p className="text-lg sm:text-xl font-semibold text-[#2A3D34]">2.</p>
                <p className="text-xl sm:text-2xl font-semibold text-[#FF6B6B]">Meet Experts</p>
                <p className="text-sm sm:text-base font-semibold text-[#2A3D34] leading-relaxed">
                  Connect, network, and learn from 2000+ innovators and experts leading in the tech
                  industry.
                </p>
              </div>
            </div>
            <div className="flex flex-col border-t-8 border-[#FFB84D] bg-[#FFF4E6] px-5 py-5 sm:px-6 sm:py-6 shadow-sm">
              <div className="space-y-3 text-center">
                <p className="text-lg sm:text-xl font-semibold text-[#2A3D34]">3.</p>
                <p className="text-xl sm:text-2xl font-semibold text-[#FFB84D]">Rewards & Engagement</p>
                <p className="text-sm sm:text-base font-semibold text-[#2A3D34] leading-relaxed">
                  A large pool of prizes and after event award night to honor excellence in
                  competitors and attendees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
