"use client";
import Contact from "@/components/contact";
import Map from "@/components/map";
import { Navbar2 } from "@/components/navbar2";
import { Fade } from "react-awesome-reveal";
import { BiPhoneCall } from "react-icons/bi";
import { BiSolidStore } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";

export default function contact() {
  return (
    <>
      <Fade delay="10">
        <Navbar2 />
        <div className="lg:w-5/6 px-5 py-4 mt-7 text-center mx-auto">
          <h1 className="title-font font-georgia text-5xl font-medium text-gray-900">
            Contact Us
          </h1>
        </div>
        <div className="px-5 w-5/6 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap mb-4 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <BiPhoneCall
                size={60}
                color="#000A82"
                className="flex mx-auto my-4"
              />
              <nav className="list-none text-center">
                <li>
                  <a className="text-gray-800 font-georgia text-xl font-bold hover:text-gray-800">
                    Office Number
                  </a>
                </li>
                <br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    +1 (804) 404-5361
                  </a>
                </li>
              </nav>
            </div>
            <div className="flex flex-col justify-center lg:w-1/4 md:w-1/2 w-full px-4 mx-auto">
              <BiSolidStore
                size={60}
                color="#000A82"
                className="flex mx-auto my-4"
              />
              <nav className="list-none text-center">
                <li>
                  <a className="text-gray-800 font-georgia text-xl font-bold hover:text-gray-800">
                    Headquaters
                  </a>
                </li>
                <br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    411 Branchway Rd Suite 218 N. Chesterfield, VA 23236
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <BiCalendar
                size={60}
                color="#000A82"
                className="flex mx-auto my-4"
              />
              <nav className="list-none text-center">
                <li>
                  <a className="text-gray-800 font-georgia text-xl font-bold hover:text-gray-800">
                    Business Hours
                  </a>
                </li>
                <br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Monday - Friday 7:00am - 4:00pm
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <AiOutlineMail
                size={60}
                color="#000A82"
                className="flex mx-auto my-4"
              />
              <nav className="list-none text-center">
                <li>
                  <a className="text-gray-800 font-georgia text-xl font-bold hover:text-gray-800">
                    Email
                  </a>
                </li>
                <br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    info@mascontractors.com
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-5/6 px-5 py-4 mt-7 text-center mx-auto">
              <h1 className="title-font font-georgia text-3xl font-medium text-gray-700">
                Tell Us About Your Project
              </h1>
            </div>
            <div className="w-11/12  my-8 mx-auto">
              <p className="text-lg text-justify">
                MAS Contractors is a building and Remodeling Company proud to
                offer small or large renovation projects. Our range of services
                includes Commercial Trim, Room Additions, Porches and Decks,
                Kitchen & Bathroom Remodeling Carpentry, Tile, and much more.
              </p>
            </div>
          </div>
        </div>
        <Contact />
        <Map />
      </Fade>
    </>
  );
}
