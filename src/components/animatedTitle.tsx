'use client'
import { helveltica } from "@/fonts/constants";
import {delay, motion} from "framer-motion"
import localFont from "next/font/local";

interface AnimetedTitleProps{
    title: string;
    className: string;
    animation: boolean;
    delay?: number
}

export  function AnimatedTitleComponent({title,delay, className}:AnimetedTitleProps) {
    const words = title.split("")

    const defaultAnimations = {
        hidden:{
            opacity: 0,
            y:40,
        },
        visible:{
            opacity: 1,
            y:0, 
        }
    }

  return (
    <motion.div className={className} transition={{staggerChildren: 0.05}}  initial={"hidden"} animate={"visible"} >
        {
            words.map((word:string, index:number) => {
                return(
                    <motion.span
                    aria-hidden
                    key={index}
                    variants={defaultAnimations} // Use a variação padrão para cada palavra
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 + (delay ? delay : 0) }} // Aplique um atraso escalonado com base no índice da palavra
                  >
                    {word}
                  </motion.span>
                )
            })
        }
    </motion.div>
  )
}
