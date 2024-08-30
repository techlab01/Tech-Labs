import MainLayout from "@/src/components/layout";
import Hero from "@/src/screens/home/hero";
import Collaborate from "@/src/screens/home/collaborate";
import Reach from "@/src/screens/reach";
import AboutUs from "@/src/screens/home/aboutUs";
import Affiliates from "@/src/screens/home/affiliates";
import Solutions from "@/src/screens/home/solutions";
// import Testimonial from "@/src/screens/home/testimonials";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Collaborate />
      <Reach />
      <Solutions />
      <Affiliates />
      <AboutUs />
      {/* <Testimonial /> */}
    </MainLayout>
  );
}
