import Image from "next/image";
import Link from "next/link";

import MGIlogo from "../../public/images/logo/MGI-logo.svg";
import { intria } from "@/fonts/general_fonts";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Portal from "../UI/Portal";
import { useRouter } from "next/router";
import SearchIcon from '@mui/icons-material/Search';

const navData = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/aboutus" },
  { title: "Contact", link: "/contact" },
  { title: "Our Properties", link: "/propertylisting" },
];

let navAnimationClass = "";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prev) => {
        return !prev;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prev) => {
        return !prev;
      });
    }
  };
  return (
    <header
      className={`${intria.className} flex justify-between items-center pt-6 px-5 lg:px-32 `}
    >
      <Portal isOpen={isOpen}>
        <div
          className={`fixed inset-y-0 z-50 h-screen w-screen md:hidden transform  ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <MobileNavigation toggleDrawer={toggleDrawer} />
        </div>
      </Portal>
      <div className="w-[45.61px]  flex-shrink-0 h-[36.85px] md:h-[51.51px] md:w-[68.32px]">
        <Image
        alt=""
          src={MGIlogo}
          className="w-full h-ful"
          height={51}
          width={68}
          loading="eager"
          priority
        />
      </div>
      <nav className="hidden md:flex space-x-12 text-[14px] xl:text-[16px] text-secondary1">
        {navData.map((navObj, index) => (
          <Link className="hover:text-primary rounded-[5px] py-2.5 px-4" key={index} href={navObj.link}>
            {navObj.title}
          </Link>
        ))}
      </nav>
      <div className="flex gap-[10px] items-center">
        <Link href="/propertylisting?search=true">
      <SearchIcon />
        </Link>

      <button
        onClick={() => router.push("/login")}
        className="hidden md:block bg-primary text-[16px] font-bold rounded-[5px] py-2.5 px-3 text-white"
      >
        Add Listing
      </button>
      <button
        className={`${navAnimationClass} block mt-2 hamburger md:hidden focus:outline-none`}
        type="button"
        onClick={toggleDrawer}
      >
        <span className="hamburger-top bg-primary rounded-[5px]"></span>
        <span className="hamburger-middle bg-primary rounded-[5px]"></span>
        <span className="hamburger-bottom bg-primary rounded-[5px]"></span>
      </button>
      </div>
    </header>
  );
};

export default MainNavigation;
