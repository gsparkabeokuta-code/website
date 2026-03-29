import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { EligibilitySection } from "@/components/agritech-hackathon/eligibility-section"
import { FaqSection } from "@/components/agritech-hackathon/faq-section"
import { FocusAreasSection } from "@/components/agritech-hackathon/focus-areas-section"
import { HeroSection } from "@/components/agritech-hackathon/hero-section"
import { JudgingCriteriaSection } from "@/components/agritech-hackathon/judging-criteria-section"
import { JudgesSection } from "@/components/agritech-hackathon/judges-section"
import { MissionSection } from "@/components/agritech-hackathon/mission-section"
import { PrizesSection } from "@/components/agritech-hackathon/prizes-section"
import { RulesSection } from "@/components/agritech-hackathon/rules-section"
import { SubmissionRequirementsSection } from "@/components/agritech-hackathon/submission-requirements-section"
import { TimelineSection } from "@/components/agritech-hackathon/timeline-section"
import { SectionDivider } from "@/components/section-divider"

export default function AgritechHackathonPage() {
  return (
    <main className="w-full text-[#101613] bg-[#F5F7F2] bg-[radial-gradient(circle_at_top,rgba(31,174,99,0.08),transparent_60%)]">
      <Header />
      <HeroSection />
      <SectionDivider tone="green" />
      <MissionSection stats={
        [
          { kicker: "1.", value: "1M", label: "Total Prize Money" },
          { kicker: "2.", value: "5 Members", label: "Max Team Size" },
          { kicker: "3.", value: "4 Weeks", label: "Building Phase" },
        ]

      } />
      <SectionDivider tone="red" />
      <EligibilitySection />
      <SectionDivider tone="green" />
      <FocusAreasSection />
      <SectionDivider tone="green" />
      <TimelineSection />
      <SectionDivider tone="green" />
      <PrizesSection />
      <SectionDivider tone="green" />
      <SubmissionRequirementsSection />
      <SectionDivider tone="green" />
      <JudgingCriteriaSection />
      <SectionDivider tone="red" />
      <JudgesSection showComingSoon comingSoonText="Judges lineup coming soon." />
      <SectionDivider tone="green" />
      <RulesSection />
      <SectionDivider tone="red" />
      <FaqSection />
      <Footer />
    </main>
  )
}
