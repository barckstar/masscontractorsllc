import Image from "next/image";
import data from "@/lib/data.json"
import Link from "next/link";

const contectSer = () => {
  return (
    <section className="text-gray-600 body-font bg-image-service">
      <div className=" w-5/6 px-5 py-24 mx-auto bg-white">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">            
          <Image src='/IMG_0271.png' alt="Service Image" width={400} height={200} className="mb-20 shadow-black"/>
            <h1 className="font-medium title-services mb-2 text-gray-900">
              Our Services
            </h1>
            <div className="h-1 w-20 bg-blue-800 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.contect_services.map((service, index) => (
            <div key={index} className="xl:w-1/2 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="rounded w-full object-cover object-center mb-6">
                  <Image src={service.img} alt="Service Image" width={300} height={200} className="mx-auto"/>
                </div>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  <Link href='/contact'>Contact for more info...</Link>
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {service.title}
                </h2>
                <p className="leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default contectSer;
