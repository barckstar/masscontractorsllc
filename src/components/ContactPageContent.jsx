"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Contact from "@/components/contact";
import Mapa from "@/components/mapa";
import { BiPhoneCall, BiSolidStore, BiCalendar } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactPageContent() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const contactInfo = [
        {
            icon: <BiPhoneCall size={40} />,
            title: "Phone Numbers",
            details: ["+1 (804) 833-4600", "+1 (540) 376-4453"],
            delay: 0
        },
        {
            icon: <BiSolidStore size={40} />,
            title: "Headquarters",
            details: ["411 Branchway Rd Suite 107", "North Chesterfield, VA 23236"],
            delay: 0.1
        },
        {
            icon: <BiCalendar size={40} />,
            title: "Business Hours",
            details: ["Monday - Friday", "7:00am - 4:00pm"],
            delay: 0.2
        },
        {
            icon: <AiOutlineMail size={40} />,
            title: "Email Us",
            details: ["info@mascontractors.com"],
            delay: 0.3
        }
    ];

    return (
        <div className="bg-[#1e1e1e] min-h-screen overflow-hidden">
            {/* 1. Integrated Hero Section */}
            <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/img-9.jpg" // Using another gallery image for variety
                        alt="Contact MAS Contractors"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e1e]/80 via-[#1e1e1e]/50 to-[#1e1e1e]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-contrax text-white mb-4 tracking-wide"
                    >
                        Contact <span className="text-[#9fe300]">Us</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="w-24 h-1 bg-[#9fe300] mx-auto rounded-full"
                    />
                </div>
            </section>

            {/* 2. Contact Info Grid */}
            <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto -mt-20 relative z-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-[#252525] p-8 rounded-xl border border-white/5 hover:border-[#9fe300] hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-[#1e1e1e] rounded-full flex items-center justify-center mb-4 border border-[#9fe300]/30 group-hover:border-[#9fe300] transition-colors text-[#9fe300]">
                                {info.icon}
                            </div>
                            <h3 className="text-xl font-contrax text-white mb-3 group-hover:text-[#9fe300] transition-colors">{info.title}</h3>
                            <div className="text-white/70 font-atpinko space-y-1">
                                {info.details.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 3. Form & Map Section */}
            <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto">
                <div className="flex flex-col gap-16">
                    {/* Top: Text & Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                    >
                        <div className="mb-10 text-center">
                            <h2 className="text-3xl md:text-5xl font-contrax text-white mb-6">
                                Tell Us <span className="text-[#9fe300]">About</span> Your Project
                            </h2>
                            <p className="text-white/80 text-lg font-atpinko leading-relaxed max-w-3xl mx-auto">
                                MAS Contractors is a building and Remodeling Company proud to
                                offer small or large renovation projects. Our range of services
                                includes Commercial Trim, Room Additions, Porches and Decks,
                                Kitchen & Bathroom Remodeling Carpentry, Tile, and much more.
                            </p>
                        </div>

                        {/* Integrated Contact Form */}
                        <Contact />

                    </motion.div>

                    {/* Bottom: Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full h-[500px] md:h-[600px]"
                    >
                        <Mapa />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
