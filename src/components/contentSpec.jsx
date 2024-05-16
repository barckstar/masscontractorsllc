import Image from "next/image";
import Link from "next/link";

const contentSpec = () => {
  return (
    <>
      <section className="body-font mt-10">
        <div className="lg:w-5/6 px-5 py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-5  p-5 rounded-lg">
            <div className="lg:w-1/4 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl font-georgia text-2xl font-bold title-font mb-2 text-black">
                Specialties
              </h1>
              <div className="h-1 w-20 bg-green-400 rounded"></div>
            </div>
            <p className="lg:w-2/3 w-full leading-relaxed text-black">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos; heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-lucky-3592812-5374862.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-600 text-s font-medium title-font">
                <Link href='/specialties/comercialcabinetry'>Reed more...</Link>
                </h3>
                <h2 className="text-lg font-georgia text-black font-medium title-font mb-4">
                  Comercial cabinetry
                </h2>
                <p className="leading-relaxed text-base text-black">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-monica-803908.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-600 text-s font-medium title-font">
                <Link href='/specialties/tile'>Reed more...</Link>
                </h3>
                <h2 className="text-lg font-georgia text-black font-medium title-font mb-4">
                  Tile
                </h2>
                <p className="leading-relaxed text-base text-black ">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-thijsvdw-1094770.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-600 text-s font-medium title-font">
                  <Link href='/specialties/carpentry'>Reed more...</Link>
                </h3>
                <h2 className="text-lg font-georgia text-black font-medium title-font mb-4">
                  Carpentry
                </h2>
                <p className="leading-relaxed text-base text-black ">
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
