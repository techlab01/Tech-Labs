"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { atlLogo, pmShriLogo, techlabLogo } from "@/src/utils";
import {
  atlContent,
  buttonText,
  pmShriContent,
  urlList,
} from "@/src/constants";
import { useRouter } from "next/navigation";

const Collaborate = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      gsap.to(cardRefs.current, {
        duration: 1,
        width: (i) => (i === activeIndex ? "100%" : "20%"),
        ease: "power2.inOut",
      });
    }
  }, [activeIndex]);

  return (
    <section className="bg-white common-padding w-full">
      <div className="screen-max-width">
        <div className="flex flex-col justify-between items-center gap-10 w-full">
          <div className="flex-center flex-col gap-6 text-center w-full lg:w-3/5">
            <Image
              src={techlabLogo}
              alt="tech-lab"
              width={100}
              height={100}
              className="h-8 w-44"
            />
            <p className="text-1">
              We are proud to collaborate with new initiatives and flagship
              programs aimed at transforming schools across India into model
              institutions of excellence
            </p>
          </div>
          <div className="w-full gap-5 overflow-hidden hidden lg:flex">
            <div
              ref={(el) => {
                if (el) cardRefs.current[0] = el;
              }}
              className="bg-blue-light rounded-3xl h-full"
            >
              <div className="p-20 flex items-center gap-20 justify-between overflow-hidden">
                <Image
                  src={pmShriLogo}
                  alt="PM Shri"
                  width={100}
                  height={100}
                  className="h-24 w-44"
                />
                <div className="w-full flex items-start gap-6 flex-col">
                  <p className="text-orange header-2 w-full line-clamp-1">
                    {pmShriContent.title}
                  </p>
                  <p className="text-2 line-clamp-3">
                    {pmShriContent.description}
                  </p>
                  <button
                    className="primary-btn line-clamp-1"
                    onClick={() => router.push(urlList.pmShri)}
                  >
                    {buttonText.learnMore}
                  </button>
                </div>
              </div>
            </div>
            <div
              ref={(el) => {
                if (el) cardRefs.current[1] = el;
              }}
              className="bg-blue-light rounded-3xl h-full"
            >
              <div className="p-20 flex items-center gap-20 justify-between overflow-hidden">
                <Image
                  src={atlLogo}
                  alt="ATL Labs"
                  width={100}
                  height={100}
                  className="h-24 w-44"
                />
                <div className="w-full flex items-start gap-6 flex-col">
                  <p className="text-orange header-2 w-full line-clamp-1">
                    {atlContent.title}
                  </p>
                  <p className="text-2 line-clamp-3">
                    {atlContent.description}
                  </p>
                  <button
                    onClick={() => router.push(urlList.atl)}
                    className="primary-btn line-clamp-1"
                  >
                    {buttonText.learnMore}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full gap-10 flex flex-col lg:hidden">
            <div className="w-full flex items-start bg-blue-light gap-8 p-10 rounded-2xl flex-col">
              <Image
                src={pmShriLogo}
                alt="PM Shri"
                width={100}
                height={100}
                className="h-20 w-40"
              />
              <p className="text-2">{pmShriContent.description}</p>
              <button
                className="primary-btn line-clamp-1"
                onClick={() => router.push(urlList.pmShri)}
              >
                {buttonText.learnMore}
              </button>
            </div>
            <div className="w-full flex items-start bg-blue-light gap-8 p-10 rounded-2xl flex-col">
              <Image
                src={atlLogo}
                alt="ATL Labs"
                width={100}
                height={100}
                className="h-20 w-40"
              />
              <p className="text-2">{atlContent.description}</p>
              <button
                onClick={() => router.push(urlList.atl)}
                className="primary-btn line-clamp-1"
              >
                {buttonText.learnMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
