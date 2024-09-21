import React from "react";
import { CommonSectionProps } from "../types";

const CommonSection: React.FC<CommonSectionProps> = ({
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
          className={`flex-center w-full gap-12 lg:gap-20 ${
            reverseRow ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
          }`}
        >
          {/* text */}
          <div className="w-full flex items-start gap-6 flex-col lg:w-1/2">
            <p className="text-orange header-1 w-full">{header}</p>
            {Array.isArray(content) ? (
              <ul className="list-disc list-outside gap-6 flex flex-col">
                {content.map((text, index) => (
                  <li
                    key={index}
                    className="text-1 w-full text-justify leading-normal"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-1 w-full text-justify leading-relaxed hyphens-auto">
                {content}
              </p>
            )}
            {!disableButton && (
              <button className="primary-btn" onClick={onBtnClick}>
                {buttonText}
              </button>
            )}
          </div>

          {/* image */}
          <div className="w-full h-full lg:w-1/2">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
