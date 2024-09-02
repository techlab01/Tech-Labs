import Image from "next/image";

type middleSectionTypes = {
  noImage: boolean;
  disableButton: boolean;
  imgAlt?: string;
  imgSrc?: string;
  className?: string;
  header: string;
  buttonText?: string;
  content: string;
  onBtnClick?: () => void;
};

const MiddleSection: React.FC<middleSectionTypes> = ({
  noImage,
  disableButton,
  imgAlt = "",
  imgSrc = "",
  buttonText,
  content,
  onBtnClick,
  header,
  className,
}) => {
  return (
    <section className={`${className} bg-white common-padding w-full`}>
      <div className="screen-max-width">
        <div className="flex-center flex-col w-full gap-20">
          <div className="w-full flex items-start h-full justify-center gap-6 flex-col lg:text-center lg:items-center">
            <p className="text-orange header-1 w-full">{header}</p>
            <p className="text-1 w-full">{content}</p>
            {!disableButton && (
              <button className="primary-btn" onClick={onBtnClick}>
                {buttonText}
              </button>
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
