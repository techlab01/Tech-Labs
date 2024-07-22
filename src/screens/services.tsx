import React from "react";
import CustomSection from "../section/section";
import { brandService, nextGenService } from "../utils";
import Image from "next/image";

type ServicesProps = {
  id?: string;
};

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <CustomSection
      className={`px-horizontal py-vertical flex flex-col items-start lg:items-center justify-center h-full w-full gap-20`}
    >
      <p
        id={id}
        className="text-dark-blue font-bold text-center text-3xl md:text-6xl"
      >
        Our Brand - <span className="text-dark-orange">NextGen</span> Services
      </p>
      <div className="flex flex-col gap-10 md:flex-row items-center justify-around">
        <div className="flex flex-col text-2xl md:text-3xl gap-4 md:gap-8">
          {nextGenService.map((service, index) => (
            <div key={index}>{service}</div>
          ))}
        </div>
        <div className="grid w-full md:w-1/2 grid-cols-1 md:grid-cols-2 gap-10">
          {brandService.map((item, index) => (
            <Image
              src={item.src}
              key={item.src}
              alt="image"
              width={200}
              height={200}
              className="h-full w-full object-cover rounded-2xl"
            />
          ))}
        </div>
      </div>
    </CustomSection>
  );
};

export default Services;
