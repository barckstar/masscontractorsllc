"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import data from "@/lib/data.json";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className="body-font bg-[#1e1e1e] border-t-2 border-[#515151]">
        <Fade delay={50} >
          <div className="py-16 mx-auto flex flex-col lg:flex-row lg:flex-nowrap flex-wrap justify-between lg:text-center px-16 gap-y-12 gap-x-8">
            {/* Secciones */}
            
              {/* Commercial */}
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <p className="text-[#9fe300] font-contrax text-3xl mb-4 footer-title">Commercial Services</p>
                <ul className="space-y-2">
                  {data.commercial.map((commercial, index) => (
                    <li key={index} className="text-white text-lg font-atpinko hover:text-[#9fe300] transition footer-text">
                      {commercial.text}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Residential */}
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <p className="text-[#9fe300] font-contrax text-3xl mb-4 footer-title">Residential Services</p>
                <ul className="space-y-2">
                  {data.residential.map((residential, index) => (
                    <li key={index} className="text-white text-lg font-atpinko hover:text-[#9fe300] transition footer-text">
                      {residential.text}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Connect */}
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <p className="text-[#9fe300] font-contrax text-3xl mb-4 footer-title">Connect</p>
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
          {/* Copyright */}
          <div className="flex flex-col justify-between py-6 border-t border-[#515151] px-32 lg:flex-row">
            <p className="text-[#9fe300] text-sm font-atpinko">
              © 2024 - 2025 Mas Contractors LLC <br /> All Rights Reserved
            </p>            
            {/* Logo */}
              <Link href="/" className="flex title-font font-medium items-center justify-end flex-shrink-0">
                <Image
                  src="/IMG_0271.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="object-contain mx-auto"
                />
              </Link>
          </div>
        </Fade>
      </footer>
    </>
  );
};
