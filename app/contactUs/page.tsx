"use client";
import Contact from "@/src/components/contact";
import MainLayout from "@/src/components/layout";
import { formData } from "@/src/types";
import { heroBg2, techlabLogo3D } from "@/src/utils";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState<formData>({
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
    <MainLayout showContactInfo={false}>
      <section className="bg-white relative common-padding h-full lg:nav-height">
        <Image
          src={heroBg2}
          alt="hero-bg-2"
          className="h-full w-full absolute object-cover top-0 left-0 z-0"
        />
        <div className="screen-max-width">
          <div className="flex flex-col-reverse pt-20 justify-between items-center gap-20 lg:pt-0 lg:flex-row">
            {/* Contact form */}
            <form
              className="w-full lg:w-1/2 flex flex-col items-center gap-5"
              onSubmit={handleSubmit}
            >
              <p className="header-1">Let&apos;s Connect!</p>
              <div className="flex flex-col gap-4 w-full lg:w-[70%]">
                <p className="text-1 text-center lg:text-start">
                  Enter Your Details.
                </p>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-fields !bg-blue-100"
                />
                <input
                  type="number"
                  placeholder="Contact Number"
                  className="form-fields !bg-blue-100"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="form-fields !bg-blue-100"
                />
                <textarea
                  rows={4}
                  placeholder="Enter you queries here"
                  className="form-fields !bg-blue-100"
                />
              </div>
              <button
                type="submit"
                className="bg-blue w-1/2 px-8 py-2 text-white text-base rounded-xl shadow-sm"
              >
                Submit
              </button>
            </form>

            <div className="w-full h-full flex-center gap-20 lg:w-[50%]">
              <Image
                src={techlabLogo3D}
                alt="techlab-logo-3d"
                className="h-3/4 w-3/4 md:h-full md:w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </MainLayout>
  );
}
