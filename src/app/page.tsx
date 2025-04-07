'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import HeroSection from '@/components/HeroSection';
import Description from '@/components/Description';
import localFont from 'next/font/local';
import About from '@/components/About';
const NeueMontreal = localFont({
  src: [
    { path: "../../public/fonts/NeueMontreal-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/NeueMontreal-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/NeueMontreal-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-neue-montreal",
});
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
    <main className={NeueMontreal.variable}>
      <HeroSection />
      {/* <Description /> */}
      <About />
      {/* <Section /> */}
      <div className='h-screen'></div>
      <div className='h-screen'></div>
    </main>
  );
}