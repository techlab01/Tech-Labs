"use client";
import Image from "next/image";
import { reachImages } from "@/src/constants";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { reachMap } from "@/src/utils";

const Reach = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSection(
        (prevSection) => (prevSection + 1) % reachImages.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      gsap
        .fromTo(
          sectionRef.current,
          { opacity: 0, y: 50 }, // Start below
          { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" } // Move to position
        )
        .then(() => {
          gsap.to(sectionRef.current, {
            y: -50, // Move up
            opacity: 0,
            delay: 0.5, // Wait before moving up
            duration: 1,
            ease: "power3.in",
          });
        });
    }
  }, [currentSection]);

  const sectionData = reachImages[currentSection];

  return (
    <section className="bg-white common-padding w-full">
      <div className="screen-max-width">
        <div className="flex-center flex-col-reverse lg:flex-row w-full gap-20">
          <div className="flex-center w-full lg:w-[60%]">
            <Image
              src={reachMap}
              alt="map-reach"
              height={400}
              width={400}
              className="w-full h-full object-contain border rounded-3xl"
            />
          </div>
          <div className="flex flex-col items-start gap-6 w-full lg:w-[40%] relative overflow-hidden">
            <h1 className="text-orange header-1">Where our impacts thrived</h1>
            <div ref={sectionRef} className="flex flex-col items-start">
              <Image
                src={sectionData.icon}
                alt={sectionData.district}
                width={200}
                height={200}
              />
              <p className="header-1 text-black">{sectionData.district}</p>
            </div>
            <div className="flex items-center justify-start gap-10 w-full">
              <div className="text-orange header-1">
                100+
                <p className="text-dark text-1">Schools</p>
              </div>
              <div className="text-orange header-1">
                35,000+
                <p className="text-dark text-1">Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reach;
