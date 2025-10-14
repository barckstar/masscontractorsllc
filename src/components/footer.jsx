"use client";
import Image from "next/image";
import React from "react";
import { BiPhoneCall, BiSolidStore, BiCalendar } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import data from "@/lib/data.json";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className="body-font bg-[#1e1e1e] border-t-2 border-[#515151]">
        <Fade delay={50} >
          <div className="px-20 py-16 mx-auto flex flex-col lg:flex-row lg:flex-nowrap flex-wrap justify-between gap-12">
            {/* Secciones */}
            <div className="flex-grow flex flex-wrap justify-center lg:justify-between text-center lg:text-left gap-y-12">
              {/* Services */}
              <div className="w-full sm:w-1/2 lg:w-1/5 px-4">
                <p className="text-[#9fe300] font-contrax text-2xl mb-4 footer-title">Services</p>
                <ul className="space-y-2">
                  {data.contect_services.map((service, index) => (
                    <li key={index} className="text-white text-lg font-atpinko hover:text-[#9fe300] transition footer-text">
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Specialties */}
              <div className="w-full sm:w-1/2 lg:w-1/5 px-4">
                <p className="text-[#9fe300] font-contrax text-2xl mb-4 footer-title">Specialties</p>
                <ul className="space-y-2">
                  {data.specialties.map((specialtie, index) => (
                    <li key={index} className="text-white text-lg font-atpinko hover:text-[#9fe300] transition footer-text">
                      {specialtie.title}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Connect */}
              <div className="w-full sm:w-1/2 lg:w-1/5 px-4">
                <p className="text-[#9fe300] font-contrax text-2xl mb-4 footer-title">Connect</p>
                <ul className="space-y-2">
                  {data.social_media.map((social_media, index) => (
                    <li key={index}>
                      <Link
                        href={social_media.link}
                        className="text-white text-lg font-atpinko hover:text-[#9fe300] transition footer-text"
                      >
                        {social_media.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <Link href="/" className="flex title-font font-medium items-center justify-center">
                <Image
                  src="/IMG_0271.png"
                  alt="Logo"
                  width={350}
                  height={350}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-center py-6 border-t border-[#515151]">
            <p className="text-[#9fe300] text-sm font-atpinko">
              © 2024 - 2025 MasContractorsLLC <br /> All Rights Reserved
            </p>
          </div>
        </Fade>
      </footer>
    </>
  );
};
