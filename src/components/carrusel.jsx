"use client";
import React, { useState } from "react";
import data from "../lib/data.json";
import { useParams } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Carrusel() {  
  const { slug } = useParams();

  const dataImg = data.best_projects.find((post) => post.slug === slug) ||
  data.recent_projects.find((post) => post.slug === slug);

  const carruselImages = dataImg?.imgCarrusel || [];

  const [currentItem, setCurrentItem] = useState(0);

  const prevSlider = () => { 
    const isFirstSlide = currentItem === 0;
    const newIndex = isFirstSlide ? carruselImages.length - 1 : currentItem - 1;
    setCurrentItem(newIndex);
  };

  const nextSlider = () => { 
    const isLastSlide = currentItem === carruselImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentItem + 1;
    setCurrentItem(newIndex);
  };

  if (!dataImg || !carruselImages.length) {
    return null;
  }

  return (
    <div className="max-w-[650] h-[650px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${carruselImages[currentItem]?.img})` }}
        className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500 relative"
      >
        <div 
          className="absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full bg-black/20 text-white hover:bg-black/40 cursor-pointer"
          onClick={prevSlider}
          aria-label="Previous Slide"
        >
          <BiChevronLeft size={40} className=""/>
        </div>
        <div 
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full bg-black/20 hover:bg-black/40 text-white cursor-pointer"
          onClick={nextSlider}
          aria-label="Next Slide"
        >
          <BiChevronRight size={40} />
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
