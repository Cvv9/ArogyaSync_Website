"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FooterCTA() {
    return (
        <footer className="relative bg-navy py-24 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal rounded-full blur-[200px]" />
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
                            <span className="text-teal">this quarter.</span>
                        </h2>
                        <p className="text-soft-gray/60 text-xl md:text-2xl leading-relaxed mb-12">
                            Join 50+ visionary hospitals already delivering smart care at a fraction of the cost.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Button variant="teal" size="lg" className="h-20 text-lg font-bold group">
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
                        <Button variant="gradient" size="lg" className="h-20 text-lg font-bold group shadow-none border border-teal/20">
                            Start Free Pilot
                            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>

                    <div className="pt-20 border-t border-soft-gray/10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col items-start gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-teal rounded-lg" />
                                <span className="text-xl font-display font-bold text-clinical-white">Arogya<span className="text-teal">Sync</span></span>
                            </div>
                            <p className="text-xs text-soft-gray/40 font-medium">© 2026 ArogyaSync. Patent Pending Technology. Made with precision in Patna & Utah.</p>
                        </div>

                        <div className="flex gap-8 text-xs font-bold text-soft-gray/60 uppercase tracking-widest">
                            <a href="#" className="hover:text-teal transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-teal transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-teal transition-colors">Compliance</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
