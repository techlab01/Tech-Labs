"use client";
import React from "react";
import CustomSection from "../section/section";
import Carousel from "../components/carousel";

const Four = () => {
  return (
    <CustomSection className=" flex h-screen w-full items-center justify-center">
      <div className="flex h-screen w-[100vw] items-center justify-center">
        <Carousel />
      </div>
    </CustomSection>
  );
};

export default Four;
