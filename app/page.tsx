import MainLayout from "@/src/components/layout";
import Five from "@/src/screens/five";
import Four from "@/src/screens/four";
import One from "@/src/screens/one";
import Six from "@/src/screens/six";
import Three from "@/src/screens/three";
import Two from "@/src/screens/two";

export default function Home() {
  return (
    <MainLayout>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
    </MainLayout>
  );
}
