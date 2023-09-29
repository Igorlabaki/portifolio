"use client"
import { motion, useScroll, scroll } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollProgressProps{
    children: React.ReactNode;
}

export default function ScrollProgressComponent({children}:ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const [progressY, setProgressY] = useState(0)

   useEffect(() => {
        scroll(progress => setProgressY(Math.round(progress * 100)))
   }, [scroll])
   
  return (
    <>
     <motion.div
        className="absolute left-[30px] right-0  w-[7px] bg-custom-yellow transform my-[30px]"
        initial={{height: 0}}
        animate={{height: `${progressY}%`}}
        transition={{duration: 0.5}}
        style={{ y: scrollYProgress }}
     />
      {children}
    </>
  );
}
