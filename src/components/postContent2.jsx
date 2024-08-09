"use client";
import React from "react";
import Link from "next/link";
import { Navbar2 } from "@/components/navbar2";
import data from "@/lib/data.json";
import { useParams } from "next/navigation";
import { Fade, Slide } from "react-awesome-reveal";
import Carrusel from "@/components/carrusel";

const PostContent2 = () => {
  const { slug } = useParams();

  if (!slug) {
    return <div>Loading...</div>;
  }

  const post =
    data.best_projects.find((post) => post.slug === slug) ||
    data.recent_projects.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Navbar2 />
      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <Slide direction="down" triggerOnce>
              <h1 className="title-font text-center font-georgia sm:text-5xl text-3xl mb-10 font-bold text-gray-900">
                {post.title}
              </h1>
            </Slide>
            <div className="rounded-lg overflow-hidden">
              <Fade>
                <p className="leading-relaxed text-justify text-xl mb-4">
                  {post.description != null ? post.description : ""}
                </p>
              </Fade>
            </div>
            <Fade delay={10}>
              <Carrusel />
            </Fade>
            <div className="rounded-lg text-justifys overflow-hidden">
              <Fade>
                <h1 className="title-font text-center font-georgia sm:text-3xl text-2xl mb-10 font-medium text-gray-700">
                  {post.subTitle != null ? post.subTitle : ""}
                </h1>
              </Fade>
            </div>
            <div className="rounded-lg text-justify overflow-hidden">
              <Fade>
                <p className="leading-relaxed text-xl mb-4">
                  {post.descriptionLarge != null ? post.descriptionLarge : ""}
                </p>
              </Fade>
            </div>
            <div className="rounded-lg text-justifys overflow-hidden">
              <Fade>
                <p className="leading-relaxed text-xl mb-4">
                  {post.descriptionLarge2 != null ? post.descriptionLarge2 : ""}
                </p>
              </Fade>
            </div>
            <div className="rounded-lg text-justifys overflow-hidden">
              <Fade>
                <h1 className="title-font text-center font-georgia sm:text-3xl text-2xl mt-10 font-medium text-gray-700">
                  {post.titleButton != null ? post.titleButton : ""}
                </h1>
              </Fade>
            </div>
            <Fade delay="30">
              <div className="flex justify-center">
                <Link href="/contact">
                  <button
                    className="my-9 px-16 py-8 text-2xl hero-button shadow-2xl hover:shadow-3xl"
                    style={{
                      fontSize: "2rem",
                      padding: "20px 100px",
                    }}
                  >
                    Let&apos;s Talk!!
                  </button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostContent2;
