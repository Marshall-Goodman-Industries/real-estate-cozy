import Image from "next/image"
import img1 from "../../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import { useCallback } from "react";
import { useInView } from 'react-intersection-observer';
export const Section2 = () => {
  const [ ref, inView, entry ] = useInView({
    /* Optional options */
    triggerOnce:true,
    threshold:0.5 ,
  });
  const [ ref2, inView2, entry2 ] = useInView({
    /* Optional options */
    triggerOnce:true,
    threshold:0.5 ,
  });
  const [ref3, inView3, entry3 ] = useInView({
    /* Optional options */
    triggerOnce:true,
    threshold:1 ,
  });
    let mwidth = useMediawQuery(useMediaQuery);

    return (
        
        <div className={`flex  ${mwidth.responsive(1500)?"flex-col":"flex-row-reverse"}  justify-around items-center w-[100%] my-[200px] gap-[10px]`}>

          <div ref={ref} className={` ${inView?"visible animate-slideup1":"invisible"} ${mwidth.responsive(1500)?"w-[100%]":"w-[40%]"}`}>
          <Image
          alt=""
            src={img1}
            className="w-[100%]"
            priority
            loading="eager"
          />
          </div>
            <div ref={ref2} className={` ${inView2?"visible animate-slideright1":"invisible"} flex justify-center  ${mwidth.responsive(1500)?"w-[100%] px-5":"w-[40%]"} flex-col`}>
                <h2 className="md_:text-[25px] text-[20px]">
                    <b>

            All About <span className="text-[blue]">Hoemz</span>
                    </b>
            </h2>
                <h1 className={`text-[2em] md_:text-[5rem]  xmd_:text-[3rem]`}>
                    <b>

            Planning & Designing Your Dream House
                    </b>
            </h1>
            <p className="md_:text-[20px]">
            Transforming real estate through customer-centric solutions, innovation, and sustainable development
            </p>
          <div ref={ref3} className={` ${inView3 ? "visible animate-slideup1" : "invisible"} flex flex-col md_:flex-row gap-[5px] mt-[20px]`}>
              <div  >
                        <h1 className="my-[5px] text-[1.1em] md:text-[1.5em]"> <b>
                       The Vision </b></h1>
                <p className="md_:text-[20px] ">
                At CozyVista, Our vision is to be the preferred choice for those seeking not just a house, but a place to truly call home—a place where warmth, comfort, and community converge to create lasting memories.
                </p>
              </div>
              <div>
                        <h1 className="my-[5px] text-[1.1em] md:text-[1.5em]"> <b>
                            
                The Mission
                </b>
                </h1>
                <p className="md_:text-[20px]">
                 Our mission is to provide top-notch real estate solutions that prioritize customer satisfaction, innovation, and sustainable development. We aim to exceed expectations, fostering enduring relationships with our clients and leaving a positive impact on communities.
                </p>

              </div>
            </div>
              <div className="md:ml-[auto]  self-center ">
              <button className="bg-[rgb(196,47,14)]  rounded-md w-[200px] h-[50px] font-bold my-10 text-white">About us</button>
              </div>
          </div>

          </div>
    )
}