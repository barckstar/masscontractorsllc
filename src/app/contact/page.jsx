"use client"
import Contact from "@/components/contact";
import {Fade} from "react-awesome-reveal";
import { Navbar2 } from "@/components/navbar2";

export default function contact() {
  return (
    <>
      <Fade delay='10'>
        <Navbar2 />
        <Contact />
      </Fade>
    </>
  );
}
