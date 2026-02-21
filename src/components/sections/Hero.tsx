"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Award, ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
    { icon: Award, text: "Incubated & Backed By IIT Patna" },
    { icon: ShieldCheck, text: "Awarded equity-free grant of ₹5L" },
];

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-clinical-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="relative z-10 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-teal/10 text-navy text-xs font-bold tracking-wider uppercase mb-4">
                            The Future of Healthcare Retrofitting
                        </span>
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-bold text-navy leading-[1.1]">
                            Empowering Healthcare with{" "}
                            <span className="text-teal">Real-Time Monitoring</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-charcoal/70 max-w-xl leading-relaxed"
                    >
                        Transform your existing hospital monitors into smart, connected systems with our AI-powered plug-and-play retrofit device. Bridging the gap between analog infrastructure and digital healthcare.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button variant="gradient" size="lg" className="group">
                            Schedule a Demo
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Link href="/product">
                            <Button variant="outline" size="lg" className="group">
                                Explore the Tech
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Trust Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-wrap items-center gap-6 pt-8 border-t border-soft-gray"
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 text-charcoal/60 text-sm font-medium"
                            >
                                <stat.icon className="w-5 h-5 text-teal" />
                                {stat.text}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Content - Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative lg:ml-auto"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-navy/20 border border-navy/10 transform rotate-1 hover:rotate-0 transition-transform duration-700">
                        <Image
                            src="/images/hero-visual.png"
                            alt="ArogyaSync Device Visual"
                            width={800}
                            height={800}
                            priority
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Decorative Floaters */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 bg-clinical-white p-4 rounded-2xl shadow-xl border border-soft-gray z-20 flex items-center gap-3"
                    >
                        <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                            <Activity className="text-success w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-charcoal/50 font-bold uppercase">
                                Real-time Sync
                            </span>
                            <span className="text-sm font-mono font-bold text-navy">
                                &lt; 500ms Latency
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        className="absolute -bottom-10 -left-10 bg-clinical-white p-4 rounded-2xl shadow-xl border border-soft-gray z-20 flex items-center gap-3"
                    >
                        <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                            <ShieldCheck className="text-teal w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-charcoal/50 font-bold uppercase">
                                Data Precision
                            </span>
                            <span className="text-sm font-mono font-bold text-navy">
                                99.8% OCR Accuracy
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
