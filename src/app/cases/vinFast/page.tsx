"use client"
import {Variants, motion} from "framer-motion"
import ScrollProgressComponent from "@/components/scroolProgress";
import { HeaderCaseComponent } from "@/components/cases/headerCase";
import {FirstCaseComponent} from "@/components/cases/firstCase";
import { SecondCaseComponent } from "@/components/cases/secondCase";


export default function Case1Page() {

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
          <HeaderCaseComponent subtitle="VINFAST" title="VF7" src="/images/cases/car-banner.png" titleClassname="top-[225px]   left-[80px]" textureSrc="/images/cases/texture.png"/>
          <div className="mt-[190px] ml-[80px] flex flex-col gap-y-[40px] text-[12px] leading-[16px]" >
              <FirstCaseComponent />
              <SecondCaseComponent/>
          </div>
      </motion.div>
    </ScrollProgressComponent>
  )
}