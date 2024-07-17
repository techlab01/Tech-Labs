"use client";
import React from "react";
import Image from "next/image";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div
      className={`relative flex min-h-64 w-full flex-col items-center justify-center gap-10 overflow-hidden rounded-[30px] bg-[#EFF8C9] p-16 text-black ${className}`}
    >
      <div
        className="absolute h-[200%] w-[200%] scale-0 transform rounded-full bg-dark-blue transition-all duration-700"
        style={{ right: 0, top: "50%", transform: "scale(0)" }}
      ></div>
      <Image
        src={icon}
        alt={`${icon}-alt`}
        width={50}
        height={50}
        className="relative z-10 h-24 w-24 md:h-24 md:w-24"
      />
      <div className={`text-base relative z-10 text-center`}>{title}</div>
      <div className={`text-base px-3 text-center`}>{description}</div>
    </div>
  );
};

export default BenefitCard;
