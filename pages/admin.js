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
import { AddBox, Camera, Delete, DeleteOutline, DisplaySettingsOutlined, EditAttributesOutlined, LoupeOutlined, PhotoCameraBack } from "@mui/icons-material";
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
            <MainNavigation/>
      <div className="flex  flex-col justify-center items-center w-full">
            <div className="w-full p-10 flex-wrap flex justify-between gap-[10px]">
                <div className=" flex justify-between  flex-col ">
                    <div  className="gap-[20px] flex justify-between items-center">

                        <div className="bg-[green] text-white px-5">For Rent</div>
                        <div>3 years ago</div>
                          </div>
                          <h1 className="font-bold text-[20px]">Garden Gingerbread Bar</h1>
                          <p> 8 N Front St, Kingston</p>
                    {/* <div>

                        <div className="roundex-md  border-[1px] w-[20px]  flex justify-center items-center p-0 h-[20px]  border-black">+</div>
                    </div> */}
                    
                </div>
                <div  className=" flex flex-col justify-between ">
                <div className="roundex-md  border-[1px] w-[20px]  flex justify-center items-center p-0 h-[20px]  border-black">+</div>
                    <p><b>$550</b> /month</p>

                    <p> 8 N Front St, Kingston</p>
                </div>
                {/* <div>
                    <p> 8 N Front St, Kingston</p>

                </div> */}
                  </div>
                  
                  <div className="w-full flex gap-[10px] flex-col justify-center items-center px-5 box-border">
                      <button>add photo <AddBox />  <span>1/2</span></button>
                      {
                          images[0] && <div className="w-full max-w-[1000px] py-10 flex gap-3 flex-wrap md_:flex-nowrap   ">

                          <div className=" relative w-full h-full overflow-clip flex justify-center items-center bg-center bg-no-repeat bg-cover bg-[url('../public/images/images/city-church-ca-lJku4edK_cs-unsplash.jpg')] ">
                          <Delete className="absolute text-[red] top-[10px] left-[10px]"/>
                          <Image
                    alt=""
                      src={img1}
                      className="w-full  rounded-md opacity-0"
                      priority
                      loading="eager"
                    />
                              </div>
                              {
                                   images[1] &&
                                  
                          <div className="w-full h-full  flex gap-3 md_:flex-wrap  justify-center items-center">
          
                                {images.slice(1, 5).reduce((total, acc) => {
                                    console.log(total,total.length,(total.length) - 1)
                                    if (total[(total.length) - 1].length == 2) {
                                        let list =[]
                                        list.push(acc)
                                        total.push(list)
                                    } else {
                                      total[total.length - 1].push(acc)
                                    }
                                  
                                    return total
                                }, [[]]).map((e, index, arr) => {
                                  console.log(arr)
                                  return (
          
                                      <div key={index} className={`w-full h-full flex gap-3 ${arr.length<2?"md_:flex-col ":""}`}>
          
                                          {e.map((ee, index, arr2) => {
                                              console.log(arr2.length,arr2.length<2 && arr.length==2)
                                              return (
                                                  <div className={` relative  overflow-clip bg-center bg-no-repeat bg-cover bg-[url("../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg")] flex justify-center items-center ${arr2.length<2 && arr.length==2?"w-[50%]":""} ${arr.length<2 && arr2.length==2?"md_:w-[50%] ":""} ${arr.length<2 && arr2.length<2?"md_:flex-col ":""}   w-[100%]` }  key={index}>
                                                    <Delete className="absolute text-[red] top-[10px] left-[10px]"/>
                                                    {/* <DeleteOutline/> */}
                                                      <Image
                                                          alt=""
                                                          src={img1}
                                                          className={`w-full  rounded-md  opacity-0`}
                                                          priority
                                                          loading="eager"
                                                      />
                                                  </div>
                                              )
                                          })}
          
          
                                          </div>
                                 
                                  )
                              
                              
                          })
          
                          }
                          </div>
                              }
          
          
          
                          </div> ||
                           <div className="w-full h-[50vh] relative h-full overflow-clip flex justify-center items-center bg-center bg-no-repeat bg-cover ">
                                  <IconButton className="text-opabrown1 animate-pulse top-0 left-0  w-full h-full flex items-center justify-center">
                                      
                            <PhotoCameraBack fontSize="large"  style={{fontSize:90}} />
                            </IconButton>
                          
                           </div>
                      }
                  </div>

            
              <div className="bg-opabrown2 p-10 w-full flex flex-col justify-center items-center  ">
                  
              <div className="w-full max-w-[1000px] rounded-md shadow-md bg-white mt-[20px] p-10">
                  <h1 className="font-semibold text-[1.7em] my-10">
                  Description
                  </h1>
                  <textarea rows={10} placeholder="write a description" className="w-full text-justify text-[18px] text-brown1 font-500">
                  
                  </textarea>
              </div>
              <div className="w-full max-w-[1000px] rounded-md shadow-md bg-white mt-[20px] p-10">
                          <h1 className="font-semibold text-[23px] my-10 flex gap-[10px] items-center">
                              <span>
                              Overview  
                              </span>
                              <AddBox/>
                  
                  </h1>
                      <div className=" text-[20px] flex flex-wrap gap-[10px]  ">
                          <div className="flex min-w-[200px]  items-center gap-[10px] rounded-md shadow-md">
                              
                <DisplaySettingsOutlined sx="height:100% ;" className="text-[30px]"/>

                          {/* <Image
                                                alt=""
                                                src={img1}
                                                className={`w-[60px] h-[60px] rounded-md shadow-md`}
                                                priority
                                                loading="eager"
                                            /> */}
                              <div >
                                  <h1 className="font-bold text-[17px] text-navyblue1 ">Time</h1>
                                  <input required className=" text-brown1 text-[17px] " placeholder="12.2"/> 
                                        </div>




                              
                          </div>
                
                  </div>
              </div>
              <div className="w-full max-w-[1000px] rounded-md shadow-md bg-white mt-[20px] p-10">
                  <h1 className="font-semibold text-[23px] my-10 ">
                  Address
                  </h1>
                  <div className="  flex flex-col  gap-[10px] ">
               
                              

                             
                         
                              <p className=" text-[19px] text-navyblue1 flex gap-[20px] "><span className="font-bold min-w-[100px] ">
                              Address</span> <input required className=" text-brown1 text-[17px] px-5" placeholder="8 N Front St, Kingston"/>
</p>
                              <p className=" text-[19px] text-navyblue1 flex gap-[20px] "><span className="font-bold min-w-[100px]">
                                  State</span>
                                  <input required className=" text-brown1 text-[17px] px-5" placeholder="Lagos"/>    </p>
                              <p className=" text-[19px] text-navyblue1 flex gap-[20px] "><span className="font-bold min-w-[100px]">
                              Country</span>  <input required className=" text-brown1 text-[17px] px-5" placeholder="Nigeria"/>  </p>
                                        


                                  {/* <h1 className=" text-[19px] text-opabrown1"></h1> */}


                              
                        
                
                  </div>
                  </div>
                  

         
              <div className="w-full max-w-[1000px] rounded-md shadow-md bg-white mt-[20px] p-10">
                  <h1 className="font-semibold text-[23px] my-10">
                  Features
                  </h1>
                  <div className=" text-[20px] flex flex-wrap gap-[10px] ">
                          <div className="flex min-w-[200px]  items-center gap-[10px] rounded-md shadow-md">
                              
                                  <EditAttributesOutlined fontSize="large" />
                                  {/* <EditAttributesOutlined */}
{/* 
                          <Image
                                                alt=""
                                                src={img1}
                                                className={`w-[60px] h-[60px] rounded-md shadow-md`}
                                                priority
                                                loading="eager"
                                            /> */}
                              <div >
                                      <h1 className="font-bold text-[17px] text-navyblue1  ">Time</h1>
                                      <input required className=" text-brown1 text-[17px] " placeholder="12.2"/> 
                                  {/* <h1 className="font-bold text-[13px] text-opabrown1"></h1> */}
                                        </div>




                              
                          </div>
                
                  </div>
                      </div>
                        

              
           
              </div>
        </div>
              <Footer/>
          </>
    )
}