import { Variants, motion } from 'framer-motion'
import React, { useState } from 'react'
import { ImageComponent } from '../util/image'
import AnimatedVerticalComponent from '../animatedVertical';
import { BlackWhiteAnimation } from './blackWhiteAnimation';

export  function FirstCaseComponent() {

  return (
    <motion.div className="flex gap-x-[20px]">
                <AnimatedVerticalComponent yStart={400}>
                    <BlackWhiteAnimation w="w-[610px]" h="h-[410px]" srcBalckWhite="/images/cases/car2BlackWhite.png" srcRegular='/images/cases/car2.png'/>
                </AnimatedVerticalComponent>
                <AnimatedVerticalComponent className="w-[613px] flex flex-col justify-between items-start ">
                <span>
                        <div className="text-custom-yellow w-full flex justify-between items-center">
                            <p>2022</p>
                            <p>UX/ UI Design</p>
                        </div>
                        <hr className="text-custom-white mt-[9px] leading-[15.6px]"/>
                        <div className="text-custom-yellow flex flex-col gap-y-[16px] text-justify">
                            <p className="mt-[21px] font-[600]">Development of Features for the New Model Car VF7 by Vietnamese Brand Vinfast</p>
                            <p>For several months, we have been deeply engaged in the conception and development of features for the latest car model by Vinfast, the VF7. This endeavor required meticulous market research regarding emerging trends in the electric vehicle industry.</p>
                        </div>
                    </span>
                    <div className="text-[#525252] flex gap-x-[8px]">
                        <p>User Experience</p>
                        <div className="h-[12.6px] w-[2px] bg-custom-gray"/>
                        <p>Research</p>
                        <div className="h-[12.6px] w-[2px] bg-custom-gray "/>
                        <p>Design Thinking</p>
                        <div className="h-[12.6px] bg-custom-gray w-[2px] "/>
                        <p>UI Design</p>
                    </div>
                </AnimatedVerticalComponent>
    </motion.div>
  )
}
