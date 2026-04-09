import { ArrowUpRight, Facebook, Instagram, Linkedin, Music2, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { GDG_COMMUNITY_REGISTRATION_URL } from "@/lib/links"

type FooterProps = {
  className?: string
  ctaClassName?: string
  iconClassName?: string
}

export function Footer({ className, ctaClassName, iconClassName }: FooterProps) {
  const social = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/g-spark/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585572510965", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/gspark_abeokuta", label: "X" },
    { icon: Instagram, href: "https://www.instagram.com/gsparksummit?igsh=dmRzN3dhNzB0NWQx", label: "Instagram" },
    { icon: Music2, href: "https://www.tiktok.com/@gspark518?_r=1&_t=ZS-93pRe8hWt09", label: "TikTok" },
  ]

  return (
    <footer className={cn("bg-agri-forest text-[#DFFFE6]", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold">G-SPARK</h2>
            <a
              href={GDG_COMMUNITY_REGISTRATION_URL}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full border-2 border-agri-green px-5 py-2 text-sm font-semibold text-agri-green transition-colors hover:bg-white/80",
                ctaClassName
              )}
            >
              Register Now
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">SUMMIT 1.0</h3>
            <p className="text-sm sm:text-base text-[#DFFFE6]/80 my-5">
              Showcasing talents, scaling impact across African innovation.
            </p>
          </div>

          <div className="h-px w-full bg-[#DFFFE6]/20" />

          <div className="flex flex-col gap-4 md:flex-row mt-5 md:items-center md:justify-between">
            <p className="text-sm text-[#DFFFE6]/70">
              © 2026 G-SPARK SUMMIT 1.0. Organized by GDG on Campus FUNAAB & Partners.
            </p>
            <div className="flex items-center gap-4">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={cn("text-[#DFFFE6]/70 hover:text-[#DFFFE6] transition-colors", iconClassName)}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
