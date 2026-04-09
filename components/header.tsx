"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { GDG_COMMUNITY_REGISTRATION_URL } from "@/lib/links"

const navLinks = [
  { label: "Highlights", href: "/#highlights" },
  { label: "Hackathon", href: "/#hackathon" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Sponsors", href: "/#sponsors" },
]

type HeaderProps = {
  className?: string
  linkClassName?: string
  buttonClassName?: string
  mobileMenuClassName?: string
}

export function Header({
  className,
  linkClassName,
  buttonClassName,
  mobileMenuClassName,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const baseLinkClassName = "text-sm font-medium text-foreground hover:text-[#1FAE63] transition-colors"
  const baseButtonClassName = "bg-[#1FAE63] hover:bg-[#178F52] text-white"

  return (
    <header
      className={cn(
        "fixed top-0 w-full bg-agri-hero/90 backdrop-blur-md border-b border-white/40 z-50",
        className
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src="/g-spark-logo.png"
            alt="G-SPARK"
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(baseLinkClassName, linkClassName)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild className={cn(baseButtonClassName, buttonClassName)}>
            <a href={GDG_COMMUNITY_REGISTRATION_URL} aria-label="Register for the summit event">
              Register for Event
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className={cn("md:hidden bg-agri-hero/95 border-b border-white/60", mobileMenuClassName)}>
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn("block", baseLinkClassName, linkClassName)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className={cn("w-full", baseButtonClassName, buttonClassName)}>
              <a href={GDG_COMMUNITY_REGISTRATION_URL} aria-label="Register for the summit event" onClick={() => setIsOpen(false)}>
                Register for Event
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
