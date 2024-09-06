"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { feedcard } from "../constants";

type FeedbackCardType = {
  className?: string;
};

const FeedCardSection: React.FC<FeedbackCardType> = ({ className }) => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateRow = (
      rowRef: React.RefObject<HTMLDivElement>,
      reverse = false
    ) => {
      const row = rowRef.current;
      if (row) {
        gsap.fromTo(
          row,
          { xPercent: reverse ? -200 : 0 },
          {
            xPercent: reverse ? 0 : -200,
            duration: 40, // Speed of the animation
            ease: "none", // Consistent speed
            repeat: -1, // Infinite loop
          }
        );
      }
    };

    animateRow(row1Ref);
    animateRow(row2Ref, true); // Reverse the direction for the second row
  }, []);

  return (
    <div
      className={`${className} relative flex flex-col overflow-hidden pt-20 w-full h-full`}
    >
      <div className="overflow-hidden">
        <div ref={row1Ref} className="flex gap-10">
          {/* Duplicate the cards for smooth looping */}
          {[...feedcard.slice(0, 3), ...feedcard.slice(0, 3)].map(
            (item, index) => (
              <div key={index} className="box h-[30%] w-[60%] flex-shrink-0">
                <Image
                  src={item}
                  alt={`image-${index}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
      <div className="overflow-hidden mt-10">
        <div ref={row2Ref} className="flex gap-10">
          {/* Duplicate the cards for smooth looping */}
          {[...feedcard.slice(3, 6), ...feedcard.slice(3, 6)].map(
            (item, index) => (
              <div key={index} className="box h-[30%] w-[60%] flex-shrink-0">
                <Image
                  src={item}
                  alt={`image-${index}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedCardSection;
