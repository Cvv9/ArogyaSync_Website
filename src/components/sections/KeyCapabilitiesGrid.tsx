"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScanEye, CloudSync, Keyboard, BrainCircuit } from "lucide-react";

const capabilities = [
    {
        icon: ScanEye,
        title: "Real-Time OCR Capture",
        detail: "99.8% Accuracy",
        description: "Captures patient vitals from any monitor screen using advanced computer vision.",
        color: "bg-teal/10 text-teal"
    },
    {
        icon: CloudSync,
        title: "Secure Cloud Sync",
        detail: "Anywhere Access",
        description: "Real-time synchronization allows doctors to monitor patients from any location, anytime.",
        color: "bg-navy/10 text-navy"
    },
    {
        icon: Keyboard,
        title: "Blockchain Security",
        detail: "Tamper-proof Records",
        description: "Zero manual entry loopholes with an immutable ledger to prevent insurance fraud.",
        color: "bg-teal/10 text-teal"
    },
    {
        icon: BrainCircuit,
        title: "Predictive ML",
        detail: "Early Intervention",
        description: "Proprietary AI models predict critical events before they happen for proactive care.",
        color: "bg-navy/10 text-navy"
    }
];

export function KeyCapabilitiesGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-display font-bold text-navy mb-4">Powerful Features, Plug-and-Play Simplicity.</h2>
                    <p className="text-charcoal/60">Everything you need to modernize your critical care units instantly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[32px] bg-soft-gray/30 border border-soft-gray hover:border-teal/30 hover:shadow-xl transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-navy mb-2">{item.title}</h3>
                            <div className="text-sm font-bold text-teal uppercase tracking-widest mb-4">{item.detail}</div>
                            <p className="text-charcoal/60 leading-relaxed text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
