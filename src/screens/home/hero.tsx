import Image from "next/image";
import { heroBg } from "@/src/utils";

const Hero = () => {
  return (
    <>
      <section className="w-full relative flex-center nav-height common-padding z-10 overflow-hidden">
        {/* Background Image */}
        <Image
          src={heroBg}
          alt="hero-bg"
          className="h-full w-full absolute object-cover top-0 left-0 z-0"
        />

        <div className="h-5/6 w-full z-10 flex flex-col items-start justify-between md:flex-row md:items-center screen-max-width relative">
          {/* Content */}
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
            <button className="bg-blue px-8 py-2 text-white text-base rounded-xl shadow-sm">
              Learn More
            </button>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 flex-center p-10">
            <Image
              src={"/svg/Hero-image.svg"}
              alt="hero-vector"
              width={500}
              height={500}
              className="w-full h-full md:h-3/4 md:w-3/4 object-contain md:mt-[20%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
