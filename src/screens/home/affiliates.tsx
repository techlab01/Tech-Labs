import Image from "next/image";
import { affiliates } from "@/src/constants";

const Affiliates = () => {
  return (
    <section className="bg-blue-light h-full lg:h-screen flex-center common-padding w-full">
      <div className="screen-max-width">
        <div className="flex-center flex-col lg:flex-row w-full gap-20">
          <div className="flex flex-col gap-6 w-full lg:w-1/2 ">
            <p className="text-orange header-1">Our Trusted Affiliates</p>
            <p className="text-1 text-start md:text-justify">
              We pride ourselves on collaborating with a network of trusted
              affiliates who share our commitment to excellence in education.
              Together, we work to ensure that our services are not only
              innovative but also aligned with the highest standards of quality
              and integrity.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full lg:w-1/2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliates;
