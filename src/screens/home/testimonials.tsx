import FeedbackCard from "@/src/components/feedbackCard";
import FeedbackCarousel from "@/src/components/feedbackCarousel";

const Testimonial = () => {
  return (
    <section className="bg-white">
      <div className="flex justify-between gap-10 flex-col">
        <div className="text-orange text-center screen-max-width pt-10 px-10">
          <p className="header-2">Few of</p>
          <p className="header-1">Our Testimonials</p>
        </div>
        <FeedbackCarousel className="block lg:hidden screen-max-width py-20" />
        <FeedbackCard className="hidden lg:block pb-20" />
      </div>
    </section>
  );
};

export default Testimonial;
