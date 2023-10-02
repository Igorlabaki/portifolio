import { Variants, motion } from 'framer-motion'
import {useState, useEffect} from 'react'
import { ImageComponent } from '../util/image'
import AnimatedVerticalComponent from '../animatedVertical';

export  function SecondCaseComponent() {
    const [current, setCurrent] = useState(0)

    const imageList = [
        {src: "/images/cases/car4.png"},
        {src: "/images/cases/car3.png"}
    ]

    const onPrevClick = () => {
        if(current > 0 ){
            setCurrent(current - 1)
        }
    }

    const onNextClick = () => {
        if(current < imageList.length - 1){
            setCurrent(current + 1)
        }
    }

 
    useEffect(() => {
        const intervalId = setInterval(() => {
          if (current === imageList.length - 1) {
            setCurrent(() => 0);
          } else {
            setCurrent((current) => (current + 1) % imageList.length);
          }
        }, 4000); 
        return () => {
          clearInterval(intervalId);
        };
      }, [current]);


  return (
    <div className="flex gap-x-[16px] text-[12px] leading-[16px]">
        <div className="text-custom-yellow w-[452px] text-justify flex flex-col justify-between ">
            <AnimatedVerticalComponent className="flex flex-col flex-1 gap-y-[16px] ">
                <p>My contribution in this project was centered around creating wireframes, with the primary goal of enhancing usability to provide an exceptional driving experience for motorists. I worked closely with our stakeholders, incorporating valuable feedback and facilitating co-creations that enriched the final outcome. My involvement spanned the entire project lifecycle, culminating in the creation of user interfaces (UI Design).</p>
                <p>My involvement the entire project lifecycle, culminating in the creation of user interface (UI DESGIN).</p>
            </AnimatedVerticalComponent>
            <div >
                <ImageComponent alt="car" w="w-[61px]" h="h-[48.61px]" src={"/images/cases/rectangle.png"}/>
                <ImageComponent alt="car" w="w-[452px]" h="h-[2px]" src={"/images/cases/line-horizontal.png"} containerClassname="mt-[40px]"/>
                <p className="mt-[12px] text-custom-white">Our outcome boasts a minimalist, innovative design with features centered around excellent usability and sustainability, designed to appeal to prospective electric vehicle users.</p>
            </div>
        </div>
        <AnimatedVerticalComponent yStart={400} className='relative'>
            <div className='flex flex-nowrap max-w-[770px] overflow-hidden'>
                <motion.div className='flex' animate={{x: current === 0 ? 0 : "-50%"}} transition={{duration: 1.5}}>
                    {
                        [...imageList].map((item: {src: string}, index: number) => {
                            return(
                                <ImageComponent alt="car" w="min-w-[770px]" h="h-[584.00px]" src={item.src} key={index}/>
                            )
                        })
                    }
                </motion.div>
                <div className='absolute bottom-[36px] left0 right-0 flex justify-center items-center gap-x-1 inset-x-0'>
                    <div className={`h-[7px] rounded-full ${current === 0 ? "w-[14px] bg-custom-white" : "w-[7px] bg-gray-500"} duration-[700ms] cursor-pointer`} onClick={onPrevClick}/>
                    <div className={`h-[7px]  rounded-full ${current === 1 ? "w-[14px] bg-custom-white" : "w-[7px] bg-gray-500"} duration-[700ms] cursor-pointer`}onClick={onNextClick}/>
                </div>
            </div>
        </AnimatedVerticalComponent>
    </div>
  )
}
