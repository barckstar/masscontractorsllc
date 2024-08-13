"use client";
import Image from "next/image";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BiSolidStore } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";
import data from "@/lib/data.json";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <Fade delay="5">
        <footer className="text-gray-600 body-font bg-gray-200">
          <div className="px-5 w-11/12 py-8 mx-auto flex items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-2/6 flex-shrink-0 mx-auto justify-center text-center">
              <Link
                href="/"
                className="flex title-font font-medium items-center justify-center text-gray-900"
              >
                <Image
                  src="/IMG_0271.png"
                  alt="Logo"
                  width={350}
                  height={350}
                />
              </Link>
              <p className="mt-2 text-xl text-gray-500">
                General Contractor in Richmond, VA.
              </p>
            </div>
            <div className="flex-grow flex flex-wrap -mb-10 md:text-left text-start order-first">
              <div className="custom:w-1/3 mb-10 custom870:w-1/2 w-full px-4">
                <nav className="list-none text-start">
                  <p className="text-gray-800 font-georgia text-start text-3xl font-medium hover:text-gray-800">
                    Contact Us
                  </p>
                  <ul>
                    <li className="flex items-start mt-4 space-x-2">
                      <div className="flex flex-row items-center text-xl">
                        <div className="m-2">
                          <BiPhoneCall
                            size={35}
                            color="#000A82"
                            className="flex-wrap"
                          />
                        </div>
                        <div className="m-2 text-gray-600 text-xl hover:text-gray-800">+1 (804) 404-5361</div>
                      </div>
                    </li>
                    <li className="flex items-start mt-4 space-x-2">
                      <div className="flex flex-row items-center text-xl">
                        <div className="m-2">
                          <BiSolidStore
                            size={35}
                            color="#000A82"
                            className="flex-wrap"
                          />
                        </div>
                        <div className="m-2 text-gray-600 text-xl hover:text-gray-800">411 Branchway Rd Suite 218 N. Chesterfield, VA 23236</div>
                      </div>
                    </li>
                    <li className="flex items-start mt-4 space-x-2">
                      <div className="flex flex-row items-center text-xl">
                        <div className="m-2">
                          <BiCalendar
                            size={35}
                            color="#000A82"
                            className="flex-wrap"
                          />
                        </div>
                        <div className="m-2 text-gray-600 text-xl hover:text-gray-800">Mon - Fri: 7:00am - 4:00pm</div>
                      </div>
                    </li>
                    <li className="flex items-start mt-4 space-x-2">
                      <div className="flex flex-row items-center text-xl">
                        <div className="m-2">
                          <AiOutlineMail
                            size={35}
                            color="#000A82"
                            className="flex-wrap"
                          />
                        </div>
                        <div className="m-2 text-gray-600 text-xl hover:text-gray-800">info@mascontractors.com</div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col custom:w-1/6 custom870:w-1/2 w-full  px-4 mx-auto">
                <nav className="list-none mb-10">
                  <p className="text-gray-800 font-georgia text-3xl font-medium hover:text-gray-800">
                    Services
                  </p>
                  <ul>
                    {data.contect_services.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-start mt-4 space-x-2"
                      >
                        <p className="text-blue-800 text-xl font-medium">
                          {service.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="custom:w-1/4 custom870:w-1/2 w-full px-4">
                <nav className="list-none mb-10">
                  <p className="text-gray-800 font-georgia text-3xl font-medium hover:text-gray-800">
                    Specialities
                  </p>
                  <ul>
                    {data.specialties.map((specialtie, index) => (
                      <li
                        key={index}
                        className="flex items-start mt-4 space-x-2"
                      >
                        <Link
                          href={specialtie.link}
                          className="text-blue-800 text-xl font-medium hover:text-gray-800"
                        >
                          {specialtie.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="custom:w-1/6 custom:mr-8 custom870:w-1/2 w-full mr-0 pl-4">
                <nav className="list-none mb-10">
                  <p className="text-gray-800 font-georgia text-3xl font-medium hover:text-gray-800">
                    Connect
                  </p>
                  <ul>
                    {data.social_media.map((social_media, index) => (
                      <li
                        key={index}
                        className="flex items-start mt-4 space-x-2"
                      >
                        <Link
                          href={social_media.link}
                          className="text-blue-800 text-xl font-medium hover:text-gray-800"
                        >
                          {social_media.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-800">
            <div className="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-200 text-sm text-center sm:text-left">
                © 2024 MasContractorsLLC, All Rights Reserved —
                <Link
                  href="https://www.linkedin.com/in/leo-cas/"
                  className="text-gray-400 ml-1"
                  target="_blank"
                >
                  @Leonel
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </Fade>
    </>
  );
};
