import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemCards } from "@/components/sections/ProblemCards";
import { OCRShowcase } from "@/components/sections/OCRShowcase";
import { SolutionArchitecture } from "@/components/sections/SolutionArchitecture";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { CompetitiveAdvantage } from "@/components/sections/CompetitiveAdvantage";
import { SuccessCarousel } from "@/components/sections/SuccessCarousel";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { TrustCompliance } from "@/components/sections/TrustCompliance";
import { TeamAdvisory } from "@/components/sections/TeamAdvisory";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemCards />
      <OCRShowcase />
      <SolutionArchitecture />
      <ImpactMetrics />
      <CompetitiveAdvantage />
      <SuccessCarousel />
      <ROICalculator />
      <TrustCompliance />
      <TeamAdvisory />
      <FooterCTA />
    </main>
  );
}
