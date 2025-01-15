'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import HeroSection from '@/components/HeroSection';
import Description from '@/components/Description';

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <HeroSection />
      <Description />
      {/* <Section /> */}
      <div className='h-screen'></div>
      <div className='h-screen'></div>
    </main>
  );
}