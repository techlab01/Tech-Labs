import React from "react";
import CustomSection from "../section/section";
import { feedbacks } from "../utils/feedback";
import FeedbackCard from "../components/feedbackCard";

const Feedback = () => {
  return (
    <CustomSection className="px-horizontal py-10 flex flex-col h-full items-center justify-center">
      <p className="text-dark-blue font-bold text-center text-3xl md:text-6xl">
        What Peoples Say <span className="text-dark-orange">About Us</span>
      </p>
      <div className="grid gap-20 w-[90%] py-20 md:py-40 md:grid-cols-2 lg:grid-cols-3">
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
