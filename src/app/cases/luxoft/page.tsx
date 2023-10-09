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
          <ImageComponent alt="car" w={"w-[1440px] mt-[-50px]"} h={"min-h-[598px] h-full"} src={"/images/cases/luxoft/luxoft-banner.png"}/>
          <div className={`absolute top-[446px] left-[80px] large:left-[300px] font-[700] flex flex-col ${helveltica.className}  ${bannerAnimation ? "text-custom-orange" : "text-custom-white"} duration-700 `}>
              <p className="text-[200px] large:text-[250px] leading-[214px] z-50">LUXOFT</p>
          </div>
          <div className={`absolute left-[-20px] top-[-10px] z-40 w-[765px]  h-[701px]   ${bannerAnimation ? "opacity-90 h-[701px] " : "opacity-0"}  duration-300 overflow-hidden`}>
              <ImageComponent  alt='ritghBox' w={"w-[465px]"} h="h-[701px]"  src={"/images/cases/strm/strm-texture.png"} containerClassname="brightness-200"/>
          </div>
          <div className=" h-[57px] w-10 absolute z-30 bottom-[-57px] left-[20px] bg-custom-black"/>
        </div>
        <div className="mt-[190px] ml-[80px] flex flex-col gap-y-[40px] text-[12px] leading-[16px]" >
          <motion.div className="flex gap-x-[20px]">
            <AnimatedVerticalComponent yStart={400}>
              <BlackWhiteAnimation w="w-[514px] large:w-[610px]" h="h-[410px]" srcBalckWhite="/images/cases/luxoft/luxoft-case1-pb.png" srcRegular='/images/cases/luxoft/luxoft-case1-color.png'/>
            </AnimatedVerticalComponent>
            <AnimatedVerticalComponent className="w-[613px] flex flex-col justify-between items-start ">
                <span>
                        <div className="text-custom-yellow w-full flex justify-between items-center">
                            <p>2022</p>
                            <p>UX/UI Design</p>
                        </div>
                        <hr className="text-custom-white mt-[9px] leading-[15.6px]"/>
                        <div className="text-custom-white flex flex-col gap-y-[16px] text-justify">
                            <p className="mt-[21px] font-[600]">Creation of Design System for internal client</p>
                            <div className="flex flex-col gap-[10px]">
                              <p><span className="font-bold">Luxoft</span>, is a prominent technology company that operates as part of the DXC group. Our core mission revolves around providing cutting-edge technology solutions in the realm of motorsport. We are proud to collaborate with esteemed brands in the market, including <span className="font-bold">Mercedes Benz, BMW, Royal Enfield, Toyota, and VinFast </span>.</p>
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
              <div className="text-custom-white w-[452px] text-justify flex flex-col justify-between ">
                  <AnimatedVerticalComponent className="flex flex-col flex-1 gap-y-[16px] ">
                      <p>I served as the leader of this initiative, where Luxoft, a prominent internal client, sought to <span className="font-bold"> develop a versatile design system </span>. We began by conducting comprehensive discussions and meticulously gathering critical data to define the system's scope and objectives. To ensure its applicability across diverse brands, we focused on benchmarking interface usability, responsiveness across different device sizes, and brand neutrality.</p>
                      <p>My leadership played a pivotal role in guiding the project to success. As a result of our dedicated efforts, we not only met <span className="font-bold"> uxoft's requirements but also received an internal award </span> for our outstanding work. </p>
                      <p>This initiative, driven by the German design unit, proactively addressed <span className="font-bold">external customer concerns and improved our internal processes</span> , ultimately earning recognition as the top-performing product among the five showcased in a comprehensive presentation.</p>
                  </AnimatedVerticalComponent>
                  <div >
                      <ImageComponent alt="car" w="w-[61px] my-[25px]" h="h-[48.61px]" src={"/images/cases/rectangle.png"}/>
                      <ImageComponent alt="car" w="w-[452px]" h="h-[2px]" src={"/images/cases/line-horizontal.png"} containerClassname="mt-[10px]"/>
                      <p className="mt-[12px] text-custom-white">After implementing the design system, other improvements were implemented and adapted according to the validations we had from our internal client.</p>
                  </div>
              </div>
              <AnimatedVerticalComponent yStart={400} className='relative'>
                <BlackWhiteAnimation srcBalckWhite="/images/cases/luxoft/luxoft-case2-pb.png" h="h-[587px]"  w="w-[676px] large:w-[770px]" srcRegular="/images/cases/luxoft/luxoft-case2-color.png"/>
              </AnimatedVerticalComponent>
            </div>
          </div>
      </motion.div>
    </ScrollProgressComponent>
  )
}