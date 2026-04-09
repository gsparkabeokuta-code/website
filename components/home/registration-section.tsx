import { ArrowUpRight, CheckCircle2, Sparkles, Ticket } from "lucide-react"
import { GDG_COMMUNITY_REGISTRATION_URL } from "@/lib/links"

export function HomeRegistrationSection() {
  return (
    <section
      id="register"
      className="relative w-full overflow-hidden bg-[#FCEAE9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-4xl border border-[#E7CFCB] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.08)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative bg-[#2A3D34] px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(229,57,53,0.25),transparent_30%)] opacity-30" />
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90">
                <Sparkles className="h-4 w-4" />
                Registration moved off-site
              </div>

              <div className="space-y-3">
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  Register once. Share a cleaner pass.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                  We no longer ask visitors to fill a long registration form here. Use the official GDG Community event page, then come back to generate a simple ticket image that is easy to save and share.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={GDG_COMMUNITY_REGISTRATION_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1FAE63] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#178F52]"
                >
                  Register on GDG Community
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/ticket"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                >
                  Build your pass
                  <Ticket className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#FFF9F8] px-6 py-10 sm:px-10 sm:py-12">
            <div className="space-y-4">
              <div className="rounded-2xl border border-[#E7CFCB] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E53935]">Step 1</p>
                <p className="mt-2 text-lg font-bold text-[#2A3D34]">Use the official event page</p>
                <p className="mt-1 text-sm leading-6 text-[#5A5A5A]">
                  Complete the community registration once and avoid repeating the same details here.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E7CFCB] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E53935]">Step 2</p>
                <p className="mt-2 text-lg font-bold text-[#2A3D34]">Generate a light ticket</p>
                <p className="mt-1 text-sm leading-6 text-[#5A5A5A]">
                  The ticket page now creates a clean pass with just the essentials, no form overload.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E7CFCB] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E53935]">Step 3</p>
                <p className="mt-2 text-lg font-bold text-[#2A3D34]">Download or share</p>
                <p className="mt-1 text-sm leading-6 text-[#5A5A5A]">
                  Save the image, copy the link, or send the pass to someone else without extra steps.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-[#2A3D34] px-5 py-4 text-white">
                <CheckCircle2 className="h-5 w-5 text-[#1FAE63]" />
                <p className="text-sm leading-6 text-white/80">
                  This section is now a handoff, not a duplicate registration form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}