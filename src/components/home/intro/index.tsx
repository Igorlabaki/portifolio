"use client"
import {useState} from "react"
import {motion} from "framer-motion"
import localFont from "next/font/local";
import { ImageComponent } from "../../util/image";

const helveticaBold = localFont({
    src: './../../../app/fonts/Helvetica-Bold.ttf',
})


const helveticaMedium = localFont({
    src: './../../../app/fonts/HelveticaNeue-Light.otf',
})
  

export default function IntroComponent() {
    const [animation, setAnimation] = useState<boolean>(false)
  return (
    <div className="w-full">
        <div className="relative flex justify-start items-start" onMouseOver={() => setAnimation(true)} onMouseOut={() => setAnimation(false)}>
            <div className={`relative z-50 w-[807px] h-[625px] flex justify-start items-start pt-[28px] ${animation ? "bg-transparent" : "bg-custom-black"}  duration-700 flex-col`}>
                <p className={`leading-[220px] font-[700] text-[250px] ${animation ? "text-custom-orange" : "text-custom-white"}  duration-500 ${helveticaBold.className} `}>HELLO</p>
                <p className={`leading-[220px] spa font-[700] text-[250px] ${animation ? "text-custom-orange" : "text-custom-white"} tracking-[1.5rem] duration-500 ${helveticaMedium.className} `}>DEAR</p>
                <p className={`leading-[220px] font-[700] text-[250px] ${animation ? "text-custom-orange" : "text-custom-white"}  duration-500 ${helveticaBold.className} `}>FRIEND</p>
                <p className='text-[12px] text-custom-yellow w-fit rotate-[-90deg] bottom-0 absolute left-[-48px]'>product designer</p>
            </div>
            <div className=' absolute right-0 top-0'>
                <ImageComponent alt="manWalking" w="w-[516px]" h="h-[687px]" src={"/images/home/manWalking.png"}/>
                <div className={`z-50 bottom-[251px] flex justify-between items-center   absolute ${animation ? "w-[160px] right-[27px] h-[137px]" :"w-[120px] right-[47px] h-[105px] "} duration-700`} >
                    <ImageComponent  alt='leftBox'   w={animation ? "w-[37px]" : "w-[27px] duration-700"} h={animation ? "h-[137px]" : "h-[102px] duration-700"} src={"/images/home/left.png"} /> 
                    <ImageComponent  alt='ritghBox' w={animation ? "w-[37px]" : "w-[27px] duration-700"} h={animation ? "h-[137px]" : "h-[102px] duration-700"} src={"/images/home/rigth.png"} /> 
                </div>
            </div>
            <div className={`absolute right-0 top-0 z-40   ${animation ? "opacity-100" : "opacity-30"}  duration-700 `}>
                <ImageComponent  alt='ritghBox' w={"w-[813px]"} h="h-[687px]"  src={"/images/home/texture-2.png"} containerClassname="brightness-200"/>
            </div>
        </div>
        <div className="w-full flex flex-col justify-end mt-[62px]">
            <p className="text-custom-yellow text-[12px] my-[4px] w-full flex justify-end pr-[4px]">by florence</p>
            <hr className='h-[5px] text-custom-white w-full flex '/>
        </div>
    </div>
    )
}
