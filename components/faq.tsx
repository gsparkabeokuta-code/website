"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is G-SPARK SUMMIT?",
    answer: "G-SPARK SUMMIT is Nigeria's premier tech summit bringing together 2,000+ innovators, students, entrepreneurs, and industry leaders. It's a platform to showcase talents, network, and scale impact across Agritech, AI/ML, Fintech, and African tech."
  },
  {
    question: "When and where is the event?",
    answer: "G-SPARK SUMMIT 1.0 will be held on Saturday, April 25, 2026 at the Federal University of Agriculture, Abeokuta (FUNAAB), Ogun State, Nigeria."
  },
  {
    question: "How much does it cost to attend?",
    answer: "We offer different ticket tiers to accommodate everyone. Early bird tickets are available at discounted rates. Students get special pricing. Check our registration page for current pricing and available packages."
  },
  {
    question: "Is there a transport subsidy available?",
    answer: "Yes! We're offering up to 40% transport subsidy for attendees traveling from outside Abeokuta. Details on how to apply for the subsidy will be shared upon registration."
  },
  {
    question: "What can I expect at the summit?",
    answer: "Expect keynote speeches from top tech leaders, hands-on workshops, hackathons with ₦4M+ prize pool, networking sessions, startup pitches, career fair, and much more. It's a full day of learning, connecting, and innovation."
  },
  {
    question: "Who should attend G-SPARK SUMMIT?",
    answer: "The summit is open to tech enthusiasts, students, developers, designers, entrepreneurs, investors, and anyone passionate about technology and innovation in Africa. Whether you're just starting or already a pro, there's something for you."
  },
  {
    question: "Will there be networking opportunities?",
    answer: "Absolutely! Networking is a core part of G-SPARK. We have dedicated networking sessions, a tech exhibition hall, and plenty of opportunities to connect with speakers, sponsors, and fellow attendees."
  },
  {
    question: "How can I become a sponsor or partner?",
    answer: "We welcome partnerships with organizations that share our vision for African tech. Please reach out via our contact page or email us at partnerships@gspark.tech for sponsorship packages and opportunities."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about G-SPARK SUMMIT 1.0
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                bg-background rounded-2xl border overflow-hidden
                transition-all duration-300
                ${openIndex === index ? "border-primary/30 shadow-lg" : "border-border"}
              `}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-300
                  ${openIndex === index ? "max-h-96" : "max-h-0"}
                `}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-8 bg-background rounded-2xl border border-border">
          <p className="text-lg font-medium text-foreground mb-2">Still have questions?</p>
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? Reach out to our team.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  )
}
