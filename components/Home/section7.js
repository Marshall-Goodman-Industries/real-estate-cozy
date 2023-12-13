

import Image from "next/image"
import img1 from "../../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import { useCallback, useEffect ,useState ,useRef} from "react";
import Link from "next/link";

export const Section7 = () => {
    let mwidth = useMediawQuery(useMediaQuery);
    return (
        

          
        <div className="px-5 py-[30px] w-full flex flex-col justify-center bg-center bg-cover bg-no-repeat items-center text-white min-h-[500px] bg-[url('./../public/images/images/ronnie-george-9gGvNWBeOq4-unsplash.jpg')]">
          <h2 className="text-[25px] "><b>Get Closed <span className="text-[blue]">with us</span></b></h2>
          <h1 className="text-[2rem] my-10 md_:text-[2.7rem] text-center font-bold">Let's Discuss with Us About Your Dream House</h1>
          <p className="text-[19px] ">Connect with CozyVista effortlessly. Whether you're looking to buy, sell, or inquire, our dedicated team is ready to assist you. Reach out today, and let's start your journey toward finding or selling your perfect home. Your next step is just a message away.</p>
          <button className="w-fit px-10 h-[50px] bg-[blue] rounded-md font-bold py-5 flex justify-center items-center my-5">Get Appointment</button>
</div>
    )
    
}