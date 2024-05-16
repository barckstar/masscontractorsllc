import Image from "next/image";

const hero = ({ hidden }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="mx-auto flex px-5 py-4 items-center justify-center flex-col">
          {!hidden && (
            <Image
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="/606x366.png"
              width={500}
              height={500}
            />
          )}
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font font-georgia sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
