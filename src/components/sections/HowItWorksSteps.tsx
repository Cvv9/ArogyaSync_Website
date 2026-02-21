"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Cpu, CloudCheck, Smartphone, CheckCircle2 } from "lucide-react";

const steps = [
    {
        icon: Camera,
        title: "Smart Retrofit Device",
        description: "Attach the ArogyaSync device to any legacy monitor. The high-precision 5MP camera is positioned for a perfect view of the screen.",
    },
    {
        icon: Cpu,
        title: "Edge AI Processing",
        description: "TensorFlow Lite models on the device process vitals with < 100ms latency, ensuring no lag in critical care data.",
    },
    {
        icon: CloudCheck,
        title: "Secure Cloud Sync",
        description: "Vitals are encrypted and synced to our HIPAA-compliant AWS cloud infrastructure in real-time.",
    },
    {
        icon: Smartphone,
        title: "Unified Monitoring",
        description: "Access real-time vitals and historical trends from the unified Web & Mobile Dashboards anywhere in the world.",
    },
];

export function HowItWorksSteps() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-teal font-mono text-sm font-bold uppercase tracking-widest mb-4">Implementation</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">Four Steps to Smart Infrastructure.</h3>
                    <p className="text-charcoal/60 text-lg">Our zero-downtime implementation means you can modernize an entire ICU in under an hour.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mb-8 relative z-10">
                                <step.icon className="text-teal w-8 h-8" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal rounded-full flex items-center justify-center text-navy font-black text-xs">
                                    {i + 1}
                                </div>
                            </div>
                            <h4 className="text-xl font-display font-bold text-navy mb-4">{step.title}</h4>
                            <p className="text-charcoal/60 leading-relaxed text-sm">{step.description}</p>
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-soft-gray -z-10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
