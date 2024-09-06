import Image from "next/image";
import { addressDetails, contactDetails } from "../constants";
import { locationIcon, locationImg, mailIcon, mobileIcon } from "../utils";

const Contact = () => {
  return (
    <section className="bg-blue-light common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col-reverse justify-between gap-20 lg:flex-row">
          {/* Contact form */}
          <div className="w-full lg:w-[50%] xl:w-[30%]">
            <Image
              src={locationImg}
              alt="map-location"
              width={800}
              height={800}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="w-full h-full flex flex-col justify-between gap-20 lg:w-[50%] xl:flex-row xl:w-[70%]">
            {/* Contact details */}
            <div className="flex flex-col gap-10">
              {contactDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-2"
                >
                  <p className="text-2xl text-orange font-semibold">
                    {item.name}
                  </p>
                  <span className="flex text-base md:text-xl items-center justify-start gap-3">
                    <Image
                      alt="mobile-icon"
                      src={mobileIcon}
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                    {item.contact}
                  </span>
                  <span className="flex text-base md:text-xl items-center justify-start gap-3">
                    <Image
                      alt="mail-icon"
                      src={mailIcon}
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                    {item.email}
                  </span>
                </div>
              ))}
            </div>

            {/* Address details */}
            <div className="flex flex-col justify-between gap-10">
              {addressDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-2"
                >
                  <p className="text-2xl text-orange font-semibold">
                    {item.title}
                  </p>
                  <div className="flex flex-col gap-10">
                    {item?.address?.map((subItem) => (
                      <span
                        key={subItem}
                        className="flex text-2 items-start justify-start gap-4"
                      >
                        <Image
                          alt="location-icon"
                          src={locationIcon}
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                        {subItem}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
