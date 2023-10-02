"use client"
import { ImageComponent } from "../../util/image";
import {ReactNode, useEffect, useState} from "react"
import {motion, useAnimation} from "framer-motion"
import { useRouter } from "next/navigation";

interface ItemGridProps{
    width: string;
    title: string;
    heigth: string;
    subTitle: string;
    children: ReactNode;
}

export default function ItemGridComponent({heigth,width,title,subTitle, children}:ItemGridProps) {
    const [animation, setAnimation] = useState<boolean>(false)
    const [first, setfirst] = useState<boolean>(false)
    const controls = useAnimation()
    const {replace} = useRouter()
   

    useEffect(() => {
      if(first){
        const toggleAnimation = async () => {
          const y = first ? "-30%" : 0
          const opacity = first ? 0 : 1
          // Ajuste a duração da animação (por exemplo, 0.7 segundos)
          const duration = 1;
      
          await controls.start({
            opacity,
            y,
            transition: { duration, ease: "easeInOut" },
          });
        };
        toggleAnimation()
        setTimeout(() => replace("/cases/1"), 500 )
        
      }
    }, [first])
    

  return (
    <>
          <div  className={`${heigth} ${width} bg-custom-black `} onClick={() => {
                setfirst(() => true)
          }}>
            <motion.div  
            animate={controls}
            >
              <motion.div className={` ${heigth} ${width} cursor-pointer relative`}  initial={{ scale: 1 }}  onMouseOver={() => setAnimation(true)}  onMouseOut={() => setAnimation(false)}// Escala inicial
                    whileHover={{ scale: 0.95  }} 
                    transition={{ duration: 0.7 }} 
                    >
                <div 
                  className={`bg-black absolute inset-0  scale z-30 text-[16px] text-custom-yellow flex flex-col justify-center items-center
                    ${animation ? "opacity-50" : "opacity-0"} duration-700`}
                  >
                </div>
                  {animation &&
                      <div className="absolute inset-0 text-custom-yellow z-40 h-full w-full flex flex-col justify-center items-center">
                        <p>{title}</p>
                        <p className="font-bold">{subTitle}</p>
                      </div>
                    }
              {children}
              </motion.div>
          </motion.div>
          </div>
    </>
        
        
  )
}
