"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Globe, CheckCircle2 } from "lucide-react";

const certifications = [
    { name: "ISO 13485", desc: "Medical Device Quality Management" },
    { name: "IEC 60601", desc: "Medical Electrical Equipment Safety" },
    { name: "CDSCO", desc: "Indian Regulatory Approval" },
    { name: "HIPAA Ready", desc: "Global Data Privacy Standards" },
];

export function TrustCompliance() {
    return (
        <section className="py-24 bg-soft-gray/30 border-y border-soft-gray/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-teal font-mono text-sm font-bold uppercase tracking-widest mb-4">
                            Trust & Compliance
                        </h2>
                        <h3 className="text-4xl font-display font-bold text-navy mb-6">
                            Enterprise-grade reliability, clinically certified.
                        </h3>
                        <p className="text-charcoal/70 text-lg mb-8">
                            We adhere to the highest international standards for medical devices and data security, ensuring your patient data remains secure and your hospital stays compliant.
                        </p>

                        <div className="space-y-4">
                            {[
                                "End-to-end AES-256 data encryption",
                                "Local network data processing (Edge AI)",
                                "DPDP Act & HIPAA compliant architecture",
                                "Regular clinical validation audits"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-success w-5 h-5" />
                                    <span className="text-sm font-bold text-navy/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-6 bg-clinical-white rounded-2xl border border-soft-gray shadow-sm flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mb-4">
                                    <Shield className="text-navy w-6 h-6" />
                                </div>
                                <h4 className="text-sm font-bold text-navy mb-1">{cert.name}</h4>
                                <p className="text-[10px] text-charcoal/40 font-medium uppercase tracking-wider">{cert.desc}</p>
                            </motion.div>
                        ))}

                        <div className="col-span-2 p-6 bg-navy rounded-2xl flex items-center justify-between text-clinical-white">
                            <div className="flex items-center gap-4">
                                <Lock className="text-teal w-8 h-8" />
                                <div>
                                    <h4 className="text-sm font-bold">Data Sovereignty</h4>
                                    <p className="text-[10px] opacity-60">Full control over where your data resides.</p>
                                </div>
                            </div>
                            <Globe className="w-10 h-10 opacity-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
