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

const missionStats = [
  { kicker: "1.", value: "₦1M", label: "Total Prize Money" },
  { kicker: "2.", value: "4 Members", label: "Max Team Size" },
  { kicker: "3.", value: "6 Weeks", label: "Research Sprint" },
]

const eligibilityItems = [
  "Lead author must be a registered undergraduate or postgraduate student in any African tertiary institution.",
  "Previously published work is NOT allowed (except arXivpreprints clearly marked as such)",
  "Co-authors may include supervisors, other students, or early-career researchers",
  "Research must have been conducted primarily in 2024–2026.",
  "Maximum 4 authors per paper",
]

const focusAreas = [
  "AI for Agriculture & Food Security (crop yield prediction, disease detection, etc.)",
  "Local Language NLP & African Language Models",
  "Ethical AI, Fairness & Bias Mitigation in African Contexts",
  "Climate Change Modelling & Adaptation",
  "AI for Healthcare in Resource-Constrained Settings",
  "Computer Vision for Environmental Monitoring",
  "Reinforcement Learning for Resource Optimization",
  "AI-Powered Education Tools for Rural/African Classrooms",
  "Federated Learning & Privacy-Preserving ML",
  "Edge AI / TinyML for Low-Resource Devices",
]

const timelineItems = [
  { date: "16 Feb 2026", title: "Registration opens" },
  {
    date: "Feb 25 - March 03, 2026", title: "Research class" },
  {
    date: "Feb 28 - April 5, 2026", title: "Call for papers" },
  {
    date: "April 20, 2026", title: "Decisions released" },
  { date: "25 April, 2026", title: "Conference" },
  { date: "5 May, 2026", title: "Camera ready version" },
]

const prizeHighlights = [
  { position: "1st", emoji: "🥇", amount: "₦500, 000" },
  { position: "2nd", emoji: "🥈", amount: "₦300, 000" },
  { position: "3rd", emoji: "🥉", amount: "₦200, 000" },
]

const prizeNotes = [
  {
    title: "4th-8th:",
    text: "Mentorship, and publication support.",
  },
  {
    title: "Special Awards:",
    text: "Best Responsible AI, Best Open Dataset, Most Deployable Research.",
  },
]

const submissionItems = [
  "Research paper (PDF, 6–10 pages)",
  "Format: NeurIPS/ICLR/African AI conference template (LaTeX preferred)",
  "Must include: Abstract, Introduction, Related Work, Methodology, Experiments/Results, Discussion, Conclusion, References",
  "2-minute video explainer (YouTube unlisted link)",
  "Source code + dataset details (GitHub public repo)",
  "Signed declaration of originality and student status",
  "Short bios of all authors (max 100 words each)",
]

const judgingCriteria = [
  "Research rigor and methodology",
  "Novelty and contribution",
  "Dataset quality and documentation",
  "Reproducibility and evaluation",
  "Responsible AI and ethics",
  "Potential impact and deployment readiness",
]

const judges = [
  { name: "Amina Yusuf", role: "ML Research Lead", color: "#FFCBC8" },
  { name: "Tunde Adebayo", role: "Responsible AI Advisor", color: "#EFB7FF" },
  { name: "Lillian Eze", role: "Data Science Manager", color: "#B0D1FF" },
  { name: "Farouk Idris", role: "Applied AI Engineer", color: "#EFB7FF" },
]

const rules = [
  "All code and writing must be original",
  "Use of pre-trained models is allowed if properly cited and fine-tuning is demonstrated",
  "Plagiarism = immediate disqualification",
  "Judges’ decisions are final",
]

const faqs = [
  {
    question: "What is the AI/ML Research track?",
    answer:
      "A research-focused sprint where teams build applied ML systems and research artifacts for real-world African challenges.",
  },
  {
    question: "Who can participate?",
    answer:
      "Students, researchers, engineers, and designers. Teams can have up to four members, and solo builders are welcome.",
  },
  {
    question: "What should we submit?",
    answer:
      "A public GitHub repo, a 6-8 page report, model and dataset cards, and a 5-minute demo video.",
  },
  {
    question: "Is the research sprint virtual or in-person?",
    answer:
      "The sprint is remote, while the demo day and showcase take place in Abeokuta on 25 April 2026.",
  },
  {
    question: "How are teams evaluated?",
    answer:
      "We look at research rigor, novelty, documentation, responsible AI, and deployment readiness.",
  },
  {
    question: "How do we register and get support?",
    answer:
      "Register via the official form to access the research community hub. For help, message +2348144875105.",
  },
]

export default function AiMlResearchPage() {
  return (
    <main className="ai-ml-theme w-full text-[#101613] bg-[#F5F7F2] bg-[radial-gradient(circle_at_top,rgba(215,69,61,0.08),transparent_60%)]">
      <Header />
      <HeroSection
        badgeText="Research Track 2026"
              titleAccent="AI/ML Research Challenge"
        titleBase="Guidelines"
        themeText="Advancing Artificial Intelligence and Machine Learning for Sustainable Development in Africa"
        dateText="SAT. 25TH April'26"
        themeImage= "/robot.png"
        registerHref="https://form.finalform.so/forms/0DNzsEHe"
      />
      <SectionDivider tone="red" />
      <MissionSection
              missionText="To recognize and reward outstanding student-led or early-career research in AI/ML that demonstrates strong potential to solve pressing African challenges, particularly (but not limited to) agriculture, healthcare, education, climate, financial inclusion, and local language processing."
        stats={missionStats}
        bgColor="#EBFFEE"
              image="/robot.png"
      />
                  <SectionDivider tone="green" />
      <EligibilitySection items={eligibilityItems} />
                  <SectionDivider tone="green" />
      <FocusAreasSection
              titleLines={["Priority Research Tracks", ""]}
              subtitle="Submissions are strongly encouraged in the following areas (others will still be considered):"
        items={focusAreas}
        iconSrc=""
      />
      <SectionDivider tone="red" />
      <TimelineSection items={timelineItems} />
      <SectionDivider tone="green" />
      <PrizesSection highlights={prizeHighlights} notes={prizeNotes} />
      <SectionDivider tone="red" />
      <SubmissionRequirementsSection
        subtitle="Every team must submit via the official research portal:"
        items={submissionItems}
        iconSrc=""
      />
      <SectionDivider tone="red" />
      <JudgingCriteriaSection criteria={judgingCriteria} bgColor="#EBFFEE" criteriaClassName="text-[#4EAC63]" />
      <SectionDivider tone="green" />
      <JudgesSection showComingSoon comingSoonText="Judges lineup coming soon." />
      <SectionDivider tone="green" />
      <RulesSection rules={rules} />
      <SectionDivider tone="red" />
      <FaqSection faqs={faqs} subtitle="Everything you need to know about the AI/ML Research track" />
      <Footer />
    </main>
  )
}
