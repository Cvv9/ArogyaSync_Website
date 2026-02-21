"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clipboard, MonitorOff, Users, ShieldAlert, ArrowRight, type LucideIcon } from "lucide-react";

const problems = [
    {
        icon: Clipboard,
        title: "Manual Data Logging",
        front: "4+ hours/day wasted per nurse on manual record keeping.",
        back: "AI-Powered OCR",
        solution: "95% Accuracy",
        description: "Universal OCR capture eliminates manual entry and human error entirely.",
    },
    {
        icon: Users,
        title: "Overburdened Staff",
        front: "Dangerous 1:8 nurse-to-patient ratio gap.",
        back: "Cloud Connectivity",
        solution: "Zero Downtime",
        description: "Frees up staff by automating vitals delivery directly to dashboards.",
    },
    {
        icon: MonitorOff,
        title: "Legacy Infrastructure",
        front: "Replacement costs ₹15-20L per bedside unit.",
        back: "Retrofit Solution",
        solution: "85% Cost Savings",
        description: "Transform 'dumb' monitors into smart systems at a fraction of the cost.",
    },
    {
        icon: ShieldAlert,
        title: "Patient Safety Risks",
        front: "Manual errors lead to delayed critical responses.",
        back: "Blockchain Ledger",
        solution: "Tamper-Proof Records",
        description: "Immutable records prevent insurance fraud and ensure patient safety.",
    },
];

export function ProblemCards() {
    return (
        <section className="py-24 bg-clinical-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-emerald font-mono text-sm font-bold uppercase tracking-widest mb-4">
                        The Problem vs. The Solution
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-navy-dark mb-6">
                        Bridging the gap between legacy hardware and modern data.
                    </h3>
                    <p className="text-navy-dark/60 text-lg">
                        Hospitals face a multi-billion dollar dilemma: replace perfectly functional monitors or stay disconnected. ArogyaSync offers a third way.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {problems.map((problem, idx) => (
                        <ProblemCard key={idx} problem={problem} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface Problem {
    icon: LucideIcon;
    title: string;
    front: string;
    back: string;
    solution: string;
    description: string;
}

function ProblemCard({ problem, index }: { problem: Problem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group perspective-1000 h-[400px]"
        >
            <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-navy-dark border border-white/5 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
                    <div>
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                            <problem.icon className="text-emerald w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-display font-bold text-white mb-2">
                            {problem.title}
                        </h4>
                        <p className="text-white/50">{problem.front}</p>
                    </div>
                    <div className="flex items-center text-emerald text-sm font-bold gap-2">
                        See Solution <ArrowRight className="w-4 h-4" />
                    </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-emerald to-navy-dark rotate-y-180 rounded-3xl p-8 flex flex-col justify-between text-white">
                    <div>
                        <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">
                            The ArogyaSync Solution
                        </div>
                        <div className="text-2xl font-mono font-bold mb-4">
                            {problem.back}
                        </div>
                        <div className="h-px bg-white/20 w-full mb-4" />
                        <div className="text-lg font-display font-bold mb-2">
                            {problem.solution}
                        </div>
                        <p className="text-sm opacity-80 leading-relaxed font-medium">
                            {problem.description}
                        </p>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-white"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
