import Image from "next/image";
import data from "@/lib/data.json"
import Link from "next/link";

const contectSer = () => {
  return (
    <section className="text-gray-600 body-font bg-image-service">
      <div className="w-5/6 px-5 py-10 mx-auto bg-white">
        <div className="flex flex-wrap w-full mb-5">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">            
            <h1 className="font-bold font-georgia title-services mb-2 text-gray-900">
              Our Services
            </h1>
            <div className="h-1 w-20 bg-blue-800 rounded"></div>
          </div>
          <div className="lg:w-1/2 w-full mb-0 ">          
          </div>  
        </div>
        <div className="flex flex-wrap -m-4">
          {data.contect_services.map((service, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="rounded w-full h-40 overflow-hidden mb-6"> {/* Modificado */}
                <Image src={service.img} alt="Service Image" layout="responsive" width={300} height={200} className="mx-auto"/>
              </div>
              <h2 className="text-lg font-georgia text-gray-900 font-medium title-font mb-2">
                {service.title}
              </h2>
              <p className="leading-relaxed text-base mb-2">
                {service.description}
              </p>
              <h3 className="tracking-widest text-green-600 text-s font-medium title-font">
                <Link href='/contact'>Contact for more info...</Link>
              </h3>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default contectSer;
