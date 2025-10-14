"use client";
import Hero from "@/components/hero";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import data from "../../lib/data.json";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { TbBrandCashapp } from "react-icons/tb";

export default function about() {
  return (
    <>
      <Fade delay="10">
        <div className="bg-hero2">
          <div className=" w-11/12 mx-auto mt-40 rounded-xl shadow-lg">
            <Fade delay="10">
              <Hero
                hidden={true}
                title={data.heroAbout.title}
                text={data.heroAbout.text}
              />


              <div className="mx-auto flex lg:w-5/6 px-5 py-8 mt-7 md:flex-row flex-col gap-8">
                <div className="md:w-2/3 flex flex-col md:text-left text-center mb-16 md:mb-0">
                  <Fade delay="10">
                    <h1 className="title-font font-contrax sm:text-4xl text-2xl mb-6 font-bold text-[#9fe300]">
                      {data.about.title}
                    </h1>
                  </Fade>
                  <ul>
                    {data.about.list.map((item, index) => (
                      <li key={index} className="my-4 text-white font-atpinko body-font">
                        <Fade delay={index * 150}>
                          <p className="text-lg font-atpinko text-white">
                            <span className="title-font sm:text-xl text-2xl font-contrax mb-6 font-bold text-[#9fe300]">
                              {item.subTitle} -
                            </span>{" "}
                            {item.description}
                          </p>
                        </Fade>
                      </li>
                    ))}
                  </ul>
                  <div className="my-8 flex justify-center">
                    <Image
                      src="/uniform-3.png"
                      alt="Our Team in Uniform"
                      width={320}
                      height={200}
                      className="rounded-xl shadow-lg object-cover"
                    />
                    <Image
                      src="/uniform-2.png"
                      alt="Our Team in Uniform"
                      width={320}
                      height={200}
                      className="rounded-xl shadow-lg object-cover"
                    />
                  </div>
                </div>
                {/* Imagen principal About */}
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-col gap-6">
                  <Fade delay="10">
                    <Image
                      className="mx-auto object-contain object-center rounded-xl shadow-lg"
                      width={320}
                      height={320}
                      alt="About MAS Contractors"
                      src="/uniform-1.png"
                    />
                  </Fade>
                  {/* Espacio para imagen de certificaciones */}
                  <div className="flex justify-center items-center bg-[#1e1e1e]/70 gap-4 p-5 rounded-xl shadow-lg">
                    <Image
                      src="/OSHA-logo.png"
                      alt="OSHA Certification"
                      width={80}
                      height={80}
                      className="rounded bg-white p-2"
                    />
                    <Image
                      src="/DPOR.png"
                      alt="State License"
                      width={80}
                      height={80}
                      className="rounded bg-white p-2"
                    />
                    <Image
                      src="/EPA.png"
                      alt="EPA Certification"
                      width={80}
                      height={80}
                      className="rounded bg-white p-1"
                    />

                  </div>
                </div>
              </div>




              {/* Misión, Visión, Valores */}
              <div className="lg:w-5/6 px-5 py-8 mx-auto grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-6 border-2 border-[#9fe300]">
                  <h2 className="text-3xl font-contrax text-[#9fe300] mb-4">MISSION</h2>
                  <p className="text-white font-atpinko text-base">
                    Build high quality projects, providing innovative and comfortable solutions that improve people&apos;s lives. We are committed to safety, compliance with deadlines, and total satisfaction of our clients.
                  </p>
                </div>
                <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-6 border-2 border-[#9fe300]">
                  <h2 className="text-3xl font-contrax text-[#9fe300] mb-4">VISION</h2>
                  <p className="text-white font-atpinko text-base">
                    Be recognized for the quality of construction nationwide, delivering excellence, efficiency, and personal development in every project. We aspire to be the preferred choice for clients, subcontractors, and employees.
                  </p>
                </div>
                <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-6 border-2 border-[#9fe300]">
                  <h2 className="text-3xl font-contrax text-[#9fe300] mb-4">VALUES</h2>
                  <ul className="text-white font-atpinko text-base space-y-2">
                    <li>✔️ Safety & Compliance</li>
                    <li>✔️ Quality & Innovation</li>
                    <li>✔️ Integrity & Transparency</li>
                    <li>✔️ Teamwork & Respect</li>
                    <li>✔️ Customer Satisfaction</li>
                  </ul>
                </div>
              </div>

              {/* Proceso y Metodología de Trabajo */}
              <div className="lg:w-5/6 px-5 py-8 mx-auto">
                <h2 className="text-4xl font-contrax text-[#9fe300] mb-8 text-center">Our Process</h2>
                <div className="grid md:grid-cols-5 gap-8 text-center">
                  {/* Paso 1 */}
                  <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-6 border-2 border-[#9fe300] flex flex-col items-center">
                    <BiPhoneCall
                      size={90}
                      color="#9fe300"
                      className="flex mx-auto mb-4"
                    />
                    <h3 className="text-xl font-contrax text-[#9fe300] mb-2">Contact</h3>
                    <p className="text-white font-atpinko text-base">
                      Reach us by phone or email. We respond quickly and schedule your free on-site visit.
                    </p>
                  </div>
                  {/* Paso 2 */}
                  <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-6 border-2 border-[#9fe300] flex flex-col items-center">
                    <Image src="/car.png" alt="Site Visit" width={150} height={150} className="flex mx-auto mb-4" />

                    <h3 className="text-xl font-contrax text-[#9fe300] mb-2">Free Site Visit</h3>
                    <p className="text-white font-atpinko text-base">
                      We visit your location to assess the project and provide a detailed, no-obligation estimate.
                    </p>
                  </div>
                  {/* Paso 3 */}
                  <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-6 border-2 border-[#9fe300] flex flex-col items-center">
                    <Image src="/material.jpg" alt="Materials & Quality" width={150} height={150} className="mb-4" />
                    <h3 className="text-xl font-contrax text-[#9fe300] mb-2">Materials & Quality</h3>
                    <p className="text-white font-atpinko text-base">
                      We discuss materials, quality standards, and project details to ensure your satisfaction.
                    </p>
                  </div>
                  {/* Paso 4 */}
                  <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-6 border-2 border-[#9fe300] flex flex-col items-center">
                    <Image src="/contrat.png" alt="Agreement" width={150} height={150} className="mb-4" />
                    <h3 className="text-xl font-contrax text-[#9fe300] mb-2">Agreement & Contract</h3>
                    <p className="text-white font-atpinko text-base">
                      Once agreed, we send a detailed contract with pricing for materials and labor.
                    </p>
                  </div>
                  {/* Paso 5 */}
                  <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-6 border-2 border-[#9fe300] flex flex-col items-center">
                    <TbBrandCashapp 
                      size={90}
                      color="#9fe300"
                      className="flex mx-auto mb-4"
                      />
                    <h3 className="text-xl font-contrax text-[#9fe300] mb-2">Payment & Completion</h3>
                    <p className="text-white font-atpinko text-base">
                      50% upfront for materials, 50% upon completion. We deliver quality and transparency at every step.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer About Section */}
              <div className="lg:w-5/6 px-5 py-3 mx-auto bg-[#9fe300] rounded-sm mt-8">
                <div className="text-center p-3 mx-auto">
                  <p className="text-2xl font-bold font-contrax text-[#1e1e1e]">
                    {data.about.aboutFooter}
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <Fade delay="50" triggerOnce>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <button className="my-9 hero-button font-contrax">
                      {data.about.buttonText}
                    </button>
                  </Link>
                </div>
              </Fade>
            </Fade>
          </div>
        </div>
      </Fade>
    </>
  );
}
