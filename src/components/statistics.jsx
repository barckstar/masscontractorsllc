import { AiTwotoneHome } from "react-icons/ai";

const statistics = () => {
  return (
    <div>
      <section className="text-gray-600 pb-0 body-font">
        <div className="w-full pt-10 mx-auto">
          <div className="flex flex-wrap mx-auto items-center justify-center w-full mb-4">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
              <h1 className="sm:text-4xl font-bold px-4 font-georgia text-2xl title-font mb-4 text-gray-900">
                Building Dreams, Creating Realities 
              </h1>
              <p className="lg:w-full text-xl px-4 mx-auto leading-relaxed">
              We believe our experience and knowledge of the industry will be a great benefit to you and your family. We would be honored to remodel or build your dream into a reality. We look forward to hearing from you!
              </p>
            </div>
            <div className="mx-auto w-80">
              <div className="border-2 text-center border-gray-200 px-4 py-6 mx-4 rounded-lg">
                <AiTwotoneHome size={80} color='#000A82' className='flex mx-auto'/>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  +2.7k
                </h2>
                <p className="leading-relaxed">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default statistics;
