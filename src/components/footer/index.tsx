"use client"
import { helveltica, wtGothic } from "@/fonts/constants"
import {motion} from "framer-motion"
import LinksComponent from "./links"

export  function FooterComponent() {
  return (
    <footer className="min-w-screen my-[72px]  overflow-hidden relative">
        <div className={`bg-custom-gray w-full h-[23px] flex overflow-hidden z-50 ${wtGothic.className}`}>
          <div className=" w-[648px] text-[10px] flex justify-between items-center text-custom-yellow">
            <LinksComponent link="https://www.behance.net/florgaby" title="BEHANCE"/>
            <LinksComponent link="https://www.linkedin.com/in/florencezandona/" title="LINKEDIN"/>
            <LinksComponent link="https://medium.com/@florlouisegaby" title="MEDIUM"/>
          </div>
        </div>
        <motion.h3
      className={`text-custom-yellow text-[150px] large:text-[200px] font-[700] w-full flex z-30 ${helveltica.className}`}
      initial={{ x: "100%" }} // Define a posição inicial fora da tela à direita
      animate={{ x: "-100%" }} // Define a posição final fora da tela à esquerda
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Configura a animação infinita
    >
      ©BERLIN 2023
    </motion.h3>
    </footer>
  )
}
