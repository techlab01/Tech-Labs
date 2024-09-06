"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { aboutPageImages, buttonText, urlList } from "@/src/constants";
import { homeContent, homeHeader } from "@/src/constants";
import CommonSection from "@/src/section/common";

const AboutUs = () => {
  const router = useRouter();
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const [currentImages, setCurrentImages] = useState<string[]>(
    aboutPageImages.slice(0, 5)
  );

  useEffect(() => {
    const flipRandomImage = async () => {
      const cardIndex = Math.floor(Math.random() * imageRefs.current.length);
      const ref = imageRefs.current[cardIndex];

      if (!ref) return;

      // Decide randomly whether to flip vertically or horizontally
      const flipDirection = Math.random() > 0.5 ? "Y" : "X"; // Randomly choose between X or Y axis

      // First flip animation
      await gsap.to(ref, {
        [`rotate${flipDirection}`]: 90, // Dynamically set the axis of rotation
        duration: 0.3,
        onComplete: () => {
          const newImages = [...currentImages];
          let newImage;

          // Ensure new image is not already in the current images
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

      // Second flip animation (back to original state)
      await gsap.to(ref, {
        [`rotate${flipDirection}`]: 0, // Dynamically set the axis of rotation
        duration: 0.3,
      });
    };

    // Set interval to flip images periodically
    const intervalId = setInterval(() => {
      flipRandomImage();
    }, 2000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [currentImages]);

  return (
    <CommonSection
      header={homeHeader.aboutUs}
      content={homeContent.aboutUs}
      buttonText={buttonText.learnMore}
      onBtnClick={() => router.push(urlList.aboutUs)}
    >
      <div className="grid gap-4 grid-cols-3">
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
    </CommonSection>
  );
};

export default AboutUs;
