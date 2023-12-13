import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { intria } from "@/fonts/general_fonts";

import closeIcon from "../../public/images/icons/close-icon.svg";

const navData = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/aboutus" },
  { title: "Contact", link: "/contact" },
  { title: "Our Property", link: "/propertylisting" },
];

const MobileNavigation = (props) => {
  const router = useRouter();
  const { toggleDrawer } = props;

  return (
    <div
      className={`${intria.className} bg-secondary3 pt-8 text-white px-7 w-full h-full`}
    >
      <div className="flex justify-end">
        <button onClick={toggleDrawer} className="h-[19px] w-[19px]">
          <Image
            alt=""
            src={closeIcon}
            className="h-full w-full"
            priority
            loading="eager"
            height={19}
            width={19}
          />
        </button>
      </div>
      <nav className="space-y-7 mt-5 flex flex-col text-[15px]">
        {" "}
        {navData.map((navData, index) => (
          <Link onClick={toggleDrawer} key={index} href={navData.link}>
            {navData.title}
          </Link>
        ))}
        <button
          onClick={() => {
            toggleDrawer();
            router.push("/login");
          }}
          className="bg-primary text-[16px] font-bold rounded-[5px] py-2.5 px-3 text-white"
        >
          Add Listing
        </button>
      </nav>
    </div>
  );
};

export default MobileNavigation;
