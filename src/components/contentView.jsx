"use client";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

const contentView = ({ title, projects = [], description, hidden }) => {
  return (
    <div className="w-full px-4 py-12 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-green-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="font-georgia text-gray-900 font-bold title-font text-3xl mb-2">
            {title}
          </h1>
          {description && (
            <p className="text-xl leading-relaxed">{description}</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <div key={index} className="p-4 md:w-1/3 sm:mb-0 rounded-lg shadow-lg hover:shadow-2xl">
            <Slide direction="up" delay={index * 300} triggerOnce>
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  alt={project.title}
                  className="object-contain rounded-lg object-center h-full w-full"
                  src={project.image}
                />
              </div>
            </Slide>
            <h2 className="text-2xl font-medium title-font text-gray-900 mt-5">
              {project.title}
            </h2>
            <p className="text-gl leading-relaxed mt-2 line-clamp-2 max-w-[100%]">
              {project.description}
            </p>
            {!hidden && (
              <Link
                href={project.link}
                className="text-green-500 hover:text-green-700 inline-flex text-xl items-center mt-3"
              >
                Learn More ...
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default contentView;
