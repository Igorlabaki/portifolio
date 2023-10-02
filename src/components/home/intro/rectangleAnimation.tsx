import { ImageComponent } from '@/components/util/image'
import {Variant, motion} from 'framer-motion'

interface RectangleAnimationProps{
    animation: boolean;
}

export default function RectangleAnimation({animation}: RectangleAnimationProps) {

  return (
    <motion.div 
    className={`z-50 bottom-[241px] flex justify-between items-center duration-700   absolute ${animation ? "w-[160px]  h-[137px] right-[27px]" :"w-[120px] right-[47px] h-[105px] "} `} >
        <ImageComponent  alt='leftBox'   w={animation ? "w-[37px] duration-700" : "w-[27px] duration-700"} h={animation ? "h-[137px] duration-700" : "h-[102px] duration-700"} src={"/images/home/left.png"} /> 
        <ImageComponent  alt='ritghBox' w={animation ? "w-[37px] duration-700" : "w-[27px] duration-700"} h={animation ? "h-[137px]" : "h-[102px]"} src={"/images/home/rigth.png"} /> 
    </motion.div>
  )
}
