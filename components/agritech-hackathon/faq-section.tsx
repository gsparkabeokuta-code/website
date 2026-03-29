"use client"

import { useState } from "react"
import { ArrowDown } from "lucide-react"
import { CornerPattern } from "@/components/agritech-hackathon/corner-pattern"
import { SplitHeading } from "@/components/agritech-hackathon/split-heading"

const defaultFaqs = [
  {
    question: "What is Agritech Hackathon?",
    answer:
      "A month-long innovation sprint where teams build agritech solutions and pitch live at G-SPARK SUMMIT 1.0.",
  },
  {
    question: "Who can participate?",
    answer:
      "Students, developers, designers, and agritech enthusiasts. Teams can have up to five members, and solo builders are welcome.",
  },
  {
    question: "What are the key dates?",
    answer:
      "Registration runs in February, building happens in March, submissions are in early April, and the finale is on 25 April 2026.",
  },
  {
    question: "What should we submit?",
    answer:
      "A public GitHub repo, a 3-minute demo video, pitch deck (max 12 slides), and a one-page executive summary.",
  },
  {
    question: "Is the hackathon virtual or in-person?",
    answer:
      "The build phase is remote. The grand finale and live pitch take place in Abeokuta on 25 April 2026.",
  },
  {
    question: "How do we register and get support?",
    answer:
      "Register via the official form to access the hackathon community hub. For help, message +2348144875105.",
  },
]

type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  faqs?: FaqItem[]
  subtitle?: string
}

export function FaqSection({
  faqs = defaultFaqs,
  subtitle = "Everything you need to know about Agritech Hackathon",
}: FaqSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-agri-hero">
      <CornerPattern />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SplitHeading
          parts={[
            { text: "Frequently", className: "text-agri-forest" },
            { text: "Asked", className: "text-agri-green" },
            { text: "Questions", className: "text-agri-forest" },
          ]}
        />
        <p className="mt-3 text-center text-base text-agri-forest/80">{subtitle}</p>

        <div className="mt-8 rounded-3xl bg-[#D7453D1F] p-4 sm:p-6 md:p-8">
          <div className="flex flex-col gap-4">
            {faqs.map((item, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-2xl bg-agri-hero shadow-sm transition-all duration-300 p-3 ${
                    isOpen ? "ring-2 ring-agri-green/60" : "ring-1 ring-agri-forest/15"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className={`w-full rounded-2xl sm:rounded-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 text-left transition-colors duration-300 ${
                      isOpen ? "bg-agri-green text-white" : "bg-transparent text-agri-forest"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold">
                      {index + 1}. {item.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full bg-agri-forest transition-transform duration-300 sm:ml-2 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ArrowDown className="h-4 w-4 text-white" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-5">
                      <p className="text-base text-agri-forest/80 py-5">{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
