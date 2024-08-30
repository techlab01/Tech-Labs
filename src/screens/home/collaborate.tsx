import Image from "next/image";
// import { affiliates } from "@/src/constants";
import { techlabLogo } from "@/src/utils";

const Collaborate = () => {
  return (
    <section className="bg-blue-light common-padding w-full">
      <div className="screen-max-width">
        <div className="flex flex-col justify-between items-center gap-10 w-full">
          <div className="flex-center flex-col gap-6 text-center w-full lg:w-3/4">
            <Image
              src={techlabLogo}
              alt="tech-lab"
              width={100}
              height={100}
              className="h-8 w-44"
            />
            <p className="text-1">
              We are proud to collaborate with new initiatives and flagship
              programs aimed at transforming schools across India into model
              institutions of excellence
            </p>
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full lg:w-1/2">
            {affiliates.map((item, index) => (
              <Image
                key={index}
                alt={`school-logo-${index}`}
                src={item}
                height={100}
                width={100}
                className="w-full h-full object-contain"
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
