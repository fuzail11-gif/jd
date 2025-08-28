import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slide1 from "../../public/slide1.png";
import slide2 from "../../public/slide2.png";
import slide3 from "../../public/slide3.png";
import slide4 from "../../public/slide3.png";
import slide5 from "../../public/slide3.png";
import slide6 from "../../public/slide3.png";

const Banner = () => {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3); // default desktop

  // Adjust slides per view on resize
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // tablet
      } else {
        setSlidesPerView(3); // desktop
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + slidesPerView >= images.length ? 0 : prev + slidesPerView
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev - slidesPerView < 0
        ? images.length - (images.length % slidesPerView || slidesPerView)
        : prev - slidesPerView
    );
  };

  return (
    <div className="relative w-full mx-auto my-5 h-[350px] overflow-hidden shadow-lg">
      {/* Slide Container */}
      <div
        className="flex h-full transition-transform duration-700"
        style={{ transform: `translateX(-${(current / slidesPerView) * 100}%)` }}
      >
        {/* Group images in chunks */}
        {Array.from({ length: Math.ceil(images.length / slidesPerView) }).map(
          (_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex w-full flex-shrink-0 gap-4 px-2"
            >
              {Array.from({ length: slidesPerView }).map((_, i) => {
                const imgIndex = groupIndex * slidesPerView + i;
                return (
                  images[imgIndex] && (
                    <div key={imgIndex} className="flex-1 h-[350px]">
                      <img
                        src={images[imgIndex]}
                        alt={`slide-${imgIndex}`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  )
                );
              })}
            </div>
          )
        )}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/70"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/70"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {Array.from({ length: Math.ceil(images.length / slidesPerView) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index * slidesPerView)}
              className={`w-3 h-3 rounded-full ${
                Math.floor(current / slidesPerView) === index
                  ? "bg-white"
                  : "bg-gray-400"
              }`}
            ></button>
          )
        )}
      </div>
    </div>
  );
};

export default Banner;
