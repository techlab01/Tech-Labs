"use client";
import React from "react";
import CustomSection from "../section/section";
import CarouselComponent from "../components/feedbackCarousel";

type CarouselProps = {
  id: string;
};

const Carousel: React.FC<CarouselProps> = ({ id }) => {
  return (
    <CustomSection className="px-horizontal py-vertical flex h-full w-full items-center justify-center">
      <div
        id={id}
        className="flex h-full w-[100vw] items-center justify-center"
      >
        <CarouselComponent />
      </div>
    </CustomSection>
  );
};

export default Carousel;
