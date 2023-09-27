import Image from "next/image";
import { AnimetedTitleComponent } from "../../animetedTitle";
import { ImageComponent } from "../../util/image";


export default function IntroComponent() {
  return (
        <div className="relative">
            <div className='my-[28px] relative z-50'>
                <AnimetedTitleComponent title='HELLO DEAR FRIEND'/>
                <p className='text-[12px] text-custom-yellow w-fit rotate-[-90deg] bottom-[42px] absolute left-[-36px]'>product designer</p>
            </div>
            <div className='absolute right-0 top-0'>
                <ImageComponent alt="manWalking" w="w-[516px]" h="h-[687px]" src={"/images/home/manWalking.png"} containerClassname="brightness-125"/>
                <div className="right-[47px] bottom-[251px] flex justify-between items-center w-[120px] h-[105px] absolute">
                    <ImageComponent  alt='leftBox'  w="w-[27px]" h="h-[102px]" src={"/images/home/left.png"} /> 
                    <ImageComponent  alt='ritghBox'  w="w-[27px]" h="h-[102px]" src={"/images/home/rigth.png"} /> 
                </div>
            </div>
            <div className='absolute right-0 top-0 z-40'>
                <div className='w-[516px] h-[687px] relative'>
                <Image src={"/images/home/texture.png"} className='w-full h-full' alt='ritghBox' layout="fill" objectFit={'cover'}/>
                </div>
            </div>
            <div className="absolute bottom-1 right-0 ">
                <p className="text-custom-yellow text-[12px] my-[4px] w-full flex justify-end pr-[4px]">by florence</p>
                <hr className='h-[5px] text-custom-white w-[1316px] flex '/>
            </div>
        </div>
    )
}
