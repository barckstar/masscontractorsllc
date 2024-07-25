"use client";
import Hero from "@/components/hero";
import FillNav from "@/components/fillNav";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import data from "../../lib/data.json";
import Link from "next/link";

export default function about() {
  return (
    <>
      <Fade delay="10">
        <FillNav />
        <section className="bg-image-about">
          <div className="w-5/6 mx-auto bg-white">
            <Fade delay="10">
              <Hero
                hidden={true}
                title={data.heroAbout.title}
                text={data.heroAbout.text}
              />
              <div className="mx-auto flex lg:w-5/6 px-5 py-4 mt-7 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-2/3 flex flex-col md:items-center md:text-left md:mx-auto mb-16 md:mb-0 items-center text-center">
                  <Fade delay="10">
                    <h1 className="title-font font-georgia sm:text-3xl text-2xl mb-6 font-medium text-gray-900">
                      {data.about.title}
                    </h1>
                  </Fade>
                  <ul>
                    {data.about.list.map((item, index) => (
                      <li key={index} className="my-4 text-gray-600 body-font">
                        <Fade delay={index * 150}>
                          <p>
                            <span className="title-font sm:text-xl text-2xl mb-6 font-bold text-gray-700">
                              {item.subTitle} -
                            </span>{" "}
                            {item.description}
                          </p>
                        </Fade>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <Fade delay="10">
                    <Image
                      className="mx-auto object-contain object-center rounded"
                      width={250}
                      height={250}
                      alt="hero"
                      src="/about.png"
                    />
                  </Fade>
                </div>
              </div>
              <div className="lg:w-5/6 px-5 py-3 mx-auto bg-blue-200 rounded-sm shadow-lg hover:bg-blue-400 transition duration-300">
                <div className="text-center p-3 mx-auto">
                  <p className="text-2xl font-bold font-georgia text-gray-900">
                    {data.about.aboutFooter}
                  </p>
                </div>
              </div>
              <Fade delay="50" triggerOnce>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <button className="my-9 hero-button shadow-lg hover:shadow-2xl">
                      {data.about.buttonText}
                    </button>
                  </Link>
                </div>
              </Fade>
            </Fade>
          </div>
        </section>
      </Fade>
    </>
  );
}
