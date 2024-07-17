import React from "react";
import CustomSection from "../section/section";
import { brandService, PADDING } from "../utils";
import Image from "next/image";

const Five = () => {
  return (
    <CustomSection
      className={`${PADDING.horizontalPadding} flex flex-col items-start lg:flex-row lg:items-center justify-center lg:h-screen h-full w-full gap-20`}
    >
      <div className="flex flex-col gap-5">
        <div className="text-3xl font-bold text-dark-blue">
          Our Brand - NextGen Services
        </div>
        <div className="flex flex-col text-2xl gap-5">
          <p>Child Friendly Furnitures</p>
          <p>Sports Equipments</p>
          <p>Gym Equipments</p>
          <p>Outdoor Playing Equipments</p>
          <p>Wall Paintings</p>
          <p>Drinking Water</p>
        </div>
      </div>
      <div className="grid w-full md:w-1/2 grid-cols-2 gap-10">
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
    </CustomSection>
  );
};

export default Five;
