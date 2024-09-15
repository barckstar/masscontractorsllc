"use client";
import Image from "next/image";
import { Navbar2 } from "@/components/navbar2";
import data from "@/lib/data.json";
import { useParams } from "next/navigation";
import { Fade, Slide } from "react-awesome-reveal";

const PostContent = () => {
  const { slug } = useParams();

  if (!slug) {
    return <div>Loading...</div>;
  }

  const post =
    data.specialties.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Navbar2 />
      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <Slide direction="down" triggerOnce>
              <h1 className="title-font text-center font-georgia sm:text-4xl text-3xl mb-10 font-medium text-gray-900">
                {post.title}
              </h1>
            </Slide>
            <div className="rounded-lg overflow-hidden">
              <Fade triggerOnce>
                <p className="leading-relaxed text-lg mb-4">
                  {post.descriptionLarge}
                </p>
              </Fade>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <Slide direction="left" triggerOnce>
                  <Image
                    alt="content"
                    className="object-cover object-center"
                    width={500}
                    height={500}
                    src={post.image}
                  />
                </Slide>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <Fade triggerOnce>
                  <p className="leading-relaxed text-lg mb-5">
                    {post.descriptionLarge2}
                  </p>                    
                    {post.list && post.list.length > 0 &&(
                      <ul>
                        {post.list.map((list, index) => (
                          <li className="leading-relaxed text-lg" key={index}>{list.item}</li>
                        ))}
                      </ul>
                    )}
                </Fade>
              </div>
            </div>
            <Fade delay="10">
            <div className="lg:w-5/6 px-5 py-3 my-16 mx-auto bg-green-200 rounded-sm shadow-lg hover:bg-green-400 transition duration-300">
                <div className="text-center p-3 mx-auto">
                  <p className="text-2xl font-bold font-georgia text-gray-900">
                    If you can dream it, we can do it!
                  </p>
                </div>
              </div>
            </Fade>
            <h1 className="title-font text-center mt-10 font-georgia sm:text-4xl text-3xl mb-10 font-medium text-gray-900">
              Gallery
            </h1>
            <div className="flex flex-wrap mx-auto justify-center">
              {post.imgCarrusel.map((image, index) => (
                <div
                  key={index}
                  className="m-5 flex items-center justify-center"
                >
                  <Fade delay={index * 5}>
                    <div>
                      <Image
                        alt="content"
                        className=" object-center"
                        width={250}
                        height={250}
                        src={image.img}
                      />
                    </div>
                  </Fade>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostContent;
