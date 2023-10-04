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
                <p className="text-white">Lorem ipsum dolor sit amet consectetur. Pellentesque vel ornare fringilla nisl sed tincidunt. Tellus leo ullamcorper sem orci vitae lectus. Adipiscing nunc leo ac ultrices auctor lacus sapien. Eu pharetra sed eget nulla odio consequat ultricies placerat eget.</p>
              </AnimatedVerticalComponent>
              <AnimatedVerticalComponent yStart={400}  duration={1.4} className="flex flex-col justify-start items-start text-justify gap-y-[27px] w-[290px]">
                <p className="text-custom-yellow">DEFINE</p>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur. Pellentesque vel ornare fringilla nisl sed tincidunt. Tellus leo ullamcorper sem orci vitae lectus. Adipiscing nunc leo ac ultrices auctor lacus sapien. Eu pharetra sed eget nulla odio consequat ultricies placerat eget.</p>
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
                <p className="text-white">Lorem ipsum dolor sit amet consectetur. Pellentesque vel ornare fringilla nisl sed tincidunt. Tellus leo ullamcorper sem orci vitae lectus. Adipiscing nunc leo ac ultrices auctor lacus sapien. Eu pharetra sed eget nulla odio consequat ultricies placerat eget.</p>
              </AnimatedVerticalComponent>
              <AnimatedVerticalComponent   duration={1.4} className="flex flex-col justify-start items-start text-justify gap-y-[27px] w-[290px]">
                <p className="text-custom-yellow">IMPLEMENT</p>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur. Pellentesque vel ornare fringilla nisl sed tincidunt. Tellus leo ullamcorper sem orci vitae lectus. Adipiscing nunc leo ac ultrices auctor lacus sapien. Eu pharetra sed eget nulla odio consequat ultricies placerat eget.</p>
              </AnimatedVerticalComponent>
            </div>
          </div>
        </div>
        <div className="mt-[110px] flex justify-center items-center gap-x-[20px]">
          <AnimatedVerticalComponent   className="w-[730px] flex justify-start items-end">
            <ImageComponent alt="car" w="w-[516px] large:w-[612px] " h="h-[778px]" src={"/images/process/process-foto4.png"} />
          </AnimatedVerticalComponent>
          <AnimatedVerticalComponent yStart={400} className="h-full justify-center items-center">
          <ServiceFormComponent title="Hire me"/>
          </AnimatedVerticalComponent>
        </div>
      </div>
    </div>
    </ScrollProgressComponent>
  )
}
