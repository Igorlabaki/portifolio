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
          <ImageComponent alt="car" w={"w-[1440px] mt-[-50px]"} h={"min-h-[598px] h-full"} src={"/images/cases/mercedesBenz/mercedesBenz-banner.png"}/>
          <div className={`absolute top-[380px] large:top-[332px] left-[80px] large:left-[30px] font-[700] flex flex-col ${helveltica.className}  ${bannerAnimation ? "text-custom-orange" : "text-custom-white"} duration-700 `}>
              <p className="text-[170px] large:text-[220px] leadeing-[150px] large:leading-[189px] z-50">MERCEDES</p>
              <p className="text-[170px] large:text-[220px] leadeing-[150px] large:leading-[189px] z-50">BENZ</p>
          </div>
          <div className={`absolute left-[-38px] top-[10px] z-40 w-[765px]  h-[701px]   ${bannerAnimation ? "opacity-90 h-[701px] " : "opacity-0"}  duration-300 overflow-hidden`}>
              <ImageComponent  alt='ritghBox' w={"w-[465px]"} h="h-[701px]"  src={"/images/cases/strm/strm-texture.png"} containerClassname="brightness-200"/>
          </div>
          <div className=" h-[57px] w-10 absolute z-30 bottom-[-57px] left-[20px] bg-custom-black"/>
        </div>
        <div className="mt-[190px] ml-[80px] flex flex-col gap-y-[40px] text-[12px] leading-[16px]" >
          <motion.div className="flex gap-x-[20px]">
            <AnimatedVerticalComponent yStart={400}>
              <BlackWhiteAnimation w="w-[514px] large:w-[610px]" h="h-[410px]" srcBalckWhite="/images/cases/mercedesBenz/mercedesBenz-case1-pb.png" srcRegular='/images/cases/mercedesBenz/mercedesBenz-case1-color.png'/>
            </AnimatedVerticalComponent>
            <AnimatedVerticalComponent className="w-[613px] flex flex-col justify-between items-start ">
                <span>
                        <div className="text-custom-yellow w-full flex justify-between items-center">
                            <p>2023</p>
                            <p>UI Design</p>
                        </div>
                        <hr className="text-custom-white mt-[9px] leading-[15.6px]"/>
                        <div className="text-custom-yellow flex flex-col gap-y-[16px] text-justify">
                            <p className="mt-[21px] font-[600]">Creating new concepts based on user feedback</p>
                            <div className="flex flex-col gap-[10px]">
                              <p><span className="font-bold">Mercedes-Benz</span>, stands as one of the preeminent automotive brands on a global scale. During my tenure at Luxoft in the capacity of a UX/UI Designer, I had the privilege of contributing to the development of the innovative NGT7 car line. Within this role, I undertook the responsibility of conceptualizing enhanced usability approaches for specific interface elements featured on certain screens. This initiative was prompted by user feedback which indicated discomfort and suboptimal user experiences with certain attributes of the preceding NGT6 line .</p>
                              <p>As part of our commitment to continuous improvement, we have undertaken several initiatives to improve our design processes. One of the key initiatives involved developing a comprehensive <span className="font-bold">Design System foundation for future projects </span> . This step allows us to streamline our design work and ensure consistency and efficiency in our future endeavors.</p>
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
                      <p>In conjunction with the extensive information available regarding the brand's specifications, constraints, and established conventions, it was paramount for us to acknowledge the input from Mercedes stakeholders.</p>
                      <p>Upon meticulous assessment of the aforementioned user feedback, it was discerned that the newly proposed concepts had been adeptly aligned with the discerning aesthetic and brand standards meticulously set forth by Mercedes-Benz. </p>
                      <p>This conscientious endeavor ensured that our innovative solutions not only addressed the user complaints but also harmonized seamlessly with the esteemed brand's identity and its established benchmarks.</p>
                      <p>The concepts, including previous ones and new designs, received positive feedback from brand stakeholders for addressing user concerns innovatively. Their alignment with Mercedes-Benz's strict standards highlighted successful fusion of user-centric enhancements with brand identity. </p>
                  </AnimatedVerticalComponent>
                  <div >
                      <ImageComponent alt="car" w="w-[61px] my-[25px]" h="h-[48.61px]" src={"/images/cases/rectangle.png"}/>
                      <ImageComponent alt="car" w="w-[452px]" h="h-[2px]" src={"/images/cases/line-horizontal.png"} containerClassname="mt-[10px]"/>
                      <p className="mt-[12px] text-custom-white">The concepts, including previous ones and new designs, received positive feedback from brand stakeholders for addressing user concerns innovatively. Their alignment with Mercedes-Benz's strict standards highlighted successful fusion of user-centric enhancements with brand identity. </p>
                  </div>
              </div>
              <AnimatedVerticalComponent yStart={400} className='relative'>
                <BlackWhiteAnimation srcBalckWhite="/images/cases/mercedesBenz/mercedesBenz-case2-pb.png" h="h-[587px]"  w="w-[676px] large:w-[770px]" srcRegular="/images/cases/mercedesBenz/mercedesBenz-case2-color.png"/>
              </AnimatedVerticalComponent>
            </div>
          </div>
      </motion.div>
    </ScrollProgressComponent>
  )
}