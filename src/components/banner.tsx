import Image from "next/image";
import { bannerType } from "../types";

const Banner: React.FC<bannerType> = ({ bannerText, bannerImg }) => {
  return (
    <section className="bg-blue common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col-reverse items-start justify-around gap-10 md:items-center md:flex-row">
          <p className="header-1 text-white w-full md:w-1/2">{bannerText}</p>
          <Image
            alt={bannerImg}
            src={bannerImg}
            width={200}
            height={200}
            className="h-full w-[50%] md:w-[20%] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
