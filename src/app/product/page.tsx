import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HowItWorksSteps } from "@/components/sections/HowItWorksSteps";
import { TechnicalArchitecture } from "@/components/sections/TechnicalArchitecture";
import { OCRShowcase } from "@/components/sections/OCRShowcase";
import { SolutionArchitecture } from "@/components/sections/SolutionArchitecture";
import { CompetitiveAdvantage } from "@/components/sections/CompetitiveAdvantage";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function ProductPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-32 pb-20 bg-soft-gray/30">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-navy mb-4">The Science of Seamless Sync.</h1>
                    <p className="text-xl text-charcoal/60 max-w-2xl leading-relaxed">From 5MP OCR vision to immutable blockchain ledgers, we are bridging the analog-to-digital gap in healthcare.</p>
                </div>
            </div>
            <OCRShowcase />
            <HowItWorksSteps />
            <SolutionArchitecture />
            <TechnicalArchitecture />
            <CompetitiveAdvantage />
            <FooterCTA />
            <Footer />
        </main>
    );
}
