"use client";

import React from "react";
import { Camera, Cpu, CloudCheck, Shield } from "lucide-react";

const steps = [
    {
        icon: Camera,
        title: "Seamless Attachment",
        description: "The Smart Retrofit Device attaches seamlessly to any legacy hospital monitor without disrupting existing workflows.",
    },
    {
        icon: Cpu,
        title: "5MP OCR Capture",
        description: "Built-in 5MP OCR Camera captures essential vitals (BP, SPO2, ECG) with ultra-low latency of less than 100ms.",
    },
    {
        icon: Shield,
        title: "Edge AI Processing",
        description: "Processes data locally using TensorFlow Lite and immediately encrypting it for maximum security.",
    },
    {
        icon: CloudCheck,
        title: "Unified Sync",
        description: "Cloud infrastructure syncs data to unified Web & Mobile Dashboards for real-time remote monitoring.",
    },
];

export function HowItWorksSteps() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-emerald font-mono text-sm font-bold uppercase tracking-widest mb-4">How It Works</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-navy-dark mb-6">Four Steps to Smart Infrastructure.</h3>
                    <p className="text-navy-dark/60 text-lg">Our zero-downtime implementation means you can modernize an entire ICU in under an hour.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-navy-dark flex items-center justify-center mb-8 relative z-10">
                                <step.icon className="text-emerald w-8 h-8" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald rounded-full flex items-center justify-center text-white font-black text-xs">
                                    {i + 1}
                                </div>
                            </div>
                            <h4 className="text-xl font-display font-bold text-navy-dark mb-4">{step.title}</h4>
                            <p className="text-navy-dark/60 leading-relaxed text-sm">{step.description}</p>
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
