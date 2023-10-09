"use client"
import { AnimatedTitleComponent } from "@/components/animatedTitle";
import AnimatedVerticalComponent from "@/components/animatedVertical";
import { ImageComponent } from "@/components/util/image";
import { helveltica } from "@/fonts/constants";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { useState } from "react";


export default function IntroServiceComponent() {
    const [animation, setAnimation] = useState<boolean>(false)
  return (
    <div onMouseOver={() => setAnimation(true)} onMouseOut={() => setAnimation(false)} className="relative">
      <AnimatedTitleComponent className={`text-[180px] large:text-[200px]  font-[700] relative z-50 pt-[200px] ${animation ? "text-custom-orange" : "text-custom-white"}  duration-500 ${helveltica.className}`} title="DYNAMIC & ADAPTABLE" animation/>
      <AnimatedVerticalComponent duration={1.2}  className="absolute top-0 right-0 z-30 ">
      <div className="absolute top-0 right-0 z-30 ">
        <ImageComponent alt="foto" w="w-[680px] large:w-[714px]" h="h-[888px] large:h-[998.84px]" src={"/images/services/service-banner.png"} containerClassname="z-20"/>
      </div>
      <div className="absolute top-0 right-0 z-40 opacity-50">
        <ImageComponent alt="texture" w="w-[680px] large:w-[714px]" h="h-[888px] large:h-[998.84px] opacity" src={"/images/services/texture2.png"} containerClassname={`z-30  ${animation ? "opacity-100" : "opacity-30"}   duration-700 `}/>
      </div>
      </AnimatedVerticalComponent>

      <div className="mt-[241px] flex flex-col gap-y-[10px]">
        <motion.hr className='h-[2px]  w-[524px] flex text-custom-white' initial={{width:0}}  animate={{width: 524}} transition={{duration:1}}/>
        <motion.p className="text-[12px] text-custom-yellow"  initial={{opacity:0}}  animate={{opacity: 1}} transition={{duration:0.5, delay:1}}>Developing tailored solutions through customized services</motion.p>
      </div>
    </div>
  )
}
