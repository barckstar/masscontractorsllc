"use client"
import ContentSer from "@/components/contectSer"
import FillNav from "@/components/fillNav"
import { Fade } from "react-awesome-reveal";

export default function services() {
  return (
    <>
    <Fade delay='10'>
      <FillNav/>
      <ContentSer/>
    </Fade>
    </>
  );
}
