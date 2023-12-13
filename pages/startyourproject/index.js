import { useState } from "react";
import Head from "next/head";

import { poppins, gelasio } from "@/fonts/general_fonts";
import useHttp from "@/hooks/useHttp";

import Layout from "@/components/Layout/Layout";
import Success from "@/components/StartYourProject/Success";

const contactInfo = [
  {
    title: "Project name",
    placeholder: "e.g The Stella Web Project",
    type: "text",
    id: "project_name",
  },
  {
    title: "Company name",
    placeholder: "e.g Microsoft",
    type: "text",
    id: "company_name",
  },
  {
    title: "Your email",
    placeholder: "e.g  johnDoe@doemail.com",
    type: "email",
    id: "email",
  },
  {
    title: "Your phone number",
    placeholder: "e.g +234 123333456",
    type: "number",
    id: "phone_number",
  },
];

const projectOverView = [
  {
    title: "Description of your project",
    id: "description",
    placeholder:
      "Write the description of your Project.\ne.g “Create a stunning and functional website for GHI Co., a company that specializes in interior design and renovation services. The website will showcase the company’s portfolio, testimonials, and awards, as well as provide a contact form and a booking system. The website will also be fast, secure, and SEO-Optimized.....",
  },
  {
    title: "Key objective of your project",
    id: "objective",
    placeholder:
      "List out what your Company would like to achieve with this website.\ne.g:  “\n• To increase the brand awareness and reputation of GHI Co. and attract more potential customers.\n• To provide a user-friendly and interactive website that showcases the company’s work and expertise.  ”",
  },
  {
    title: "What challenges are you hoping to address",
    id: "challenges",
    placeholder:
      "List the Challenges your company might be experiencing and how you would like to address it with this website. \ne.g: “\n• Low online visibility and traffic\n• Poor user experience and conversion\n• Lack of online engagement and loyalty”",
  },
  {
    title: "Your desired timeline for your project",
    id: "timeline",
    placeholder:
      "State your Desired timeline for the website project: e.g : 2 weeks",
  },
];
const placeholder = "We offer two Financial options: \n•  Installment payments \n• Full payment"
// const budget = [
//   {
//     title: "Are you open to discussing financial options?",
//     id: "financial_options",
//   },
// ];

const StartYourProject = () => {
  const {
    isLoading,
    error,
    sendRequest: startYourProjectHttpRequest,
  } = useHttp();
  const [isFinanciallOptions, setIsFinancialOptions] = useState(false);
  const [details, setDetails] = useState({});
  const [isSucess, setIsSuccess] = useState(false);
  const [financiallOptionsDefaultVal, setFinanciallOptionsDefaultVal] =
    useState(true);

  if (financiallOptionsDefaultVal) {
    setDetails((prev) => {
      return { ...prev, financial_options: "No" };
    });
    setFinanciallOptionsDefaultVal(false);
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setDetails((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const loadingSwitcher = () => {
    setIsSuccess((prev) => !prev);
  };

  const startYourProjectHttpResponse = (res) => {
    const { message } = res;
    if (message === "Your message has been sent successfully!") {
       setDetails({});
      loadingSwitcher();
    }
  };

  console.log(details)

  const startYourProjectHandler = (event) => {
    event.preventDefault();

    startYourProjectHttpRequest(
      {
        url: "start-project",
        method: "POST",
        body: details,
      },
      startYourProjectHttpResponse
    );
  };
  return (
    <>
      <Head>
        <title>
          Start Your Project | Marshall Goodman Industries | Build an IT
          Development Solution
        </title>
        <meta
          name="description"
          content="Ready to start your project with Marshall Goodman Industries? Fill out the form with your project details, such as name, overview, objective, challenges, timeline, and budget. We will get back to you soon with a free consultation and a quote."
        />
        <meta
          property="og:title"
          content="Start Your Project | Marshall Goodman Industries | Build an IT Development Solution"
        />
        <meta
          property="og:description"
          content="Ready to start your project with Marshall Goodman Industries? Fill out the form with your project details, such as name, overview, objective, challenges, timeline, and budget. We will get back to you soon with a free consultation and a quote."
        />
      </Head>
      <Layout>
        {isSucess && <Success loadingSwitcher={loadingSwitcher} />}
        <p
          className={`${gelasio.className} text-[20px] font-bold text-center mt-12 md:text-[38px]`}
        >
          Start your project
        </p>
        <p
          className={`${gelasio.className} mb-20 text-[16px] text-center text-secondary11`}
        >
          {" "}
          info@mgihq.com.ng
        </p>
        <form
          onSubmit={startYourProjectHandler}
          className="px-5 bg-secondary9 pt-20 pb-60 md:px-8 xl:px-32"
        >
          {error && <p className="text-center py-5 text-red-500">{error}</p>}
          <div className="flex justify-between flex-wrap gap-16">
            {contactInfo.map((contactObj, index) => (
              <div
                key={index}
                className={`${poppins.className} flex flex-col space-y-2 w-full lg:w-[495px]`}
              >
                <label
                  htmlFor={contactInfo.title}
                  className="text-[17px] md:text-[20px]"
                >
                  {contactObj.title}
                </label>
                <input
                  onChange={handleInputChange}
                  id={contactObj.id}
                  type={contactObj.type}
                  value={details[contactObj.id] || ""}
                  placeholder={contactObj.placeholder}
                  className="h-[66px] w-full rounded-[10px] bg-white outline-none pl-5 placeholder:text-secondary5 placeholder:text-sm md:placeholder:text-base"
                  required
                />
              </div>
            ))}
          </div>

          <div
            className={`${poppins.className} flex flex-col space-y-2 w-full my-16`}
          >
            <label className="text-[17px] md:text-[20px]">Your message</label>
            <textarea
              onChange={handleInputChange}
              id="message"
              value={details["message"] || ""}
              placeholder="Write your message...."
              className="h-[406px] w-full rounded-[10px] bg-white outline-none p-5 resize-none placeholder:text-secondary5 placeholder:text-sm md:placeholder:text-base"
              required
            />
          </div>
          <p
            className={`${gelasio.className} font-bold mb-10 text-[25px] md:text-[32px]`}
          >
            Your project overview
          </p>

          {projectOverView.map((info, index) => (
            <div
              key={index}
              className={`${poppins.className} flex flex-col space-y-2 w-full my-16`}
            >
              <label htmlFor={info.id} className="text-[17px] md:text-[20px]">
                {info.title}
              </label>
              <textarea
                onChange={handleInputChange}
                id={info.id}
                value={details[info.id] || ""}
                placeholder={info.placeholder}
                className="h-[360px] w-full rounded-[10px] bg-white outline-none p-5 resize-none placeholder:text-secondary5 placeholder:text-sm md:placeholder:text-base"
                required
              />
            </div>
          ))}
          <p
            className={`${gelasio.className} font-bold mb-10 text-[25px] md:text-[32px]`}
          >
            Budget
          </p>
          <div
            className={`${poppins.className} flex flex-col space-y-2 w-full`}
          >
            <label htmlFor="budget" className="text-[17px] md:text-[20px]">
              Estimated budget for the project?
            </label>
            <input
              onChange={handleInputChange}
              id={"budget"}
              type={"test"}
              value={details["budget"] || ""}
              placeholder={"State Your Budget:  e.g  $200"}
              className="h-[66px] w-full rounded-[10px] bg-white outline-none pl-5 placeholder:text-secondary5 placeholder:text-sm md:placeholder:text-base"
              required
            />
          </div>

          <div
            className={`${poppins.className} flex flex-col space-y-2 w-full my-16`}
          >
            <label
              htmlFor={"financial_options"}
              className="text-[17px] placeholder:text-sm md:placeholder:text-base md:text-[20px]"
            >
              Are you open to discussing financial options?
            </label>
            <div className="flex flex-wrap pt-5 pb-11 gap-5">
              <button
                type="button"
                onClick={() => {
                  setIsFinancialOptions(true);
                  setDetails((prev) => {
                    return { ...prev, financial_options: "" };
                  });
                }}
                className={`${
                  isFinanciallOptions && "bg-white"
                } py-3 px-8 text-base rounded-[9px] md:text-[18.54px] md:px-12`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsFinancialOptions(false),
                    setFinanciallOptionsDefaultVal(true);
                }}
                className={`${
                  !isFinanciallOptions && "bg-white"
                } py-3 px-8 text-base rounded-[9px] md:text-[18.54px] md:px-12`}
              >
                No
              </button>
            </div>
            {isFinanciallOptions && (
              <textarea
                onChange={handleInputChange}
                value={details["financial_options"] || ""}
                id={"financial_options"}
                placeholder={placeholder}
                className="h-[180px] w-full rounded-[10px] bg-white outline-none p-5 resize-none placeholder:text-secondary5 placeholder:text-sm md:placeholder:text-base"
                required
              />
            )}
          </div>

          {error && <p className="text-center py-5 text-red-500">{error}</p>}
          <div className="w-full flex justify-center">
            {" "}
            <button
              disabled={isLoading}
              className={`${poppins.className} w-[90%] mx-auto text-white py-4 bg-primary rounded-[5px]`}
            >
              {isLoading ? "Please wait..." : "Submit"}
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default StartYourProject;
