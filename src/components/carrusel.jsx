"use client";
import React, { useState } from "react";
import data from "../lib/data.json";
import { useParams } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Carrusel = () => {  
  const { slug } = useParams();

  const dataImg = data.best_projects.find((post) => post.slug === slug) ||
  data.recent_projects.find((post) => post.slug === slug);


  const carruselImages = dataImg.imgCarrusel;

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

  return (
    <div className="max-w-[1400px] h-[790px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${carruselImages[currentItem]?.img})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
      >
        <div 
          className="absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full bg-black/20 text-white cursor-pointer"
          onClick={prevSlider}
        >
          <BiChevronLeft size={40} />
        </div>
        <div 
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full bg-black/20 text-white cursor-pointer"
          onClick={nextSlider}
        >
          <BiChevronRight size={40} />
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
