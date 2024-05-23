"use client";
import ContentSpec from "@/components/contentSpec";
import Steps from "@/components/steps";
import Hero from "@/components/hero";
import HeroR from "@/components/heroR";
import HeroL from "@/components/heroL";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <Fade delay='10'>
        <div className="video-container mt-0 ">
          <video autoPlay muted loop>
            <source src="/bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-content">
            <div className="hero-content">
              <Slide direction="down" delay="5" triggerOnce>
                <h1 className="hero-title">Transform Your Home with</h1>
              </Slide>              
              <Slide direction="left" triggerOnce>
              <Image
                className="img mb-5"
                src="/IMG_0271-notext.png"
                width={500}
                height={500}
                alt="Logo"
              />
              </Slide>
              <Slide direction="up" delay="5" triggerOnce>
              <h1 className="hero-title-logo">Contractors LLC</h1>
              </Slide>
              <Slide direction="up" delay="10" triggerOnce>
              <p className="hero-description">
                General Contractor in Richmond, VA.
              </p>
              </Slide>
              <Fade delay="50" triggerOnce>
              <button className="hero-button">
                Request a Free Consultation!
              </button>
              </Fade>
            </div>
          </div>
        </div>
        <ContentSpec />
        <div className="w-5/6 mx-auto">
          <HeroL />
        </div>
        <Hero hidden={true} />
        <Steps />
        <div className="w-5/6 mx-auto">
          <HeroR />
        </div>
      </Fade>
    </>
  );
}
