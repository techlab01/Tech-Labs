import React from "react";
import CustomSection from "../section/section";
import { PADDING } from "../utils";
import Image from "next/image";

const Six = () => {
  return (
    <CustomSection
      className={`${PADDING.horizontalPadding} flex flex-col font-bold items-start lg:flex-col lg:items-center justify-center lg:h-screen h-full w-full gap-20`}
    >
      <div className="flex justify-center flex-col md:flex-row w-full items-center gap-20 ">
        <div className="flex flex-col items-start justify-center">
          <p className="text-2xl text-dark-blue">
            Our Products Are Available on GeM
          </p>
          <Image
            src={"/gem.svg"}
            alt="gem-svg"
            width={20}
            height={20}
            className="h-80 w-80"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-2xl text-dark-blue">
            We also undertake Tenders from
          </p>
          <Image
            src={"/kppp.svg"}
            alt="gem-svg"
            width={20}
            height={20}
            className="h-80 w-80"
          />
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row w-full items-center gap-20">
        <div className="flex w-full md:w-1/2 flex-col gap-10">
          <div>
            <p className="text-3xl text-dark-orange">Shekhar S</p>
            <p className="text-2xl text-dark-blue">+91 990 101 8460</p>
            <p className="text-2xl text-dark-blue">
              shekhar@techlabscience.com
            </p>
          </div>
          <div>
            <p className="text-3xl text-dark-orange">Nandu Patil</p>
            <p className="text-2xl text-dark-blue">+91 814 730 0494</p>
            <p className="text-2xl text-dark-blue">nandu@techlabscience.com</p>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 flex-col gap-10">
          <div>
            <p className="text-3xl text-dark-orange">Head Quarters</p>
            <p className="text-2xl text-dark-blue">
              S-641, 9th Cross, 14th Main Road, Bharath Nagar 2nd Stage, Bel
              Layout, Bengaluru , karnataka , 560091.
            </p>
          </div>
          <div>
            <p className="text-3xl text-dark-orange">Branch Address</p>
            <p className="text-2xl text-dark-blue">
              Sirigoudar Complex , Hirekerur , Haveri , Karnataka, 581111
            </p>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default Six;
