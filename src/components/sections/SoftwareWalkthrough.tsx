"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function SoftwareWalkthrough() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-emerald font-mono text-sm font-bold uppercase tracking-widest mb-4">Platform Walkthrough</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-navy-dark mb-6">Real-Time Validation & Connectivity</h3>
                    <p className="text-navy-dark/60 text-lg">Watch how ArogyaSync translates visual data into actionable medical insights across mobile and web platforms.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="aspect-video bg-navy-dark rounded-[40px] overflow-hidden border border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] flex items-center justify-center group cursor-pointer">
                        <div className="w-20 h-20 bg-emerald rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                            <Play className="text-white fill-current w-8 h-8 ml-1" />
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                            <div className="text-left">
                                <span className="text-emerald font-mono text-xs font-bold uppercase tracking-widest block mb-2">Live Demo</span>
                                <span className="text-white font-display font-bold text-xl">Platform Walkthrough Video</span>
                            </div>
                            <span className="text-white/40 font-mono text-sm">03:45</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
