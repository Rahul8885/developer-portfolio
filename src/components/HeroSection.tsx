'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

import LayerOne from '../../public/images/layer (1).png';
import LayerTwo from '../../public/images/layer (2).png';
import LayerThree from '../../public/images/layer (3).png';
import LayerFour from '../../public/images/layer (4).png';
import LayerFive from '../../public/images/layer (5).png';

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
        className="absolute z-[30] top-24 md:top-36 w-[90%] md:w-[55%] left-4 md:left-20 space-y-3"
      >
        <p className="text-base md:text-xl font-neue text-accentblue">
          Hi I&apos;m
        </p>
        <h1 className="text-4xl md:text-8xl font-neue font-bold text-darkblue leading-tight">
          Rahul Akubattini
        </h1>
        <p className="text-sm md:text-xl font-neue text-accentblue w-full md:w-[80%]">
          A{' '}
          <span className="font-medium text-darkblue">
            Full Stack Developer
          </span>{' '}
          based in Hyderabad, India, specializing in developing scalable and
          high-performance web and mobile applications.
        </p>
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
