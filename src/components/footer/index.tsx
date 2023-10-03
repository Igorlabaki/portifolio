"use client"
import { helveltica } from "@/fonts/constants"
import {motion} from "framer-motion"

export  function FooterComponent() {
  return (
    <footer className="min-w-screen my-[72px]  overflow-hidden">
        <div className="bg-custom-gray w-full px-[21px] h-[23px] flex">
            <div className=" w-[648px] text-[10px] flex justify-between items-center text-custom-yellow">
                <a href="https://www.behance.net/florgaby" target="_blank">BEHANCE</a>
                <a href="https://www.linkedin.com/in/florencezandona/" target="_blank">LINKEDIN</a>
                <a href="https://medium.com/@florlouisegaby" target="_blank">MEDIUM</a>
            </div>
        </div>
        <motion.h3
      className={`text-custom-yellow text-[150px] large:text-[200px] font-[700] h-fit w-full flex ${helveltica.className}`}
      initial={{ x: "100%" }} // Define a posição inicial fora da tela à direita
      animate={{ x: "-100%" }} // Define a posição final fora da tela à esquerda
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Configura a animação infinita
    >
      ©BERLIN 2023
    </motion.h3>
    </footer>
  )
}
