import { JudgesSection } from "@/components/agritech-hackathon/judges-section"

export function HomeSpeakersSection() {
  return (
    <JudgesSection
      sectionId="speakers"
      titleParts={[
        { text: "Distinguished", className: "text-agri-forest" },
        { text: "Speakers", className: "text-agri-green" },
      ]}
      showComingSoon
      comingSoonText="Speakers lineup coming soon."
    />
  )
}
