import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo/MGI-logo2.svg";
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
// import Image from "next/image";
import { gelasio } from "@/fonts/general_fonts";
import { useEffect, useState, useContext } from "react";
import img1 from "../../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
export const ProjectList = ({ projectList ,style=""}) => {
    let mwidth = useMediawQuery(useMediaQuery);
    return (
      <div className={`${style} w-full flex gap-[10px] overflow-x-scroll`}>

            
        {projectList.map((e, index) => {
            return (
<div  key={index} className={`${mwidth.responsive(400)?"min-w-full":"min-w-[400px]"}  max-w-[400px] my-[30px]`}>

<div className="relative w-full h-fit group overflow-hidden rounded-md overflow-clip">
{/* <div className="absolute">
For Rent
</div> */}
<div className="w-full  h-[280px] overflow-clip flex justify-center items-center"  >
<Image
alt=""
src={img1}
className="w-full h-fit "
priority
loading="eager"
/>
</div>

<div className="absolute invisible h-full w-full   top-[0px] group-hover:visible group-hover:animate-slideup1 ">
  <div className="relative h-full w-full  top-[0px] bg-[rgba(44,39,39,0.6)] ">

<button className="absolute bottom-[10px] text-white right-[10px]">view details...</button>
  </div>

</div>


</div>
<div className="flex flex-col gap-1">

                        <h2 className="text-[blue] text-[1.3rem]"> <b>{ e.name}</b></h2>
                        <p className="text-[20px]">{e.description }</p>
<h1><b className="text-[20px] mr-3">{e.price} </b> <span> /month</span></h1> 

</div>

</div>
            )
        })
            
}






</div>
       
    )
    
}