import Image from "next/image";

const heroR = ({ hidden, media, title, text }) => {
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
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font font-georgia sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default heroR;
