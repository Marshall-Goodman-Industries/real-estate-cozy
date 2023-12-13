import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import img1 from "../../public/images/images/modern-architectural-house-facade-e1645270485746-pkqnrow0bt2g5demdkdzv488qqvy6ln9w5viw7nr94.jpg"
import Image from "next/image";
import VillaIcon from '@mui/icons-material/Villa';
import GiteIcon from '@mui/icons-material/Gite';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
// import { poppins , intria,gelasio } from "@/fonts/general_fonts";

// import line1 from "../../public/images/images/line1.svg";
// import line2 from "../../public/images/images/line2.svg";
// import halfspher from "../../public/images/images/halfspher.svg";
import { poppins, intria, gelasio } from "../../fonts/general_fonts";
let list = [
  {
    name: "Property Management",
    image: VillaIcon,
    des:"CozyVista's property management ensures peace of mind for homeowners. From tenant relations to maintenance, we handle it all with precision, allowing you to enjoy the benefits of your property stress-free. Trust CozyVista to manage your investment, ensuring a smooth and efficient experience."
  },
  {
    name: "Mortgage Service",
    image: GiteIcon,
    des:"CozyVista's mortgage service simplifies your path to homeownership. Our expert guidance and tailored solutions make financing your dream home straightforward. Experience a hassle-free journey towards securing the perfect mortgage with CozyVista by your side."
  },
  {
    name: "Consulting Service",
    image: AssignmentIndIcon,
    des:"Navigate the real estate landscape with confidence through CozyVista's consulting service. Our expert advisors provide personalized guidance, ensuring informed decisions tailored to your unique goals. Trust CozyVista for strategic insights and a seamless consulting experience in your real estate endeavors."
  },
]
export const Section2 = () => {
  let mwidth = useMediawQuery(useMediaQuery);
  return (
    <div className="flex w-full justify-center items-center">
    <div className="flex py-[20px] px-5 gap-[20px] w-full md_:max-w-[60%] flex-col justify-center items-center">
      <h1 className="font-bold md_:text-[25px] text-[17px]">Our services</h1>
      <p>CozyVista offers a spectrum of services designed to elevate your real estate experience. From seamless buying and renting processes to expertly navigating property sales, we blend innovation, sustainability, and personalized attention to make your journey with us exceptional. Discover the CozyVista difference in every service we provide.</p>
      <div className=" my-[20px] flex  gap-[10px] flex-col md_:flex-row">

          {

            list.map((e, index) => {
              return (
              
        <div className="rounded-md shadow-md w-full md_:w-[400px] p-5   gap-[20px] flex justify-between items-center flex-col ">
       <e.image xs="width:100%;height:100%;" className="text-orange1"/>
                  <h1 className="font-bold md_:text-[20px]">{ e.name}</h1>
          <p>
                  {e.des}
          </p>
        </div>
            )})
            
}
      </div>
   </div>
   </div>
  );
};
