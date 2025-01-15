import React from 'react'
import Image from 'next/image';
import Background from '../../public/images/Baclhroundsky.png';
import HillsOne from '../../public/images/2ndHills.png';
import OnlyHills from '../../public/images/Hillswithoutnsky.png';
import Person from '../../public/images/PersononHills.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';


export default function HeroSection() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const BackgroundY = useTransform(scrollYProgress, [0, 1], ["0vh", "400vh"])
     const HillsOneY = useTransform(scrollYProgress, [0, 1], ["0vh", "300vh"])
     const OnlyHillsY = useTransform(scrollYProgress, [0, 1], ["0vh", "250vh"])
     const PersonY = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"])
    return (
      <>
          <div className='h-screen overflow-hidden relative'>
          <motion.div  style={{y: PersonY}} className="absolute top-0 left-0 w-full h-full z-50">
          <Image  src={Person} fill alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
      
          <motion.div style={{y: OnlyHillsY}} className="absolute top-0 left-0 w-full h-full z-40">
          <Image src={OnlyHills} fill alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
        <motion.div style={{y: HillsOneY}} className="absolute top-0 left-0 w-full h-full z-30">
          <Image src={HillsOne} fill alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
        <motion.div style={{y: BackgroundY}} className="absolute top-0 left-0 w-full h-full z-20">
          <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
        
      </div>
      </>
     
    )
}