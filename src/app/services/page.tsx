import { ImageComponent } from "@/components/util/image";
import localFont from "next/font/local";

const helvetica = localFont({
  src: './../../app/fonts/Helvetica-Bold.ttf',
})

export default function ServicesPage() {
  return (
    <section className="ml-[117px] mr-[52px] relative">
      <p className={`text-[200px] text-custom-white font-[700] relative z-50 pt-[200px] ${helvetica.className}`}>DYNAMIC & ADAPTABLE</p>
      <div className="absolute top-0 right-0 z-30">
        <ImageComponent alt="foto" w="w-[714px]" h="h-[998.84px]" src={"/images/services/mortal.png"} containerClassname="z-20"/>
      </div>
      <div className="absolute top-0 right-0 z-40">
        <ImageComponent alt="texture" w="w-[714px]" h="h-[998.84px]" src={"/images/services/texture.png"} containerClassname="z-30"/>
      </div>
      <div className="mt-[241px] flex flex-col gap-y-[10px]">
        <hr className='h-[2px]  w-[524px] flex text-custom-white'/>
        <p className="text-[12px] text-custom-yellow">Developing tailored solutions through customized services</p>
      </div>
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
          <p className="text-white w-[295px] text-[12px] text-justify">Given the requisite flexibility and adaptability inherent to design, my services are meticulously tailored to align with both user requirements and business objectives. I am committed to delivering visual solutions that not only provide value but also effectively address the specific problems we aim to mitigate.</p>
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
          <form className="h-[481px] w-[610px]">
            <p className="text-custom-yellow text-[12px]  leading-[16px]">Feel free to reach out to me to discuss customization and the creation of your project</p>
            <div className="flex flex-col gap-y-[8px] mt-[48px]">
              <input type="text" className="bg-custom-gray-medium px-[25px] py-[16px] text-custom-white text-[12px]" placeholder="Name" />
              <input type="text" className="bg-custom-gray-medium px-[25px] py-[16px] text-custom-white text-[12px]" placeholder="E-mail" />
              <input type="text" className="bg-custom-gray-medium px-[25px] py-[16px] text-custom-white text-[12px]" placeholder="Interested in the service:" />
            </div>
            <textarea className="mt-[24px] bg-custom-gray-medium px-[25px] h-[167px] w-full py-[16px] text-custom-white text-[12px]" placeholder="Leave a message" />
            <button className="text-[12px] mt-[32px] bg-custom-white py-[16px] w-full font-bold">SEND</button>
          </form>
        </div>
      </div>
    </section>
  )
}
