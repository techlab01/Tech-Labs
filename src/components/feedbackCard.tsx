import React from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface FeedbackProps {
  name?: string;
  description?: string;
  image: string;
  school?: string;
}

const FeedbackCard: React.FC<FeedbackProps> = ({
  name,
  description,
  image,
  school,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-start gap-4 text-white rounded-[30px] bg-dark-blue p-8 feedback-card">
      <div className="absolute -top-10 z-20 flex justify-center w-full">
        <div className="relative h-28 w-28">
          <Image
            src={image}
            alt={`${image}-alt`}
            layout="fill"
            className="rounded-full object-cover border-4 border-white"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center mt-16">
        <div className="text-xl sm:text-2xl">{name}</div>
        <div className="sm:text-lg text-md mb-2">{school}</div>
        <div className="sm:text-base text-sm">{description}</div>
      </div>
    </div>
  );
};

export default FeedbackCard;
