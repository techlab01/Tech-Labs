"use client";
import Image from "next/image";
import { heroBg, heroImg, mobileBg } from "@/src/utils";
import { useRouter } from "next/navigation";
import { buttonText, urlList } from "@/src/constants";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="w-full relative flex-center h-screen common-padding z-10">
      <Image
        src={heroBg}
        alt="hero-bg"
        className="h-full w-full hidden lg:block absolute object-cover top-0 left-0 z-0"
      />
      <Image
        src={mobileBg}
        alt="hero-mobile-bg"
        className="h-full w-full block lg:hidden absolute object-cover top-0 left-0 z-0"
      />

      <div className="h-5/6 w-full z-20 flex flex-col items-start justify-between md:flex-row md:items-center screen-max-width relative">
        {/* Increased z-index to 20 for the content */}
        <div className="w-full md:w-1/2">
          <p className="title-text w-full">
            Learn faster.
            <br />
            Stay motivated.
            <br />
            Study smarter.
          </p>
          <p className="text-base w-full py-4">
            Empowering Minds, Shaping Futures.
          </p>
          <button
            className="primary-btn z-30" // Adjusted z-index to ensure button is on top
            onClick={() => router.push(urlList.services)}
          >
            {buttonText.learnMore}
          </button>
        </div>

        <div className="w-full md:w-1/2 flex-center p-10">
          <Image
            src={heroImg}
            alt="hero-vector"
            width={600}
            height={600}
            className="w-full h-full md:h-3/4 md:w-3/4 object-contain md:mt-[20%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
