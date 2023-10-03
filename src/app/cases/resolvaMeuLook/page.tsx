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
          <ImageComponent alt="car" w={"w-[1440px] mt-[-50px]"} h={"min-h-[598px] h-full"} src={"/images/cases/resolvaMeuLook/resolvaMeuLook-banner.png"}/>
          <div className={`absolute top-[147px] left-[250px] font-[700] flex flex-col ${helveltica.className}  ${bannerAnimation ? "text-custom-orange" : "text-custom-white"} duration-700 `}>
            <p className="text-[250px] leading-[195.78px] z-50">RESOLVA</p>
              <p className="text-[250px] leading-[195.78px] z-50">MEU</p>
              <p className="text-[250px] leading-[195.78px] z-50">LOOK</p>
          </div>
          <div className={`absolute left-[-50px] top-[10px] z-40 w-[765px]  h-[701px]   ${bannerAnimation ? "opacity-90 h-[701px] " : "opacity-0"}  duration-300 overflow-hidden`}>
              <ImageComponent  alt='ritghBox' w={"w-[465px]"} h="h-[701px]"  src={"/images/cases/strm/strm-texture.png"} containerClassname="brightness-200"/>
          </div>
          <div className=" h-[57px] w-10 absolute z-30 bottom-[-57px] left-[20px] bg-custom-black"/>
        </div>
        <div className="mt-[190px] ml-[80px] flex flex-col gap-y-[40px] text-[12px] leading-[16px]" >
          <motion.div className="flex gap-x-[20px]">
            <AnimatedVerticalComponent yStart={400}>
              <BlackWhiteAnimation w="w-[610px]" h="h-[410px]" srcBalckWhite="/images/cases/resolvaMeuLook/resolvaMeuLook-case1-pb.png" srcRegular='/images/cases/resolvaMeuLook/resolvaMeuLook-case1-color.png'/>
            </AnimatedVerticalComponent>
            <AnimatedVerticalComponent className="w-[613px] flex flex-col justify-between items-start ">
                <span>
                        <div className="text-custom-yellow w-full flex justify-between items-center">
                            <p>UX Design</p>
                            <p>Research</p>
                        </div>
                        <hr className="text-custom-white mt-[9px] leading-[15.6px]"/>
                        <div className="text-custom-yellow flex flex-col gap-y-[16px] text-justify">
                            <p className="mt-[21px] font-[600]">User interviews, user needs and product ideation</p>
                            <div className="flex flex-col gap-[10px]">
                              <p><span className="font-bold">Resolva Meu Look</span>, is a company that provides Image Consulting for individuals or companies.</p>
                              <p>The company administration had some hypothesis about a certain image consulting service based on a market opportunity and wanted to approach it in an Agile way. As a market practice, the service was only provided in person, not being scalable</p>
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
                      <p><span className="font-bold">The objective of the research</span>  was based on some hypotheses that the company had regarding some feedback from the company's customer support, to assess the needs of our users. Surveys were carried out with 120 users who had already used a consultancy service.</p>
                      <p>Based on the results of our research, we analyzed the implementation of a service or adapting one that already existed, which was scalable and digital to meet this demand.</p> 
                      <p><span className="font-bold">Final Result</span> My responsibilities encompassed a spectrum of tasks,<span className="font-bold">from conducting user interviews to actively contributing</span>  to the development of the service.These contributions were guided by real-world demands and focused on ensuring a high degree of public acceptance upon the implementation of this new service. See the final result below: VISAGISMO</p> 
                      <p>See the final result below:</p>
                      <a className="font-bold underline" href="https://www.resolvameulook.com/visagismo" target="black">VISAGISMO</a>  
                  </AnimatedVerticalComponent>
                  <div >
                      <ImageComponent alt="car" w="w-[61px] my-[25px]" h="h-[48.61px]" src={"/images/cases/rectangle.png"}/>
                      <ImageComponent alt="car" w="w-[452px]" h="h-[2px]" src={"/images/cases/line-horizontal.png"} containerClassname="mt-[10px]"/>
                      <p className="mt-[12px] text-custom-white">Before the product launch, we conducted rigorous usability tests involving the company's consultants and selected users. <span className="font-bold">The feedback we received was highly favorable</span> , and the service remains operational and continues to receive positive reception to this day.</p>
                  </div>
              </div>
              <AnimatedVerticalComponent yStart={400} className='relative'>
                <BlackWhiteAnimation srcBalckWhite="/images/cases/resolvaMeuLook/resolvaMeuLook-case2-pb.png" h="h-[587px]"  w="w-[767px]" srcRegular="/images/cases/resolvaMeuLook/resolvaMeuLook-case2-color.png"/>
              </AnimatedVerticalComponent>
            </div>
          </div>
      </motion.div>
    </ScrollProgressComponent>
  )
}