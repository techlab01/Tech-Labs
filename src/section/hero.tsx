import Image from "next/image";
import { heroSectionTypes } from "../types";
import { heroBg2 } from "../utils";

const HeroSection: React.FC<heroSectionTypes> = ({
  imgAlt = "",
  imgSrc = "",
  content,
  className,
}) => {
  return (
    <section
      className={`${className} relative bg-white common-padding nav-height w-full flex items-center justify-start`}
    >
      <Image
        src={heroBg2}
        alt="hero-bg-2"
        className="h-full w-full absolute object-cover top-0 left-0 z-0"
      />
      <div className="screen-max-width">
        <div className="flex flex-col items-start w-full gap-10">
          <Image
            alt={imgAlt}
            src={imgSrc}
            width={500}
            height={500}
            className="h-full w-[50%] md:w-[20%] object-contain"
          />
          <p className="text-1 w-full text-start">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
