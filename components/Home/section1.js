import img from "../../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import Image from "next/image"
import img1 from "../../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import { useCallback } from "react";
// rgb(2, 2, 64)
export const Section1 = () => {
    let mwidth = useMediawQuery(useMediaQuery);
    return (
        <div className=" my-[10px] bg-center bg-cover bg-no-repeat  bg-[url('../public/images/images/jason-dent-w3eFhqXjkZE-unsplash.jpg')] min-h-[50vh] xmd_:min-h-[75vh] flex items-center p-5">

        <div className="flex flex-col gap-[20px]">
                <h2 className={`text-white  ${mwidth.isMobileDevicePlus?"text-[3rem]":"text-[5rem]"} font-bold`}>
            Welcome to <span className="text-navyblue1">CozyVista</span>
          </h2>
          <h1 className="text-navyblue1 text-[1.5rem]">
          The Future of House Design & Building
          </h1>
          <h1 className="text-navyblue1 text-[17px] font-bold ">Redefining real estate with innovative solutions, sustainable living, and personalized experiences. Your journey to a harmonious home begins here..</h1>
          <button className="bg-[rgb(196,47,14)] rounded-md w-[150px] h-[40px] my-10 text-white">Contact us</button>
        </div>
        {/* <div>

        <Image
        alt=""
          src={img1}
          className="w-50px h-[10px]"
          priority
          loading="eager"
        />

        </div> */}


      </div>
    )
}