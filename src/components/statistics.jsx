import { AiTwotoneHome } from "react-icons/ai";

const statistics = () => {
  return (
    <div>
      <section className="text-gray-600 pb-0 body-font">
        <div className="w-full pt-10 mx-auto">
          <div className="flex flex-wrap text-center items-center justify-center w-full mb-4">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <h1 className="sm:text-3xl font-georgia text-2xl font-medium title-font mb-4 text-gray-900">
                Master Cleanse Reliac Heirloom
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven&apostt heard of them man bun deep jianbing selfies
                heirloom prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="lg:max-w-lg mx-auto items-center justify-center lg:w-full md:w-1/2 w-5/6 mb-2 md:mb-0">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <AiTwotoneHome size={80} color='#000A82' className='flex mx-auto'/>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Proyects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default statistics;
