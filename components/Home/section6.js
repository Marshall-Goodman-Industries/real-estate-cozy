
import Image from "next/image"
import img1 from "../../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import { useCallback, useEffect ,useState ,useRef} from "react";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';

export const Section6 = () => {
    const [ ref, inView, entry ] = useInView({
        /* Optional options */
        triggerOnce:true,
        threshold:1 ,
      });
    let mwidth = useMediawQuery(useMediaQuery);
    let [testimony, setTestimony] = useState({
        active: 0, list: [
        
            {
                testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                name: "John Wright",
                img:""
            },
            {
                testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                name: "Prince bri",
                img:""
            },
            {
                testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                name: "John Kenedy",
                img:""
            },
    ] })
    let reff =useRef(null)

    useEffect(() => {

        setTimeout(() => {
            if (testimony.list.length > 1) {
                let v =(testimony.active)+1
                if (v > testimony.list.length - 1) {
                    v=0
                }

                let obj = { ...testimony, active: v }
                setTestimony(obj)
                if (reff.current) {
                    console.log(reff.current, reff.current.style)
                    reff.current.classList.remove("bounce_css")
                    setTimeout(()=>{ reff.current.classList.add("bounce_css")},0)
                   
                    // reff.current.style.animationName="bouncev"
                  
                }

            }
            
        },4000)
        
    }, [testimony.active])
    console.log("f")
    return(

        <div className="w-full flex justify-center my-[200px]">
        <div className="max-w-[1500px] w-full">
                <div className={` flex w-full justify-between items-center relative ${mwidth.isTabletPlusDevice?"flex-col":""} px-5`} >
                <div>

            <h1 className="text-[25px]"><b>
            Our <span className="text-[blue]">Review</span>
            </b></h1>
            <h1 className="md_:text-[3rem] text-[2.5em]">
                <b>

                Client Testimonial
                </b>
            </h1>
                    <p className="text-[20px] text-[rgba(98,100,105,0.5)] font-bold">Elevating lifestyles through a portfolio of meticulously crafted homes, blending innovation, sustainability, and community essence. Explore a collection where each property reflects our commitment to excellence and your unique living experience.</p>
                </div>
                    <div ref={ref} className={` ${inView ? "visible animate-bounce1" : "invisible"} relative max-w-[450px] ${mwidth.isTabletPlusDevice?"max-w-full":"min-h-[300px]"} w-full  justify-center flex   top-[100px] bg-white  shadow-md   rounded-md`}>
                        
                            
                        {testimony.list[testimony.active] &&
                            
                            <div ref={reff}  className={`  bounce_css  w-full h-full justify-center flex flex-col gap-5  bg-white text-[rgb(69,71,79)]  p-5 font-bold rounded-md`}>
                                <p className="text-[20px] text-[rgba(98,100,105,0.5)]">{testimony.list[testimony.active].testimony}</p>
        
                        <div className="flex  items-center gap-5">
                          <div>
                          <Image
                  alt=""
                    src={img1}
                    className="w-[40px] h-[40px] rounded-full"
                    priority
                    loading="eager"
                  />
                          </div>
                          <div>
                            <h1><b>{testimony.list[testimony.active].name}</b></h1>
                            <p>client</p>
                          </div>
                          
        
                        </div>
                        </div>
                        }
                        
                      </div>

            </div>
                    <div  className="w-full h-[400px] bg-center bg-cover bg-[url('./../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg')]">
                      
                    {/* <Image
                  alt=""
                    src={img1}
                    className="w-full h-full"
                    priority
                    loading="eager"
                  /> */}
                    </div>
        </div>
        </div>
    
    )
}