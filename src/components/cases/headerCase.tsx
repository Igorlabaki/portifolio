import localFont from "next/font/local";
import { ImageComponent } from "../util/image";
import { useState } from "react";
import { helveltica } from "@/fonts/constants";

interface HeaderCaseProps{
  titleClassname: string;
  title: string;
  subtitle?: string;
  src: string
  textureSrc: string;
}


export  function HeaderCaseComponent({title,src,subtitle,textureSrc,titleClassname}:HeaderCaseProps) {
  const [animation, setAnimation] = useState<boolean>(false)

  return (
    <div className="relative" onMouseOver={() => setAnimation(true)} onMouseOut={() => setAnimation(false)}>
        <ImageComponent alt="car" w={"w-[1440px] mt-[-50px]"} h={"min-h-[620px] h-full"} src={src}/>
        <div className={`absolute ${titleClassname} font-[700] flex flex-col ${helveltica.className}  ${animation ? "text-custom-orange" : "text-custom-white"} duration-700 `}>
            <p className="text-[300px] large:text-[340px] leading-[292px] z-50">{title}</p>
            <p className="text-[230px] large:text-[250px] z-50">{subtitle}</p>
        </div>
        <div className={`absolute left-[0px] top-[10px] z-40 w-[765px]  h-[701px]   ${animation ? "opacity-90 " : "opacity-0"}  duration-700 overflow-hidden`}>
            <ImageComponent  alt='ritghBox' w={"w-[465px]"} h="h-[701px]"  src={"/images/cases/strm/strm-texture.png"} containerClassname="brightness-200"/>
        </div>
        <div className=" h-[57px] w-10 absolute z-30 bottom-[-57px] left-[20px] bg-custom-black"/>
    </div>
  )
}
