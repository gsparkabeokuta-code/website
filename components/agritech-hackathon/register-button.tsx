import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { GDG_COMMUNITY_REGISTRATION_URL } from "@/lib/links"

type RegisterButtonProps = {
  className?: string
  label?: string
  href?: string
}

export function RegisterButton({
  className,
  label = "Register Now",
  href = GDG_COMMUNITY_REGISTRATION_URL,
}: RegisterButtonProps) {
  const isExternal = href.startsWith("http")
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border-2 border-agri-green px-5 py-2 text-sm font-semibold text-agri-forest transition-colors hover:bg-white/80",
        className,
      )}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  )
}
