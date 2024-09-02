import Image from "next/image";
import { aboutUsHeader, gallery } from "@/src/constants";

const Gallery = () => {
  return (
    <section className="bg-blue-light common-padding w-full">
      <div className="screen-max-width">
        <div className="flex flex-col text-center w-full gap-20">
          <h1 className="text-orange header-1 text-center w-full">
            {aboutUsHeader.gallery}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.map((item, index) => (
              <div key={index} className="relative w-full">
                <Image
                  alt={`gallery-image-${index}`}
                  src={item}
                  height={400}
                  width={400}
                  className="w-full h-72 object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
          <div className="bg-dark h-[1px] w-full" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
