import Image from "next/image";
import { middleSectionTypes } from "../types";
import { heroBg2 } from "../utils";
import Link from "next/link";

const MiddleSection: React.FC<middleSectionTypes> = ({
  noImage,
  disableButton,
  imgAlt = "",
  imgSrc = "",
  buttonText,
  content,
  btnLink = "",
  header,
  className,
  showBg = false,
}) => {
  return (
    <section
      className={`${className} relative bg-white common-padding w-full flex-center`}
    >
      {showBg && (
        <Image
          src={heroBg2}
          alt="hero-bg-2"
          className="h-full w-full absolute object-cover top-0 left-0 z-0"
        />
      )}
      <div className="screen-max-width">
        <div className="flex-center flex-col w-full gap-20">
          <div className="w-full flex items-start h-full justify-center gap-10 flex-col lg:text-center lg:items-center">
            <p className="text-orange header-1 w-full">{header}</p>
            <p className="text-1 w-full">{content}</p>
            {!disableButton && (
              <Link href={btnLink} className="primary-btn" target="_blank">
                {buttonText}
              </Link>
            )}
          </div>
          {!noImage && (
            <Image
              alt={imgAlt}
              src={imgSrc}
              height={800}
              width={800}
              className="w-full lg:w-[80%] h-full object-cover rounded-3xl"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
