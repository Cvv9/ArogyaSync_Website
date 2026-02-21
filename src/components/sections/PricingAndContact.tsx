"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Mail, Phone, MapPin, Send, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";

const pricing = [
    {
        title: "Hardware + Support",
        price: "₹25,000",
        period: "One-Time initial purchase",
        features: [
            "ArogyaSync Retrofit Device",
            "5MP OCR Camera Module",
            "Universal Mounting Kit",
            "Lifetime Hardware Warranty",
            "On-site Installation Support"
        ],
        button: "Order Hardware",
        popular: false
    },
    {
        title: "Core SaaS",
        price: "₹2,000/mo",
        period: "Recurring per device",
        features: [
            "Real-time Cloud Monitoring",
            "Historical Data Analytics",
            "Predictive ML Alerts",
            "Blockchain Records",
            "Mobile & Web Dashboards"
        ],
        button: "Get Started",
        popular: true
    },
    {
        title: "Enterprise Scale",
        price: "Custom",
        period: "Volume pricing available",
        features: [
            "API Access for HIS Integration",
            "Custom ML Model Training",
            "Dedicated Account Manager",
            "On-premise Deployment Option",
            "SLA-backed Support"
        ],
        button: "Contact Sales",
        popular: false
    }
];

export function PricingAndContact() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {pricing.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 rounded-[40px] border flex flex-col justify-between relative overflow-hidden ${plan.popular ? 'bg-navy text-white border-navy shadow-2xl scale-105 z-10' : 'bg-soft-gray/30 border-soft-gray text-navy'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 py-2 px-6 bg-teal text-navy text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                                    Most Popular
                                </div>
                            )}
                            <div>
                                <h4 className={`text-xl font-display font-bold mb-4 ${plan.popular ? 'text-teal' : 'text-navy'}`}>{plan.title}</h4>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                                </div>
                                <p className={`text-xs font-medium uppercase tracking-wider mb-8 ${plan.popular ? 'text-soft-gray/40' : 'text-charcoal/40'}`}>{plan.period}</p>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-teal' : 'text-success'}`} />
                                            <span className={`text-sm ${plan.popular ? 'text-soft-gray/80' : 'text-charcoal/70'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button variant={plan.popular ? 'teal' : 'primary'} className="w-full h-14 rounded-2xl font-bold">
                                {plan.button}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    <div className="p-12 rounded-[40px] bg-soft-gray border border-soft-gray flex flex-col justify-between">
                        <div>
                            <h3 className="text-4xl font-display font-bold text-navy mb-6">Ready to Get Started?</h3>
                            <p className="text-charcoal/60 text-lg mb-10">Fill out the form and our clinical strategy team will reach out to schedule a custom demo for your facility.</p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                        <Mail className="text-teal w-6 h-6" />
                                    </div>
                                    <span className="text-lg font-bold text-navy">cs@arogyasync.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                        <MapPin className="text-teal w-6 h-6" />
                                    </div>
                                    <span className="text-lg font-bold text-navy">Bengaluru, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-charcoal/5">
                            <div className="flex items-center gap-3">
                                <Activity className="text-teal w-8 h-8" />
                                <span className="text-2xl font-display font-bold text-navy">Arogya<span className="text-teal">Sync</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 rounded-[40px] bg-white border border-soft-gray shadow-xl">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Full Name</label>
                                    <input type="text" placeholder="Dr. Arjun Chadha" className="w-full h-14 px-6 rounded-2xl bg-soft-gray/50 border border-soft-gray focus:border-teal outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Hospital Name</label>
                                    <input type="text" placeholder="Central City Hospital" className="w-full h-14 px-6 rounded-2xl bg-soft-gray/50 border border-soft-gray focus:border-teal outline-none transition-all" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Email Address</label>
                                    <input type="email" placeholder="name@hospital.com" className="w-full h-14 px-6 rounded-2xl bg-soft-gray/50 border border-soft-gray focus:border-teal outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Number of Beds</label>
                                    <input type="text" placeholder="100+" className="w-full h-14 px-6 rounded-2xl bg-soft-gray/50 border border-soft-gray focus:border-teal outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Message</label>
                                <textarea placeholder="Tell us about your facility's needs..." className="w-full h-40 p-6 rounded-2xl bg-soft-gray/50 border border-soft-gray focus:border-teal outline-none transition-all resize-none" />
                            </div>
                            <Button variant="gradient" className="w-full h-16 rounded-2xl font-bold text-lg group">
                                Submit Inquiry
                                <Send className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
