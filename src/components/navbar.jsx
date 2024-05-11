"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from 'next/navigation';

import data from "../lib/data.json";

export const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollColor, setScrollColor] = useState("transparent");
  const [logoHidden, setLogoHidden] = useState(true); // Inicialmente oculto

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop >= 90) {
        setScrollColor("#F3F4F6");
        setLogoHidden(false); // Mostrar el logo cuando se desplaza hacia abajo
      } else {
        setScrollColor("transparent");
        setLogoHidden(true); // Ocultar el logo cuando se desplaza hacia arriba
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="fixed left-0 top-0 w-full z-40 ease-in duration-300"
      style={{ backgroundColor: scrollColor }}
    >
      <div className="max-w-[1240px] m-auto font-bold flex justify-between items-center p-4 text-black">
        <Link href="/">
          <div className={`transition-opacity duration-500 ${logoHidden && router.pathname != "/" ? 'opacity-0' : 'opacity-100'}`}> 
            <Image src="/IMG_0271.png" width={200} height={75} alt="logo" />
          </div>
        </Link>
        <div className="hidden md:flex gap-10 ml-10">
          {data.url_navbar.map((link) => (
            <Link key={link.title} href={link.url} className="text-black">
              {link.title}
            </Link>
          ))}
        </div>
        {/* Mobile Button */}
        <div className="md:hidden">
          <button className="menuButton" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose size={30} style={{ color: "#000000" }} />
            ) : (
              <AiOutlineMenu size={30} style={{ color: "#000000" }} />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute mt-4 top-20 right-0 w-3/4 h-4/5 bg-white text-center ease-in duration-300">
            <div className="flex flex-col items-center justify-center gap-4 bg-white">
              {data.url_navbar.map((link) => (
                <Link key={link.title} href={link.url} className="text-black" onClick={toggleMobileMenu}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
