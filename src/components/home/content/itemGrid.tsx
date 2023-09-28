"use client"
import { ImageComponent } from "../../util/image";
import {ReactNode, useState} from "react"
import {motion} from "framer-motion"

interface ItemGridProps{
    width: string;
    title: string;
    heigth: string;
    subTitle: string;
    children: ReactNode;
}

export default function ItemGridComponent({heigth,width,title,subTitle, children}:ItemGridProps) {
    const [animation, setAnimation] = useState<boolean>(false)
  return (

          <motion.div className={` ${heigth} ${width} cursor-pointer relative`}  initial={{ scale: 1 }}  onMouseOver={() => setAnimation(true)}  onMouseOut={() => setAnimation(false)}// Escala inicial
                whileHover={{ scale: 0.95  }} 
                transition={{ duration: 0.7 }} >
            <div 
              className={`bg-black absolute inset-0  scale z-30 text-[16px] text-custom-yellow flex flex-col justify-center items-center
                ${animation ? "opacity-50" : "opacity-0"} duration-700`}
              >
              {animation &&
                  <>
                    <p>{title}</p>
                    <p className="font-bold">{subTitle}</p>
                  </>
                }
            </div>
           {children}
          </motion.div>
        
  )
}
