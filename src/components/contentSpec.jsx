import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import data from "@/lib/data.json";

const contentSpec = () => {
  return (
    <section className="body-font mt-10">
      <div className="lg:w-5/6 px-5 py-4 mx-auto">
        <div className="flex flex-wrap w-full mb-5 p-5 rounded-lg">
          <div className="lg:w-1/4 w-full mb-3 lg:mb-0">
            <h1 className="sm:text-4xl font-georgia text-2xl font-bold title-font mb-2 text-black">
              Specialties
            </h1>
            <div className="h-1 w-20 bg-green-400 rounded"></div>
          </div>
          <div className="mx-auto w-9/12">
            <p className="lg:w-2/3 w-full text-black mx-auto">
              All of our work is professionally done and we pride ourselves on
              our craftsmanship.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.specialties.map((specialties, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <Slide delay={100*index} direction="up" triggerOnce>
                <Link href={specialties.link}>
                  <div className="h-full p-6 rounded-sm shadow-lg hover:shadow-2xl transition duration-300">
                    <Image
                      width={500}
                      height={500}
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={specialties.image}
                      alt="content"
                    />
                    <h2 className="text-lg font-georgia text-black font-semibold title-font mb-4 uppercase">
                      {specialties.title}
                    </h2>
                    <p className="leading-relaxed text-base text-black">
                      {specialties.description}
                    </p>
                    <h3 className="tracking-widest text-green-600 text-s mt-2 font-medium title-font">
                      Learn More...
                    </h3>
                  </div>
                </Link>
              </Slide>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default contentSpec;
