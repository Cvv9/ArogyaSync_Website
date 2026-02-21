"use client";

import React from "react";
import { Check, X, TrendingDown, Clock, Rocket } from "lucide-react";

const comparisonData = [
    {
        feature: "Total Cost (per 10 beds)",
        ge: "₹15 - 20 Lakhs",
        bpl: "₹7 - 12 Lakhs",
        arogya: "₹2.5 Lakhs",
        isWinner: true
    },
    {
        feature: "Installation Time",
        ge: "2 - 4 Weeks",
        bpl: "3 - 5 Days",
        arogya: "< 5 Minutes",
        isWinner: true
    },
    {
        feature: "Infrastructure Downtime",
        ge: "Significant",
        bpl: "Moderate",
        arogya: "Zero",
        isWinner: true
    },
    {
        feature: "Connectivity",
        ge: "Proprietary",
        bpl: "Limited",
        arogya: "Universal IoT",
        isWinner: true
    }
];

export function ROIComparisonTable() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-teal font-mono text-sm font-bold uppercase tracking-widest mb-4">Economics</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">Unbeatable ROI for Your Hospital.</h3>
                    <p className="text-charcoal/60 text-lg">Modernize your facility at 15% of the cost of traditional replacements.</p>
                </div>

                <div className="overflow-x-auto rounded-[40px] border border-soft-gray shadow-2xl bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-navy text-white">
                                <th className="p-8 text-sm font-bold uppercase tracking-widest">Metric</th>
                                <th className="p-8 text-sm font-bold uppercase tracking-widest opacity-60">Traditional (GE / Philips)</th>
                                <th className="p-8 text-sm font-bold uppercase tracking-widest opacity-60">Upgrade (Standard BPL)</th>
                                <th className="p-8 text-sm font-bold uppercase tracking-widest text-teal">ArogyaSync Solution</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-soft-gray">
                            {comparisonData.map((row, i) => (
                                <tr key={i} className="hover:bg-soft-gray/20 transition-colors">
                                    <td className="p-8 font-bold text-navy">{row.feature}</td>
                                    <td className="p-8 text-charcoal/50 text-sm">{row.ge}</td>
                                    <td className="p-8 text-charcoal/50 text-sm">{row.bpl}</td>
                                    <td className="p-8 bg-teal/5 font-display font-bold text-navy">
                                        <div className="flex items-center gap-2">
                                            {row.arogya}
                                            {row.isWinner && <Rocket className="w-4 h-4 text-teal" />}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl bg-navy text-white flex flex-col items-center text-center">
                        <TrendingDown className="text-teal w-12 h-12 mb-6" />
                        <h4 className="text-3xl font-bold mb-2">88% Savings</h4>
                        <p className="text-soft-gray/40 text-sm">Versus traditional equipment replacement.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-teal text-navy flex flex-col items-center text-center">
                        <Clock className="w-12 h-12 mb-6" />
                        <h4 className="text-3xl font-bold mb-2">Zero Downtime</h4>
                        <p className="text-navy/60 text-sm font-bold">Retrofit in minutes during active clinical shifts.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-soft-gray border border-soft-gray flex flex-col items-center text-center">
                        <Rocket className="text-navy w-12 h-12 mb-6" />
                        <h4 className="text-3xl font-bold text-navy mb-2">100% Fit</h4>
                        <p className="text-charcoal/40 text-sm">Universal compatibility with any monitor brand.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
