"use client"
import ItemGridComponent from "./itemGrid";
import AnimatedVerticalComponent from "@/components/animatedVertical";
import { ImageComponent } from "@/components/util/image";
import { Variants, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { scroll } from "framer-motion"

export default function ContentComponent() {
  const [first, setfirst] = useState(false)
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    scroll(progress => {
      if(progress * 100 > 70){
        setAnimation(true)
        setfirst(true)
      }
    })
  }, [scroll])
  
  return (
    <section className="pr-[72px] gap-y-2 large:gap-y-[16px] grid grid-cols-1 md:grid-cols-3 max-h-[800px] large:max-h-[974px]   relative">
        <AnimatedVerticalComponent>
          <p className={`w-[320px] large:w-[400px] mr-[16px] h-[300px] large:h-[351px] text-custom-yellow text-justify text-[12px] leading-[16px]`}>
              As a seasoned product designer specializing in crafting captivating digital visual experiences, I bring a wealth of versatile expertise acquired across the dynamic design landscape. My paramount commitment lies in enhancing usability and elevating user experiences through the art of design. On this canvas, you'll discover the essence of my creative portfolio, a collection of my foremost creations. May you find inspiration and delight in your exploration.
          </p>
        </AnimatedVerticalComponent>
        <AnimatedVerticalComponent yStart={400}>
          <ItemGridComponent url="vinFast"   width="w-[320px] large:w-[400px]" heigth="h-[300px] large:h-[351px]" subTitle="VinFast" title="Eletric Vehicle">
            <ImageComponent
                containerClassname="z-20"
                alt="foto"
                w={`w-full h-full`}
                h=""
                src="/images/home/home-image-1.png"
            />
          </ItemGridComponent>
        </AnimatedVerticalComponent>
        <AnimatedVerticalComponent yStart={500}>
          <ItemGridComponent  url="strm"  width="w-[400px]" heigth="h:[410px] large:h-[462px]" subTitle="STRM" title="Plataforms">
            <ImageComponent containerClassname="z-20" alt="foto" w="w-[400px]" h="h-[462px]" src={"/images/home/home-image-2.png"}/>
          </ItemGridComponent>
        </AnimatedVerticalComponent>

        <AnimatedVerticalComponent>
          <ItemGridComponent  url="zebra" width="w-[320px] large:w-[400px] relative z-20" heigth="h-[250px] large:h-[312px] translate-y-[-162px] large:translate-y-[-111px]" subTitle="Zebra" title="Fintech">
            <ImageComponent  containerClassname=""  alt="foto" w="w-[320px] large:w-[400px]" h="h-[250px] large:h-[312px]" src={"/images/home/home-image-3.png"}/>
          </ItemGridComponent>
        </AnimatedVerticalComponent>
        <AnimatedVerticalComponent duration={1.5}>
          <ItemGridComponent  url="resolvaMeuLook" width="w-[320px] large:w-[400px] relative z-20" heigth="h-[250px] large:h-[312px] translate-y-[-162px] large:translate-y-[-111px]" subTitle="Resolva Meu Look" title="Research">
            <ImageComponent  containerClassname=""  alt="foto" w="w-[320px] large:w-[400px]" h="h-[250px] large:h-[312px]" src={"/images/home/home-image-4.png"}/>
          </ItemGridComponent>
        </AnimatedVerticalComponent>
        <AnimatedVerticalComponent>
          <ItemGridComponent url="luxoft"   width="w-[400px]" heigth="h-[390px] large:h-[505px]" subTitle="Luxoft" title="Design System">
            <ImageComponent containerClassname="z-20" alt="foto" w="w-[400px]" h="h-[390px] large:h-[505px]" src={"/images/home/home-image-5.png"}/>
          </ItemGridComponent>
        </AnimatedVerticalComponent>

          <motion.div initial={{y: 300}} animate={{y:animation ? 0 : 300}} transition={{duration: 1.3}}>
            <ItemGridComponent url="mercedesBenz" width="relative w-[645px] large:w-[820px] " heigth="h-[289px] translate-y-[-300px]  large:translate-y-[-303px]" subTitle="Mercedes Benz" title="UI Concepts">
              <ImageComponent containerClassname="" alt="foto" w="w-[645px] large:w-[820px] " h="h-[289px]" src={"/images/home/home-image-6.png"}/> 
            </ItemGridComponent>
          </motion.div>


    </section>
  )
}
