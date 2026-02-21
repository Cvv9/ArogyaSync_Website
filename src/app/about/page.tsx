import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TeamSection } from "@/components/sections/TeamSection";
import { TeamAdvisory } from "@/components/sections/TeamAdvisory";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-32 pb-20 bg-navy text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-teal font-mono text-sm font-bold uppercase tracking-widest mb-4">Our Mission</h2>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 max-w-4xl">Building the future of affordable, connected healthcare for the next billion patients.</h1>
                    <p className="text-xl text-soft-gray/40 max-w-2xl leading-relaxed">We believe that advanced monitoring shouldn't be a luxury. By retrofitting existing infrastructure, we democratize clinical data and empower hospitals everywhere.</p>
                </div>
            </div>
            <TeamSection />
            <TeamAdvisory />
            <FooterCTA />
            <Footer />
        </main>
    );
}
