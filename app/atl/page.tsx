import Banner from "@/src/components/banner";
import MainLayout from "@/src/components/layout";
import { atlContent, atlPoints, buttonText } from "@/src/constants";
import CommonSection from "@/src/section/common";
import MiddleSection from "@/src/section/middle";
import { dotsIcon } from "@/src/utils";
import Image from "next/image";

export default function ATL() {
  return (
    <MainLayout showContactInfo={false}>
      <Banner
        bannerImg={atlContent.bannerImg}
        bannerText={atlContent.bannerText}
      />
      <MiddleSection
        header={atlContent.conclusionHeader}
        content={atlContent.conclusion}
        buttonText={buttonText.knowMore}
        imgSrc="/aboutImage/2.jpeg"
        imgAlt="pm-shri"
        noImage={false}
        disableButton={false}
      />
      <CommonSection
        className="!bg-blue-light"
        header={atlContent.pointsHeader}
        disableButton={true}
        content={atlContent.pointsContent}
      >
        <div className="flex flex-col items-start justify-center gap-10">
          {atlPoints.map((item, index) => (
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
