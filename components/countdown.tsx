"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const eventDate = new Date("2026-04-25T09:00:00").getTime()
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isFlipping, setIsFlipping] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference > 0) {
        const newSeconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        if (newSeconds !== timeLeft.seconds) {
          setIsFlipping(true)
          setTimeout(() => setIsFlipping(false), 150)
        }

        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: newSeconds,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [eventDate, timeLeft.seconds])

  const timeBlocks = [
    { value: timeLeft.days, label: "Days", color: "#FFE566" },
    { value: timeLeft.hours, label: "Hours", color: "#A8E6CF" },
    { value: timeLeft.minutes, label: "Minutes", color: "#FFB3BA" },
    { value: timeLeft.seconds, label: "Seconds", color: "#BAFFC9" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div 
          className="absolute w-64 h-64 rounded-full bg-[#1FAE63]/10 blur-3xl"
          style={{
            top: '10%',
            left: '5%',
            animation: 'float1 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full bg-[#E53935]/10 blur-3xl"
          style={{
            top: '60%',
            right: '10%',
            animation: 'float2 10s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-32 h-32 rounded-full bg-[#FFE566]/15 blur-2xl"
          style={{
            top: '30%',
            right: '25%',
            animation: 'float3 6s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-40 h-40 rounded-full bg-[#A8E6CF]/10 blur-2xl"
          style={{
            bottom: '20%',
            left: '15%',
            animation: 'float2 9s ease-in-out infinite reverse',
          }}
        />
        
        {/* Small floating dots */}
        <div 
          className="absolute w-2 h-2 rounded-full bg-[#1FAE63]/40"
          style={{
            top: '20%',
            left: '20%',
            animation: 'floatDot 4s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-3 h-3 rounded-full bg-[#FFE566]/40"
          style={{
            top: '70%',
            left: '70%',
            animation: 'floatDot 5s ease-in-out infinite 1s',
          }}
        />
        <div 
          className="absolute w-2 h-2 rounded-full bg-[#E53935]/40"
          style={{
            top: '40%',
            right: '15%',
            animation: 'floatDot 6s ease-in-out infinite 2s',
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 rounded-full bg-[#A8E6CF]/50"
          style={{
            top: '80%',
            left: '30%',
            animation: 'floatDot 4.5s ease-in-out infinite 0.5s',
          }}
        />
        <div 
          className="absolute w-2 h-2 rounded-full bg-[#FFB3BA]/40"
          style={{
            top: '15%',
            right: '30%',
            animation: 'floatDot 5.5s ease-in-out infinite 1.5s',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Count Every Second Until the Event
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Join us at G-SPARK SUMMIT 1.0
        </p>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="group rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-out relative"
              style={{ backgroundColor: block.color }}
            >
              {/* Number */}
              <span 
                className={`text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 tabular-nums transition-transform duration-150 ${
                  block.label === "Seconds" && isFlipping ? "scale-110" : "scale-100"
                }`}
              >
                {block.value}
              </span>
              
              {/* Label */}
              <span className="text-base md:text-lg font-medium text-gray-700 mt-2 group-hover:text-gray-900 transition-colors duration-200">
                {block.label}
              </span>

              {/* Pulse dot for seconds */}
              {block.label === "Seconds" && (
                <div className="absolute top-3 right-3 w-2 h-2">
                  <span className="absolute inset-0 bg-gray-900/30 rounded-full animate-ping" />
                  <span className="absolute inset-0 bg-gray-900/50 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="group bg-transparent border-2 border-[#FFE566] text-[#FFE566] hover:bg-[#FFE566] hover:text-gray-900 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
          >
            Get Ticket
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
