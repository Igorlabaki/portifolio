"use client"
import {useState} from "react"
import localFont from "next/font/local";
import { ImageComponent } from "../../util/image";
import RectangleAnimation from "./rectangleAnimation";
import { helveticaBold, helveticaMedium } from "@/fonts/constants";
import AnimatedVerticalComponent from "@/components/animatedVertical";
import { motion } from "framer-motion";
import { AnimatedTitleComponent } from "@/components/animatedTitle";
  
export default function IntroComponent() {
    const [animation, setAnimation] = useState<boolean>(false)
    
    const defaultAnimations = {
        hidden:{
            opacity: 0,
            y:40,
        },
        visible:{
            opacity: 1,
            y:0,
        }
    } 
  return (
    <div className="w-full">
        <div className="relative flex justify-start items-start" onMouseOver={() => setAnimation(true)} onMouseOut={() => setAnimation(false)}>
            <motion.div animate={"visible"} initial={"hidden"} transition={{staggerChildren: 0.5}} className={`relative z-50 w-[540px] large:w-[807px] h-[625px] flex justify-start items-start pt-[28px] ${animation ? "bg-transparent" : "bg-custom-black"}  duration-700 flex-col`}>
                <AnimatedTitleComponent  className={`leading-[220px] font-[700] text-[230px] large:text-[250px] ${animation ? "text-custom-orange" : "text-custom-white"}  duration-500 ${helveticaBold.className} `} title="HELLO" animation/>
                <AnimatedTitleComponent delay={0.4} className={`leading-[220px] spa font-[700] text-[230px] large:text-[250px] ${animation ? "text-custom-orange" : "text-custom-white"} tracking-[1.5rem] duration-500 ${helveticaMedium.className} `} title="DEAR" animation/>
                <AnimatedTitleComponent delay={0.7} className={`leading-[220px] font-[700] text-[230px] large:text-[250px] ${animation ? "text-custom-orange" : "text-custom-white"}  duration-500 ${helveticaBold.className} `} title="FRIEND" animation/>
                <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2, duration: 0.5}} className='text-[12px] text-custom-yellow w-fit rotate-[-90deg] bottom-0 absolute left-[-48px]'>product designer</motion.p>
            </motion.div>
            <AnimatedVerticalComponent className="absolute right-0 top-0 ">
                <div className=' absolute right-0 top-0 '>
                    <ImageComponent alt="manWalking" w="w-[516px]" h="h-[687px]" src={"/images/home/manWalking.png"}/>
                    <RectangleAnimation animation={animation}/>
                </div>
                <div className={`absolute right-0 top-0 z-40   ${animation ? "opacity-100" : "opacity-30"}  duration-700 `}>
                    <ImageComponent  alt='ritghBox' w={"w-[813px]"} h="h-[687px]"  src={"/images/home/texture-2.png"} containerClassname="brightness-200"/>
                </div>
            </AnimatedVerticalComponent>
        </div>
        <div className="w-[1050px] large:w-full flex flex-col justify-end mt-[62px]">
            <motion.p className="text-custom-yellow text-[12px] my-[4px] w-full flex justify-end pr-[4px]" initial={{opacity:0}}  animate={{opacity: 1}} transition={{duration:0.5, delay:1.2}}>by florence</motion.p>
            <motion.hr className='h-[5px] text-custom-white w-full flex ' initial={{width:0}} animate={{width: "100%"}} transition={{duration:0.5, delay:0.7}}/>
        </div>
    </div>
    )
}
