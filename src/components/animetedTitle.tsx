'use client'
import {motion} from "framer-motion"
import localFont from "next/font/local";

interface AnimetedTitleProps{
    title: string;
}

const helvetica = localFont({
    src: './../app/fonts/Helvetica-Bold.ttf',
})
  

export  function AnimetedTitleComponent({title}:AnimetedTitleProps) {
    const words = title.split("")
  return (
    <motion.div>
        {
            words.map((word:string, index:number) => {
                return(
                    <motion.span key={index} style={helvetica.style}  className="text-title  text-custom-white leading-[220px] font-[700] text-[260px]">
                        {word}
                    </motion.span>
                )
            })
        }
    </motion.div>
  )
}
