import Image from "next/image";

const contectSer = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="lg:w-5/6 mt-10 px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos;t heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/2 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <Image
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/606x366.png"
                  width={500}
                  height={500}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div class="xl:w-1/2 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <Image
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/606x366.png"
                  width={500}
                  height={500}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div class="xl:w-1/2 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <Image
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/606x366.png"
                  width={500}
                  height={500}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div class="xl:w-1/2 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <Image
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/606x366.png"
                  width={500}
                  height={500}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contectSer;
