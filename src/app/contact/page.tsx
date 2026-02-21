import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingAndContact } from "@/components/sections/PricingAndContact";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-32 pb-20 bg-soft-gray/30">
                <div className="container mx-auto px-6">
                    <h2 className="text-teal font-mono text-sm font-bold uppercase tracking-widest mb-4">Pricing</h2>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-navy mb-4">Smart Care, <br />Simple Investment.</h1>
                    <p className="text-xl text-charcoal/60 max-w-2xl leading-relaxed">Choose the plan that fits your facility's scale. Transparent pricing with no hidden infrastructure costs.</p>
                </div>
            </div>
            <PricingAndContact />
            <FooterCTA />
            <Footer />
        </main>
    );
}
