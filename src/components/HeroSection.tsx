import React from 'react'
import Image from 'next/image';
// import { Inter } from 'next/font/google'; 
// import { Montserrat } from 'next/font/google';


import LayerOne from '../../public/images/layer (1).png';
import LayerTwo from '../../public/images/layer (2).png';
import LayerThree from '../../public/images/layer (3).png';
import LayerFour from '../../public/images/layer (4).png';
import LayerFive from '../../public/images/layer (5).png';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';



export default function HeroSection() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const LayerOneY = useTransform(scrollYProgress, [0, 1], ["0vh", "380vh"])
    const LayerTwoY = useTransform(scrollYProgress, [0, 1], ["0vh", "350vh"])
     const LayerThreeY = useTransform(scrollYProgress, [0, 1], ["0vh", "250vh"])
     const LayerFourY = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"])
     const LayerFiveY = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
     
    return (
    
        <div  className='h-screen overflow-hidden relative p-20 flex '>
          <motion.div  style={{y: LayerFiveY}} className="absolute top-0 left-0 w-full h-full z-50">
          <Image  src={LayerFive} fill alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
        <div className="absolute z-[60] top-40 w-[55%] left-20">
                <p className="text-xl text-accentblue">Hi I'm</p>
                <h1 className="text-8xl font-bold text-darkblue">Rahul Akubattini</h1>
                <p className="text-xl text-accentblue w-[80%]">A Full Stack Developer based in Hyderabad India, specializing in developing scalable and high-performance web and mobile applications. </p>
            </div>
                 
          <motion.div style={{y: LayerFourY}} className="absolute top-0 left-0 w-full h-full z-40">
          <Image src={LayerFour} fill alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
        <motion.div  style={{y: LayerThreeY}} className="absolute top-0 left-0 w-full h-full z-30">
          <Image  src={LayerThree} fill alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
        <motion.div style={{y: LayerTwoY}} className="absolute top-0 left-0 w-full h-full z-20">
          <Image src={LayerTwo} fill alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
        <motion.div style={{y: LayerOneY}} className="absolute top-0 left-0 w-full h-full z-10">
          <Image src={LayerOne} fill alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
        
      </div>
   
     
    )
}