"use client";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillGoogleCircle } from "react-icons/ai";
import { FaT } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import data from "@/lib/data.json";

const socialIcons = {
  Facebook: AiFillFacebook,
  Instagram: AiFillInstagram,
  Google: AiFillGoogleCircle,
  Thumbtack: FaT,
};

export const SocialMediaBar = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 p-4 bg-black/20 backdrop-blur-md border-y border-r border-white/10 rounded-r-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]"
    >
      {data.social_media.map((social, index) => {
        const Icon = socialIcons[social.name];
        return (
          <Link key={index} href={social.link} target="_blank" className="relative group">
            <motion.div
              whileHover={{ scale: 1.2, x: 5, color: "#FFFFFF", }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 transition-colors duration-300"
            >
              <Icon size={28} color="#9fe300" />
            </motion.div>

            {/* Tooltip */}
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-5 px-3 py-1 bg-[#9fe300] text-[#1e1e1e] text-sm font-bold rounded opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg font-contrax">
              {social.name}
              {/* Arrow */}
              <span className="absolute top-1/2 right-full -translate-y-1/2 border-4 border-transparent border-r-[#9fe300]"></span>
            </span>
          </Link>
        );
      })}
    </motion.div>
  );
};