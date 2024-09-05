"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { addressDetails, contactDetails } from "../constants";
import { locationIcon, mailIcon, mobileIcon } from "../utils";

interface FormData {
  name: string;
  contactNumber: string;
  email: string;
  message: string;
}

const ContactInfo = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:nandu@techlabscience.com?subject=Contact%20Form%20Submission&body=Name: ${encodeURIComponent(
      formData.name
    )}%0AContact Number: ${encodeURIComponent(
      formData.contactNumber
    )}%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-blue-light common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col justify-between gap-20 lg:flex-row-reverse">
          {/* Contact form */}
          <form
            className="w-full flex flex-col gap-5 lg:w-[50%] xl:w-[30%]"
            onSubmit={handleSubmit}
          >
            <p className="header-1">Let&apos;s Connect!</p>
            <div className="flex flex-col gap-4">
              <p className="text-1">Enter Your Details.</p>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-fields"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                className="form-fields"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                className="form-fields"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows={2}
                placeholder="Enter your queries here"
                className="form-fields"
                value={formData.message}
                onChange={handleChange}
                required
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

export default ContactInfo;
