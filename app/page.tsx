import MainLayout from "@/src/components/layout";
import Services from "@/src/screens/services";
import Hero from "@/src/screens/hero";
import Feedback from "@/src/screens/feedback";
import Contact from "@/src/screens/contact";
import AboutUs from "@/src/screens/aboutUs";
import Reach from "@/src/screens/reach";
import Carousel from "@/src/screens/carousel";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Reach />
      <AboutUs id="about-us" />
      <Carousel id="services" />
      <Services />
      <Feedback />
      <Contact id="contact" />
    </MainLayout>
  );
}
