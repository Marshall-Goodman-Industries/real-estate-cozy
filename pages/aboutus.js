import MainNavigation from "@/components/Layout/MainNavigation";
import Footer from "@/components/Layout/Footer";

import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../helpers/utils";
import { poppins, intria, gelasio } from "../fonts/general_fonts";
import { Section1 } from "@/components/About/section1";
// import { Section2 } from "@/components/About/section2";
// import { Section3 } from "@/components/About/section3";
// import { Section4 } from "@/components/About/section4";
// import { Section5 } from "@/components/About/section5";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Section2 } from "@/components/About/section2";
import { Section3 } from "@/components/About/section3";
let Head_ = () => {
  return   <Head>
  <title>
    About Marshall Goodman Industries | Enterprise Technology Solutions
  </title>
  <meta
    name="description"
    content="Marshall Goodman Industries is a leading provider of enterprise technology solutions, offering IT consultation, security, and bespoke software development. Contact us today to find out how we can help you achieve your business goals.
"
  />
</Head>
}
export default function About() {
  let mwidth = useMediawQuery(useMediaQuery);
  let [eth, setEth] = useState(null);
  useEffect(() => {
    //  solves hydration
    setEth(true);
  }, []);
  return !eth ? (
    <>
    <Head_/>
    </>
  ) : (
    <>
      <Head_/>
        <MainNavigation />
        <Section1/>
        <Section2/>
        <Section3/>
      {/* <div className="mt-10 w-full box-border">
        <div
          className={` ${mwidth.isTabletDevice ? "px-[15px]" : "px-[100px]"}`}
        >
          <Section1 />

          {mwidth.isTabletDevice ? (
            <div className="flex justify-around mt-[300px] ">
              <div className={`flex justify-center items-center flex-col `}>
                <h1 className="text-primary">
                  <b className="text-[20px]">30+</b>
                </h1>
                <h2 className="">Happy Customers</h2>
              </div>
              <div className={`flex justify-center items-center flex-col `}>
                <h1 className="text-primary">
                  <b className="text-[20px]">7</b>
                </h1>
                <h2 className="">Industries/Sectors Served</h2>
              </div>
            </div>
          ) : (
            <></>
          )}

          <Section2 />

          <Section3 />

          <Section4 />
        </div>

        <div className="bg-[#F5F5F5] py-[100px]">
          <Section5 />
        </div>
      </div> */}
      <Footer />
    </>
  );
}
