import localFont from "next/font/local";
import { ImageComponent } from "../util/image";
import { useState } from "react";

const helveltica = localFont({
  src: '../../app/fonts/HelveticaNeueBold.ttf',
})
export  function HeaderCaseComponent() {
  const [animation, setAnimation] = useState<boolean>(false)
  return (
    <div className="relative" onMouseOver={() => setAnimation(true)} onMouseOut={() => setAnimation(false)}>
        <ImageComponent alt="car" w="w-[1440px] mt-[-50px]" h="min-h-[620px] h-full" src={"/images/cases/car-banner.png"}/>
        <div className={`absolute top-[225px]   left-[80px] font-[700] flex flex-col ${helveltica.className}  ${animation ? "text-custom-orange" : "text-custom-white"} duration-700 `}>
            <p className="text-[340px] leading-[292px] z-50">VF7</p>
            <p className="text-[250px] z-50">VINFAST</p>
            <div className=" h-[57px] w-10 absolute z-30 bottom-[90px] left-[-50px] bg-custom-black"/>
        </div>
        <div className={`absolute left-[0px] top-[10px] z-40 w-[765px]  h-[701px]   ${animation ? "opacity-90 h-[701px] " : "opacity-20"}  duration-700 overflow-hidden`}>
            <ImageComponent  alt='ritghBox' w={"w-[465px]"} h="h-[701px]"  src={"/images/cases/texture.png"} containerClassname="brightness-200"/>
        </div>
    </div>
  )
}
