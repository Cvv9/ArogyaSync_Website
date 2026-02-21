"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FooterCTA() {
    return (
        <section className="relative bg-navy-dark py-24 overflow-hidden border-t border-white/5">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald rounded-full blur-[200px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-clinical-white mb-8">
                            Transform your hospital <br />
                            <span className="text-emerald">this quarter.</span>
                        </h2>
                        <p className="text-soft-gray/60 text-xl md:text-2xl leading-relaxed mb-12">
                            Join 50+ visionary hospitals already delivering smart care at a fraction of the cost.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Button variant="primary" size="lg" className="h-20 text-lg font-bold group">
                            Schedule Demo
                            <Calendar className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-20 text-lg font-bold border-clinical-white/20 text-clinical-white hover:bg-clinical-white/10 group">
                            Download PDF
                            <Download className="ml-3 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-20 text-lg font-bold border-clinical-white/20 text-clinical-white hover:bg-clinical-white/10 group">
                            Contact Sales
                            <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="primary" size="lg" className="h-20 text-lg font-bold group shadow-none border border-emerald/20">
                            Start Free Pilot
                            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
