import Image from "next/image"
import img1 from "../../public/images/images/webaliser-_TPTXZd9mOo-unsplash.jpg"
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import { useCallback ,useState,useEffect} from "react";
import ApartmentIcon from '@mui/icons-material/Apartment';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { useInView } from 'react-intersection-observer';

export const Section3 = () => {
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
  const [ref3, inView3, entry3] = useInView({
    trackVisibility: true,
    delay:100,
    /* Optional options */
    triggerOnce:true,
    threshold:0.4 ,
  });
  const [ref4, inView4, entry4 ] = useInView({
    /* Optional options */
    triggerOnce:true,
    threshold:1 ,
  });
  let [count, setCount] = useState(0)
  let maxCount =120
  const [ref5, inView5, entry5 ] = useInView({
    /* Optional options */
    triggerOnce:true,
    threshold: 1,
    onChange: (e) => {
      // console.log("Ssss",e,inView5)
      if (e) {
        countfunc()
  
        
      }
    }
  });

  let countfunc = () => {
    setTimeout(() => {
      if (count < maxCount) {
        
        setCount(count + 1)
        // console.log("Ssss")
      }
      
    },50)
}

  useEffect(() => {
   countfunc()
  },[count])
// console.log(inView,"inviewwwww",entry)
    let mwidth = useMediawQuery(useMediaQuery);
    console.log(mwidth.responsive(1700),mwidth.responsivex, mwidth.isDesktop,mwidth.isMobileDevice)
    return (
        

        <div  className={`flex justify-around items-center w-[100%] gap-[20px] my-[200px] ${mwidth.responsive(1500)?"flex-col":""}`}>
        <div ref={ref} className={` ${inView?"visible animate-slideup1":"invisible"}  ${mwidth.responsive(1500)?"w-[100%]":"w-[40%]"}`}>
        <Image
      alt=""
        src={img1}
        className="w-[100%] "
        priority
        loading="eager"
                />
          <div ref={ref2} className={` ${inView2 ? "visible animate-slideup1" : "invisible"} flex w-[100%] px-5 gap-[20px] items-center mt-5`}>
            <div className="flex flex-wrap gap-2">
              <Diversity2Icon fontSize="large" className=" text-[blue] "/>
                    {/* <Image
      alt=""
        src={img1}
        className="w-[50px] "
        priority
        loading="eager"
                        /> */}
                        <h1 className={`${mwidth.isMobileDevice?"text-[1em]":"text-[1.5rem]"}`}><b>professional Team</b></h1>
                        
                    </div>
            <div className="flex flex-wrap gap-2 items-center">
              <ApartmentIcon fontSize="large" className=" text-[blue] "/>
                    {/* <Image
      alt=""
        src={img1}
        className="w-[50px] "
        priority
        loading="eager"
                        /> */}
                        <h1  className={`${mwidth.isMobileDevice?"text-[1em]":"text-[1.5rem]"}`}><b>Modern House Design</b></h1>
                        
                    </div>
                </div>
        </div>

        <div ref={ref3} className={` ${inView3?"visible animate-slideleft1":"invisible"}  ${mwidth.responsive(1500)?"w-[100%] px-5":"w-[40%]"} `}>
                <h2 className="md_:text-[25px] text-[20px]"> <b>

                    Why <span className="text-[blue]">Choose us</span>
                </b>
                </h2>
                <h1 className={`text-[2em] md_:text-[3rem] xmd_:text-[2rem]`}><b>
                    The Best Solution To Realize Your Dream
                </b>
                </h1>
          <p className="text-[rgb(100, 94, 94)] md_:text-[20px]">
          Choose CozyVista for an unmatched real estate experience. Our commitment to customer satisfaction, innovative solutions, sustainable living, and community building sets us apart. Experience homes that go beyond structures, providing warmth and lasting memories. CozyVista - where your comfort and satisfaction matter most.
          </p>
          <div className="flex flex-wrap gap-[20px] items-center w-[100%] py-5">
            <h1 className={` text-[blue] ${mwidth.isTabletDevice ? "text-[2rem]" : "text-[3rem]"} w-fit`}>{count} +</h1>
            <h1 className={` md_:text-[25px] text-[20px]`}><b>

                        Home Project Completed
                    </b>
                    </h1>
          </div>
                <div className="">
                    
            <button ref={ref5} className={` ${inView5 ? "visible animate-slideup1" : "invisible"} bg-[rgb(196,47,14)] rounded-md w-[200px] h-[50px] my-10 text-white`}><b>Learn More</b></button>
           
          </div>
        </div>
      </div>
    )
}