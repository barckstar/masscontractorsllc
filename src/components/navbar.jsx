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
  const [logoHidden, setLogoHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop >= 90) {
        setScrollColor("#F3F4F6");
        setLogoHidden(false); 
      } else {
        setScrollColor("transparent");
        setLogoHidden(true); 
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
      <div className="max-w-[1240px] m-auto font-bold flex flex-col justify-between items-center p-4 text-black">
        <Link href="/">
          <div className={`transition-opacity mb-8 duration-500 ${logoHidden && router.pathname != "/" ? 'opacity-0' : 'opacity-100'}`}> 
            <Image src="/IMG_0271.png" width={250} height={100} alt="logo" />
          </div>
        </Link>
        <div className="hidden md:flex gap-2 mb-4 ml-10">
          {data.url_navbar.map((link) => (
            <Link key={link.title} href={link.url} className="text-black text-xl py-1 px-10 bg-transparent rounded-sm hover:shadow-lg hover:shadow-blue-900 transition-all">
              {link.title}
            </Link>
          ))}
        </div>
        {/* Mobile Button */}
        <div className="md:hidden flex mr-10 justify-end w-full">
          <button aria-label="Menu" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose size={30} style={{ color: "#000000"}} />
            ) : (
              <AiOutlineMenu size={30} style={{ color: "#000000" }} />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute mt-4 top-40 right-0 w-full bg-white text-center ease-in duration-300 flex flex-col ">            
              {data.url_navbar.map((link) => (
                <Link key={link.title} href={link.url} className="text-black" onClick={toggleMobileMenu}>
                <div className="items-center justify-center gap-4 bg-white py-2 hover:bg-blue-900 hover:text-white">
                  {link.title}
                </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
