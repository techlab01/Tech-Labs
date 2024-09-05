"use client";
import Link from "next/link";
import Image from "next/image";
import { navLists, urlList } from "../constants";
import { techlabLogo, menuIcon, closeIcon, techlabLogoWhite } from "../utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function NavBar() {
  const pathname = usePathname();
  const mobileRef = useRef(null);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      gsap.to(mobileRef.current, {
        y: -1000,
        duration: 0.4,
        onComplete: () => {
          setIsOpen(false);
        },
      });
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(mobileRef.current, { y: -1000 }, { y: 0, duration: 1 });
    }
  }, [isOpen]);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center z-20 absolute bg-transparent">
      <nav className="flex justify-between lg:flex-center w-full">
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

        <button
          className="bg-white px-8 py-3 text-blue max-lg:hidden text-base rounded-xl shadow-sm"
          onClick={() => router.push(urlList.contactUs)}
        >
          Contact Us
        </button>

        <button
          onClick={toggleMenu}
          className="z-50 block lg:hidden rounded-full bg-blue p-3"
        >
          <Image
            src={isOpen ? closeIcon : menuIcon}
            alt={isOpen ? "menu-close" : "menu-open"}
            className="h-6 w-6 object-contain"
            width={10}
            height={10}
          />
        </button>

        <div className="absolute top-0 -translate-x-1/2 left-1/2 z-40 flex h-screen w-full overflow-scroll lg:hidden">
          <div
            ref={mobileRef}
            className={`flex w-full flex-col items-start justify-start bg-blue ${
              isOpen ? "" : "hidden"
            }`}
          >
            <div className="w-full py-5 sm:px-10 px-5 flex justify-between items-center z-20">
              <Link href="/" onClick={toggleMenu}>
                <Image
                  alt="tech-white"
                  src={techlabLogoWhite}
                  width={100}
                  height={100}
                  className="h-12 w-44"
                />
              </Link>
            </div>

            <div className="flex flex-col items-start justify-center gap-5 common-padding">
              {navLists.map((item, index) => {
                const isActive = new RegExp(`^${item.link}(/|$)`).test(
                  pathname
                );
                return (
                  <div key={index} className="cursor-pointer relative">
                    <Link
                      href={item.link}
                      className="px-5 text-3xl font-semibold text-white flex items-center justify-center gap-4"
                    >
                      {item.name}
                      {isActive && (
                        <span className="h-3 w-3 bg-orange rounded-full"></span>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
