import MainLayout from "@/src/components/layout";
import { addressDetails, contactDetails } from "@/src/constants";
import { heroBg2, locationIcon, mailIcon, mobileIcon } from "@/src/utils";
import Image from "next/image";

export default function ContactUs() {
  return (
    <MainLayout showContactInfo={false}>
      <section className="bg-blue-light relative common-padding">
        <Image
          src={heroBg2}
          alt="hero-bg-2"
          className="h-full w-full absolute object-cover top-0 left-0 z-0"
        />
        <div className="screen-max-width">
          <div className="flex flex-col justify-between gap-20 ">
            {/* Contact form */}
            <form className="w-[50%] flex flex-col gap-5">
              <p className="header-1">Let&apos;s Connect!</p>
              <div className="flex flex-col gap-4">
                <p className="text-1">Enter Your Details.</p>
                <input type="text" placeholder="Name" className="form-fields" />
                <input
                  type="number"
                  placeholder="Contact Number"
                  className="form-fields"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="form-fields"
                />
                <textarea
                  rows={2}
                  placeholder="Enter you queries here"
                  className="form-fields"
                />
              </div>
              <button
                type="submit"
                className="bg-blue w-1/2 px-8 py-2 text-white text-base rounded-xl shadow-sm"
              >
                Submit
              </button>
            </form>

            <div className="w-full h-full flex flex-col justify-between gap-20 lg:w-[50%] xl:flex-row xl:w-[70%]">
              {/* Contact details */}
              <div className="flex flex-col gap-10">
                {contactDetails.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between gap-2"
                  >
                    <p className="text-2xl text-orange">{item.name}</p>
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
                    <p className="text-2xl text-orange">{item.title}</p>
                    <div className="flex flex-col gap-10">
                      {item?.address?.map((subItem) => {
                        return (
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
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
