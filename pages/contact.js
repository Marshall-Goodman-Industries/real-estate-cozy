// import HeroSection from "@/components/Home/HeroSection";
// import Overview from "@/components/Home/Overview";
// import Layout from "@/components/Layout/Layout";
import MainNavigation from "@/components/Layout/MainNavigation";
// import Image from "next/image";
// import img1 from "../public/images/images/img1.svg";
// import img2 from "../public/images/images/img2.svg";
// import img3 from "../public/images/images/img3.svg";
// import line1 from "../public/images/images/line1.svg";
// import line2 from "../public/images/images/line2.svg";
// import halfspher from "../public/images/images/halfspher.svg";
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../helpers/utils";
import { poppins, intria, gelasio } from "@/fonts/general_fonts";
import Footer from "@/components/Layout/Footer";
import { useEffect, useState } from "react";
import { BASEURL } from "@/helpers/constant";
import Head from "next/head";
import { Loader1 } from "@/components/utils/loader";


let Head_ = () => {
    return  <Head>
    <title>
      CozyVista developments
    </title>
    <meta
      name="description"
      content="Get in touch with Marshall Goodman Industries, a leading provider of enterprise technology solutions, with offices in Nigeria and London. Fill out the contact form or email us at info@mgihq.com.ng.

"
    />
  </Head>
}
export default function Contact({ setSideToastHelper, setSideToast }) {
  let [data, setData] = useState({
    name: "",
    email: "",
    company_name: "",
    phone_number: "",
    message: "",
    subject: "",
  });

  const [submit, setSubmit] = useState(false);

  let setDataHelper = (prop, data_) => {
    let dat = { ...data };
    dat[prop] = data_;
    setData(dat);
  };
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
      <div>
                  <div className={`w-full flex flex-col break-all  gap-[10px] justify-center items-center my-[100px]`}>
          <h1 className={`${gelasio.className}  ${mwidth.isMobileMicroDevice?"text-[20px]":"text-[30px]"}` }>
            <b>Contact us</b>
          </h1>
                      <h1 className={`text-[#71717B] ${mwidth.isMobileMicroDevice?"text-[17px]":"text-[27px]"} `}>
            <b >info@cozyvila.com.ng</b>
          </h1>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              setSubmit(true);

              let submitt = await fetch(`${BASEURL}/contact`, {
                body: JSON.stringify(data),
                method: "post",
                headers: {
                  "content-type": "application/json",
                },
              });
            
              if (submitt.ok) {
                setSideToastHelper("Success...", true);
              } else {
                setSideToastHelper("Error...", false);
              }
            } catch (e) {
              setSideToastHelper("Error...", false);
            } finally {
              setSubmit(false);
            }
          }}
          className={`bg-[#F5F5F5] py-[50px] w-full flex justify-center  ${
            mwidth.isMobileDevicePlus ? "px-[10px]" : "px-[50px]"
                          }`}
                  
                  >
                      <div className="w-full max-w-[1200px]">
                          
          <div className="w-full">
          {/* <div className="max-w-[1500px]"> */}
            <div className={`flex flex-wrap w-full ${mwidth.isTabletPlusDevice?"justify-center":"justify-between"}  items-center gap-[10px] my-[100px]`}>
              <div
                className={`max-w-[500px] ${
                  mwidth.isTabletPlusDevice ? "w-[100%]" : "w-[45%]"
                }`}
              >
                <label
                  htmlFor="name"
                  className={`${poppins.className}  text-[#262626] my-5 block `}
                >
                  Your Full Name{" "}
                </label>
                <input
                  required
                  id="name"
                  name="fullName"
                  value={data.name}
                  onChange={(e) => {
                    setDataHelper("name", e.target.value);
                  }}
                  placeholder="i.e esther"
                  className={`rounded-lg shadow-lg w-[100%]   h-[70px] pl-5  ${
                    mwidth.isMobileDevicePlus ? "text-[15px]" : "text-[20px]"
                  }`}
                />
              </div>


              {/* <div
                className={`max-w-[500px] ${
                  mwidth.isTabletPlusDevice ? "w-[100%]" : "w-[45%]"
                }`}
              >
                <label
                  className={`${poppins.className}  text-[#262626] my-5 block `}
                  htmlFor="company"
                >
                  Your Company Name{" "}
                </label>
                <input
                  required
                  id="company"
                  name="companyName"
                  value={data.company_name}
                  onChange={(e) => {
                    setDataHelper("company_name", e.target.value);
                  }}
                  placeholder="i.e dangote"
                  className={`rounded-lg shadow-md w-[100%]  h-[70px] pl-5  ${
                    mwidth.isMobileDevicePlus ? "text-[15px]" : "text-[20px] "
                  } `}
                />
              </div> */}
                     <div
                className={` max-w-[500px]   ${
                  mwidth.isTabletPlusDevice ? "w-[100%]" : "w-[45%]"
                }`}
              >
                <label
                  className={`${poppins.className}  text-[#262626]  my-5 block `}
                  htmlFor="email"
                >
                  Your Email{" "}
                </label>
                <input
                  required
                                          id="email"
                                          type="email"
                  value={data.email}
                  onChange={(e) => {
                    setDataHelper("email", e.target.value);
                  }}
                  name="email"
                  placeholder="i.e esther193@gmail.com"
                  className={`rounded-lg shadow-md w-[100%]  h-[70px] pl-5  ${
                    mwidth.isMobileDevicePlus ? "text-[15px]" : "text-[20px]"
                  }`}
                />
              </div>
            </div>

            
                              <div className={`flex flex-wrap ${mwidth.isTabletPlusDevice?"justify-center":"justify-between"} items-center gap-[10px] my-[100px]`}>
       
              <div
                className={` max-w-[500px] ${
                  mwidth.isTabletPlusDevice ? "w-[100%]" : "w-[45%]"
                }`}
              >
                <label
                  className={`${poppins.className}  text-[#262626] my-5 block `}
                  htmlFor="phone"
                >
                  Your Phone Number{" "}
                </label>
                <input
                  required
                  id="phone"
                                          name="phone"
                                          type="number"
                  value={data.phone_number}
                  onChange={(e) => {
                    setDataHelper("phone_number", e.target.value);
                  }}
                  placeholder="i.e +2348148939023"
                  className={`rounded-lg shadow-md w-[100%]  h-[70px] pl-5 ${
                    mwidth.isMobileDevicePlus ? "text-[15px]" : "text-[20px]"
                  }`}
                />
              </div>
              <div
                className={` max-w-[500px]   ${
                  mwidth.isTabletPlusDevice ? "w-[100%]" : "w-[45%]"
                }`}
              >
                <label
                  className={`${poppins.className}  text-[#262626]  my-5 block `}
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  required
                  id="subject"
                  value={data.subject}
                  onChange={(e) => {
                    setDataHelper("subject", e.target.value);
                  }}
                  name="subject"
                  placeholder="Commercial requirement"
                  className={`rounded-lg shadow-md w-[100%]  h-[70px] pl-5  ${
                    mwidth.isMobileDevicePlus ? "text-[15px]" : "text-[20px]"
                  }`}
                />
              </div>
            </div>
                              <div className={`flex flex-wrap ${mwidth.isTabletPlusDevice?"justify-center":"justify-between"} items-center gap-[10px] my-[100px]`}>
             
            
            </div>
          </div>
                          
                          
                          
                          
                          
                          {/* </div> */}
                          

          <div className="w-full my-[100px] flex justify-center items-center">
            <div className="w-[100%]  ">
              <label
                className={`${poppins.className}  text-[#262626] my-5 block `}
                htmlFor="message"
              >
                Your message{" "}
              </label>
              <div className="w-[100%] ">
                <textarea
                  required
                  value={data.message}
                  onChange={(e) => {
                    setDataHelper("message", e.target.value);
                  }}
                  id="message"
                  name="message"
                  rows="10"
                  cols="100"
                  className={`p-[10px] w-[100%] pl-5  ${
                    mwidth.isMobileDevicePlus ? "text-[15px]" : "text-[20px]"
                  }`}
                  placeholder="Write your message...."
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              onClick={() => {}}
              className="bg-primary text-white h-[60px] w-[100%] max-w-[1000px] px-[5px] rounded-lg items-center"
            >
              {(submit && <Loader1 />) || <p>Submit</p>}
            </button>
                          </div>
                      </div>
                          
        </form>
      </div>
      <Footer />
    </>
  );
}
