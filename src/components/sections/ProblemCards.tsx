"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clipboard, MonitorOff, Users, ShieldAlert, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
    {
        icon: Clipboard,
        title: "Manual Data Logging",
        front: "4+ hours/day wasted per nurse",
        back: "Automated OCR Capture",
        solution: "99.8% Accuracy",
        description: "Real-time vitals capture eliminates manual entry and human error.",
    },
    {
        icon: Users,
        title: "Overburdened Staff",
        front: "1:8 nurse-patient ratio gap",
        back: "Remote Monitoring",
        solution: "Saves 4+ Hours/Day",
        description: "Automated vitals syncing allows staff to focus on actual patient care.",
    },
    {
        icon: MonitorOff,
        title: "System Incompatibility",
        front: "Replacement costs ₹15-20L",
        back: "Universal Retrofit",
        solution: "85% Cost Savings",
        description: "Plug-and-play solution works with any monitor brand, no downtime required.",
    },
    {
        icon: ShieldAlert,
        title: "Patient Safety Risks",
        front: "Delayed critical responses",
        back: "Predictive ML Alerts",
        solution: "Early Intervention",
        description: "Blockchain records and AI analytics ensure tamper-proof safety.",
    },
];

export function ProblemCards() {
    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-teal font-mono text-sm font-bold uppercase tracking-widest mb-4">
                        The Healthcare Crisis
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-clinical-white mb-6">
                        Bridging the gap between legacy hardware and modern data.
                    </h3>
                    <p className="text-soft-gray/60 text-lg">
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

function ProblemCard({ problem, index }: { problem: any; index: number }) {
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
                <div className="absolute inset-0 backface-hidden bg-charcoal/40 backdrop-blur-sm border border-soft-gray/10 rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-6">
                            <problem.icon className="text-teal w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-display font-bold text-clinical-white mb-2">
                            {problem.title}
                        </h4>
                        <p className="text-soft-gray/50">{problem.front}</p>
                    </div>
                    <div className="flex items-center text-teal text-sm font-bold gap-2">
                        See Solution <ArrowRight className="w-4 h-4" />
                    </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-teal to-navy rotate-y-180 rounded-3xl p-8 flex flex-col justify-between text-navy">
                    <div>
                        <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">
                            The Impact
                        </div>
                        <div className="text-2xl font-mono font-bold mb-4">
                            {problem.back}
                        </div>
                        <div className="h-px bg-navy/20 w-full mb-4" />
                        <div className="text-lg font-display font-bold mb-2">
                            {problem.solution}
                        </div>
                        <p className="text-sm opacity-80 leading-relaxed font-medium">
                            {problem.description}
                        </p>
                    </div>
                    <div className="w-full h-2 bg-navy/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-navy"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
