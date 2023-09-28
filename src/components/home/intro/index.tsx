"use client"
import {useState} from "react"
import localFont from "next/font/local";
import { ImageComponent } from "../../util/image";

const helvetica = localFont({
    src: './../../../app/fonts/Helvetica-Bold.ttf',
})
  

export default function IntroComponent() {
    const [animation, setAnimation] = useState<boolean>(false)
  return (
    <div className="w-full">
        <div className="relative flex justify-start items-start" onMouseOver={() => setAnimation(true)} onMouseOut={() => setAnimation(false)}>
            <div className={`relative z-50 w-[807px] h-[625px] flex justify-start items-start pt-[28px] ${animation ? "bg-transparent" : "bg-custom-black"}  duration-700 flex-col`}>
                <p className={`leading-[220px] font-[700] text-[250px] ${animation ? "text-custom-orange" : "text-custom-white"}  duration-500 ${helvetica.className} `}>HELLO</p>
                <p className={`leading-[220px] font-[700] text-[250px] ${animation ? "text-custom-orange" : "text-custom-white"}  duration-500 ${helvetica.className} `}>DEAR</p>
                <p className={`leading-[220px] font-[700] text-[250px] ${animation ? "text-custom-orange" : "text-custom-white"}  duration-500 ${helvetica.className} `}>FRIEND</p>
                <p className='text-[12px] text-custom-yellow w-fit rotate-[-90deg] bottom-0 absolute left-[-48px]'>product designer</p>
            </div>
            <div className=' absolute right-0 top-0'>
                <ImageComponent alt="manWalking" w="w-[516px]" h="h-[687px]" src={"/images/home/manWalking.png"}/>
                <div className={`z-50 bottom-[251px] flex justify-between items-center  h-[105px] absolute ${animation ? "w-[160px] right-[27px] " :"w-[120px] right-[47px] "} duration-500`}>
                    <ImageComponent  alt='leftBox'  w={animation ? "w-[37px]" : "w-[27px]"} h={animation ? "h-[137px]" : "h-[102px] duration-700"} src={"/images/home/left.png"} /> 
                    <ImageComponent  alt='ritghBox' w={animation ? "w-[37px]" : "w-[27px]"} h={animation ? "h-[137px]" : "h-[102px] duration-700"} src={"/images/home/rigth.png"} /> 
                </div>
            </div>
            <div className='absolute right-0 top-0 z-40'>
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
