"use client";

import React, { useState, useMemo } from "react";
import { Calculator, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ROICalculator() {
    const [beds, setBeds] = useState(20);
    const [monitorAge, setMonitorAge] = useState("5-10");

    const results = useMemo(() => {
        const replacementCostPerBed = 1750000; // 17.5L
        const arogyaSyncCostPerBed = 250000; // 2.5L

        const traditional = beds * replacementCostPerBed;
        const arogya = beds * arogyaSyncCostPerBed;
        const savings = traditional - arogya;
        const savingsPercent = Math.round((savings / traditional) * 100);

        return {
            traditional: (traditional / 10000000).toFixed(2) + " Cr",
            arogya: (arogya / 100000).toFixed(1) + " L",
            savings: (savings / 10000000).toFixed(2) + " Cr",
            percent: savingsPercent,
        };
    }, [beds]);

    return (
        <section className="py-24 bg-clinical-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-emerald font-mono text-sm font-bold uppercase tracking-widest mb-4">
                            ROI Calculator
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-navy-dark mb-8">
                            See the impact on your balance sheet.
                        </h3>
                        <p className="text-navy-dark/70 text-lg mb-12">
                            Calculate how much your hospital can save by choosing our retrofit solution over traditional hardware replacement.
                        </p>

                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-navy-dark uppercase tracking-wide">Number of Beds</label>
                                    <span className="text-2xl font-mono font-bold text-emerald">{beds}</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="200"
                                    step="10"
                                    value={beds}
                                    onChange={(e) => setBeds(parseInt(e.target.value))}
                                    className="w-full h-2 bg-soft-gray rounded-lg appearance-none cursor-pointer accent-navy-dark"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold text-navy-dark uppercase tracking-wide block">Current Monitor Age</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {["<5 Years", "5-10 Years", "10+ Years"].map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => setMonitorAge(option)}
                                            className={cn(
                                                "py-3 px-4 rounded-xl border text-xs font-bold transition-all",
                                                monitorAge === option
                                                    ? "bg-navy-dark text-white border-navy-dark shadow-lg shadow-navy-dark/20"
                                                    : "bg-transparent text-navy-dark/40 border-soft-gray hover:border-navy-dark/20"
                                            )}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-navy/[0.02] rounded-[48px] scale-105" />
                        <div className="relative bg-clinical-white rounded-[40px] border border-soft-gray shadow-2xl p-8 md:p-12">
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 p-4 bg-navy-dark/5 rounded-2xl">
                                    <div className="w-12 h-12 bg-navy-dark rounded-xl flex items-center justify-center">
                                        <Calculator className="text-emerald w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black text-navy-dark/40 uppercase tracking-widest block">Projected Total Savings</span>
                                        <span className="text-3xl font-mono font-black text-navy-dark">₹ {results.savings}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-6 rounded-2xl border border-soft-gray/50 bg-soft-gray/10">
                                        <TrendingUp className="text-emerald w-5 h-5 mb-3" />
                                        <span className="text-[10px] font-bold text-navy-dark/40 uppercase tracking-widest block mb-1">Cost Reduction</span>
                                        <span className="text-2xl font-mono font-bold text-navy-dark">{results.percent}%</span>
                                    </div>
                                    <div className="p-6 rounded-2xl border border-soft-gray/50 bg-soft-gray/10">
                                        <Clock className="text-emerald w-5 h-5 mb-3" />
                                        <span className="text-[10px] font-bold text-navy-dark/40 uppercase tracking-widest block mb-1">ROI Timeline</span>
                                        <span className="text-2xl font-mono font-bold text-navy-dark">6 Months</span>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-soft-gray space-y-4">
                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <span className="text-navy-dark/50">Traditional Replacement</span>
                                        <span className="text-navy-dark/60 line-through">₹ {results.traditional}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-navy-dark">ArogyaSync Solution</span>
                                        <span className="text-emerald font-mono">₹ {results.arogya}</span>
                                    </div>
                                </div>

                                <Button variant="gradient" size="lg" className="w-full">Get Detailed Cost Audit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
