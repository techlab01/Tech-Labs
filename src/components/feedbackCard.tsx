import React from "react";
import Image from "next/image";
import { feedbackDetails } from "../constants";
import { quotesIcon } from "../utils";

type FeedbackCardType = {
  className?: string;
};

const FeedbackCard: React.FC<FeedbackCardType> = ({ className }) => {
  return (
    <div className={`${className} h-full`}>
      {feedbackDetails.map((feedback, index) => (
        <div key={index} className="flex gap-6 relative">
          <div className="flex flex-col justify-between gap-4 items-start z-0 rounded-xl border border-blue p-10">
            <p className="text-left text-base line-clamp-3">
              {feedback.description}
            </p>
            <div className="flex items-end justify-center gap-4 text-blue">
              <p className="text-3xl">{feedback.name}</p>
              <p className="text-base">{feedback.school}</p>
            </div>
          </div>

          <Image
            src={quotesIcon}
            alt="quotes-icon"
            width={20}
            height={20}
            className="h-12 w-12 absolute z-10 transform -translate-x-1/2 left-0"
          />
          <div className="flex items-center">
            <Image
              src={feedback.image}
              alt={feedback.name}
              width={100}
              height={100}
              className="rounded-xl object-cover h-full w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCard;
