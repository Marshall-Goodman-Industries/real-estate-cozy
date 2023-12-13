import "@/styles/globals.css";
import "@/styles/animation1.css";
import Head from "next/head";
import {useState,useReducer} from "react"
import react ,{useContext ,createContext} from "react"
import { Contextapi1 } from "@/contextApi/context2";


export default function App({ Component, pageProps }) {
  let [sideToast, setSideToast] = useState({ message:null, type: true })
 
  let reducer = (state, action) => {
    let state_ = { ...state }
    console.log(action)
    action.forEach(e => {
      
      switch (e.type) {
        case "sidetoast":
          
          // state_.sidetoast.message = message
          // state_.sidetoast.type = type
      
          
          // setTimeout(() => {
      
          //   // setSideToast({message:null,type:false})
            
          // },3000)
          
          break;
            }
    })
          
          return state_
        };
        //  let [notes,setNotes,]= useState(true)
       
 
 
  let setSideToastHelper = (message, type) => {
    let toast = { ...sideToast }
    toast.message = message
    toast.type = type

    setSideToast(toast)
    setTimeout(() => {

      setSideToast({message:null,type:false})
      
    },3000)
    
  }
  let [initdata,dispatch] = useReducer(reducer, {
    setSideToastHelper,
    
  });

  return (
    <>
      <Head>
        <meta property="og:image" content="/mgi-image.png" />
        {/* <meta property="og:url" content="https://mgi.com" />
        <meta property="og:type" content="website" /> */}
      </Head>
      {sideToast.message &&

      <div className={`border-b-[1px] w-[250px] rounded-md shadow-md min-h-[50px] px-[5px] bg-white flex items-center  fixed top-[0px] right-[0px] ${sideToast.type?"text-[blue] border-[blue]":"text-primary border-[red] "} ` }>
          <b>

            {
          
        sideToast.message
}
          </b>

      </div>
      }
      <Contextapi1.Provider value={{ ...initdata, newdispatch: dispatch }}>

      <Component {...{ ...pageProps, setSideToast ,setSideToastHelper}} />
      </Contextapi1.Provider>
    </>
  );
}
