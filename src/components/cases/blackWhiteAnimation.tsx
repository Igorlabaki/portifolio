import React, { useState } from 'react'
import { ImageComponent } from '../util/image'

interface BlackWhiteAnimationProps{
    w: string;
    h: string;
    srcRegular: string;
    srcBalckWhite:string;
}

export  function BlackWhiteAnimation({h,srcRegular,srcBalckWhite,w}:BlackWhiteAnimationProps) {
  const [animation, setAnimation] = useState<boolean>(false)
  return (
    <div className='relative' onMouseOver={() => setAnimation(true)} onMouseOut={() => setAnimation(false)}>
        <ImageComponent alt="car" w={w} h={h} src={srcBalckWhite} containerClassname={`${animation ?  "opacity-0 hidden" : "flex opacity-100"}  duration-700`} />
        <ImageComponent alt="car" w={w} h={h} src={srcRegular} containerClassname={`${animation ?  "opacity-100 flex" : " opacity-0 hidden"} duration-700`} />
    </div>
  )
}
