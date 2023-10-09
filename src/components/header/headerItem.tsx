
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

interface HeaderProps{
    text: string
}
export function HeaderItemComponent({text}:HeaderProps) {
  const pathname = usePathname()
  const {replace} = useRouter()
  const redirect = text.toLowerCase() === "home" ? "/" : text.toLowerCase()
  const homeBgChange = text.toLowerCase() === "home" && pathname === "/"
  const BgChange = `/${text.toLowerCase()}` === pathname 
  return (
    <motion.div className="overflow-hidden flex flex-col cursor-pointer z-50" initial={{y: 12}} animate={{y: homeBgChange || BgChange ? -12 : 12}} whileHover={{y:-12}} transition={{duration:0.5}}>
      <p className="h-[23px] flex justify-center items-center w-[185px] text-[10px] text-custom-yellow">{text}</p>
      <button onClick={ () => replace(`/${redirect}`)}  className={`text-[10px] w-[185px] h-[24px] font-wtGothic text-black bg-custom-white`}>{text.toLowerCase() === "home" ? "BACK HOME" : text}</button>
    </motion.div>
  )
}
