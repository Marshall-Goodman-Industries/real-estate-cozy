import Link from "next/link";
import logo from "../../public/images/logo/MGI-logo2.svg";
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import Image from "next/image";
import { gelasio } from "@/fonts/general_fonts";
import { useEffect, useState, useContext } from "react";
import { Loader1 } from "../utils/loader";
import { Contextapi1 } from "@/contextApi/context2";

import { BASEURL } from "@/helpers/constant";

const Footer = () => {
  let { setSideToastHelper } = useContext(Contextapi1);
  const [submit, setSubmit] = useState(false);
  let [data, setData] = useState({
    email: "",
  });
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
    <></>
  ) : (
    <footer
      className={`px-[10px] bg-[#262626] py-[10px] box-border ${
        !mwidth.isLaptop ? "text-[16px]" : "text-[10px]"
      }`}
    >
      <div>
        <div
          className={`flex gap-[50px] my-[30px] justify-between  text-white ${
            mwidth.isTabletDevice ? "flex-col" : "flex-row"
          }`}
        >
          <div>
            <Image
              alt=""
              src={logo}
              className={` ${"h-100"} p-0 m-0`}
              priority
              loading="eager"
            />
          </div>
          <div
            className={`flex gap-[20px] justify-between items-start ${
              gelasio.className
            }  ${!mwidth.isLaptop ? "w-[80%]" : "w-full"} ${mwidth.isMobileMicroDevice ? "flex-col" : ""} `}
          >
            {!mwidth.isLaptop ? (
              <div className="flex flex-col gap-[10px] ">
                {[
                  { name: "Home", url: "/" },
                  { name: "About us", url: "/aboutus" },
                  { name: "contact", url: "/contact" },
                ].map((e, index) => {
                  return (
                    <Link href={e.url} key={index} className=" mb-[10px] ">
                      {e.name}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
            <div>
              <h1 className="text-[18px]">
                <b>Contact us</b>
              </h1>

              <p>Email: info@mgihq.com.ng</p>
              <p>Phone number: +2348068621706</p>
            </div>
            <div>
              <div className="mb-[10px] box-border ">
                <h1 className="text-[18px]">
                  <b>Address</b>
                </h1>
                  <h2>
                    <p>

                  <b>Marshall Goodman Industries</b>
                    </p>
                </h2>
              </div>
              <div className={`flex gap-[20px] box-border ${mwidth.isMobileMicroPlusDevice?"flex-col":""}`}>
                {[
                  {
                    office: "Owerri office",
                    address:
                      "No 18, Road 1, Federal Housing Estate, Egbu, Owerri",
                  },
                  {
                    office: "London office",
                    address:
                      "40 Bank Street, Canary Wharf, London Email: london@mgihq.com.ng ",
                  },
                ].map((e, index) => {
                  return (
                    <div key={index} className="">
                      <h1 className="mb-[5px] underline">
                        <b>{e.office}</b>
                      </h1>
                      <h1>
                        <b>Address:</b>
                      </h1>
                      <p className="max-w-[400px]">{e.address}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

          <div className={`flex  w-full px-[20px] ${mwidth.isMobileMicroPlusDevice ? "flex-col justify-center items-center" : "justify-between"}  text-white`}>
          {mwidth.isLaptop ? (
            <div className="flex gap-[10px] flex-wrap">
              {[
                { name: "Home", url: "/" },
                { name: "About us", url: "/aboutus" },
                { name: "contact", url: "/contact" },
              ].map((e, index) => {
                return (
                  <Link href={e.url} key={index} className=" my-[10px]">
                    {e.name}
                  </Link>
                );
              })}
            </div>
          ) : (
            <></>
          )}
            <div className={` ${mwidth.isMobileMicroPlusDevice ? "" : "ml-[auto]"}`}>
            <p>Get the freshest news from us</p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  setSubmit(true);

                  let submitt = await fetch(`${BASEURL}/subscribe`, {
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
              className={`flex gap-[10px] justify-center items-center ${
                mwidth.isTabletPlusDevice ? "flex-col" : "flex-row"
              }`}
            >
              <input
                required
                // id="emai"
                key={12}
                // type="email"
                value={data.email}
                onChange={(e) => {
                  setDataHelper("email", e.target.value);
                }}
                placeholder="i.e your email address"
                className={`text-black rounded-lg shadow-md ${
                  mwidth.isTabletPlusDevice
                    ? "w-[150px]  h-[25px]"
                    : " w-[300px]  h-[50px]"
                } pl-[5px] `}
              />
              <button
                type="submit"
                className={`bg-primary text-white ${
                  mwidth.isTabletPlusDevice
                    ? "h-[25px] w-[70px]"
                    : "h-[50px] w-[100px]"
                }   px-[5px] rounded-lg items-center`}
              >
                {(submit && <Loader1 w={8} h={8} g={10} />) || <p>Submit</p>}
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr size="50" className="my-[10px]" />
      <div className="flex justify-between items-center my-[10px] text-[#92989F] flex-wrap">
        <div className="flex gap-[10px] justify-center items-center flex-wrap">
          <div>Terms and Conditions</div>
          <div className="h-[10px] w-[3px] bg-[#92989F]"></div>
          <div>Privacy Policy</div>
          <div className="h-[10px] w-[3px] bg-[#92989F]"></div>
          <div>Accessbility</div>
          <div className="h-[10px] w-[3px] bg-[#92989F]"></div>
          <div>Legal</div>
          <div className="h-[10px] w-[3px] bg-[#92989F]"></div>
        </div>
        <div>
          <p>© 2023 copyright, MC All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
