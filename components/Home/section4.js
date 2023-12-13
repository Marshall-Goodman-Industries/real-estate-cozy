import Image from "next/image"
import img1 from "../../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import { useCallback, useState } from "react";
import { ProjectList } from "../Layout/projectlist";




export const Section4 = () => {
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
    let mwidth = useMediawQuery(useMediaQuery);
    return(

        <div className="w-full  px-5 flex flex-col justify-center my-[200px] items-center">
        <div className="w-full md_:w-[92%]  flex flex-col justify-center  items-center">
          
          <h1 className="text-[2rem] mb-[25px]"><b>Our <span className="text-[blue]">Portfolio </span></b></h1>

          <h1 className="sm-text-[3rem] mb-[15px] text-[2em] text-center"><b>The Project Done</b></h1>

          <p className="md_:text-[20px] mb-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="w-full flex gap-[10px] overflow-x-scroll">

            
      {<ProjectList projectList={projectList}/>}
            



            

          </div>
          </div>
        </div>)
}