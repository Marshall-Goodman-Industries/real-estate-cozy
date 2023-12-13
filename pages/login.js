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
import Link from "next/link";

let images = [1, 2, 3, 2, 3]


 const  Login = () => {
   



    return (
        
        <>
        
            <MainNavigation />
            <div className="w-full flex-col flex justify-center items-center">
                <div className="w-full bg-opabrown2 h-[200px] gap-[20px] flex-col flex justify-center items-center">
                    <h1 className="mb-5 text-navyblue1 font-bold text-[30px] " >Admin Login</h1>
                


                </div>

                <div className="w-full lg_:w-[500px] h-[500px] my-10 flex flex-col items-center py-10 px-10 box-border rounded-md shadow-md">
                    <h2 className="mb-10 text-navyblue1 self-start font-bold">Login</h2>

                    <div className="mb-10 w-full">
                        <label htmlFor="email" className="mb-5 block">email address</label>
                        <input id="email" type="email" placeholder="esther@email.com" className="h-[50px] px-5 rounded-md bg-opabrown2 outlined-none margin-none w-full"/>
                    </div>
                    <div className="mb-10 w-full">
                        <label htmlFor="password" className="mb-5 block">email address</label>
                        <input id="password" placeholder="password" type="password" className="h-[50px] px-5 rounded-md bg-opabrown2 outlined-none margin-none w-full"/>
                    </div>
                    <Link className="self-end my-5" href="/passwordotp">forgot password</Link>
                    <button className="bg-orange1 text-white w-[100px] h-[70px] my-5 rounded-md">Login</button>

                </div>
            </div>
            {/* <div className="absolute bottom-0"> */}
        <Footer/>
                {/* </div> */}
        
        </>
    )
    
}

export default   Login