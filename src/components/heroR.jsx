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
          <div className="lg:max-w-lg font-georgia lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 md:order-1 order-2">
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
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center md:order-2 order-1">
            <h1 className="title-font font-georgia sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
              {title}
            </h1>
            <h3 className="title-font font-georgia text-3xl font-light text-gray-900">
              {subTitle}
            </h3>
            <div className="flex flex-row items-center text-xl">
              <div className="m-2">
                <HiOutlineTrophy color="#9BD052" className="size-14" />
              </div>
              <div className="m-2">{text}</div>
            </div>
            <h3 className="mt-8 title-font font-georgia text-3xl font-light text-gray-900">
              {subTitle2}
            </h3>
            <div className="flex flex-row items-center text-xl">
              <div className="m-2">
                <BsShieldShaded color="#9BD052" className="size-14" />
              </div>
              <div className="m-2">{text2}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default heroR;
