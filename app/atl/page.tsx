import Banner from "@/src/components/banner";
import MainLayout from "@/src/components/layout";
import { atlContent, atlPoints, buttonText, urlList } from "@/src/constants";
import CommonSection from "@/src/section/common";
import HeroSection from "@/src/section/hero";
import MiddleSection from "@/src/section/middle";
import { dotsIcon } from "@/src/utils";
import Image from "next/image";

export default function ATL() {
  return (
    <MainLayout showContactInfo={false}>
      <HeroSection
        content={atlContent.description}
        imgSrc={atlContent.image}
        imgAlt={`pm-shri`}
      />
      <Banner
        bannerImg={atlContent.bannerImg}
        bannerText={atlContent.bannerText}
      />
      <CommonSection
        header={atlContent.title}
        disableButton={true}
        content={atlContent.outcome}
        reverseRow
      >
        <Image
          src="/aboutImage/13.jpeg"
          alt="aboutImage-13`"
          height={800}
          width={800}
          className="w-full h-full object-cover rounded-3xl"
        />
      </CommonSection>
      <CommonSection
        header={atlContent.visionHeader}
        disableButton={true}
        content={atlContent.visionContent}
      >
        <Image
          src="/gallery/10.jpeg"
          alt="gallery-13`"
          height={800}
          width={800}
          className="w-full h-full object-cover rounded-3xl"
        />
      </CommonSection>
      <CommonSection
        className="!bg-blue-light"
        header={atlContent.pointsHeader}
        disableButton={true}
        content={atlContent.pointsContent}
      >
        <div className="flex flex-col items-start justify-center gap-10">
          {atlPoints.map((item, index) => (
            <div key={index} className="flex items-center justify-start gap-6">
              <Image
                alt={`dots-icon`}
                className="hidden md:block"
                src={dotsIcon}
                height={20}
                width={20}
              />
              <div className="flex flex-col items-start gap-2">
                <p className="text-1">{item.name}</p>
                <p className="text-base">{item.point}</p>
              </div>
            </div>
          ))}
        </div>
      </CommonSection>
      <MiddleSection
        header={atlContent.conclusionHeader}
        content={atlContent.conclusion}
        buttonText={buttonText.knowMore}
        imgSrc="/aboutImage/2.jpeg"
        imgAlt="pm-shri"
        noImage={false}
        disableButton={false}
        btnLink={urlList.atlWebsite}
      />
    </MainLayout>
  );
}
