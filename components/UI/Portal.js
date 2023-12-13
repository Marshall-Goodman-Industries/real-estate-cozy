import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { poppins } from "@/fonts/general_fonts";

const Portal = (props) => {
  const [mounted, setMounted] = useState(false);
  const { children, onClick, isOpen } = props;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <>
    {isOpen && <div
      className={`${poppins.className}  fixed top-0 h-screen w-full z-40 bg-black opacity-60`}
    ></div>}
    <div className="h-max fixed top-1/2 w-full z-50">{children}</div>
  </>,
    document.getElementById("navigation")
  );
};

export default Portal;
