"use client";
import Link from "next/link";
import Image from "next/image";
import { navLists } from "../constants";
import { techlabLogo, menuIcon } from "../utils";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center z-20 absolute bg-transparent">
      <nav className="flex justify-between lg:flex-center w-full screen-max-width">
        <Link href={"/"}>
          <Image
            src={techlabLogo}
            alt="tech-lab"
            width={100}
            height={100}
            className="h-8 w-44"
          />
        </Link>

        <div className="flex-center flex-1 max-lg:hidden">
          {navLists.map((item, index) => {
            const isActive = new RegExp(`^${item.link}(/|$)`).test(pathname);
            return (
              <div key={index} className="cursor-pointer relative">
                <Link href={item.link} className="px-5 text-lg text-blue">
                  {item.name}
                </Link>
                {isActive && (
                  <span className="h-1 w-8 bg-orange absolute -bottom-1 transform -translate-x-1/2 left-1/2 rounded-sm"></span>
                )}
              </div>
            );
          })}
        </div>

        <button className="bg-white px-8 py-3 text-blue max-lg:hidden text-base rounded-xl shadow-sm">
          Contact Us
        </button>

        <Image
          src={menuIcon}
          alt="menu-icon"
          width={10}
          height={10}
          className="h-8 w-8 block lg:hidden"
        />
      </nav>
    </header>
  );
}
