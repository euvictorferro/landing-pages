import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { PillarsSection } from "@/components/pillars-section"
import { ResultsSection } from "@/components/results-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CalendarSection } from "@/components/calendar-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PillarsSection />
      <ResultsSection />
      <DifferentialsSection />
      <HowItWorksSection />
      <CalendarSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
