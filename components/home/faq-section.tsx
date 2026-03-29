import { FaqSection } from "@/components/agritech-hackathon/faq-section"

export function HomeFaqSection() {
  return (
    <FaqSection
      subtitle="Everything you need to know about G-SPARK SUMMIT 1.0"
      faqs={[
        {
          question: "What is G-SPARK SUMMIT 1.0?",
          answer:
            "Nigeria's premier tech summit bringing 2,000+ innovators, students, founders, and industry leaders together to showcase talent and scale African tech impact.",
        },
        {
          question: "When and where does it take place?",
          answer:
            "Saturday, 25 April 2026 at the Ceremonial Building, FUNAAB, Abeokuta.",
        },
        {
          question: "Who should attend?",
          answer:
            "Students, developers, designers, entrepreneurs, investors, and anyone passionate about building or supporting African technology and innovation.",
        },
        {
          question: "What can I expect at the summit?",
          answer:
            "Keynotes, panel sessions, hackathon showcases, startup demos, networking, and hands-on learning across Agritech, AI/ML, and broader African tech.",
        },
        {
          question: "How do I register?",
          answer:
            "Use the registration form on this page.",
        },
        {
          question: "How do I become a sponsor or partner?",
          answer:
            "Send your organization details to the G-SPARK team via the email: gsparkabeokuta@gmaail.com",
        },
      ]}
    />
  )
}
