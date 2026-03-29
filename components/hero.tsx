"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.02)_1px,transparent_1px)]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              <span>Nigeria's Premier Tech Summit</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-balance leading-tight">
              Ignite Africa's Innovation Future
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Join 2,000+ innovators, students, and industry leaders at G-SPARK SUMMIT 1.0. Showcasing talents, scaling
              impact across Agritech, AI/ML, and African tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center gap-2 text-foreground">
                <Calendar size={18} className="text-primary" />
                <span className="font-medium">Saturday, 25 April 2026</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin size={18} className="text-primary" />
                <span className="font-medium">FUNAAB, Abeokuta</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Register Now
                <ArrowRight size={18} />
              </Button>
             
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ Early bird pricing available • ✓ 40% transport subsidy • ✓ VIP speaker access
            </p>
          </div>

          {/* Right Visual - Event Stats */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-border p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Expected Attendees</p>
                    <p className="text-3xl font-bold text-foreground">2,000+</p>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Prize Pool</p>
                    <p className="text-3xl font-bold text-foreground">₦4M+</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4 border border-border">
                    <p className="text-sm text-muted-foreground">Tech Partners</p>
                    <p className="text-2xl font-bold text-foreground">25+</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4 border border-border">
                    <p className="text-sm text-muted-foreground">Keynote Speakers</p>
                    <p className="text-2xl font-bold text-foreground">10+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
