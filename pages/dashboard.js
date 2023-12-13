import MainNavigation from "@/components/Layout/MainNavigation";
import Footer from "@/components/Layout/Footer";
import img1 from "../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../helpers/utils";
import { poppins, intria, gelasio } from "../fonts/general_fonts";
import Image from "next/image";
// import { Section1 } from "@/components/About/section1";
// import { Section2 } from "@/components/About/section2";
// import { Section3 } from "@/components/About/section3";
// import { Section4 } from "@/components/About/section4";
// import { Section5 } from "@/components/About/section5";
import { useEffect, useState } from "react";
import Head from "next/head";
import { ProjectList } from "@/components/Layout/projectlist";
import { AddBox, Camera, Delete, DeleteOutline, DisplaySettingsOutlined, EditAttributesOutlined, LoupeOutlined, NotificationAdd, PhotoCameraBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
// import { Section2 } from "@/components/About/section2";
// import { Section3 } from "@/components/About/section3";
let images = [1,2,2,2,2,2]

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
export default function Productdetails() {
    let [projectList, setProjectList] = useState([
        {
        name:"Single House Near Los Angeles",
        description:"10768 Bellagio Rd, Los Angeles",
        price:"$500",
        },
        {
        name:"Single House Near Los Angeles",
        description:"10768 Bellagio Rd, Los Angeles",
        price:"$500",
        },
        {
        name:"Single House Near Los Angeles",
        description:"10768 Bellagio Rd, Los Angeles",
        price:"$500",
        },
        {
        name:"Single House Near Los Angeles",
        description:"10768 Bellagio Rd, Los Angeles",
        price:"$500",
        },
        {
        name:"Single House Near Los Angeles",
        description:"10768 Bellagio Rd, Los Angeles",
        price:"$500",
        },
        {
        name:"Single House Near Los Angeles",
        description:"10768 Bellagio Rd, Los Angeles",
        price:"$500",
        },
        {
        name:"Single House Near Los Angeles",
        description:"10768 Bellagio Rd, Los Angeles",
        price:"$500",
        },
    ])

    let [overview ,setOverview] = useState(({}))
    let [features ,setFeatures] = useState(({}))
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
            {/* <MainNavigation/> */}
              <div className="flex   justify-center items-center w-full h-[100vh] mt-5">
                  <div className="w-[150px] h-full hidden md_:block">
                    <div className=" mb-10 w-full flex justify-center font-bold">
                    <h1 >CozyVista</h1>
                        </div>
                    <div>'

                      <div className="dashboard h-[68px] flex  items-center w-full bg-opabrown2">
                        <div className="w-full flex flex-col justify-center items-center border-l-[5px] border-[blue]">
                        <AddBox/>
                        <h3>Dashboard</h3>
                         </div>
                        </div>
                      <div className="dashboard h-[68px] flex  items-center w-full bg-opabrown2">
                        <div className="w-full flex flex-col justify-center items-center border-l-[5px] border-[blue]">
                        <AddBox/>
                        <h3>properties</h3>
                         </div>
                        </div>
                      <div className="dashboard h-[68px] flex  items-center w-full bg-opabrown2">
                        <div className="w-full flex flex-col justify-center items-center border-l-[5px] border-[blue]">
                        <AddBox/>
                        <h3>Add property</h3>
                         </div>
                        </div>
                      
                    </div>
                      



                      
                  </div>
                  <div className="w-full h-full bg-opabrown2 ">
                      <div className="w-full h-[40px] justify-between shadow-md flex px-5">
                          
                          <input placeholder="search" className="rounded-md bg-opabrown2 w-[300px] h-[30px]" />
                          <NotificationAdd/>

                      </div>
                      <div className="px-5">
                      <div className="py-5">
                          <h1 className="font-bold">Dashboard</h1>
                          <p>welcome to cozy villa admin</p>
                      </div>

                      <div className="bg-orange1 rounded-md p-5 mb-5 flex gap-[10px] justify-between text-white items-center">
                          <div className="flex items-center gap-[20px]">
                            <AddBox/>
                              
                              
                          <div>
                              <h3>Total propeerties</h3>
                            <hr className="my-1 "/>
                              <p>assadm sd skksd</p>
                              
                          </div>
                          </div>
                          <div className="font-bold text-[1.5em]">
                             4,343 
                          </div>
                          
                      </div>
                      <div className="flex justify-between items-center ">
                          <div className="flex rounded-md shadow-md w-[48%] p-5">
                              <div>
                                  <h1 className="font-bold text-[1.5em]">2,334</h1>
                                  <p>Property for sale</p>
                                  <p>Propascscd</p>
                              </div>
                              <div> </div>
                          </div>
                          <div className="flex rounded-md shadow-md w-[48%] p-5">
                              <div>
                                  <h1 className="font-bold text-[1.5em]">2,334</h1>
                                  <p>Property for sale</p>
                                  <p>Propascscd</p>
                              </div>
                              <div> </div>
                          </div>
                      </div>


                      <div className="customer review my-5 w-full shadow-md min-h-[200px] rounded-md p-5">

                        <h1 className="font-bold mb-5">Customer Review</h1>
                          <div >
                              <div className="flex gap-[10px] items-center mb-5">
                                      <Image
                                            alt=""
                                                src={img1}
                                                className="w-[40px] h-[40px] rounded-full items-center"
                                                priority
                                                loading="eager"
                                                                />
                                  <div>
                                      <h3>John doe</h3>
                                      <div className="rating"></div>
                                  </div>
                              
                              </div>
                                  <div>
                                      ksk ksdm skdskd kdmkssk kdskmsk
                                  </div>
                        </div>




                          
                      </div>
                        </div>

                      
                  </div>
            </div>
              {/* <Footer/> */}
          </>
    )
}