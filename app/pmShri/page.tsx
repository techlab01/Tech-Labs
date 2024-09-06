import Banner from "@/src/components/banner";
import MainLayout from "@/src/components/layout";
import {
  buttonText,
  pmShriContent,
  pmShriPoints,
  urlList,
} from "@/src/constants";
import CommonSection from "@/src/section/common";
import HeroSection from "@/src/section/hero";
import MiddleSection from "@/src/section/middle";
import { dotsIcon } from "@/src/utils";
import Image from "next/image";

export default function PmShri() {
  return (
    <MainLayout showContactInfo={false}>
      <HeroSection
        content={pmShriContent.description}
        imgSrc={pmShriContent.image}
        imgAlt={`pm-shri`}
      />
      <Banner
        bannerImg={pmShriContent.bannerImg}
        bannerText={pmShriContent.bannerText}
      />
      <CommonSection
        header={pmShriContent.title}
        disableButton={true}
        content={pmShriContent.singelOutcome}
        reverseRow
      >
        <Image
          src="/gallery/14.jpeg"
          alt="galley-image-14`"
          height={800}
          width={800}
          className="w-full h-full object-cover rounded-3xl"
        />
      </CommonSection>
      <CommonSection
        header={pmShriContent.visionHeader}
        disableButton={true}
        content={pmShriContent.visionContent.slice(0, 2)}
      >
        <Image
          src="/gallery/13.jpeg"
          alt="gallery-13`"
          height={800}
          width={800}
          className="w-full h-full object-cover rounded-3xl"
        />
      </CommonSection>
      <CommonSection
        disableButton={true}
        content={pmShriContent.visionContent.slice(2, 4)}
        reverseRow
      >
        <Image
          src="/gallery/15.jpeg"
          alt="gallery-15`"
          height={800}
          width={800}
          className="w-full h-full object-cover rounded-3xl"
        />
      </CommonSection>
      <CommonSection
        className="!bg-blue-light"
        header={pmShriContent.pointsHeader}
        disableButton={true}
        content={pmShriContent.pointsContent}
      >
        <div className="flex flex-col items-start justify-center gap-10">
          {pmShriPoints.map((item, index) => (
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
        header={pmShriContent.conclusionHeader}
        content={pmShriContent.conclusion}
        buttonText={buttonText.knowMore}
        imgSrc="/aboutImage/school-image.jpeg"
        imgAlt="school-image"
        noImage={false}
        disableButton={false}
        btnLink={urlList.pmShriWebsite}
      />
    </MainLayout>
  );
}
