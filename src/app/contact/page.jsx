"use client"
import Contact from "@/components/contact";
import {Fade} from "react-awesome-reveal";

export default function contact() {
  return (
    <>
      <Fade delay='10'>
        <Contact />
      </Fade>
    </>
  );
}
