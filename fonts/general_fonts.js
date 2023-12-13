import { Inria_Sans, Gelasio, Inter, Poppins, Lato } from "next/font/google";

export const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const intria = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const lato = Lato({ subsets: ["latin"],
weight: ["100", "300", "400", "700", "900"], });
