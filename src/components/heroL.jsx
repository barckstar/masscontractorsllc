import Image from "next/image";
import { GiFamilyHouse } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";

const heroL = ({
  hidden,
  media,
  title,
  text,
  subTitle,
  text2,
  subTitle2,
}) => {
  const isVideo = media.endsWith(".mp4");
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font font-georgia sm:text-4xl text-4xl mb-6 font-bold text-gray-900">
              {title}
            <div className="h-1 w-full bg-green-400 rounded"></div>            
            </h1>            
            <h3 className="title-font font-georgia text-3xl font-light text-gray-900">
              {subTitle}
            </h3>
            <p className="leading-relaxed flex text-xl items-center">
              <GiFamilyHouse color="#9BD052" className="m-2 size-0 sm:size-52 md:size-0 lg:size-40"/>
              {text}
            </p>
            <h3 className="mt-8 title-font font-georgia text-3xl font-light text-gray-900">
              {subTitle2}
            </h3>
            <p className="leading-relaxed flex text-xl items-center">
              <GiWorld color="#9BD052" className="m-2 size-0 sm:size-52 md:size-0"/>
              {text2}
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {!hidden &&
              (isVideo ? (
                <video
                  className="object-cover object-center rounded mx-auto"
                  width="200"
                  height="150"
                  autoPlay
                  muted
                  loop
                >
                  <source src={media} type="video/mp4" />
                  <track src="/captions_en.vtt" kind="captions" srclang="en" label="english_captions"/>
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
        </div>
      </section>
    </>
  );
};

export default heroL;
