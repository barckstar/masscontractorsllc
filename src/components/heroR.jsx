import Image from "next/image";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsShieldShaded } from "react-icons/bs";

const heroR = ({ hidden,
  media,
  title,
  text,
  subTitle,
  text2,
  subTitle2, }) => {
  const isVideo = media.endsWith(".mp4");
  return (
    <div className="mt-10">
      <section className="text-gray-600 body-font">
        <div className="mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg font-georgia lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {!hidden &&
              (isVideo ? (
                <video
                  className="object-cover object-center rounded mx-auto"
                  width="250"
                  height="250"
                  autoPlay
                  muted
                  loop
                >
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  className="object-cover object-center rounded"
                  width={500}
                  height={500}
                  alt="hero"
                  src={media}
                />
              ))}
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font font-georgia sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
              {title}
            </h1>
            <h3 className="title-font font-georgia text-2xl font-light text-gray-900">
              {subTitle}
            </h3>
            <p className="leading-relaxed flex items-center">
              <HiOutlineTrophy color="#1570B6" size={150} className="mr-2" />
              {text}
            </p>
            <h3 className="mt-8 title-font font-georgia text-2xl font-light text-gray-900">
              {subTitle2}
            </h3>
            <p className="leading-relaxed flex items-center">
              <BsShieldShaded color="#3FF02D"  size={150} className="mr-2" />
              {text2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default heroR;
