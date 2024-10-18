
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
    <div className="fixed top-6 left-0 z-50 space-x-4 bg-transparent p-5 hidden lg:flex">
      {data.social_media.map((social_media, index) => {
        const Icon = socialIcons[social_media.name];
        return (
          <Link key={index} href={social_media.link} className="text-gray-800 hover:text-blue-800">
            <Icon size={28} />
          </Link>
        );
      })}
    </div>
  );
};