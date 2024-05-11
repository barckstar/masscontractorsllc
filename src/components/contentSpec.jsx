import Image from "next/image";
import Link from "next/link";

const contentSpec = () => {
  return (
    <>
      <section className="bg-spec text-gray3600 body-font mt-10">
        <div className="lg:w-5/6 px-5 py-24 mx-auto">
          <div className="flex flex-wrap content-bg w-full mb-20 bg-slate-200 p-5 rounded-lg">
            <div className="lg:w-1/4 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Specialties
              </h1>
              <div className="h-1 w-20 bg-green-400 rounded"></div>
            </div>
            <p className="lg:w-2/3 w-full leading-relaxed text-gray-300">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos; heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="content-bg p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-lucky-3592812-5374862.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-400 text-xs font-medium title-font">
                <Link href='/specialties/comercialcabinetry'>Reed more...</Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Comercial cabinetry
                </h2>
                <p className="leading-relaxed text-base text-gray-300 ">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="content-bg p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-monica-803908.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-400 text-xs font-medium title-font">
                <Link href='/specialties/tile'>Reed more...</Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Tile
                </h2>
                <p className="leading-relaxed text-base text-gray-300 ">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="content-bg p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-thijsvdw-1094770.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-400 text-xs font-medium title-font">
                  <Link href='/specialties/carpentry'>Reed more...</Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Carpentry
                </h2>
                <p className="leading-relaxed text-base text-gray-300 ">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contentSpec;
