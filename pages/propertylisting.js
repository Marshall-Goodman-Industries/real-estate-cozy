import MainNavigation from "@/components/Layout/MainNavigation";
import Footer from "@/components/Layout/Footer";
import img1 from "../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../helpers/utils";
import { poppins, intria, gelasio } from "../fonts/general_fonts";
import Image from "next/image";

import { useEffect, useState } from "react";
import Head from "next/head";
import { ProjectList } from "@/components/Layout/projectlist";
import { AddBox, HdrPlusOutlined, More, PlusOneOutlined, Search, Settings } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Rangeslider } from "@/components/Layout/rangeslider";

let images = [1, 2, 3, 2, 3]

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
export default () => {
    const router =useRouter()
    let [moreSettings ,setmoreSettings] = useState(false)
    let [moreFeatures ,setmoreFeatures] = useState(false)
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
            <MainNavigation />
            <div className="w-full py-5 bg-navyblue1 text-white">
                <div className="flex flex-wrap gap-[10px] box-border justify-between px-5 items-center  w-full">
                    <div className="h-[40px]   flex items-center gap-[10px]">

                    <select   className=" rounded-md  h-[40px] text-navyblue1">
                        <option className="bg-navyblue1 text-white"  value="forSale">For Sale</option>
                        <option className="bg-navyblue1 text-white"  value="forRent">For Rent</option>
                    </select>
                    <Settings className="hover:text-orange1" onClick={(e) => {
                            console.log("fjfjfjjf")
                            setmoreSettings(!moreSettings)
                        }}/>
                    </div>
                    <div  className="w-full md_:w-[80%] rounded-md text-navyblue1  bg-white flex gap-[10px] items-center h-[40px]">
                    <select className="h-full rounded-md">
                        <option className="w-[50%] bg-navyblue1 text-white " value="AllTypes" >All Types</option>
                        <option className="w-[50%] bg-navyblue1 text-white " value="forSale" >For Sale</option>
                        <option className="w-[50%] bg-navyblue1 text-white " value="forRent">For Rent</option>
                        </select>
                        <input autoFocus={router.query["search"]?true:false} placeholder=" Keywords" className=" w-[90%] " type="text" />
                       

                        <Search  />
                   

                    </div>

                </div>
                {moreSettings &&
                    
                <div className="animate-slideup1 w-full">
                    <div className="px-5 flex flex-wrap gap-[30px] items-center w-full py-5 text-navyblue1">
                        
                        {[{label:"State",options:["albama","keneedy","Sd"]},{label:"City",options:["albama","keneedy","Sd"]},].map((e, index) => {
                            return (



                                <select  className="rounded-md w-full md_:w-[300px] h-[40px] px-5">
                                    <option value={e.label}>{e.label}</option>
                                    {e.options.map((e, index) => {
                                        
                                        <option value={e}>{e}</option>
                                    })}
                                {/* <option value="forRent">For Rent</option> */}
                                </select>
                            )
                        })}
                        {["Bedrooms","Bathrooms"].map((e, index) => {
                            return (


                            <input className="rounded-md px-5 w-full md_:w-[300px] h-[40px]"  placeholder={e} type="number"/>
                            )
                        })}
                        <input className="px-5 rounded-md w-full md_:w-[300px] h-[40px] " placeholder="Property ID"/>
                        
                    </div>
                    <div className="w-full flex flex-wrap gap-[70px] items-center px-5">
                    {[{label:"Price Range: from $200 to $2,500,000" ,min:200,max:20000000},{label:"Price Range: from $200 to $2,500,000" ,min:200,max:20000000},{label:"Price Range: from $200 to $2,500,000" ,min:200,max:20000000}].map((e, index) => {
                            return (

                                <div className="w-full md_:w-[600px] ">
                                    <label>{e.label}</label>
                                    <div className="relative w-full ">
                                        <Rangeslider/>
                                    {/* <input min={e.max} className="w-full " max={e.max} placeholder={e.name} type="range"/> */}
                                    {/* <input min={e.max} max={e.max} placeholder={e.name}  type="range"/> */}
                                        </div>
                                    </div>
                            )
                        })}

                    </div>
                    <div className="px-5 py-5">
                        <div className="flex gap-[10px]">
                                    <AddBox onClick={() => {
                                        setmoreFeatures(!moreFeatures)
                          }} />  Other features
                                </div>
                                {moreFeatures && 
                        <div className="animate-slideup1 flex gap-[10px] flex-wrap items-center ">
                        {["lounge","swimming pool" ,"Car park"].map((e, index) => {
                            return (


                                <div className="flex gap-[10px] items-center">
                                <label htmlFor={e}>{e}</label>
                                <input id={e}  placeholder={e} className="rounded-md  " type="checkbox"/>
                                </div>
                            )
                        })}
                        </div>
                                }

                    </div>
                    <div className="w-full flex justify-center px-5 ">
                        <button className="w-full md_:w-[650px] rounded-md bg-orange1 h-[55px]">Search</button>
                    </div>

                </div>
                }
            </div>
            <div className="w-full justify-center items-center">
                <div className="w-full flex justify-center items-center px-5">
                <div className="">

            
{<ProjectList projectList={projectList} style={"flex-wrap oveflow-x-hidden justify-center"}/>
    
}






</div>


                </div>
            </div>
        <Footer/>
        
        </>
    )
    
}