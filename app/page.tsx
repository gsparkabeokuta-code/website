import { Header } from "@/components/header"
import {
  HomeEventHighlightsSection,
  HomeFaqSection,
  HomeHackathonSection,
  HomeHeroSection,
  HomeMissionSection,
  HomeRegistrationSection,
  HomeSpeakersSection,
  HomeSponsorsSection,
} from "@/components/home"
import { SectionDivider } from "@/components/section-divider"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HomeHeroSection />
      <SectionDivider tone="green" />
      <HomeEventHighlightsSection />
      <SectionDivider tone="green" />
      <HomeHackathonSection />
      <SectionDivider tone="red" />
      <HomeSpeakersSection />
      <SectionDivider tone="green" />
      <HomeSponsorsSection />
      <SectionDivider tone="red" />
      <HomeRegistrationSection />
      <SectionDivider tone="green" />
      <HomeFaqSection />
      <Footer />
    </main>
  )
}

