"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  leftArrowIcon,
  rightArrowIcon,
  quotesIcon,
  animateSingleCard,
} from "../utils";
import { feedbackDetails } from "../constants";

type carouselTypes = {
  className?: string;
};

const FeedbackCarousel: React.FC<carouselTypes> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  const rotateCarousel = (index: number) => {
    setCurrentIndex(index);
    resetIdleTimer();
  };

  const resetIdleTimer = () => {
    if (idleTimeout.current) {
      clearTimeout(idleTimeout.current);
    }
    idleTimeout.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackDetails.length);
    }, 10000);
  };

  useEffect(() => {
    animateSingleCard(imageRefs.current, currentIndex);
    resetIdleTimer();
  }, [currentIndex]);

  return (
    <div className={`${className} flex-center h-full w-full flex-col gap-10`}>
      <div className="relative flex-center z-0 h-[50vh] w-full md:w-1/2">
        {feedbackDetails.map((feedback, index) => (
          <div
            key={feedback.id}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            className={`absolute flex flex-col justify-between items-center z-0 rounded-xl h-[50vh] w-[90%] border border-blue p-8 text-center`}
          >
            <p className="mt-16 text-base text-left sm:text-lg line-clamp-11">
              {feedback.description}
            </p>
            <div className="flex-center text-blue flex-col mt-4">
              <p className="text-xl sm:text-2xl">{feedback.name}</p>
              <p className="text-base sm:text-xl">{feedback.school}</p>
            </div>
          </div>
        ))}
        <Image
          src={quotesIcon}
          alt="quotes-icon"
          width={20}
          height={20}
          className="h-20 w-20 absolute -top-10 z-10 transform -translate-x-1/2 left-1/2"
        />
      </div>

      <div className="flex-center mt-4 cursor-pointer gap-4">
        <Image
          src={leftArrowIcon}
          alt="left-icon"
          width={10}
          height={10}
          className="h-8 w-8"
          onClick={() =>
            rotateCarousel(
              (currentIndex - 1 + feedbackDetails.length) %
                feedbackDetails.length
            )
          }
        />
        <div className="flex-center">
          {feedbackDetails.map((_, index) => (
            <div
              key={index}
              onClick={() => rotateCarousel(index)}
              className={`mx-1 h-2.5 w-2.5 rounded-full ${
                index === currentIndex ? "bg-orange" : "bg-blue"
              }`}
            />
          ))}
        </div>
        <Image
          src={rightArrowIcon}
          alt="right-icon"
          width={10}
          height={10}
          className="h-8 w-8"
          onClick={() =>
            rotateCarousel(
              (currentIndex + 1 + feedbackDetails.length) %
                feedbackDetails.length
            )
          }
        />
      </div>
    </div>
  );
};

export default FeedbackCarousel;
