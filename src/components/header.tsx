"use client";
import Link from "next/link";
import Image from "next/image";
import { PADDING } from "../utils";

export default function Header() {
  return (
    <header
      className={`fixed z-40 hidden lg:block w-full transition-transform duration-300`}
    >
      <div
        className={`${PADDING.horizontalPadding} flex items-center justify-between py-2`}
      >
        <Link href="/">
          <Image
            src={"/techlablogo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="h-12 w-48"
          />
        </Link>
        <div className="flex gap-4">
          <button className="bg-dark-blue px-8 py-3 text-white text-lg rounded-full">
            About us
          </button>
          <button className="bg-dark-blue px-8 py-3 text-white text-lg rounded-full">
            Services
          </button>
          <button className="bg-dark-blue px-8 py-3 text-white text-lg rounded-full">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
