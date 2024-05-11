import Statistics from "@/components/statistics";
import Steps from "@/components/steps";
import HeroR from "@/components/heroR";
import HeroL from "@/components/heroL";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="video-container mt-0 ">
        <video autoPlay muted loop>
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-content">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Home with
            </h1>
            <Image className="img mb-5" src='/IMG_0271-notext.png' width={500} height={500} alt="Logo"/>
            <h1 className="hero-title-logo">Contractors LLC</h1>
            <p className="hero-description">
              We are experts in home remodeling, delivering quality, experience,
              and dedication in every project. From kitchen and bathroom
              renovations to basement and exterior improvements, we are here to
              make your home dreams come true.
            </p>
            <button className="hero-button">
              Request a Free Consultation!
            </button>
          </div>
        </div>
      </div>
      <Statistics />
      <HeroL />
      <Steps />
      <HeroR />
    </>
  );
}
