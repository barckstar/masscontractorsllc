import Image from "next/image";
import Link from "next/link";

const contentView = ({ title }) => {
  return (
    <>
      <div className="w-full px-4 py-12 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-green-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 font-georgia text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
              {title}
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                width={500}
                height={500}
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/606x366.png"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Shooting Stars
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <Link
              href="/projects/post1"
              className="text-green-500 inline-flex items-center mt-3"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                width={500}
                height={500}
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/606x366.png"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              The Catalyzer
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <Link
              href="/projects/post2"
              className="text-green-500 inline-flex items-center mt-3"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                width={500}
                height={500}
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/606x366.png"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              The 400 Blows
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <Link
              href="/projects/post3"
              className="text-green-500 inline-flex items-center mt-3"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default contentView;
