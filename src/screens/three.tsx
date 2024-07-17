"use client";
import React, { useRef } from "react";
import CustomSection from "../section/section";
import { PADDING } from "../utils";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const images = [
  "/aboutImage/1.jpeg",
  "/aboutImage/2.jpeg",
  "/aboutImage/3.jpeg",
  "/aboutImage/4.jpeg",
  "/aboutImage/5.jpeg",
  "/aboutImage/6.jpeg",
  "/aboutImage/7.jpeg",
  "/aboutImage/8.jpeg",
  "/aboutImage/9.jpeg",
  "/aboutImage/10.jpeg",
  "/aboutImage/12.jpeg",
  "/aboutImage/13.jpeg",
  "/aboutImage/14.jpeg",
  "/aboutImage/15.jpeg",
];

const loopedImages = [...images, ...images];

const Three = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const title = gsap.from(".titleParallax", {
        duration: 2,
        opacity: 0,
        yPercent: 50,
        ease: "circ",
        delay: 0,
        stagger: 0.06,
      });

      if (container) {
        const totalHeight = container.scrollHeight / 2; // Total height of half of the images
        gsap.set(container, {
          y: 0,
        });
        gsap.to(container, {
          duration: 20,
          ease: "none",
          y: -totalHeight,
          modifiers: {
            y: gsap.utils.unitize((y) => parseFloat(y) % totalHeight),
          },
          repeat: -1,
        });
      }
      return () => {
        title.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <CustomSection
      className={`${PADDING.horizontalPadding} ${PADDING.verticalPadding} flex flex-col lg:flex-row justify-center h-screen gap-10 lg:gap-20`}
    >
      <div className="flex w-full lg:w-1/2 justify-center text-xl flex-col gap-4 lg:gap-10 items-center">
        <p className="text-base lg:text-xl">
          We enhance educational experiences with innovative solutions,
          providing STEM kits, robotics, ATL labs, ICT labs, smart classrooms,
          vocational labs, and science labs (Physics, Chemistry, Biology). We
          also supply essential materials for educational institutions, ensuring
          students have access to the latest tools and technologies for
          comprehensive learning and development.
        </p>
        <p className="text-base lg:text-xl">
          Tech Lab will help PM SHRI schools achieve their vision by providing
          state-of-the-art labs and innovative educational tools that foster
          lifelong learning, critical thinking, and adaptability, thereby
          nurturing engaged, productive, and contributing citizens in line with
          the National Education Policy 2020.
        </p>
      </div>
      <div className="wrapper relative mt-4 overflow-hidden flex flex-col w-full lg:w-1/2 gap-10 justify-center items-start">
        <div
          ref={containerRef}
          className="boxes flex flex-col w-full space-y-4 lg:space-y-9"
        >
          {loopedImages.map((item, index) => (
            <Image
              src={item}
              key={index}
              alt="image"
              width={200}
              height={200}
              className="h-full w-full object-contain rounded-3xl"
            />
          ))}
        </div>
      </div>
    </CustomSection>
  );
};

export default Three;
