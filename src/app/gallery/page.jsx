"use client";

export default function gallery() {
  return (
    <>
      <div className="lg:w-5/6 px-5 py-4 text-center mx-auto">
        <h1 className="font-contrax text-5xl font-medium text-[#9fe300] mt-40">
          Gallery
        </h1>
      </div>
      <div className="px-5 w-5/6 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <p className="text-white font-atpinko text-lg mx-auto mb-20">
          Our gallery is currently being updated. Please check back soon to see
          our latest projects and work samples.
        </p>
      </div>
    </>
  );
}
