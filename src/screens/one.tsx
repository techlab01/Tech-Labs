import React from "react";
import CustomSection from "../section/section";
import { PADDING } from "../utils";
import Image from "next/image";

const One = () => {
  return (
    <CustomSection
      className={`${PADDING.horizontalPadding} py-10 flex flex-col items-start lg:flex-row lg:items-center justify-center lg:h-screen h-full w-full gap-10 lg:gap-20`}
    >
      <div className="flex flex-col w-full lg:w-[30%] gap-2 items-start">
        <Image src={"/techlablogo.svg"} alt="logo" width={400} height={400} />
        <div className="text-3xl font-semibold">Tech Empowerment</div>
        <div className="flex gap-4 py-5 lg:hidden">
          <button className="bg-dark-blue px-8 py-3 text-white text-sm rounded-full">
            About us
          </button>
          <button className="bg-dark-blue px-8 py-3 text-white text-sm rounded-full">
            Services
          </button>
          <button className="bg-dark-blue px-8 py-3 text-white text-sm rounded-full">
            Contact
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-[60%]">
        <Image
          src={"/heroimage.svg"}
          alt="hero image"
          width={1000}
          height={1000}
        />
      </div>
    </CustomSection>
  );
};

export default One;
