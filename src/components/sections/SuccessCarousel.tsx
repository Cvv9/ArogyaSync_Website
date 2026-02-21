"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "ArogyaSync reduced documentation time by 4 hours daily while improving monitoring accuracy across our entire ICU.",
        author: "Dr. Sandeep Mehta",
        role: "Head of Critical Care",
        hospital: "Apex Multispeciality Hospital",
        location: "Patna",
        metrics: "85% cost savings • 6-month ROI • 99.8% accuracy",
        color: "bg-navy-dark"
    },
    {
        quote: "The retrofit was seamless. Within 5 minutes, our 10-year-old monitors were feeding real-time data to our centralized dashboard.",
        author: "Varun Sharma",
        role: "Chief Technology Officer",
        hospital: "City Heart Institute",
        location: "Indore",
        metrics: "Zero downtime • Cloud-enabled • 10x cheaper",
        color: "bg-emerald"
    }
];

export function SuccessCarousel() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-navy-dark overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-16">
                    <div>
                        <h2 className="text-emerald font-mono text-sm font-bold uppercase tracking-widest mb-4">
                            Customer Success
                        </h2>
                        <h3 className="text-4xl font-display font-bold text-clinical-white">
                            Trusted by leading clinicians.
                        </h3>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full border border-soft-gray/20 flex items-center justify-center text-clinical-white hover:bg-clinical-white/10 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full border border-soft-gray/20 flex items-center justify-center text-clinical-white hover:bg-clinical-white/10 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="relative h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <div className="space-y-8">
                                <Quote className="w-12 h-12 text-emerald opacity-50" />
                                <p className="text-3xl md:text-4xl font-display font-medium text-clinical-white leading-tight italic">
                                    &quot;{testimonials[current].quote}&quot;
                                </p>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xl font-bold text-clinical-white">{testimonials[current].author}</span>
                                    <span className="text-emerald font-medium">{testimonials[current].role} | {testimonials[current].hospital}</span>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[4/3] rounded-[40px] bg-navy-dark/40 overflow-hidden border border-soft-gray/10 relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-60" />
                                    <div className="absolute bottom-10 left-10 right-10 p-8 bg-clinical-white/5 backdrop-blur-xl border border-clinical-white/10 rounded-3xl">
                                        <span className="text-[10px] font-bold text-emerald uppercase tracking-widest block mb-4">Verification Metrics</span>
                                        <p className="text-clinical-white font-mono text-sm font-semibold opacity-80 uppercase leading-relaxed">
                                            {testimonials[current].metrics}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
