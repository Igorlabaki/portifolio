"use client"
import {Variants, motion} from "framer-motion"
import ScrollProgressComponent from "@/components/scroolProgress";
import { useState } from "react";
import {FirstCaseComponent} from "@/components/cases/firstCase";
import { SecondCaseComponent } from "@/components/cases/secondCase";
import { ImageComponent } from "@/components/util/image";
import localFont from "next/dist/compiled/@next/font/dist/local";
import { helveltica } from "@/fonts/constants";
import AnimatedVerticalComponent from "@/components/animatedVertical";
import { BlackWhiteAnimation } from "@/components/cases/blackWhiteAnimation";



export default function Case1Page() {
  const [bannerAnimation, setbannerAnimation] = useState<boolean>(false)
  return (
    <ScrollProgressComponent>
      <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { duration: 1, ease: "easeOut" }, // Define a duração e a curva de animação para 'y'
        opacity: { duration: 2, ease: "linear" }, // Define a duração e a curva de animação para 'opacity'
      }}
      className={`relative `} >
        <div className="relative" onMouseOver={() => setbannerAnimation(true)} onMouseOut={() => setbannerAnimation(false)}>
          <ImageComponent alt="car" w={"w-[1440px] mt-[-50px]"} h={"min-h-[598px] h-full"} src={"/images/cases/zebra/zebra-banner.png"}/>
          <div className={`absolute  top-[299px] left-[190px] large:left-[300px] font-[700] flex flex-col ${helveltica.className}  ${bannerAnimation ? "text-custom-orange" : "text-custom-white"} duration-700 `}>
              <p className="text-[200px] large:text-[250px] leading-[180px] large:leading-[214px] z-50">SOLVUM</p>
              <p className="text-[200px] large:text-[250px] leading-[180px] large:leading-[214px] z-50">ZEBRA</p>
          </div>
          <div className={`absolute left-0 large:left-[-50px] top-[10px] z-40 w-[765px]  h-[701px]   ${bannerAnimation ? "opacity-90 h-[701px] " : "opacity-0"}  duration-300 overflow-hidden`}>
              <ImageComponent  alt='ritghBox' w={"w-[465px]"} h="h-[701px]"  src={"/images/cases/strm/strm-texture.png"} containerClassname="brightness-200"/>
          </div>
          <div className=" h-[57px] w-10 absolute z-30 bottom-[-57px] left-[20px] bg-custom-black"/>
        </div>
        <div className="mt-[190px] ml-[80px] flex flex-col gap-y-[40px] text-[12px] leading-[16px]" >
          <motion.div className="flex gap-x-[20px]">
            <AnimatedVerticalComponent yStart={400}>
              <BlackWhiteAnimation w="w-[514px] large:w-[610px]" h="h-[410px]" srcBalckWhite="/images/cases/zebra/zebra-case1-pb.png" srcRegular='/images/cases/zebra/zebra-case1-color.png'/>
            </AnimatedVerticalComponent>
            <AnimatedVerticalComponent className="w-[613px] flex flex-col justify-between items-start ">
                <span>
                        <div className="text-custom-yellow w-full flex justify-between items-center">
                            <p>2020/2021</p>
                            <p>UX/UI Design</p>
                        </div>
                        <hr className="text-custom-white mt-[9px] leading-[15.6px]"/>
                        <div className="text-custom-yellow flex flex-col gap-y-[16px] text-justify">
                            <p className="mt-[21px] font-[600]">Analyze and understand user feedback data, improve journey and layout</p>
                            <div className="flex flex-col gap-[10px]">
                              <p><span className="font-bold">Solvum</span>, as a technology company, served B2B or B2C companies for different segments, providing platform solutions, websites, mobile applications and the like. One of my biggest achievements was participating in the ideation of a Fintech - Zebra platform for online remittances from companies.</p>
                            </div>
                        </div>
                    </span>
                    <div className="text-[#525252] flex gap-x-[8px]">
                        <p>User Experience</p>
                        <div className="h-[12.6px] w-[2px] bg-custom-gray"/>
                        <p>Research</p>
                        <div className="h-[12.6px] w-[2px] bg-custom-gray "/>
                        <p>Design Thinking</p>
                        <div className="h-[12.6px] bg-custom-gray w-[2px] "/>
                        <p>UI Design</p>
                    </div>
              </AnimatedVerticalComponent>
            </motion.div>
            <div className="flex gap-x-[16px] text-[12px] leading-[16px]">
              <div className="text-custom-yellow w-[452px] text-justify flex flex-col justify-between ">
                  <AnimatedVerticalComponent className="flex flex-col flex-1 gap-y-[16px] ">
                      <p>After carefully reviewing feedback and conducting usability tests conducted by the company, I collaborated with the Solvum design team to analyze this data thoroughly. Our primary goal was to enhance user journeys within the platform and establish a consistent end-to-end user experience. To guide our evaluations and improvements, we relied on Nielsen's heuristics as our foundational framework. </p>
                      <p>My responsibilities encompassed working closely with personas to map out user journeys, construct detailed user journey maps, conduct heuristic evaluations throughout the entire platform, and propose innovative features and user flows. Simultaneously, I ensured that the layout underwent meticulous adaptations to align with our optimization efforts.</p> 
                      <p>See the final result below:</p>
                      <a className="font-bold underline" href="https://www.figma.com/exit?url=https%3A%2F%2Fzebracambio.com.br%2F" target="black">ZEBRA</a>  
                  </AnimatedVerticalComponent>
                  <div >
                      <ImageComponent alt="car" w="w-[61px] my-[25px]" h="h-[48.61px]" src={"/images/cases/rectangle.png"}/>
                      <ImageComponent alt="car" w="w-[452px]" h="h-[2px]" src={"/images/cases/line-horizontal.png"} containerClassname="mt-[10px]"/>
                      <p className="mt-[12px] text-custom-white">Focusing on a fluid experience without elevation in the middle of the flow, according to Zebra we were successful in implementing the new product after the project was delivered.</p>
                  </div>
              </div>
              <AnimatedVerticalComponent yStart={400} className='relative'>
                <BlackWhiteAnimation srcBalckWhite="/images/cases/zebra/zebra-case2-pb.png" h="h-[587px]"  w="w-[676px] large:w-[770px]" srcRegular="/images/cases/zebra/zebra-case2-color.png"/>
              </AnimatedVerticalComponent>
            </div>
          </div>
      </motion.div>
    </ScrollProgressComponent>
  )
}