import MainLayout from "@/src/components/layout";
import Hero from "@/src/screens/home/hero";
import Reach from "@/src/screens/reach";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Reach />
    </MainLayout>
  );
}
