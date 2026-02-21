"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
    { label: "5-Year Savings", value: 28.5, prefix: "₹", suffix: "L", sub: "per 10 beds" },
    { label: "OCR Accuracy", value: 99.8, suffix: "%", sub: "Clinical grade" },
    { label: "Data Latency", value: 500, prefix: "<", suffix: "ms", sub: "Real-time sync" },
    { label: "Lives Impacted", value: 250, suffix: "K+", sub: "Projected 2026" },
    { label: "Cost Reduction", value: 85, suffix: "%", sub: "vs Replacement" },
    { label: "Staff Efficiency", value: 4, suffix: "hrs", sub: "Daily saving" },
];

export function ImpactMetrics() {
    return (
        <section id="impact" className="py-24 bg-clinical-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-emerald font-mono text-sm font-bold uppercase tracking-widest mb-4">
                        Proven Results
                    </h2>
                    <h3 className="text-4xl font-display font-bold text-navy-dark">
                        Quantifying the ArogyaSync advantage.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((metric, idx) => (
                        <MetricCard key={idx} metric={metric} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface Metric {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
    sub: string;
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = metric.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, metric.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-[32px] bg-clinical-white border border-soft-gray shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group"
        >
            <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-navy-dark/40 uppercase tracking-widest">
                    {metric.label}
                </span>
                <div className="flex items-baseline gap-1">
                    {metric.prefix && (
                        <span className="text-2xl font-display font-bold text-navy-dark/40">
                            {metric.prefix}
                        </span>
                    )}
                    <span className="text-5xl font-mono font-bold text-navy-dark tracking-tighter">
                        {typeof metric.value === 'number' ? (metric.value % 1 === 0 ? count.toFixed(0) : count.toFixed(1)) : metric.value}
                    </span>
                    <span className="text-2xl font-display font-bold text-emerald">
                        {metric.suffix}
                    </span>
                </div>
                <p className="text-xs font-semibold text-navy-dark/60 mt-2">
                    {metric.sub}
                </p>
            </div>
            <div className="mt-6 w-full h-1 bg-soft-gray rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-navy-dark group-hover:bg-emerald transition-colors"
                />
            </div>
        </motion.div>
    );
}
