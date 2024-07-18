"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { animateCarousel, animateSingleCard, services } from "../utils";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMinimized, setIsMinimized] = useState(false);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  const getVisibleIndices = (index: number) => {
    const length = services.length;
    return [(index - 1 + length) % length, index, (index + 1) % length];
  };

  const rotateCarousel = (index: number) => {
    setCurrentIndex(index);
    resetIdleTimer();
  };

  const resetIdleTimer = () => {
    if (idleTimeout.current) {
      clearTimeout(idleTimeout.current);
    }
    idleTimeout.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMinimized(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const visibleIndices = getVisibleIndices(currentIndex);
    if (isMinimized) {
      animateSingleCard(imageRefs.current, currentIndex);
    } else {
      animateCarousel(imageRefs.current, visibleIndices);
    }
    resetIdleTimer();
  }, [currentIndex, isMinimized]);

  return (
    <div
      className={`relative flex h-screen w-full flex-col items-center justify-center`}
    >
      <p className="text-dark-blue font-bold text-center text-3xl md:text-6xl">
        Our Services
      </p>
      <div
        className={`relative flex h-[70vh] w-full items-center justify-center overflow-hidden`}
        style={{ perspective: "1000px" }}
      >
        {services.map((news, index) => (
          <div
            key={news.id}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            onClick={() => rotateCarousel(index)}
            className={`absolute overflow-hidden rounded-lg shadow-lg`}
            style={{
              width: isMinimized
                ? index === currentIndex
                  ? "300px"
                  : "200px"
                : index === currentIndex
                ? "415px"
                : "300px",
              height: index === currentIndex ? "415px" : "375px",
              boxShadow:
                index === currentIndex ? "0 0 30px rgba(0, 0, 0, 0.3)" : "none",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={news.src}
              alt={news.title}
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
            <div
              className={`absolute bottom-0 left-0 right-0 flex flex-col bg-white p-4`}
            >
              <h2 className="font-bold text-center">{news.title}</h2>
            </div>
          </div>
        ))}
        {isMinimized && (
          <>
            <Image
              src={"/left.svg"}
              alt="left icon"
              width={20}
              height={20}
              className="absolute -left-2 top-1/2 h-10 w-10 cursor-pointer"
              onClick={() =>
                rotateCarousel(
                  (currentIndex - 1 + services.length) % services.length
                )
              }
            />
            <Image
              src={"/right.svg"}
              alt="right icon"
              width={20}
              height={20}
              className="absolute -right-2 top-1/2 h-10 w-10 cursor-pointer"
              onClick={() =>
                rotateCarousel(
                  (currentIndex - 1 + services.length) % services.length
                )
              }
            />
          </>
        )}
      </div>
      <div className="mt-4 flex justify-center">
        {services.map((_, index) => (
          <div
            key={index}
            onClick={() => rotateCarousel(index)}
            className={`mx-1 h-2.5 w-2.5 cursor-pointer rounded-full ${
              index === currentIndex ? "bg-dark-blue" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
