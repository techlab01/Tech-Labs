import Image from "next/image";
import { services } from "@/src/constants";
import { homeContent, homeHeader } from "@/src/constants";

const Services = () => {
  return (
    <section className="bg-white common-padding w-full">
      <div className="screen-max-width">
        <div className="flex flex-col items-start w-full gap-20">
          <div className="w-full flex items-start gap-6 flex-col lg:w-1/2">
            <h1 className="text-orange header-1 w-full">
              {homeHeader.services}
            </h1>
            <p className="text-1 w-full">{homeContent.services}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {services.map((item, index) => (
              <div key={index} className="relative w-full">
                <Image
                  alt={`service-image-${index}`}
                  src={item.img}
                  height={400}
                  width={400}
                  className="w-full h-72 object-cover rounded-3xl"
                />
                <div className="absolute bg-blue text-white w-1/2 text-center p-2 rounded-t-xl bottom-0 -translate-x-1/2 left-1/2">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
