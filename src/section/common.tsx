import React from "react";

type CommonSection = {
  header: string;
  content: string;
  className?: string;
  key?: number;
  buttonText?: string;
  onBtnClick?: () => void;
  children?: React.ReactNode;
  disableButton?: boolean;
  reverseRow?: boolean;
};

const CommonSection: React.FC<CommonSection> = ({
  header,
  content,
  onBtnClick,
  children,
  disableButton,
  buttonText,
  reverseRow,
  key,
  className,
}) => {
  return (
    <section
      key={key}
      className={`bg-white common-padding w-full ${className}`}
    >
      <div className="screen-max-width">
        <div
          className={`flex-center w-full gap-20 ${
            reverseRow ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
          }`}
        >
          {/* text */}
          <div className="w-full flex items-start gap-6 flex-col lg:w-1/2">
            <p className="text-orange header-1 w-full">{header}</p>
            <p className="text-1 w-full">{content}</p>
            {!disableButton && (
              <button className="primary-btn" onClick={onBtnClick}>
                {buttonText}
              </button>
            )}
          </div>

          {/* image */}
          <div className="w-full lg:w-1/2">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
