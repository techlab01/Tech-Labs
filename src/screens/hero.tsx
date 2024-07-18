"use client";
import React from "react";
import CustomSection from "../section/section";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <CustomSection
      className={`px-horizontal py-10 flex flex-col items-start lg:flex-row lg:items-center justify-center lg:h-screen h-full w-full gap-10 lg:gap-20`}
    >
      <div className="flex flex-col w-full lg:w-[30%] gap-2 items-start">
        <div className="flex gap-2 py-5 lg:hidden">
          <button
            onClick={() => scrollToSection("about-us")}
            className="bg-dark-blue px-6 py-3 text-white text-xs rounded-full"
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="bg-dark-blue px-6 py-3 text-white text-xs rounded-full"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-dark-blue px-6 py-3 text-white text-xs rounded-full"
          >
            Contact
          </button>
        </div>
        <Image src={"/techlablogo.svg"} alt="logo" width={400} height={400} />
        <div className="text-3xl font-semibold">Tech Empowerment</div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-[60%]">
        <Image
          src={"/heroimage.svg"}
          alt="hero image"
          width={1000}
          height={1000}
          className="hidden md:block"
        />
        <Image
          src={"/mobileHero.svg"}
          alt="logo"
          width={400}
          height={400}
          className="flex md:hidden"
        />
      </div>
    </CustomSection>
  );
};

export default Hero;
