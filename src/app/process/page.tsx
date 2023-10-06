"use client"
import AnimatedVerticalComponent from "@/components/animatedVertical";
import ScrollProgressComponent from "@/components/scroolProgress";
import { ServiceFormComponent } from "@/components/services/form";
import { ImageComponent } from "@/components/util/image";
import { helveltica } from "@/fonts/constants";
import { useState } from "react";

export default function ProcessPage() {
  const [bannerAnimation, setbannerAnimation] = useState<boolean>(false)
  return (
    <ScrollProgressComponent>

    <div className="min-h-screen h-full bg-trasparent pr-[100px] relative">
      <div onMouseOver={() => setbannerAnimation(true)} onMouseOut={() => setbannerAnimation(false)} className="relative">
      <div className=" h-[100px] w-10 absolute bottom-[-100px] left-[20px] bg-custom-black z-50"/>
       <ImageComponent alt="car" w={"w-[564px]"} h={"min-h-[789px] h-full"} src={"/images/process/banner-process.png"} containerClassname=""/>
       <div className={`absolute top-0  left-0 z-40 w-[564px] min-h-[789px]   ${bannerAnimation ? "opacity-90 h-[660px] " : "opacity-0"}  right-0 duration-700 overflow-hidden`}>
          <ImageComponent  alt='ritghBox' w={"w-[604px]"} h="h-full"  src={"/images/cases/strm/strm-texture.png"} containerClassname="brightness-200"/>
        </div>
       <div  className={`absolute top-[150px] left-[290px] large:left-[326px] leading-[154.78px] font-[700] z-50 flex flex-col ${helveltica.className}  ${bannerAnimation ? "text-custom-orange" : "text-white"} duration-700 text-[135px] large:text-[170px]`}>
        <p>SPECIFY</p>
        <p>DEVELOP</p>
        <p>& DELIVERY</p>
       </div>

      </div>
      <div className="w-[564px] ml-[564px] flex flex-col mt-[50px] justify-start items-start">
        <ImageComponent alt="car" w="w-[768px]" h="h-[2px]" src={"/images/cases/line-horizontal.png"} containerClassname=""/>
        <p className="text-custom-yellow w-full  mt-[10px] text-[12px]">In-depth Expertise, Idea Generation, and Extensive Knowledge in Visual Solutions Through Design</p>
      </div>
      <div className="pl-[100px] mt-[90px] flex flex-col ">
        <div className="flex large:flex-col relative">
          <div className="flex large:flex-col">
            <div className=" w-[516px]  leading-[16px] text-[12px] flex large:flex-row large:gap-x-[20px] flex-col space-x-[135px] large:space-x-0 gap-y-[73px] large:gap-y-0">
              <AnimatedVerticalComponent  className="flex flex-col justify-start items-start text-justify gap-y-[27px] w-[290px]">
                <p className="text-custom-yellow">DISCOVER</p>
                <p className="text-white">Comprehensive research is conducted to gather insights into client objectives, audience preferences, and market trends. This critical stage informs the creative direction, helping to identify design opportunities and lay a strong foundation for the project's success.</p>
              </AnimatedVerticalComponent>
              <AnimatedVerticalComponent yStart={400}  duration={1.4} className="flex flex-col justify-start items-start text-justify gap-y-[27px] w-[290px]">
                <p className="text-custom-yellow">DEFINE</p>
                <p className="text-white">A design project is a structured endeavor to create aesthetically pleasing and functional solutions. It involves research, ideation, and execution to meet specific objectives, whether in graphic, product, or user experience design, while considering user needs and market dynamics.</p>
              </AnimatedVerticalComponent>
            </div>
          </div>
          <div className="min-h-[150px] flex  mt-[80px] gapx-[20px]">
            <AnimatedVerticalComponent   className="w-[730px]  justify-start items-end absolute bottom-0 left-0 large:relative  large:flex">
              <ImageComponent alt="car" w="w-[61px] " h="h-[48.61px]" src={"/images/cases/rectangle.png"} />
            </AnimatedVerticalComponent>
            <div className=" leading-[16px] text-[12px] flex large:flex-row large:gap-x-[20px] flex-col space-x-[135px] large:space-x-0 gap-y-[73px] large:gap-y-0">
              <AnimatedVerticalComponent yStart={400}  className="flex flex-col justify-start items-start text-justify gap-y-[27px] w-[290px]">
                <p className="text-custom-yellow">DEVELOP</p>
                <p className="text-white">Crucial stage where conceptual ideas are refined into detailed designs and prototypes. This phase involves iterative testing, adjustments, and the creation of a comprehensive plan for implementation. It ensures that the project is well-prepared for execution and aligns with its intended goals.</p>
              </AnimatedVerticalComponent>
              <AnimatedVerticalComponent   duration={1.4} className="flex flex-col justify-start items-start text-justify gap-y-[27px] w-[290px]">
                <p className="text-custom-yellow">IMPLEMENT</p>
                <p className="text-white">Detailed design plans are put into action. It involves executing the project according to the established guidelines, often including coding, manufacturing, or construction, depending on the type of project. This phase aims to bring the project to life and achieve its intended outcomes.</p>
              </AnimatedVerticalComponent>
            </div>
          </div>
        </div>
        <div className="mt-[110px] flex items-center gap-x-[20px]">
          <AnimatedVerticalComponent   className="w-[730px] flex justify-start items-end">
            <ImageComponent alt="car" w="w-[516px] large:w-[612px] " h="h-[778px]" src={"/images/process/process-foto4.png"} />
          </AnimatedVerticalComponent>
          <AnimatedVerticalComponent yStart={400} className="h-full w-full justify-center items-center">
            <ServiceFormComponent title="Hire me"/>
          </AnimatedVerticalComponent>
        </div>
      </div>
    </div>
    </ScrollProgressComponent>
  )
}
