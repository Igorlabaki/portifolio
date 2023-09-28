import { ImageComponent } from "@/components/util/image";
import localFont from "next/font/local";
import {ServiceFormComponent} from "../../components/services/form";
import IntroServiceComponent from "@/components/services/intro";


const wtGothic = localFont({
  src: './../../app/fonts/WTGothic-Light.ttf',
})

export default function ServicesPage() {

  return (
    <section className={`ml-[117px] mr-[52px] relative ${wtGothic.className}`}>
      <IntroServiceComponent />
      <div className="mt-[165px] pl-[559px] text-[12px] leading-[15.6px] fex flex-col justify-end w-[714px] text-custom-yellow relative">
        <p>UX DESIGN</p>
        <p>UI DESIGN</p>
        <p>PRODUCT DESIGN</p>
        <div className="absolute top-[-42px] left-[-18px]">
          <ImageComponent alt="column" w="w-[7px]" h="h-[130px]" src={"/images/services/column.png"} containerClassname="z-30"/>
        </div>
      </div>
      <div className="mt-[56px] relative flex gap-x-[20px]">
        <div>
          <p className="text-white w-[295px] text-[12px] text-justify leading-[16px]">Given the requisite flexibility and adaptability inherent to design, my services are meticulously tailored to align with both user requirements and business objectives. I am committed to delivering visual solutions that not only provide value but also effectively address the specific problems we aim to mitigate.</p>
          <div className="mt-[56px] text-[12px] leading-[15.6px] fex flex-col justify-end text-custom-yellow relative">
            <p>DESIGN SYSTEMS</p>
            <p>VISUAL DESIGN</p>
            <p>DATA VISUALIZATION</p>
          </div>
        </div>
        <div className="flex gap-x-[48px] justify-end items-end">
          <ImageComponent alt="column" w="w-[611px]" h="h-[855.83px]" src={"/images/services/oldLady.png"} containerClassname="z-30"/>
          <ImageComponent alt="car" w="w-[61px]" h="h-[48.61px]" src={"/images/cases/rectangle.png"}/>
        </div>
      </div>
      <div className="mt-[45px]">
        <hr className='h-[2px]  w-[592px] flex text-custom-white'/>
        <div className="mt-[32px] ml-[315px] text-[12px] leading-[15.6px] fex flex-col justify-end text-custom-yellow relative">
          <p>USER EXPERIENCE</p>
          <p>PROTOTYPING</p>
          <p>RESEARCH</p>
          <p>TESTING &</p>
          <p>USABILITY</p>
        </div>
        <p className="text-white ml-[315px] leading-[16px] w-[295px] text-justify mt-[56px] text-[12px]">Product design is the process of creating and refining digital or physical products to meet user needs and solve specific problems effectively and aesthetically. It involves a combination of research, ideation, user experience, visual design, prototyping, and testing to ensure that the final product delivers a seamless and delightful user experience.</p>
        <div className="mt-[125px] flex gap-x-[20px] justify-center items-center">
          <ImageComponent alt="column" w="w-[610px]" h="h-[822px]" src={"/images/services/blackGirl.png"} containerClassname="z-30"/>
          <ServiceFormComponent />
        </div>
      </div>
    </section>
  )
}
