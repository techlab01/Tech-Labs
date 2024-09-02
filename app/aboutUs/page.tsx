import MainLayout from "@/src/components/layout";
import { aboutUsContent, aboutUsHeader } from "@/src/constants";
import Banner from "@/src/components/banner";
import CommonSection from "@/src/section/common";
import Image from "next/image";
import { schoolImage } from "@/src/utils";
import Gallery from "@/src/screens/aboutUs/gallery";
import MiddleSection from "@/src/section/middle";

export default function AboutUs() {
  return (
    <MainLayout>
      <MiddleSection
        className="nav-height"
        header={aboutUsHeader.whoAreWe}
        content={aboutUsContent.whoAreWe}
        disableButton
        noImage
      />
      <Banner
        bannerImg={aboutUsContent.bannerImg}
        bannerText={aboutUsContent.bannerText}
      />
      <CommonSection
        header={aboutUsHeader.whatWeDo}
        content={aboutUsContent.whatWeDo}
        disableButton
      >
        <Image
          src={schoolImage}
          alt={`school-image`}
          height={400}
          width={400}
          className="w-full h-full object-cover rounded-3xl"
        />
      </CommonSection>
      <Gallery />
    </MainLayout>
  );
}
