'use client'
import {motion} from "framer-motion"

interface AnimetedTitleProps{
    title: string;
}

export  function AnimetedTitleComponent({title}:AnimetedTitleProps) {
    const words = title.split("")
  return (
    <motion.div>
        {
            words.map((word:string, index:number) => {
                return(
                    <motion.span key={index} className="text-title  text-custom-white leading-[220px] font-[700] text-[260px]">
                        {word}
                    </motion.span>
                )
            })
        }
    </motion.div>
  )
}
