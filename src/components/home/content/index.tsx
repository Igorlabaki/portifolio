import { ImageComponent } from "../../util/image";


export default function ContentComponent() {
  return (
    <section className="pr-[72px]  gap-x-[16px] gap-y-[16px] grid grid-cols-1 md:grid-cols-3">
        <p className=" w-[400px] mr-[16px] h-[351px] text-custom-yellow text-justify text-[12px] leading-[15px]">
            As a seasoned product designer specializing in crafting captivating digital visual experiences, I bring a wealth of versatile expertise acquired across the dynamic design landscape. My paramount commitment lies in enhancing usability and elevating user experiences through the art of design. On this canvas, you'll discover the essence of my creative portfolio, a collection of my foremost creations. May you find inspiration and delight in your exploration.
        </p>
        <ImageComponent containerClassname="" alt="foto" w="w-[400px]" h="h-[351px]" src={"/images/home-image-1.png"}/>
        <ImageComponent containerClassname="" alt="foto" w="w-[400px]" h="h-[462px]" src={"/images/home-image-2.png"}/>
        <ImageComponent containerClassname="absolute top-[-111px]" alt="foto" w="w-[400px]" h="h-[312px]" src={"/images/home-image-3.png"}/>
        <ImageComponent  containerClassname="absolute top-[-111px]"  alt="foto" w="w-[400px]" h="h-[312px]" src={"/images/home-image-4.png"}/>
        <ImageComponent alt="foto" w="w-[400px]" h="h-[505px]" src={"/images/home-image-5.png"}/>
        <ImageComponent containerClassname="absolute top-[-303px]" alt="foto" w="w-[820px]" h="h-[289px]" src={"/images/home-image-6.png"}/> 
    </section>
  )
}
