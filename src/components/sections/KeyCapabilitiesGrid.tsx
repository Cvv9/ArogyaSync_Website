"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScanEye, CloudSync, Keyboard, BrainCircuit } from "lucide-react";

const capabilities = [
    {
        icon: ScanEye,
        title: "Real-Time OCR Capture",
        detail: "95% Accuracy Rate",
        description: "Delivers unprecedented accuracy in capturing vitals from any existing legacy monitor.",
        color: "bg-emerald/10 text-emerald"
    },
    {
        icon: CloudSync,
        title: "Secure Cloud Sync",
        detail: "Anywhere Access",
        description: "Provides medical staff with uninterrupted, remote access to vital patient data via IoT.",
        color: "bg-emerald/10 text-emerald"
    },
    {
        icon: Keyboard,
        title: "Blockchain Security",
        detail: "Immutable Records",
        description: "Tamper-proof data records ensure robust prevention of insurance fraud and billing errors.",
        color: "bg-emerald/10 text-emerald"
    },
    {
        icon: BrainCircuit,
        title: "Predictive ML",
        detail: "Early Intervention",
        description: "Advanced AI anomaly analytics enable early medical intervention and improved outcomes.",
        color: "bg-emerald/10 text-emerald"
    }
];

export function KeyCapabilitiesGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-display font-bold text-navy-dark mb-4">Powerful Features, Plug-and-Play Simplicity.</h2>
                    <p className="text-navy-dark/60">Everything you need to modernize your critical care units instantly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[32px] bg-navy-dark border border-white/5 shadow-2xl hover:translate-y-[-8px] transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-white mb-2">{item.title}</h3>
                            <div className="text-sm font-bold text-emerald uppercase tracking-widest mb-4">{item.detail}</div>
                            <p className="text-white/60 leading-relaxed text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
