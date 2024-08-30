"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { aboutPageImages } from "@/src/constants/images/aboutUs";

const AboutUs = () => {
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const [currentImages, setCurrentImages] = useState<string[]>(
    aboutPageImages.slice(0, 5)
  );

  useEffect(() => {
    const flipRandomImage = async () => {
      const cardIndex = Math.floor(Math.random() * imageRefs.current.length);
      const ref = imageRefs.current[cardIndex];

      if (!ref) return;

      await gsap.to(ref, {
        rotateY: 90,
        duration: 0.3,
        onComplete: () => {
          const newImages = [...currentImages];
          let newImage;

          do {
            newImage =
              aboutPageImages[
                Math.floor(Math.random() * aboutPageImages.length)
              ];
          } while (newImages.includes(newImage));

          newImages[cardIndex] = newImage;
          setCurrentImages(newImages);
          ref.querySelector("img")?.setAttribute("src", newImage);
        },
      });

      await gsap.to(ref, {
        rotateY: 0,
        duration: 0.3,
      });
    };

    const intervalId = setInterval(() => {
      flipRandomImage();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentImages]);

  return (
    <section className="bg-white common-padding w-full">
      <div className="screen-max-width">
        <div className="flex-center flex-col lg:flex-row w-full gap-20">
          <div className="w-full flex items-start gap-6 flex-col lg:w-1/2">
            <p className="text-orange header-1 w-full">About us</p>
            <p className="text-1 w-full">
              We enhance educational experiences with innovative solutions,
              providing STEM kits, robotics, ATL labs, ICT labs, smart
              classrooms, vocational labs, and science labs. We also supply
              essential materials for educational institutions, ensuring
              students have access to the latest tools and technologies.
            </p>
            <button className="bg-blue px-8 py-2 text-white text-base rounded-xl shadow-sm">
              Learn More
            </button>
          </div>

          <div className="w-full lg:w-1/2 p-4 grid gap-4 grid-cols-3">
            {/* Top Row */}
            <div
              ref={(el) => {
                if (el) imageRefs.current[0] = el;
              }}
              className="relative w-full h-48 rounded-3xl shadow-lg"
            >
              <Image
                src={currentImages[0]}
                alt="grid-image-1"
                height={300}
                width={300}
                className="rounded-3xl h-48 w-full object-cover"
              />
            </div>
            <div
              ref={(el) => {
                if (el) imageRefs.current[1] = el;
              }}
              className="relative w-full h-48 rounded-3xl shadow-lg col-span-2"
            >
              <Image
                src={currentImages[1]}
                alt="grid-image-2"
                height={300}
                width={300}
                className="rounded-3xl h-48 w-full object-cover"
              />
            </div>

            {/* Middle Row */}
            <div
              ref={(el) => {
                if (el) imageRefs.current[2] = el;
              }}
              className="relative w-full h-48 md:h-full rounded-3xl shadow-lg col-span-2"
            >
              <Image
                src={currentImages[2]}
                alt="grid-image-3"
                height={300}
                width={300}
                className="rounded-3xl h-48 w-full object-cover"
              />
            </div>
            <div
              ref={(el) => {
                if (el) imageRefs.current[3] = el;
              }}
              className="relative w-full h-48 rounded-3xl shadow-lg"
            >
              <Image
                src={currentImages[3]}
                alt="grid-image-4"
                height={300}
                width={300}
                className="rounded-3xl h-48 w-full object-cover"
              />
            </div>

            {/* Bottom Row */}
            <div
              ref={(el) => {
                if (el) imageRefs.current[4] = el;
              }}
              className="relative w-full h-48 rounded-3xl shadow-lg col-span-3"
            >
              <Image
                src={currentImages[4]}
                alt="grid-image-5"
                height={300}
                width={300}
                className="rounded-3xl h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
