

import {useEffect ,useRef,useState} from "react"

export const Loader1 = ({w=10,h=10 ,g=10}) => {
    let arr = [0, 1, 2]
    
    let [active,setacttive] = useState(0)

    let reff = useRef(null)
    useEffect(() => {
        
    //     setInterval(() => {
    //         let ac = active+1
            
    //         console.log(active,ac)
    //         if (ac > arr.length) {
    //             ac=0
    //         }

    //         setacttive(ac)

           
         
    //    }, 2000);
        setTimeout(() => {
       
            let ac = active+1
           
            if (ac > arr.length-1) {
                ac=0
            }

            setacttive(ac)

   },300)
    }, [active])
    
    
    return (
        <div className={`w=50px flex gap-[${g}px] justify-center items-center `}>
            {arr.map((e, index) => {
                
                return <div key={index} className={`h-[${h}px] rounded-full border-[1px]  ${active==index? `bg-white border-red w-[${w*2}px]`:`bg-primary border-white  w-[${w}px]`}`}></div>
            })}
           
        </div>
    )
}