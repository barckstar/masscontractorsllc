import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import data from "@/lib/data.json";

const contentSpec = () => {
  return (
    <section className="body-font mt-10">
      <div className="lg:w-5/6 px-5 py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.specialties.map((specialties, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <Slide delay={100*index} direction="up" triggerOnce>
                <Link href={specialties.link}>
                  <div className="h-full p-6 rounded-sm shadow-lg hover:shadow-2xl transition duration-300">
                    <Image
                      width={500}
                      height={500}
                      className="h-52 rounded w-full object-contain object-center mb-6"
                      src={specialties.image}
                      alt="content"
                    />
                    <h2 className="text-lg font-bold font-atpinko text-white font-semibold title-font mb-4 uppercase">
                      {specialties.title}
                    </h2>
                    <p className="leading-relaxed text-base text-white font-atpinko">
                      {specialties.description}
                    </p>
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
