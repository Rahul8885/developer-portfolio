'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'motion/react';

import LayerOne from '../../public/images/layer (1).png';
import LayerTwo from '../../public/images/layer (2).png';
import LayerThree from '../../public/images/layer (3).png';
import LayerFour from '../../public/images/layer (4).png';
import LayerFive from '../../public/images/layer (5).png';
import { ContainerTextFlip } from '@/app/components/ui/container-text-flip';

export default function HeroSection() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const LayerOneY = useTransform(scrollYProgress, [0, 1], ['0vh', '380vh']);
  const LayerTwoY = useTransform(scrollYProgress, [0, 1], ['0vh', '280vh']);
  const LayerText = useTransform(scrollYProgress, [0, 1], ['0vh', '250vh']);
  const LayerThreeY = useTransform(scrollYProgress, [0, 1], ['0vh', '220vh']);
  const LayerFourY = useTransform(scrollYProgress, [0, 1], ['0vh', '185vh']);
  const LayerFiveY = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div
      // ref={container}
      className="h-screen overflow-hidden relative px-6 md:px-20 flex items-center justify-center"
    >
      {/* Background Layers */}
      <motion.div
        style={{ y: LayerFiveY }}
        className="absolute top-0 left-0 w-full h-full z-50"
      >
        <Image src={LayerFive} fill alt="layer 5" className="object-cover" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        style={{ y: LayerText }}
        className="absolute z-[40] top-32 md:top-36 w-[90%] lg:w-[55%] left-4 md:left-20  tracking-tighter leading-[0.9em]"
      >
       
        <h1 className="lg:text-[72px] md:text-[60px] text-[36px] font-bold leading-[0.9em] tracking-tighter text-accentblue">
          Hi I'm Rahul Akubattini
        </h1>
       
        <h1 className="lg:text-[72px] md:text-[60px] text-[36px] font-bold leading-[0.9em] tracking-tighter  text-accentblue">
          a 
          <span>
            <ContainerTextFlip textClassName='lg:text-[72px] md:text-[60px] text-[36px] font-bold leading-[0.9em] tracking-tighter text-darkblue pl-4' words={["Full Stack Developer", "Web Designer", "App Developer", "AWS Developer"]}
/>
          </span>
        </h1>
        
      </motion.div>

      {/* Foreground Layers */}
      <motion.div
        style={{ y: LayerFourY }}
        className="absolute top-0 left-0 w-full h-full z-40"
      >
        <Image src={LayerFour} fill alt="layer 4" className="object-cover" />
      </motion.div>
      <motion.div
        style={{ y: LayerThreeY }}
        className="absolute top-0 left-0 w-full h-full z-30"
      >
        <Image src={LayerThree} fill alt="layer 3" className="object-cover" />
      </motion.div>
      <motion.div
        style={{ y: LayerTwoY }}
        className="absolute top-0 left-0 w-full h-full z-20"
      >
        <Image src={LayerTwo} fill alt="layer 2" className="object-cover" />
      </motion.div>
      <motion.div
        style={{ y: LayerOneY }}
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        <Image src={LayerOne} fill alt="layer 1" className="object-cover" />
      </motion.div>
    </div>
  );
}
