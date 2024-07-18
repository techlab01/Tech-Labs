import React from "react";
import CustomSection from "../section/section";
import Image from "next/image";

type ContactProps = {
  id: string;
};

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <CustomSection
      className={`px-horizontal flex py-20 md:py-40 flex-col text-xl sm:text-2xl text-dark-blue font-semibold items-start lg:flex-col lg:items-center justify-center h-full w-full gap-20`}
    >
      <div
        id={id}
        className="flex justify-center text-xl  md:text-2xl flex-col md:flex-row w-full items-center gap-20 "
      >
        <div className="flex flex-col items-start justify-center">
          <p>Our Products Are Available on GeM</p>
          <Image
            src={"/gem.svg"}
            alt="gem-svg"
            width={20}
            height={20}
            className="md:h-40 md:w-80 h-20 w-40"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p>We also undertake Tenders from</p>
          <Image
            src={"/kppp.svg"}
            alt="gem-svg"
            width={20}
            height={20}
            className="md:h-40 md:w-80 h-20 w-40"
          />
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row w-full items-center gap-20">
        <div className="flex w-full md:w-1/2 flex-col gap-10">
          <div>
            <p className="text-4xl text-dark-orange">Shekhar S</p>
            <p>+91 990 101 8460</p>
            <p>shekhar@techlabscience.com</p>
          </div>
          <div>
            <p className="text-4xl text-dark-orange">Nandu Patil</p>
            <p>+91 814 730 0494</p>
            <p>nandu@techlabscience.com</p>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 flex-col gap-10">
          <div>
            <p className="text-3xl  text-dark-orange">Head Quarters</p>
            <p>
              S-641, 9th Cross, 14th Main Road, Bharath Nagar 2nd Stage, Bel
              Layout, Bengaluru , karnataka , 560091.
            </p>
          </div>
          <div>
            <p className="text-3xl text-dark-orange">Branch Address</p>
            <p>Sirigoudar Complex , Hirekerur , Haveri , Karnataka, 581111</p>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default Contact;
