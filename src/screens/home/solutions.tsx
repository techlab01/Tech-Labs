import Image from "next/image";
import { solutions } from "@/src/constants";

const Solutions = () => {
  return (
    <section className="bg-white common-padding w-full">
      <div className="screen-max-width">
        <div className="flex-center flex-col w-full gap-20">
          <div className="flex flex-col text-center gap-6">
            <p className="text-orange header-1">Our Progressive Solutions</p>
            <p className="text-1">
              Discover how our progressive solutions can transform your learning
              journey and empower you to achieve more.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 gap-y-10 w-full">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="flex-center text-center flex-col gap-2"
              >
                <Image
                  alt={`solution-logo-${index}`}
                  src={item.icon}
                  height={100}
                  width={100}
                  className="w-24 h-24 object-contain"
                />
                <p className="text-base text-blue leading-snug w-full">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
