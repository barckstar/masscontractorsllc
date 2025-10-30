"use client";
import Contact from "@/components/contact";
import Mapa from "@/components/mapa";
import { Fade } from "react-awesome-reveal";
import { BiPhoneCall } from "react-icons/bi";
import { BiSolidStore } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";

export default function contact() {
  return (
    <>
      <Fade delay="10">        
        <div className="lg:w-5/6 px-5 py-4 text-center mx-auto">
          <h1 className="font-contrax text-5xl font-medium text-[#9fe300] mt-40">
            Contact <span className="text-white">Us</span>
          </h1>
        </div>
        <div className="px-5 w-5/6 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap mb-4 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <BiPhoneCall
                size={60}
                color="#9fe300"
                className="flex mx-auto my-4"
              />
              <nav className="list-none text-center">
                <li>
                  <p className="text-white font-contrax text-xl font-bold text-[#9fe300]">
                    Office Number
                  </p>
                </li>
                <br />
                <li>
                  <a className="text-white font-atpinko">
                    +1 (804) 
                  </a>
                </li>
                <li>
                  <a className="text-white font-atpinko">
                    +1 (540) 376-4453
                  </a>
                </li>
              </nav>  
            </div>
            <div className="flex flex-col justify-center lg:w-1/4 md:w-1/2 w-full px-4 mx-auto">
              <BiSolidStore
                size={60}
                color="#9fe300"
                className="flex mx-auto my-4"
              />
              <nav className="list-none text-center">
                <li>
                  <p className="text-white font-contrax text-xl font-bold text-[#9fe300]">
                    Headquaters
                  </p>
                </li>
                <br />
                <li>
                  <p className="text-white font-atpinko">
                    411 Branchway Rd Suite 218 N. Chesterfield, VA 23236
                  </p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <BiCalendar
                size={60}
                color="#9fe300"
                className="flex mx-auto my-4"
              />
              <nav className="list-none text-center">
                <li>
                  <p className="text-white font-contrax text-xl font-bold text-[#9fe300]">
                    Business Hours
                  </p>
                </li>
                <br />
                <li>
                  <a className="text-white font-atpinko">
                    Monday - Friday 7:00am - 4:00pm
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <AiOutlineMail
                size={60}
                color="#9fe300"
                className="flex mx-auto my-4"
              />
              <nav className="list-none text-center">
                <li>
                  <p className="text-white font-contrax text-xl font-bold text-[#9fe300]">
                    Email
                  </p>
                </li>
                <br />
                <li>
                  <p className="text-white font-atpinko">
                    info@mascontractors.com
                  </p>
                </li>
              </nav>
            </div>
            <div className="lg:w-5/6 px-5 py-4 mt-7 text-center mx-auto">
              <h1 className="font-contrax text-3xl text-white">
                Tell Us <span className="text-[#9fe300]">About </span>Your Project
              </h1>
            </div>
            <div className="w-11/12  my-8 mx-auto">
              <p className="text-lg text-justify text-white font-atpinko">
                MAS Contractors is a building and Remodeling Company proud to
                offer small or large renovation projects. Our range of services
                includes Commercial Trim, Room Additions, Porches and Decks,
                Kitchen & Bathroom Remodeling Carpentry, Tile, and much more.
              </p>
            </div>
          </div>
        </div>
        <Contact />
        <Mapa />
      </Fade>
    </>
  );
}
