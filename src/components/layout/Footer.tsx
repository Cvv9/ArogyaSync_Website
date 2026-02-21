"use client";

import React from "react";
import Link from "next/link";
import { Activity, Mail, Globe, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-charcoal text-clinical-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Mission */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center">
                                <Activity className="text-teal w-6 h-6" />
                            </div>
                            <span className="text-2xl font-display font-bold text-clinical-white tracking-tight">
                                Arogya<span className="text-teal">Sync</span>
                            </span>
                        </Link>
                        <p className="text-soft-gray/60 leading-relaxed max-w-xs">
                            Building the future of affordable, connected healthcare infrastructure for the next billion patients.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal/20 hover:text-teal transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal/20 hover:text-teal transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal/20 hover:text-teal transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Explore</h4>
                        <ul className="space-y-4 text-soft-gray/60">
                            <li><Link href="/" className="hover:text-teal transition-colors">Home</Link></li>
                            <li><Link href="/product" className="hover:text-teal transition-colors">Product & Technology</Link></li>
                            <li><Link href="/roi" className="hover:text-teal transition-colors">ROI & Impact</Link></li>
                            <li><Link href="/about" className="hover:text-teal transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-teal transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-soft-gray/60">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-teal shrink-0" />
                                <span>cs@arogyasync.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="w-5 h-5 text-teal shrink-0" />
                                <span>arogyasync.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-teal shrink-0" />
                                <span>Bengaluru, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Status */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">System Status</h4>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Cloud Dashboard</span>
                                <span className="flex items-center gap-1.5 text-xs text-success font-bold uppercase">
                                    <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                                    Operational
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">IoT Edge Sync</span>
                                <span className="flex items-center gap-1.5 text-xs text-success font-bold uppercase">
                                    <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                                    Operational
                                </span>
                            </div>
                        </div>
                        <p className="mt-4 text-xs text-soft-gray/40">
                            Incubated & Backed By IIT Patna
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-soft-gray/40 font-medium">
                        © 2026 ArogyaSync. Patent Pending Technology. Made with precision in Patna.
                    </p>
                    <div className="flex gap-8 text-xs font-bold text-soft-gray/40 uppercase tracking-widest">
                        <a href="#" className="hover:text-teal transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-teal transition-colors">Terms</a>
                        <a href="#" className="hover:text-teal transition-colors">HIPAA</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
