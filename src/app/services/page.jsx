"use client"
import ContentSer from "@/components/contectSer"
import { Navbar2 } from "@/components/navbar2";
import { Fade } from "react-awesome-reveal";

export default function services() {
  return (
    <>
    <Fade delay='10'>
      <Navbar2/>
      <ContentSer/>
    </Fade>
    </>
  );
}
