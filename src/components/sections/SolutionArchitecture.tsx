"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Camera, Wifi, Layers, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

const hotspots = [
    {
        id: "camera",
        title: "5MP OCR Camera",
        icon: Camera,
        x: "45%",
        y: "40%",
        content: "High-resolution sensor optimized for low-light clinical environments. Captures vitals with 99.8% accuracy.",
        tech: "Sony Starvis Sensor • 60 FPS • AI-Auto Focus"
    },
    {
        id: "processor",
        title: "ARM Cortex-M4 Edge AI",
        icon: Cpu,
        x: "55%",
        y: "55%",
        content: "Edge processing ensures data never leaves the local network without encryption. <100ms processing latency.",
        tech: "TensorFlow Lite Micro • Secure Element • 128MB RAM"
    },
    {
        id: "connectivity",
        title: "Dual-Stack Wireless",
        icon: Wifi,
        x: "65%",
        y: "45%",
        content: "Seamless integration with hospital WiFi and BLE-enabled peripherals for consolidated monitoring.",
        tech: "WiFi 6 • BLE 5.2 • Mesh Ready"
    },
    {
        id: "mounting",
        title: "Universal Mount",
        icon: Layers,
        x: "35%",
        y: "60%",
        content: "Patented mechanical design fits any legacy monitor in under 5 minutes without tools.",
        tech: "Antimicrobial Coating • Tool-less Setup"
    }
];

export function SolutionArchitecture() {
    const [selectedHotspot, setSelectedHotspot] = useState<typeof hotspots[0] | null>(null);

    return (
        <section id="solutions" className="py-24 bg-navy relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-20">
                    <h2 className="text-teal font-mono text-sm font-bold uppercase tracking-widest mb-4">
                        Solution Architecture
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-clinical-white mb-6">
                        Engineering clinical trust into every byte.
                    </h3>
                    <p className="text-soft-gray/60 text-lg">
                        ArogyaSync isn't just a camera—it's a complete Edge AI ecosystem designed for the most demanding healthcare environments.
                    </p>
                </div>

                <div className="relative aspect-video max-w-5xl mx-auto bg-charcoal/20 rounded-[40px] border border-soft-gray/10 overflow-hidden shadow-3xl">
                    {/* Background Visual (Simulating a device outline/glow) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[60%] h-[60%] bg-teal/5 rounded-full blur-[100px] animate-pulse" />
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="text-clinical-white/5 font-display font-black text-9xl uppercase select-none tracking-tighter">
                                AROGYASYNC ONE
                            </div>
                        </div>
                    </div>

                    {/* Hotspots */}
                    {hotspots.map((spot) => (
                        <button
                            key={spot.id}
                            className="absolute group z-20"
                            style={{ left: spot.x, top: spot.y }}
                            onClick={() => setSelectedHotspot(spot)}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-8 h-8 bg-teal rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,183,127,0.5)] group-hover:bg-clinical-white transition-colors"
                            >
                                <div className="w-3 h-3 bg-navy rounded-full" />
                            </motion.div>
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-charcoal/80 backdrop-blur-md rounded-lg text-[10px] font-bold text-clinical-white opacity-0 group-hover:opacity-100 transition-opacity">
                                {spot.title}
                            </div>
                        </button>
                    ))}

                    {/* Hotspot Content Popover */}
                    <AnimatePresence>
                        {selectedHotspot && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="absolute top-10 right-10 w-80 bg-clinical-white/95 backdrop-blur-lg rounded-3xl p-8 z-30 shadow-2xl border border-soft-gray/20"
                            >
                                <button
                                    onClick={() => setSelectedHotspot(null)}
                                    className="absolute top-4 right-4 text-charcoal/40 hover:text-navy transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center mb-6">
                                    <selectedHotspot.icon className="text-teal w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-navy mb-3">
                                    {selectedHotspot.title}
                                </h4>
                                <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                                    {selectedHotspot.content}
                                </p>
                                <div className="p-4 bg-soft-gray rounded-xl border border-soft-gray/50">
                                    <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest block mb-2">Technical Specs</span>
                                    <span className="text-xs font-mono font-medium text-navy">
                                        {selectedHotspot.tech}
                                    </span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Technical Flow Legend */}
                    <div className="absolute bottom-10 left-10 flex gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-teal rounded-full" />
                            <span className="text-xs font-bold text-clinical-white/60">Edge AI Processing</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-silver rounded-full" />
                            <span className="text-xs font-bold text-clinical-white/60">IoT Gateway</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
