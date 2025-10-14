"use client";
import Image from "next/image";
import Hero from "@/components/hero";
import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";
import data from "@/lib/data.json";
import Carrusel from "@/components/carrusel";

export default function Home() {
  return (
    <>
      <Fade delay="10">
        <div className="bg-hero">
          <div className="lg:w-5/6 px-5 py-4 mt-5 mx-auto ">
            <div className="hero-content m-auto text-center">
              <Slide direction="up" delay="4" triggerOnce>
                <p className="hero-title-logo mx-auto text-[#9fe300]">Transforming Spaces<span className="text-white">,</span></p>
              </Slide>
              <Slide direction="up" delay="8" triggerOnce>
                <p className="hero-title-logo mx-auto text-white">Building Legacies</p>
              </Slide>
              <Slide direction="up" delay="10" triggerOnce>
                <p className="hero-description font-atpinko">
                  Welcome to MAS Contractos. Where expertise meets inovation and unparalleled quality to turn your vision lasting realities.
                </p>
                <p className="hero-description font-atpinko">
                  Your project, our passion.
                </p>
              </Slide>
              <Fade delay="50" triggerOnce>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <button className="my-9 hero-button font-contrax transition duration-300 ease-in-out">
                      Get a quote !
                    </button>
                  </Link>
                </div>
              </Fade>
            </div>
            <div className="lg:w-5/6 px-5 py-4 mt-7 mx-auto">
              <p className="text-2xl text-center mb-4 text-white font-atpinko">
                MAS Contractors is a building and Remodeling Company proud to offer
                small or large renovation projects. Our range of services includes
                Commercial Trim, Room Additions, Porches and Decks, Kitchen &
                Bathroom Remodeling Carpentry, Tile, and much more.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-5/6 px-5 py-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center p-5 mx-auto">
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <Image
                src="/logo-3D.png"
                alt="Descripción"
                className="max-w-xs md:max-w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4">
              <p className="text-sm font-atpinko text-white mb-4">
                About MAS Contractors
              </p>
              <p className="text-6xl font-atpinko text-white mb-8">
                Discover the experience and professionalism that <span className="text-[#9fe300]">makes your home the espace you always dreamed of.</span>
              </p>
              <p className="text-lg font-atpinko text-white mb-2">
                For 10 years, we´ve been the reliable force behind countless successful projects, delivering exceptional craftsmanship and personalized service in Richdmond VA.
              </p>
              <p className="text-lg font-atpinko text-white mb-2">
                Our passion for craftsmanship and meticulous attention to detail ensure that every project we undertake is executed to the highest standards.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-5/6 px-5 py-4 mx-auto rounded-sm shadow-lg mb-10">
          <div className="text-center p-5 mx-auto">
            <p className="text-5xl  font-contrax text-white mb-5">
              <span className="text-[#9fe300]">Elevating </span>Your<br></br>
              Construction Journey
            </p>
            <p className="text-lg font-atpinko text-white mb-2">
              As contractors, we understand that every project is unique, and we are committed to delivering tailored solutions that meet your specific needs and exceed your expectations.
            </p>
            <button className="my-9 hero-button font-contrax bg-[#9fe300] transition duration-300 ease-in-out">
              Get a quote !
            </button>
          </div>
        </div>
        <div className="lg:w-5/6 px-5 py-4 mx-auto">
          <p className="text-5xl font-contrax text-white mb-5 text-center">
            Our <span className="text-[#9fe300]">Featured </span>Projects: <br />
            <span className="text-[#9fe300]">Quality</span> in Every Transformation
          </p>
          <div className="flex flex-wrap -mx-4 justify-center">
            {data.homeCards.map((homeCard, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 w-full p-4">
                <Slide delay={100 * index} direction="up" triggerOnce>
                  <div className="h-full p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200">
                    <Image
                      width={500}
                      height={500}
                      className="h-52 rounded w-full object-contain object-center mb-6"
                      src={homeCard.img}
                      alt="content"
                    />
                    <h2 className="text-lg font-bold font-atpinko text-white font-semibold title-font mb-4 uppercase">
                      {homeCard.title}
                    </h2>
                    <p className="leading-relaxed text-base text-white font-atpinko">
                      {homeCard.text}
                    </p>
                  </div>
                </Slide>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-5/6 px-5 py-4 mx-auto">
          <p className="text-5xl font-contrax text-white mb-5 text-center">
            Explore <br />
            our <span className="text-[#9fe300]">Services</span>
          </p>
          <p className="text-lg font-atpinko text-white mb-5 text-center">
            From groundbreaking commercial to beautifully designed residential communities, our portfolio showcases the transformation power of our expertise and dedication to excellence.
          </p>
          <div className="flex flex-wrap -mx-4 justify-center">
            {data.homeGreenCards.map((homeCard, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 w-full p-4">
                <Slide delay={100 * index} direction="up" triggerOnce>
                  <div className="h-full p-6 rounded-3xl shadow-lg hover:shadow-2xl transition bg-[#9fe300] duration-300">
                    <Image
                      width={500}
                      height={500}
                      className="h-52 rounded w-full object-contain object-center mb-6"
                      src={homeCard.img}
                      alt="content"
                    />
                    <h2 className="text-2xl font-bold font-contrax text-black font-semibold title-font uppercase">
                      {homeCard.title}
                    </h2>
                    <p className="leading-relaxed text-base text-black font-atpinko mb-4 uppercase">
                      {homeCard.subTitle}
                    </p>
                    <p className="leading-relaxed text-base text-black font-atpinko">
                      {homeCard.text}
                    </p>
                  </div>
                </Slide>
              </div>
            ))}
          </div>

        </div>
        <div className="lg:w-5/6 px-5 py-8 mx-auto">
          <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-5xl font-contrax text-white mb-4">
                Free <span className="text-[#9fe300]">Visit</span>
              </h2>
              <p className="text-lg font-atpinko text-white mb-2">
                We come directly to your project site to take precise measurements and discuss materials, requirements, and expectations before providing any estimate. Our evaluations are completely free, with no obligation.
                <br /><br />
                At MAS Contractors, we believe in transparency and personalized service from the very first contact. Let us help you plan your project with confidence and clarity.
              </p>
              <Link href="/contact">
                <button className="mt-6 hero-button font-contrax bg-[#9fe300] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-[#9fe300] transition duration-300 ease-in-out">
                  Request Your Free Estimate
                </button>
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <Image
                src="/car.png"
                alt="Free Estimate"
                width={300}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-5/6 px-5 py-8 mx-auto">
          <h2 className="text-6xl font-contrax text-white mt-24 mb-24 text-center">
            <span className="text-[#9fe300]">Illuminating</span> <br />
            the Future
          </h2>
          <p className="text-lg font-atpinko text-white text-center mb-24">Construction is evolving, and so are we. To maintain a balance between innovation and quality, we embrace new technologies and methodologies. Assuring excellence in every project. Our commitment to collaboration ensures that every voice is heard, and every idea is valued.</p>
          <div className="bg-[#1e1e1e] p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <Image
                src="/work.jpg"
                alt="Free Estimate"
                width={500}
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="md:w-2/3 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-3xl font-contrax text-white mb-4">
                Unlocking <span className="text-[#9fe300]">Collaborative Excellence</span>
              </h2>
              <p className="text-lg font-atpinko text-white mb-2">
                Collaboration is at the heart of every successful project. We work closely with our clients, listening to their needs and incorporating their feedback at every stage. By fostering open communication and teamwork, we ensure that every project reflects the unique vision and requirements of our clients, resulting in spaces that truly resonate with their purpose and aspirations.
                <br /><br />
                At MAS Contractors, we believe that the best results come from working together. Our collaborative approach not only enhances creativity and innovation but also builds lasting relationships based on trust and mutual respect. Join us in creating spaces that inspire and endure. 
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-5/6 px-5 py-4 mx-auto rounded-sm shadow-lg mb-10">
          <div className="text-center p-5 mx-auto">
            <p className="text-5xl  font-contrax text-white mb-5">
              <span className="text-[#9fe300]">Elevating </span>Your<br></br>
              Construction Journey
            </p>
            <p className="text-lg font-atpinko text-white mb-2">
              As contractors, we understand that every project is unique, and we are committed to delivering tailored solutions that meet your specific needs and exceed your expectations.
            </p>
            <button className="my-9 hero-button font-contrax bg-[#9fe300] transition duration-300 ease-in-out">
              Get a quote !
            </button>
          </div>
        </div>
      </Fade>
    </>
  );
}
