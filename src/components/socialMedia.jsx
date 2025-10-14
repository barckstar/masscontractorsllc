import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillGoogleCircle } from "react-icons/ai";
import { FaT } from "react-icons/fa6";
import Link from "next/link";
import data from "@/lib/data.json";

const socialIcons = {
  Facebook: AiFillFacebook,
  Instagram: AiFillInstagram,
  Google: AiFillGoogleCircle,
  Thumbtack: FaT ,
};

export const SocialMediaBar = () => {
  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 z-50 flex flex-col items-center bg-[#1e1e1e]/70 p-5 rounded-r-3xl lg:flex space-y-4">
      {data.social_media.map((social_media, index) => {
        const Icon = socialIcons[social_media.name];
        return (
          <Link
            key={index}
            href={social_media.link}
            className="text-[#9fe300] hover:text-[#1e1e1e] transition-colors duration-300 flex items-center justify-center w-12 h-12 rounded-full bg-[#1e1e1e]/70 hover:bg-[#9fe300] shadow-lg"
          >
            <Icon size={28} />
          </Link>
        );
      })}
    </div>
  );
};