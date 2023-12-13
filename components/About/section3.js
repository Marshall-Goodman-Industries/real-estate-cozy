import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
// import Image from "next/image";
// // import { poppins , intria,gelasio } from "@/fonts/general_fonts";
// import img1 from "../../public/images/images/img1.svg";
// import img2 from "../../public/images/images/img2.svg";
// import img3 from "../../public/images/images/img3.svg";
// import line1 from "../../public/images/images/line1.svg";
// import line2 from "../../public/images/images/line2.svg";
// import halfspher from "../../public/images/images/halfspher.svg";
import { poppins, intria, gelasio } from "../../fonts/general_fonts";
export const Section3 = () => {
  let mwidth = useMediawQuery(useMediaQuery);
  return (
    <div className="w-full py-10 flex  justify-center items-center flex-col mt-[100px]">
    <div className=" w-full md_:w-[60%] flex flex-wrap justify-center items-center flex-col mt-[100px]">
      <h1 className={` text-center py-5  ${gelasio.className} ${mwidth.isMobileDevice?"text-[20px]":"text-[33px]"}`}>
        <b>CozyVista is an estate agency that helps people live in more thoughtful and beautiful ways.</b>
      </h1>
      <p
        className={`max-w-[700px] text-center w-[90%] ${poppins.className} ${mwidth.isMobileDevice?"text-[15px]":""} text-[#1E1E1E] font-[400px] leading-2`}
      >
       Your key to exceptional real estate experiences. From innovative solutions to sustainable living, we redefine the way you find, own, and cherish your home. Trust CozyVista for personalized attention and a seamless journey into harmonious living..
      </p>
    </div>
    </div>
  );
};
