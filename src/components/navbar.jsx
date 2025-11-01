"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiMedalLine } from "react-icons/ri";
import data from "../lib/data.json";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado según el ancho de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint de Tailwind
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full bg-[#1e1e1e]/70 backdrop-blur-md shadow-md fixed top-0 left-0 z-50 font-atpinko">
      {/* contenedor superior: usa flex-wrap para que los items se agreguen en nuevas filas en móvil */}
      <div className="px-6 flex flex-wrap items-center bg-[#1e1e1e]/80 shadow gap-4 justify-center topnavbar">
            <div className="flex items-center text-center min-w-[168px] gap-2 flex-1 md:flex-none">
              <RiMedalLine size={28} color="#9fe300" className="topnavbaricon"/>
              <span className="text-xs leading-tight font-atpinko text-[#9fe300]">
                Class A General Contractor
                <br />
                <span className="text-xs text-white white font-atpinko">Licensed - Insured - Bonded</span>
              </span>
            </div>
            <div className="flex items-center text-center min-w-[148px] gap-2 flex-1 md:flex-none">
              <IoShieldCheckmark size={28} color="#9fe300" className="topnavbaricon"/>
              <span className="text-xs leading-tight font-atpinko text-[#9fe300]">
                Trusted Professionals
                <br />
                <span className="text-xs text-white font-atpinko">Trained and Experienced</span>
              </span>
            </div>
            <div className="flex items-center justify-center text-center min-w-[96px] gap-2 flex-1 md:flex-none">
              <FaPhoneAlt size={28} color="#9fe300" className="topnavbaricon"/>
              <span className="text-xs leading-tight font-atpinko text-[#9fe300]">
                Call Us
                <span className="block text-white font-medium font-atpinko">(804) 554-2525</span>
              </span>
            </div>
            <div className="flex items-center text-center  gap-2 flex-1 md:flex-none">
              <IoIosMail size={30} color="#9fe300" className="topnavbaricon"/>
              <span className="text-xs leading-tight font-atpinko text-[#9fe300]">
                Email Us
                <br />
                <span className="block text-white font-medium font-atpinko">info@mascontractors.com</span>
              </span>
            </div>
      </div>      
      {/* empuja la barra principal un poco para separar de la tira superior */}
      <div className="max-w-full mx-auto px-6 flex items-center justify-between h-28 mt-2">
        <Link href="/" className="flex-shrink-0">
          <Image
            src={isMobile ? "/IMG_0271_SM.png" : "/IMG_0271.png"}
            width={isMobile ? 55 : 250}
            height={isMobile ? 25 : 120}
            alt="logo"
          />
        </Link>
        {/* Desktop links */}
        <div className="hidden md:flex space-x-8">
          {data.url_navbar.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className="text-white text-xl py-1 px-6 bg-transparent hover:text-[#9fe300]"
            >
              {link.title}
            </Link>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center px-6"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>      
      {/* Mobile links */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-2 bg-[#1e1e1e]/90 shadow">
          {data.url_navbar.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className="text-white font-atpinko text-lg py-2 px-4 rounded hover:shadow-lg hover:text-[#9fe300]"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
