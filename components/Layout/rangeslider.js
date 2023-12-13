import { useRef  ,useState} from "react"


export const Rangeslider = ({ trackstyle = "", ballStyle = "", maxOnchange = () => { }, minOnchange = () => { }, max =100 ,min=0 }) => {
    let ref1 = useRef(null)
    
    let ref2 = useRef(null)
    
    let [move ,setmove] = useState(null)
    window.onmouseup = () => {
        console.log("SD")
    setmove(null)
}
    return (
        <div onMouseMove={(e) => {
            let x =e.clientX
            let maxX = e.currentTarget.clientWidth
            if (move && x >= 0 && x <= maxX) {
                // console.log(move,e)
                
                move.target.style.left=`${x-move.target.clientWidth/2}px`
                
            }
        }} className={` w-full h-[20px]  rounded-md   relative flex justify-center items-center`}>
           
        <div  className={`${trackstyle} w-full h-[5px] bg-white  rounded-md   relative flex justify-center items-center`}>
           
            <div ref={ref1} onMouseDown={(e) => {
                setmove(e)
                
            }} className="w-[15px] h-[15px] rounded-full bg-orange1 absolute left-[0px]">

            </div>
            <div ref={ref2} onMouseDown={(e) => {
                setmove(e)
                
            }} className="w-[15px] h-[15px] rounded-full bg-orange1 absolute left-[100%]">

            </div>
            
             {/* <input type="range"  defaultValue={0} max={max} min={min}  ref={ref1} onChange={(e) => {
 console.log(e)
                if (e.currentTarget.value >= ref2.current.value) {
                    e.currentTarget.value = ref2.current.value
                }

                maxOnchange()
                
            }} className="bg-transparent accent-orange1 z-100 border-transparent appearance-none w-full  rounded-full  absolute "/> 
            
            <input type="range" defaultValue={max} max={max} min={min} ref={ref2} onChange={(e) => {
                console.log(e)
                 if (e.currentTarget.value <= ref1.current.value) {
                    e.currentTarget.value = ref1.current.value
                }
                minOnchange()
            }} className="bg-transparent z-10 accent-orange1 border-transparent appearance-none w-full rounded-full  absolute "/>
           */}
          {/* <div className={`${trackstyle} w-full h-[5px] bg-white -z-99 absolute rounded-md top-[100%] `}></div>  */}
          
            {/* <div
                
           
                className="w-40px h-40px rounded-full bg-[blue] absolute top-[50%]"></div>
           <div className="w-40px h-40px rounded-full bg-[blue] absolute top-[50%]"></div>  */}
           {/* <div></div>  */}
          
        </div>
        </div>
    )
}