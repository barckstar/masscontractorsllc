"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import data from "../lib/data.json";

export const Navbar = ({color}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollColor, setScrollColor] = useState("transparent");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setScrollColor("#ffffff");
      } else {
        setScrollColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);

    // Limpia el listener cuando el componente se desmonta
    return () => window.removeEventListener("scroll", changeColor);
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
          <Image src="/IMG_0271.jpeg" width={200} height={75} alt="logo" />
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
              <AiOutlineClose size={20} style={{ color: "#000000" }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: "#000000" }} />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute mt-4 top-20 right-0 w-3/4 h-4/5 bg-white text-center ease-in duration-300">
            <div className="flex flex-col items-center justify-center gap-4 bg-white">
              {data.url_navbar.map((link) => (
                <Link key={link.title} href={link.url} className="text-black">
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
