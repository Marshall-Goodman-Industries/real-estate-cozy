import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/Layout/Layout";

import { poppins, gelasio, intria } from "@/fonts/general_fonts";
import { useRouter } from "next/router";

import { products } from "@/data/data";

const OurProducts = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Our Products | Marshall Goodman Industries | Enterprise Technology
          Solutions
        </title>
        <meta
          name="description"
          content="Explore our range of products that help you manage your school, institute, or hospital with ease. EduOne, ImsOne, and HmsOne are our flagship software solutions that offer features such as admissions, enrollment, attendance, exams, and more. Contact us today to get a free demo."
        />
        <meta
          property="og:title"
          content="Our Products | Marshall Goodman Industries | Enterprise Technology Solutions"
        />
        <meta
          property="og:description"
          content="Explore our range of products that help you manage your school, institute, or hospital with ease. EduOne, ImsOne, and HmsOne are our flagship software solutions that offer features such as admissions, enrollment, attendance, exams, and more. Contact us today to get a free demo."
        />
      </Head>
      <Layout>
        <p
          className={`${gelasio.className} text-[20px] font-bold text-center mt-12 md:text-[30px]`}
        >
          Our Products
        </p>
        <p
          className={`${gelasio.className} mb-20 text-[16px] text-center text-secondary11`}
        >
          {" "}
          info@mgihq.com.ng
        </p>
        <div className="flex flex-wrap justify-center gap-9 text-secondary6 px-5 lg:px-32">
          {products.map((prodObj, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center space-y-4 w-[380px] py-9 px-7 shadow-customShadow5 border-[1px] border-secondary10"
            >
              <div className="w-[97px] h-[97px] mb-3 md:w-[126px] md:h-[126px]">
                <Image
                  alt=""
                  src={prodObj.image}
                  className="w-full h-full"
                  priority
                  loading="eager"
                  height={126}
                  width={126}
                />
              </div>
              <a
                href={prodObj.link}
                target="_blank"
                className={`${gelasio.className} underline font-bold text-lg`}
              >
                {prodObj.company}
              </a>
              <p
                className={`${poppins.className} text-base font-bold text-center`}
              >
                {prodObj.title}
              </p>
              <p
                className={`${poppins.className} text-base text-center leading-relaxed`}
              >
                {prodObj.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center px-5 mt-24 mb-32">
          <button
            onClick={() => router.push("/startyourproject")}
            className={`${intria.className} rounded-[13px] text-white mx-auto font-semibold text-[20px] bg-primary py-4 px-5 md:text-[30px]`}
          >
            Start Your Project
          </button>
        </div>
      </Layout>
    </>
  );
};

export default OurProducts;
