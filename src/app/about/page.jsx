import Image from "next/image";
import Hero from "@/components/hero";
import HeroR from "@/components/heroR";
import HeroL from "@/components/heroL";
import FillNav from "@/components/fillNav";

export default function about() {
  return (
    <>
      <FillNav />
      <section className="bg-image-about">
        <div className="w-5/6 mx-auto bg-white">
          <Hero hidden={false} />
          <HeroR />
          <HeroL />
        </div>
      </section>
    </>
  );
}
