import React from "react";
import CustomSection from "../section/section";
import Image from "next/image";

const Reach = () => {
  return (
    <CustomSection
      className={`px-horizontal py-vertical flex flex-col md:flex-row items-center justify-center h-full gap-10`}
    >
      <div className="flex w-full md:w-1/2 justify-center items-center">
        <Image
          src={"/karnataka.svg"}
          alt="karnataka"
          width={500}
          height={500}
          className="h-full md:h-[80%] md:w-[80%] w-full object-contain"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2 gap-10 justify-center items-start">
        <p className="text-dark-blue font-bold text-start text-3xl md:text-5xl">
          Where Technology Meets{" "}
          <span className="text-dark-orange">Education</span>
        </p>
        <div className="flex flex-col gap-10 justify-evenly w-full">
          <div className="text-6xl font-bold">
            <p className="text-dark-orange">100+</p>
            <p className="text-dark-blue">Schools</p>
          </div>
          <div className="text-6xl font-bold">
            <p className="text-dark-orange">35000+</p>
            <p className="text-dark-blue">Students</p>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default Reach;
