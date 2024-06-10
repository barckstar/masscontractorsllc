"use client"
import Hero from "@/components/hero";
import HeroR from "@/components/heroR";
import HeroL from "@/components/heroL";
import FillNav from "@/components/fillNav";
import { Fade } from "react-awesome-reveal";

export default function about() {
  return (
    <>
    <Fade delay='10'>
      <FillNav />
      <section className="bg-image-about">
        <div className="w-5/6 mx-auto bg-white">
        <Fade delay='10'>
          <Hero hidden={false} />
          <HeroR hidden={false} media='/606x366.png' title='' text=''/>
          <HeroL hidden={false} media='/606x366.png' title='' text=''/>
      </Fade>
        </div>
      </section>
      </Fade>
    </>
  );
}
