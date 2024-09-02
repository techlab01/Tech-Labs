import Banner from "@/src/components/banner";
import MainLayout from "@/src/components/layout";
import { buttonText, pmShriContent, pmShriPoints } from "@/src/constants";
import CommonSection from "@/src/section/common";
import MiddleSection from "@/src/section/middle";
import { dotsIcon } from "@/src/utils";
import Image from "next/image";

export default function PmShri() {
  return (
    <MainLayout showContactInfo={false}>
      <Banner
        bannerImg={pmShriContent.bannerImg}
        bannerText={pmShriContent.bannerText}
      />
      <MiddleSection
        header={pmShriContent.conclusionHeader}
        content={pmShriContent.conclusion}
        buttonText={buttonText.knowMore}
        imgSrc="/aboutImage/school-image.jpeg"
        imgAlt="pm-shri"
        noImage={false}
        disableButton={false}
      />
      <CommonSection
        className="!bg-blue-light"
        header={pmShriContent.pointsHeader}
        disableButton={true}
        content={pmShriContent.pointsHeader}
      >
        <div className="flex flex-col items-start justify-center gap-10">
          {pmShriPoints.map((item, index) => (
            <div key={index} className="flex items-center justify-start gap-6">
              <Image alt={`dots-icon`} src={dotsIcon} height={20} width={20} />
              <div className="flex flex-col items-start gap-2">
                <p className="text-1">{item.name}</p>
                <p className="text-base">{item.point}</p>
              </div>
            </div>
          ))}
        </div>
      </CommonSection>
    </MainLayout>
  );
}
