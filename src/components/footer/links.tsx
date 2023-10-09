import { TIMEOUT } from 'dns';
import { motion } from 'framer-motion'

interface LinksProps{
    title: string;
    link: string;
}

export default function LinksComponent({title,link}:LinksProps) {
  return (
    <motion.div className="overflow-hidden flex flex-col cursor-pointer z-50" initial={{y:12}} whileHover={{y:-9}} transition={{duration:0.5}}>
        <p className="h-[23px] flex justify-center items-center w-[111px]">{title}</p>
        <a href={link} target="_blank" className="h-[23px] bg-custom-white flex justify-center items-center text-black w-[111px]">{`GO TO ${title}`}</a>
    </motion.div>
  )
}
