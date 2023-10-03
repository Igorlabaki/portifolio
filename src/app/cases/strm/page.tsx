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
          <ImageComponent alt="car" w={"w-[1440px] mt-[-50px]"} h={"min-h-[598px] h-full"} src={"/images/cases/strm/strm-banner.png"}/>
          <div className={`absolute top-[390px] large:top-[381px] left-[150px] large:left-[300px] font-[700] flex flex-col ${helveltica.className}  ${bannerAnimation ? "text-custom-orange" : "text-custom-white"} duration-700 `}>
              <p className="text-[300px] large:text-[340px] leading-[292px] z-50">STRM</p>
          </div>
          <div className={`absolute left-[-50px] top-[10px] z-40 w-[765px]  h-[701px]   ${bannerAnimation ? "opacity-90 h-[701px] " : "opacity-0"}  duration-300 overflow-hidden`}>
              <ImageComponent  alt='ritghBox' w={"w-[465px]"} h="h-[701px]"  src={"/images/cases/strm/strm-texture.png"} containerClassname="brightness-200"/>
          </div>
          <div className=" h-[57px] w-10 absolute z-30 bottom-[-57px] left-[20px] bg-custom-black"/>
        </div>
        <div className="mt-[190px] ml-[80px] flex flex-col gap-y-[40px] text-[12px] leading-[16px]" >
          <motion.div className="flex gap-x-[20px]">
            <AnimatedVerticalComponent yStart={400}>
              <BlackWhiteAnimation w="w-[514px] large:w-[610px]" h="h-[410px]" srcBalckWhite="/images/cases/strm/strm-case1-bg.png" srcRegular='/images/cases/strm/strm-case1-color.png'/>
            </AnimatedVerticalComponent>
            <AnimatedVerticalComponent className="w-[613px] flex flex-col justify-between items-start ">
                <span>
                        <div className="text-custom-yellow w-full flex justify-between items-center">
                            <p>2021</p>
                            <p>UI Design</p>
                        </div>
                        <hr className="text-custom-white mt-[9px] leading-[15.6px]"/>
                        <div className="text-custom-yellow flex flex-col gap-y-[16px] text-justify">
                            <p className="mt-[21px] font-[600]">Data visualization, design based on data analysis and visual solutions</p>
                            <div className="flex flex-col gap-[10px]">
                              <p><span className="font-bold">STRM</span> is a cutting-edge music career acceleration company dedicated to fostering artists' success. Our core mission is to empower artists by providing vital data to investors and entrepreneurs, helping them make informed decisions about their careers.</p>
                              <p> Additionally, we offer a range of specialized products tailored to the unique needs of the music market, including financial solutions such as loans, and opportunities to connect with reputed record labels.</p>
                              <p>During my tenure as a <span className="font-bold">UI Designer at STRM</span>, I collaborated closely with the technology team to conceptualize and develop two innovative platforms:</p>
                              <p><span className="font-bold">Investors & Artists</span></p>  
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
                      <p>In our pursuit to aggregate vast <span className="font-bolf">amounts of market data</span>  seamlessly into our platform, we encountered a significant challenge. Our objective was to ensure that users could effortlessly extract the most pertinent insights with the aid of our intuitive features.</p>
                      <p> Over a span of three months, <span>I collaborated closely with a data scientist</span> to meticulously process and transform this data into visually clear and user-friendly formats, ultimately catering to the needs of our end users. </p> 
                      <p>Consequently, our efforts yielded interfaces that not only delivered substantial value but also provided powerful insights for investors to gain a comprehensive understanding of the artists they were engaged with.</p>
                      <ImageComponent alt="car" w="w-[61px] my-[25px]" h="h-[48.61px]" src={"/images/cases/rectangle.png"}/>
                      <p>Discussing challenges faced by <span className="font-bold">artists in understanding the general trajectory of their careers</span>, how to improve their skills, find partnerships, managers, investors and music producers comes: "Strm for Artists", a platform that aims to address these challenges by providing artists with comprehensive data and easy-to-use tools to help them navigate their careers effectively.</p> 
                      <p>See the final result below:</p>
                      <a className="font-bold underline" href="https://www.strmmusic.ai/" target="black">STRM MUSIC</a>  
                  </AnimatedVerticalComponent>
                  <div >
                      <ImageComponent alt="car" w="w-[452px]" h="h-[2px]" src={"/images/cases/line-horizontal.png"} containerClassname="mt-[10px]"/>
                      <p className="mt-[12px] text-custom-white">The development of the two platforms was driven by distinct personas and objectives, while maintaining a steadfast commitment to preserving the brand identity and delivering the desired offerings on each platform.</p>
                  </div>
              </div>
              <AnimatedVerticalComponent yStart={400} className='relative'>
                <BlackWhiteAnimation srcBalckWhite="/images/cases/strm/strm-case2-bg.png" h="h-[587px]"  w="w-[676px] large:w-[770px]" srcRegular="/images/cases/strm/strm-case2-color.png"/>
              </AnimatedVerticalComponent>
            </div>
          </div>
      </motion.div>
    </ScrollProgressComponent>
  )
}