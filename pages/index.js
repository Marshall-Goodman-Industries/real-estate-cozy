import Head from "next/head";
import Image from "next/image";
import img1 from "../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import { Section1 } from "@/components/Home/section1";
import { Section2 } from "@/components/Home/section2";
import { Section3 } from "@/components/Home/section3";
import { Section4 } from "@/components/Home/section4";
import { Section5 } from "@/components/Home/section5";
import { useState ,useEffect } from "react";
import { Section7 } from "@/components/Home/section7";
import { Section6 } from "@/components/Home/section6";
import MainNavigation from "@/components/Layout/MainNavigation";
import { Section8 } from "@/components/Home/section8";
import Footer from "@/components/Layout/Footer";
// import Head from "next/head";
let Head_ = () => {
  return   <Head>
  <title>
  Marshall Goodman Industries | Solutions for Tommorrow
  </title>
  <meta
    name="description"
    content="Marshall Goodman Industries is a  professional IT  development company that offers affordable and customized IT solutions for businesses online need across various domains. Whether you need IT consultation, new website, a redesign, or a maintenance plan, digital security, app development, or product development, we have the expertise and experience to deliver. Contact us today and let us help you achieve your digital goals."
  />
  <meta
    property="og:title"
    content="Marshall Goodman Industries | Solutions for Tommorrow"
  />
  <meta
    property="og:description"
    content="Marshall Goodman Industries is a  professional IT  development company that offers affordable and customized IT solutions for businesses online need across various domains. Whether you need IT consultation, new website, a redesign, or a maintenance plan, digital security, app development, or product development, we have the expertise and experience to deliver. Contact us today and let us help you achieve your digital goals."
  />
  
</Head>
}

export default function Home() {
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
        <div>
          
<MainNavigation/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
          <Section8 />
          <Footer/>
      




          

        
        
     </div>
    </>
  );
}
