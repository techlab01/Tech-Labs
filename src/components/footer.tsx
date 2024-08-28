import React from "react";
import { footerLinks, socials } from "../constants";
import Image from "next/image";
import { techlabLogoWhite, gemLogo, kpppLogo } from "../utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5 sm:px-10 px-5 bg-blue">
      <div className="screen-max-width">
        <div className="flex flex-col gap-20 md:flex-row items-center justify-between py-20 md:px-10">
          <div className="grid gap-10 md:gap-20 lg:grid-cols-2">
            <div className="flex-center flex-col">
              <p className="text-white text-center text-lg md:text-xl lg:text-2xl mb-4">
                Our Products Are <br /> Available on GeM
              </p>
              <Image
                src={gemLogo}
                alt="gem-svg"
                width={20}
                height={20}
                className="h-20 w-40"
              />
            </div>
            <div className="flex-center flex-col">
              <p className="text-white text-center text-lg md:text-xl lg:text-2xl mb-4">
                We also undertake <br /> Tenders from
              </p>
              <Image
                src={kpppLogo}
                alt="kppp-svg"
                width={20}
                height={20}
                className="h-20 w-40"
              />
            </div>
          </div>
          <div className="flex-center flex-col">
            <Image
              src={techlabLogoWhite}
              alt="techlab-logo-white"
              width={40}
              height={40}
              className="h-20 w-40"
            />
            <div className="md:flex md:flex-col md:items-start md:gap-4 lg:flex-center lg:flex-row">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="text-white text-center mx-2 text-base md:text-xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex-center mt-4">
              {socials.map((image, index) => (
                <Image
                  key={index}
                  src={image.icon}
                  alt={image.icon}
                  width={20}
                  height={20}
                  className="h-8 w-8 mx-2"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white my-5 h-[1px] w-full" />

        <div className="flex-center">
          <p className="text-gray-300 text-xs">Copyright @ Techlabs 2024.</p>
        </div>
      </div>
    </footer>
  );
}
