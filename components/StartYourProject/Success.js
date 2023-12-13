import { useEffect } from "react";

import Image from "next/image";

import animationSuccess from "../../public/images/images/animation-sucess.gif";
import Portal from "../UI/Portal";

const Success = ({ loadingSwitcher }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
      loadingSwitcher();
    }, 3500);

    return () => {
      document.body.classList.remove("overflow-hidden");
      clearTimeout(timer);
    };
  }, [loadingSwitcher]);
  
  return (
    <Portal isOpen={true}>
      {" "}
      <div className="w-[90%] h-[350px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-lg overflow-hidden md:h-[500px] md:max-w-[498px]">
        <div className="bg-white flex flex-col items-center justify-center  h-full animateSlideUp w-full">
          <div className="w-[200px] h-[200px] md:h-[343px] md:w-[343px]">
            <Image
              alt="success"
              src={animationSuccess}
              height={343}
              width={343}
              loading="eager"
              priority
              className="h-full w-full"
            />
          </div>
          <p className="text-primary font-medium text-base md:text-[35px]">
            Thank you
          </p>
        </div>
      </div>
    </Portal>
  );
};

export default Success;
