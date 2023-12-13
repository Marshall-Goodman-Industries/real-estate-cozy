import Image from "next/image"
import img1 from "../../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import { useCallback, useEffect ,useState ,useRef} from "react";
import Link from "next/link";

export const Section8 = () => {
    let mwidth = useMediawQuery(useMediaQuery);
    return (
        

        <div className="w-full  flex  justify-center px-5  items-center my-[200px]">
        <div className="w-full max-w-[1500px] flex flex-col justify-center gap-[10px] items-center">
          <h1 className="font-bold text-[25px] my-[40px]">Our <span className="text-[blue]">blog</span></h1>
          <h1 className="font-bold text-[2rem]">Article and Blog</h1>

          <div className="w-full flex gap-[10px] my-5 overflow-x-scroll">
            <div className={`group  ${mwidth.responsive(400)?"min-w-full":"min-w-[400px]"}  max-w-[400px] gap-[10px] `}>
                    <div className="  relative   w-full h-[300px] my-5 flex justify-center -align-center overflow-clip">
                        <div className="invisible group-hover:visible group-hover:animate-slideup1  absolute w-full h-full bg-[rgba(98,100,105,0.5)] "> 
                            <div className="relative w-full h-full">
                            <button className="absolute bottom-[10px] right-[10px] text-white font-bold">view more...</button>
                            </div>
                        </div>

<Image
alt=""
  src={img1}
  className="w-full"
  priority
  loading="eager"
/>

              </div>
              <h1 className="text-[blue] my-5 text-[1.2rem] font semibold font-bold">3D Printing Housing May be The Future of Homebuilding</h1>
              <p className="text-[rgba(98,100,105,0.5)] text-[15px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque...</p>
             

              

            </div>
          </div>
        </div>
        </div>
    )
    
}