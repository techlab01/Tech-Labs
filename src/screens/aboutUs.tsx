"use client";
import React, { useRef, useEffect } from "react";
import CustomSection from "../section/section";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

type AboutUsProps = {
  id: string;
};

const AboutUs: React.FC<AboutUsProps> = ({ id }) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const additionalY = { val: 0 };
    let offset = 0;
    const col = imageRef.current;

    if (col) {
      // Check if 'col' is not null
      const images = col.childNodes;

      // DUPLICATE IMAGES FOR LOOP
      images.forEach((image) => {
        let clone = image.cloneNode(true);
        col.appendChild(clone);
      });

      // SET ANIMATION
      images.forEach((item) => {
        if (item.parentElement) {
          // Check if 'item.parentElement' is not null
          let columnHeight = item.parentElement.clientHeight;

          gsap.to(item, {
            y: "-=" + Number(columnHeight / 2),
            duration: 40,
            repeat: -1,
            ease: "none",
            modifiers: {
              y: gsap.utils.unitize((y) => {
                offset += additionalY.val;
                y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
                return y;
              }),
            },
          });
        }
      });
    }
  }, []);

  return (
    <CustomSection
      className={`px-horizontal flex flex-col lg:flex-row justify-center h-[150vh] md:h-screen gap-10 lg:gap-20`}
    >
      <div
        id={id}
        className="flex w-full lg:w-1/2 justify-center text-justify py-10 md:py-20 text-base md:text-2xl flex-col gap-4 lg:gap-10 items-start"
      >
        <p className="text-dark-blue font-bold text-3xl md:text-6xl">
          About <span className="text-dark-orange">Us</span>
        </p>
        <p>
          We enhance educational experiences with innovative solutions,
          providing STEM kits, robotics, ATL labs, ICT labs, smart classrooms,
          vocational labs, and science labs (Physics, Chemistry, Biology). We
          also supply essential materials for educational institutions, ensuring
          students have access to the latest tools and technologies for
          comprehensive learning and development.
        </p>
        <p>
          Tech Lab will help PM SHRI schools achieve their vision by providing
          state-of-the-art labs and innovative educational tools that foster
          lifelong learning, critical thinking, and adaptability, thereby
          nurturing engaged, productive, and contributing citizens in line with
          the National Education Policy 2020.
        </p>
      </div>
      <div className="wrapper relative mt-4 overflow-hidden flex flex-col w-full lg:w-1/2 gap-10 justify-center items-start">
        <div ref={imageRef} className="boxes flex flex-col w-full gap-10">
          {images.map((item, index) => (
            <div key={index} className="h-full w-full">
              <Image
                src={item}
                key={index}
                alt="image"
                width={200}
                height={200}
                className="h-full w-full object-contain rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </CustomSection>
  );
};

export default AboutUs;
