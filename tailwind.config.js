/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens: {
        xsm_: "200px",
        sm_: "300px",
        xmd_: "500px",
        md_: "700px",
        lg_: "1000px",
        xlg_: "1300px",
        xxlg_:"1500px",
        gol_:"1700px",
        xgol_:"2000px",
        xxgol_:"2500px"
        
      },


      keyframes: {

        slideup1: {
          "0%": {transform:"translateY(50%)", opacity:"0%"},
          // "70%": {transform:"translateY(70%)", opacity:"50%"},
          "100%": {transform:"translateY(0%)", opacity:"100%"},
          
        
          
        },
        slideright1: {
          "0%": {transform:"translateX(-50%)", opacity:"0%"},
          // "70%": {transform:"translateY(70%)", opacity:"50%"},
          "100%": {transform:"translateX(0%)", opacity:"100%"},
          
        
          
        },
        slideleft1: {
          "0%": {transform:"translateX(50%)", opacity:"0%"},
          // "70%": {transform:"translateY(70%)", opacity:"50%"},
          "100%": {transform:"translateX(0%)", opacity:"100%"},
          
        
          
        },
        
      },

      animation: {
        slideup1: "slideup1 0.5s ease-in-out ",
        slideright1: "slideright1 0.5s ease-in-out ",
        slideleft1: "slideleft1 0.5s ease-in-out ",
        bounce1 :"bounce 0.5s    ease-in-out ",
    
      },
      fontFamily: {
        intria: "var(--intria-sans)",
      },
      colors: {
        primary:  "var(--primary-color)",
        secondary1: "var(--secondary-color-1)",
        secondary2: "var(--secondary-color-2)",  
        secondary3: "#262626", 
        secondary4: "#373435",
        secondary5: "#D9D9D9", 
        secondary6: "#6A6A6A", 
        secondary7: "#D9D9D942",
        secondary8: "#0000006E", 
        secondary9: "#F5F5F5",
        secondary10: "#D9D9D9DB",
        secondary11: "#71717B",
        opabrown1: "rgba(98,100,105,0.5)",
        opabrown2: "rgba(98,100,105,0.05)",
        navyblue1: "rgb(1,16,54)",
        brown1: "rgb(98,100,105)",
        orange1:"rgb(196,47,14)"
        
      },
      boxShadow: {
        customShadow1: "0px 50px 60px 14px #22222224",
        customShadow2: "20.360382080078125px 25.450477600097656px 43.26580810546875px 0px #0000001A",
        customShadow3: "1.0094696283340454px 50.473480224609375px 60.56817626953125px 14.132575035095215px #22222224",
        customShadow4: "0px 0px 20px 0px #00000012",
        customShadow5: "0px 50px 60px 14px #2222220A"


      }
    },
  },
  plugins: [],
};
