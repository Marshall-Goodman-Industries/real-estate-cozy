
import Image from "next/image"
import img1 from "../../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import { useCallback } from "react";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
export const Section5 = () => {
    const [ ref, inView, entry ] = useInView({
        /* Optional options */
        triggerOnce:true,
        threshold:1 ,
      });
      const [ ref2, inView2, entry2 ] = useInView({
        /* Optional options */
        triggerOnce:true,
        threshold:1 ,
      });
      const [ref3, inView3, entry3] = useInView({
        trackVisibility: true,
        delay:100,
        /* Optional options */
        triggerOnce:true,
        threshold:1 ,
      });
      const [ref4, inView4, entry4] = useInView({
        trackVisibility: true,
        delay:100,
        /* Optional options */
        triggerOnce:true,
        threshold:0.5 ,
      });
    let mwidth = useMediawQuery(useMediaQuery);
    return (

        
        
        <div className={`flex my-[70px] gap-[40px] w-full px-5 justify-around ${mwidth.isTabletPlusDevice?"flex-col-reverse":""}` }>

            <div className={`flex justify-center items-center  gap-[10px]  ${mwidth.isTabletPlusDevice ? "w-[100%]" : "w-[40%]"} flex-col`}>
                {[

                    {
                        head: "Buy a new home",
                        body: "Discover your dream home effortlessly with CozyVista. Our personalized approach ensures a seamless buying experience, matching you with a property that suits your lifestyle and preferences.",
                        linkName:"Find Buy",
                        linkUrl: "/",
                        Image:TroubleshootIcon
                    },
                    {
                        head: "Rent a home",
                        body: "Renting made simple. CozyVista offers a range of comfortable living spaces for every need. Experience hassle-free renting with properties designed for your convenience.",
                        linkName:"Find Rental",
                        linkUrl: "/",
                        Image:OtherHousesIcon
                    },
                    // {
                    //     head: "Sell a home",
                    //     body: "Sell your home with confidence. CozyVista's expert team ensures a smooth selling process, maximizing your property's value and connecting you with the right buyer. Your journey to a new chapter starts here.",
                    //     linkName:"Sell Property",
                    //     linkUrl: "/contactus",
                    //     Image:ModeOfTravelIcon
                    // },
                ].map((e, index) => {
                    return (
                        <div map={index} ref={[ref, ref2, ref3][index]} className={` ${[inView, inView2, inView3][index] ? "visible animate-slideright1" : "invisible"} group hover:transform hover:scale-[105%] flex p-5 shadow-md  gap-[30px] items-center w-full min-h-[100px]`}>
                        <div className="flex justify-center items-center w-[80px] h-[80px] ">
                        {/* <Image
                  alt=""
                    src={img1}
                    className="w-full h-full rounded-full"
                    priority
                    loading="eager"
                  /> */}
                                <e.Image width="80px" fontSize="large" sx="width:100%;height:100%;" className=" text-orange1 w-full h-full "/>
                        </div>
                        <div className="flex w-[80%] flex-col justify-center  gap-[5px]">
                                <h1 className="md_:text-[26px] text-[20px]"><b>{e.head}</b></h1>
                                <p className="md_:text-[17px] text-[15px]">{e.body}</p>
                                <Link href={e.linkUrl} className=" invisible group-hover:visible group-hover:animate-slideup1 bg-[rgb(196,47,14)] rounded-md w-[170px] h-[40px]  text-white justify-center flex items-center "><b>{ e.linkName}</b></Link>
                        </div>
                      </div> 
                    )
                })}
          
          
        </div>
            <div ref={ref4} className={` ${inView4 ? "visible animate-slideup1" : "invisible"} flex flex-col justify-center items-center  ${mwidth.isTabletPlusDevice?"w-[100%]":"w-[40%]"} `}>

                <h1 className="md_:text-[3.3rem] text-[2.4em] text-[rgb(8,20,69)]">
                    <b>
                    We Understand The Real Value of Home
                    </b></h1>
          <p className="md_:text-[20px]">We’ll make sure your property gets in front of the right people. Lorem ipsum dolor sit amet, consec tetur cing elit.</p>
        </div>
      </div>
    )
}