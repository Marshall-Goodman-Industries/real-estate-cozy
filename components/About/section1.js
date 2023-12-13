import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import Image from "next/image";
// import { poppins , intria,gelasio } from "@/fonts/general_fonts";

// import line1 from "../../public/images/images/line1.svg";
// import line2 from "../../public/images/images/line2.svg";

import { poppins, intria, gelasio } from "../../fonts/general_fonts";

export const Section1 = () => {
  let mwidth = useMediawQuery(useMediaQuery);
  return (
    <div className=" w-full flex flex-col justify-center items-center ">
      <div className="h-[500px] relative bg-cover bg-center w-full bg-[url('./../public/images/images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg')]">
        
        
      </div>
      <div className="rounded-md shadow-md w-[90%] min-h-[400px] md_:w-[60%] flex flex-col justify-center gap-[20px] items-center relative bg-white bottom-[200px] p-5 md_:p-20 xl_:p-30">
        <h1 className="font-bold text-[33px]">WELCOME TO HOMEZ</h1>
        <h1 className="md_:text-[25px] text-[20px] font-bold text-center">We see change as opportunity, not a threat and start with the belief that there is a better way.</h1>
      <p>Over the past 25 years we’ve created more than 5,000 new homes and 1.5 million sq ft of workspace in over 60 regeneration projects. Have a look at the short film below to learn more about how we’ve achieved this and what drives us.</p>
      </div>
    </div>
  );
};
