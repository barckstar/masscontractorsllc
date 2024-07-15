"use client";
import ContentSpec from "@/components/contentSpec";
import Hero from "@/components/hero";
import HeroR from "@/components/heroR";
import HeroL from "@/components/heroL";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Fade delay="10">
        <div className="video-container mt-0 ">
          <video autoPlay muted loop>
            <source src="/bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-content">
            <div className="hero-content">
              <Fade delay="25" triggerOnce>
                <Image
                  className="img mb-5"
                  src="/IMG_0271-notext.png"
                  width={500}
                  height={500}
                  alt="Logo"
                />
              </Fade>
              <Slide direction="up" delay="5" triggerOnce>
                <p className="hero-title-logo">Contractors LLC</p>
              </Slide>
              <Slide direction="up" delay="10" triggerOnce>
                <p className="hero-description">
                  General Contractor in Richmond, VA.
                </p>
              </Slide>
              <Fade delay="50" triggerOnce>
                <Link href="/contact">
                  <button className="hero-button shadow-lg hover:shadow-2xl">Get a quote !</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
        <div className="lg:w-5/6 px-5 py-4 mt-7 mx-auto">
        <p className="text-lg text-center mb-4">
              MAS Contractors is a building and Remodeling Company proud to
              offer small or large renovation projects. Our range of services
              includes Commercial Trim, Room Additions, Porches and Decks,
              Kitchen & Bathroom Remodeling Carpentry, Tile, and much more.
            </p>
        </div>
        <div className="lg:w-5/6 px-5 py-4 mt-5 mx-auto bg-green-300 rounded-sm shadow-lg hover:bg-green-400 transition duration-300">
          <div className="text-center p-5 mx-auto">
            <p className="text-2xl font-bold font-georgia text-gray-900">
              Ensure one of your biggest investments showcases great style and
              personality.
            </p>
          </div>
        </div>
        <ContentSpec />
        <div className="w-5/6 mx-auto">
          <HeroL hidden={false} media="/Bathroom.mp4" title="" text="" />
        </div>
        <div className="w-5/6 mx-auto">
          <HeroR hidden={false} media="/Bathroom2.mp4" title="" text="" />
        </div>
      </Fade>
    </>
  );
}
