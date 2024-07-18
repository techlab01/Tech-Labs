"use client";
import Link from "next/link";
import Image from "next/image";
import { PADDING } from "../utils";

const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Header() {
  return (
    <header
      className={`z-40 hidden lg:block w-full transition-transform duration-300`}
    >
      <div
        className={`${PADDING.horizontalPadding} flex items-center justify-between py-2`}
      >
        <div className="flex gap-4">
          <button
            onClick={() => scrollToSection("about-us")}
            className="bg-dark-blue px-8 py-3 text-white text-xs rounded-full"
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="bg-dark-blue px-8 py-3 text-white text-xs rounded-full"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-dark-blue px-8 py-3 text-white text-xs rounded-full"
          >
            Contact
          </button>
        </div>
        <Link href="/">
          <Image
            src={"/techlablogo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="h-10 w-44"
          />
        </Link>
      </div>
    </header>
  );
}
