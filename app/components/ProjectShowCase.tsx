"use client"
import React, { useState } from "react";
import Image from "next/image";
import StarIcon from "../icons/StarIcon";

const projectImages = [
  {
    src: "/images/window-1.jpg",
    alt: "Modern building with glass facade",
  },
  {
    src: "/images/window-2.jpg",
    alt: "Abstract modern building facade",
  },
  {
    src: "/images/window-3.jpg",
    alt: "Wooden modern architecture",
  },
  {
    src: "/images/window-4.jpg",
    alt: "Another modern building",
  },
  {
    src: "/images/project5.jpg",
    alt: "Contemporary structure",
  },
  {
    src: "/images/project6.jpg",
    alt: "Geometric building design",
  },
];

const ProjectShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = projectImages.length;
  const visibleImages = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages,
    );
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        <div className="flex flex-col lg:col-span-2">
          <div className="relative mb-6">
            <div className="flex space-x-4 overflow-hidden rounded-xl">
              {projectImages
                .slice(currentIndex, currentIndex + visibleImages)
                .map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-1/3 min-w-[200px] h-48 rounded-xl overflow-hidden shadow-sm"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              {projectImages.length < visibleImages &&
                projectImages
                  .slice(0, visibleImages - projectImages.length)
                  .map((image, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className="flex-shrink-0 w-1/3 min-w-[200px] h-48 rounded-xl overflow-hidden shadow-sm"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center text-gray-600 text-sm">
                <span>{`0${currentIndex + 1}`}</span>
                <span className="mx-1">/</span>
                <span>{`0${totalImages}`}</span>
                <div className="w-16 h-1 bg-gray-200 rounded-full ml-3 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-gray-500 rounded-full transition-all duration-300 ease-out"
                    style={{
                      width: `${((currentIndex + 1) / totalImages) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handlePrev}
                  className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Serenity Haven: Embracing <br />
            Nature in Architecture
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our architecture embraces a nature-centric design, weaving together
            organic materials—wood, stone, and natural light—to cultivate a
            serene and uplifting atmosphere.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl">
          <div className="w-full h-72 rounded-xl overflow-hidden mb-8 shadow-md">
            <Image
              src="/images/city-2.jpg"
              alt="City overview with colorful buildings"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex justify-around w-full text-center mb-8">
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-1">200+</p>
              <p className="text-gray-500 text-sm">Masive Design</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-1">350+</p>
              <p className="text-gray-500 text-sm">Happy Client</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-1">1200+</p>
              <p className="text-gray-500 text-sm">Project Finished</p>
            </div>
          </div>

          <div className="flex space-x-4 w-full justify-center">
            <button className="flex items-center bg-white border-2 border-gray-800 text-gray-800 py-3 px-6 rounded-2xl shadow-sm hover:bg-gray-50 transition-colors duration-300 w-1/4">
              <StarIcon />
              4.8
            </button>
            <button className="bg-white border-2 border-gray-800 text-gray-800 text-2xl py-3 px-6 rounded-2xl shadow-sm hover:bg-gray-50 transition-colors duration-300 w-full">
              See Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;