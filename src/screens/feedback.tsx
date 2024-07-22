"use client";
import React, { useState } from "react";
import CustomSection from "../section/section";
import { feedbacks } from "../utils/feedback";
import FeedbackCard from "../components/feedbackCard";

const Feedback = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleFeedbacks = feedbacks.slice(0, 3);
  const hiddenFeedbacks = feedbacks.slice(3, 6);

  return (
    <CustomSection className="px-horizontal py-vertical flex flex-col h-full items-center justify-center">
      <p className="text-dark-blue font-bold text-center text-3xl md:text-6xl">
        What Peoples Say <span className="text-dark-orange">About Us</span>
      </p>
      <div className="md:hidden grid gap-20 w-[90%] pt-20 ">
        {visibleFeedbacks.map((card, index) => (
          <FeedbackCard
            key={index}
            name={card.name}
            school={card.school}
            description={card.description}
            image={card.image}
          />
        ))}
        {showMore &&
          hiddenFeedbacks.map((card, index) => (
            <FeedbackCard
              key={index + 3}
              name={card.name}
              school={card.school}
              description={card.description}
              image={card.image}
            />
          ))}
      </div>
      <div className="mt-6 flex justify-center">
        {!showMore && feedbacks.length > 3 && (
          <button
            onClick={() => setShowMore(true)}
            className="block md:hidden py-2 px-4 bg-dark-orange text-white rounded"
          >
            See More
          </button>
        )}
        {showMore && (
          <button
            onClick={() => setShowMore(false)}
            className="block md:hidden py-2 px-4 bg-dark-blue text-white rounded"
          >
            See Less
          </button>
        )}
      </div>
      <div className="md:grid hidden md:pt-32 md:gap-20 md:w-[90%] md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((card, index) => (
          <FeedbackCard
            key={index}
            name={card.name}
            school={card.school}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </CustomSection>
  );
};

export default Feedback;
