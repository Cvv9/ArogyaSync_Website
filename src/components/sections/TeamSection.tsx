"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const leadership = [
    {
        name: "Dr. Arjun Chadha",
        role: "CEO & Co-Founder",
        bio: "Dental Specialist + MBA, Digital Health Expert, Clinical Strategy Lead.",
        image: "/images/team/arjun.png"
    },
    {
        name: "Varun Cumbamangalam",
        role: "CTO & Co-Founder",
        bio: "MS Robotics, 6+ Years Exp in IoT Systems, ScrumMaster Certified.",
        image: "/images/team/varun.png"
    }
];

const advisors = [
    { name: "Kumar Bala", role: "System Design & IOT" },
    { name: "Malai Swamy Kannan", role: "Ex-Director, GE Healthcare" },
    { name: "Dr. Shazina", role: "Clinical Validation" },
];

export function TeamSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-teal font-mono text-sm font-bold uppercase tracking-widest mb-4">Leadership</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-navy mb-8">Meet the Visionaries.</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {leadership.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[40px] bg-soft-gray/30 border border-soft-gray flex flex-col md:flex-row gap-8 items-center md:items-start"
                            >
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-[32px] bg-navy overflow-hidden shrink-0 shadow-xl group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full bg-navy/20 flex items-center justify-center text-white/20 font-bold">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <h4 className="text-2xl font-display font-bold text-navy mb-1">{member.name}</h4>
                                        <p className="text-teal font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                                        <p className="text-charcoal/60 leading-relaxed mb-6">{member.bio}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:text-teal transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:text-teal transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="pt-20 border-t border-soft-gray">
                    <h2 className="text-teal font-mono text-sm font-bold uppercase tracking-widest mb-10">Advisory Board</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advisors.map((advisor, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white border border-soft-gray shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold text-navy mb-1">{advisor.name}</h4>
                                <p className="text-charcoal/40 text-sm font-medium uppercase tracking-wider">{advisor.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
