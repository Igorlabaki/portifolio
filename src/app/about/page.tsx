"use client"
import { AnimatedTitleComponent } from "@/components/animatedTitle";
import AnimatedVerticalComponent from "@/components/animatedVertical";
import ScrollProgressComponent from "@/components/scroolProgress";
import { ServiceFormComponent } from "@/components/services/form";
import { ImageComponent } from "@/components/util/image";
import { helveltica } from "@/fonts/constants";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  const [bannerAnimation, setbannerAnimation] = useState<boolean>(false)

  return (
    <ScrollProgressComponent>
      <section className="pr-[100px] mx-auto ">
       <div className="relative min-h-[900px] min-w-screen flex justify-end items-end" onMouseOver={() => setbannerAnimation(true)} onMouseOut={() => setbannerAnimation(false)}>
          
          <div className="bg-custom-black w-10 h-[140px] absolute top-0 left-[20px]"/>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:1}} className=" h-[100px] w-10 absolute z-30 bottom-[30px] large:bottom-0 left-[20px] bg-custom-black"/>

          <AnimatedVerticalComponent className="absolute top-0 left-0 bg-red-900">
            <div  className="absolute top-[110px]  large:top-[140px] left-0">
              <ImageComponent alt="car" w={"w-[890px]"} h={"min-h-[660px] h-full"} src={"/images/about/about-banner.png"} containerClassname=""/>
            </div>
            <div className={`absolute    top-[110px]  large:top-[140px] left-0 z-40 w-[890px]  min-h-[660px]  ${bannerAnimation ? "opacity-90 h-[660px] " : "opacity-0"}  right-0 duration-700 overflow-hidden`}>
                <ImageComponent  alt='ritghBox' w={"w-[890px]"} h="min-h-[660px] h-full"  src={"/images/cases/strm/strm-texture.png"} containerClassname="brightness-200"/>
            </div>
          </AnimatedVerticalComponent>

          

          <div className={`absolute top-[55px] large:top-[53px] left-[239px] font-[700] flex flex-col ${helveltica.className}  ${bannerAnimation ? "text-custom-orange" : "text-custom-white"} duration-700 `}>
              <AnimatedTitleComponent  className="text-[200px] large:text-[250px] leading-[180px] large:leading-[214px] z-50" title="DESIGN" animation={bannerAnimation}/>
              <AnimatedTitleComponent  delay={0.4} className="text-[200px] large:text-[250px] leading-[180px] large:leading-[214px] z-50" title="MINDSET" animation={bannerAnimation}/>
          </div>

          <div className="large:translate-y-[-30px] translate-y-[-80px] realtive w-full flex flex-col justify-end items-end ">
            <motion.div initial={{opacity: 0, y:30}} animate={{opacity: 1, y:0}} transition={{duration:0.5, delay: 0.8}} className="absolute bottom-[30px] right-0">
              <ImageComponent alt="car" w="w-[61px] my-[25px] " h="h-[48.61px]" src={"/images/cases/rectangle.png"} />
            </motion.div>
            <motion.hr className='h-[2px]  w-[524px] flex text-custom-white' initial={{width:0}}  animate={{width: 768}} transition={{duration:0.6, delay:0.5}}/>
            <motion.p className="text-custom-yellow w-full text-right mt-[10px] text-[12px]"  initial={{opacity:0}}  animate={{opacity: 1}} transition={{duration:0.5, delay:0.8}}>From fashion design to electric car interface design, it's a pleasure to introduce myself</motion.p>
          </div>

        </div>
        <div className="flex justify-between items-start mt-[120px] large:mt-[176px] leading-[16px] pl-[100px]">
          <div className="flex flex-col justify-start items-start gap-y-[188px]">
          <AnimatedVerticalComponent className="text-[12px] leading-[15.6px] fex flex-col justify-end text-custom-yellow relative">
            <p>DESIGN SYSTEMS</p>
            <p>VISUAL DESIGN</p>
            <p>DATA VISUALIZATION</p>
          </AnimatedVerticalComponent>
          <div className="w-[295px] flex flex-col gap-y-[21px] text-[12px] text-justify leading-[16px]">
            <AnimatedVerticalComponent className="text-custom-yellow">I'm Florence</AnimatedVerticalComponent>
            <div className="flex flex-col gap-y-[61px]">
            <AnimatedVerticalComponent className="text-white leading-[16px]">
              I am a Brazilian designer with a background in fashion design. Over the years, 
              I have gained extensive experience in various design fields. However, 
              my passion for technology has triggered a profound transformation in my professional perspective.</AnimatedVerticalComponent>
            <AnimatedVerticalComponent className="text-white">
              With knowledge and expertise in digital interface software, I have been dedicated to the field of user experience since 2018. 
              My primary focus is on crafting visual solutions that stem from a deep understanding of design methodologies, problem-solving, and, above all, placing the user 
              at the heart of the development process.
            </AnimatedVerticalComponent>
            </div>
          </div>
          </div>
          <AnimatedVerticalComponent yStart={400}>
          <ImageComponent alt="car" w="w-[648px] large:w-[768px]" h="h-[914px]" src={"/images/about/train.png"} containerClassname=""/>
          </AnimatedVerticalComponent>
        </div>
        <AnimatedVerticalComponent className="flex justify-center items-center w-full pl-[100px]">
          <ImageComponent alt="car" w="mt-[180px] w-[1240px]" h="h-[515px]" src={"/images/about/about-foto2.png"} containerClassname=""/>
        </AnimatedVerticalComponent>
        <div className=" w-full flex flex-col justify-center items-center leading-[16px] text-[11px] pl-[100px]">
          <div className="mt-[64px]  flex justify-between items-center w-full">
            <div className="text-justify flex flex-col gap-y-[72px] w-[295px]">
              <AnimatedVerticalComponent className="w-[380px] large:w-[295px] text-white leading-[16px]">As a product designer with a focus on digital interfaces, I continually strive to enhance my skills to create digital experiences that stand out and meet <span className="font-bold">users' needs and expectations</span> , thereby elevating the level of interaction between people and technology.</AnimatedVerticalComponent>
              <div className="flex flex-col gap-y-5 ">
              <AnimatedVerticalComponent yStart={350} className="w-[380px] large:w-[295px] text-white leading-[16px]">My professional qualifications cover a wide range of specializations and training. This includes a postgraduate degree in marketing, advanced <span className="font-bold">systems design training from Kanban University</span> , and experience leveraging <span className="font-bold">AI tools for design at Hotjar</span>.</AnimatedVerticalComponent>
              <AnimatedVerticalComponent yStart={400} className="w-[380px] large:w-[295px] text-white leading-[16px]">In addition, training as a <span className="font-bold">UX Designer at Google</span> , further enriching my set of skills and knowledge in the area.</AnimatedVerticalComponent>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-end items-end gap-y-[16px]">
              <AnimatedVerticalComponent>
              <ImageComponent alt="car" w="w-[441px]" h="h-[2px]" src={"/images/cases/line-horizontal.png"} containerClassname=""/>

              </AnimatedVerticalComponent>
              <AnimatedVerticalComponent yStart={400} className="text-[12px] leading-[15.6px] fex flex-col justify-start w-[441px] text-custom-yellow relative">
                <p>DESIGN SYSTEMS</p>
                <p>VISUAL DESIGN</p>
                <p>DATA VISUALIZATION</p>
              </AnimatedVerticalComponent>
            </div>
          </div>
        </div>
        <div className="mt-[72px] flex  items-start justify-between pl-[100px]">
          <AnimatedVerticalComponent>
            <ImageComponent alt="car" w="w-[380px] large:w-[453px]" h="h-[288px]" src={"/images/about/about-foto3.png"} containerClassname=""/>
          </AnimatedVerticalComponent>
          <div className="flex flex-col">
            <AnimatedVerticalComponent yStart={400}>
              <ImageComponent alt="car" w="w-[655px]  large:w-[770px]" h="h-[288px]" src={"/images/about/about-foto4.png"} containerClassname=""/>
            </AnimatedVerticalComponent>
          <AnimatedVerticalComponent className="flex w-[655px]  large:w-[770px]  items-start justify-start  pt-[72px]">
            <ServiceFormComponent title="Contact me"/>
          </AnimatedVerticalComponent>
          </div>
        </div>
      </section> 
    </ScrollProgressComponent>
  )
}
