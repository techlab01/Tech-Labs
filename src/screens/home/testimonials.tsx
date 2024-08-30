import FeedbackCard from "@/src/components/feedbackCard";
import FeedbackCarousel from "@/src/components/feedbackCarousel";

const Testimonial = () => {
  return (
    <section className="bg-white common-padding">
      <div className="screen-max-width flex justify-between gap-16 flex-col">
        <div className="text-orange text-center">
          <p className="header-2">Few of</p>
          <p className="header-1">Our Testimonials</p>
        </div>
        <FeedbackCarousel className="lg:hidden" />
        <FeedbackCard className="lg:block" />
      </div>
    </section>
  );
};

export default Testimonial;
