import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

const contentSpec = () => {
  return (
    <section className="body-font mt-10">
      <div className="lg:w-5/6 px-5 py-4 mx-auto">
        <div className="flex flex-wrap w-full mb-5 p-5 rounded-lg">
          <div className="lg:w-1/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl font-georgia text-2xl font-bold title-font mb-2 text-black">
              Specialties
            </h1>
            <div className="h-1 w-20 bg-green-400 rounded"></div>
          </div>
          <p className="lg:w-2/3 w-full leading-relaxed text-black">
            We are experts in home remodeling, delivering quality, experience,
            and dedication in every project. From kitchen and bathroom
            renovations to basement and exterior improvements, we are here to
            make your home dreams come true.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <Slide direction="up" triggerOnce>
              <div className="h-full p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-lucky-3592812-5374862.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-600 text-s font-medium title-font">
                  <Link href="/specialties/comercialcabinetry">
                    Read more...
                  </Link>
                </h3>
                <h2 className="text-lg font-georgia text-black font-medium title-font mb-4">
                  Comercial cabinetry
                </h2>
                <p className="leading-relaxed text-base text-black">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </Slide>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <Slide direction="up" triggerOnce delay='10'>
              <div className="h-full p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-monica-803908.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-600 text-s font-medium title-font">
                  <Link href="/specialties/tile">Read more...</Link>
                </h3>
                <h2 className="text-lg font-georgia text-black font-medium title-font mb-4">
                  Tile
                </h2>
                <p className="leading-relaxed text-base text-black">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </Slide>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <Slide direction="up" triggerOnce delay='20'>
              <div className="h-full p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-thijsvdw-1094770.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-600 text-s font-medium title-font">
                  <Link href="/specialties/carpentry">Read more...</Link>
                </h3>
                <h2 className="text-lg font-georgia text-black font-medium title-font mb-4">
                  Carpentry
                </h2>
                <p className="leading-relaxed text-base text-black">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contentSpec;
