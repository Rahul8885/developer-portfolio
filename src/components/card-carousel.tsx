"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "./projectDetails"
import Link from "next/link"
import Container from "./container/container"
import Image from "next/image"
import { SiGithub } from "react-icons/si"
import { BsLink45Deg } from "react-icons/bs"
import AnimatedTitle from "@/animations/AnimatedTitle"
import AnimatedBody from "@/animations/AnimatedBody"

// const projects = [
//   {
//     id: 1,
//     title: "NORWEGIAN FJORDS",
//     subtitle: "Discover Nordic beauty",
//     image: "/placeholder.svg?height=600&width=400",
//   },
//   {
//     id: 2,
//     title: "SWISS ALPS",
//     subtitle: "Alpine adventures await",
//     image: "/placeholder.svg?height=600&width=400",
//   },
//   {
//     id: 3,
//     title: "CHAMONIX",
//     subtitle: "FRANCE",
//     description: "Let your dreams come true",
//     image: "/placeholder.svg?height=600&width=400",
//     featured: true,
//   },
//   {
//     id: 4,
//     title: "COASTAL CLIFFS",
//     subtitle: "Ocean meets sky",
//     image: "/placeholder.svg?height=600&width=400",
//   },
//   {
//     id: 5,
//     title: "MOUNTAIN PEAKS",
//     subtitle: "Touch the clouds",
//     image: "/placeholder.svg?height=600&width=400",
//   },
// ]

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2) // Start with Chamonix as featured

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex
    const totalSlides = projects.length

    // Normalize the difference to be between -2 and 2
    let normalizedDiff = diff
    if (Math.abs(diff) > totalSlides / 2) {
      normalizedDiff = diff > 0 ? diff - totalSlides : diff + totalSlides
    }

    return normalizedDiff
  }

  const getCardVariants = (position: number) => {
    const isCenter = position === 0
    const isLeft = position < 0
    const isRight = position > 0

    return {
      x: position * 180, // Consistent gap of 320px between cards
      rotateY: isCenter ? 0 : position * -30, // More pronounced tilt for non-focused cards
   
      scale: isCenter ? 1 : 0.85,
      z: isCenter ? 0 : -100,
      opacity: Math.abs(position) <= 2 ? (isCenter ? 1 : 0.7) : 0,
    }
  }

  return (
    <>
    <div className="relative w-full overflow-hidden">
      {/* Background blur effect */}
     

      {/* Carousel container */}
      <div className="relative h-full flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          {/* Navigation arrows */}
          {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </motion.div> */}
{/* 
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </motion.div> */}

          {/* Slides */}
          <div className="relative h-[65vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {projects.map((project, index) => {
                const position = getSlidePosition(index)
                const isCenter = position === 0
                const isVisible = Math.abs(position) <= 2

                if (!isVisible) return null

                return (
                  <motion.div
                    key={project.id}
                    className={`absolute cursor-pointer ${isCenter ? "z-10" : "z-0"}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={getCardVariants(position)}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      opacity: { duration: 0.6 },
                    }}
                    whileHover={
                      !isCenter
                        ? {
                            scale: 0.9,
                            rotateY: position * -20,
                            transition: { duration: 0.3 },
                          }
                        : {}
                    }
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      transformStyle: "preserve-3d",
                    
                     transformPerspective: "1200px",
                    }}
                  >
                    <motion.div
                      className="relative w-[670px] h-[480px] bg-darkblue rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={isCenter ? { y: -10 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image */}
                     

                      {/* Gradient overlay */}
                      {/* <div className="absolute inset-0 bg-slate-300" /> */}

                      {/* Content overlay - only show on center slide */}
                      <AnimatePresence>
                        {isCenter && (
                          <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            <Container
                width="100%"
                height="100%"
                borderRadius={25}
                color="rgba(255, 255, 255, 0.1)"
                blur={false}
                grain={true}
                top="0px"
                left="0px"
                angle={0}
            >
                <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                    className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${
                        project.id % 2 === 0 ? "right-0" : "left-0"
                    }`}
                    priority={true}
                />
                <div
                    className={`absolute top-0 text-[#0E1016] ${
                        project.id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
                    } mt-6 flex  items-center justify-center gap-4 lg:mt-10`}
                >
                    {project.available ? (
                        <>
                            <Link
                                href={project.github}
                                target="_blank"
                                aria-label="Open GitHub Repository"
                                className="rounded-full w-[43px] bg-white p-3 md:p-5 text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                                data-blobity
                                data-blobity-radius="35"
                                data-blobity-offset-x="4"
                                data-blobity-offset-y="4"
                                data-blobity-magnetic="false">
                                <SiGithub/>
                            </Link>
                            <Link
                                href={project.demo}
                                target="_blank"
                                aria-label="Open Live Demo"
                                className=" w-[43px] rounded-full bg-white p-3 md:p-5 text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                                data-blobity
                                data-blobity-radius="35"
                                data-blobity-offset-x="4"
                                data-blobity-offset-y="4"
                                data-blobity-magnetic="false">
                                <BsLink45Deg/>
                            </Link>
                        </>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div
                    className={`absolute text-white  ${
                        !(project.id % 2 === 0)
                            ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4"
                            : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
                    } mb-10  md:mb-16 lg:mb-14 `}
                >
                    <AnimatedTitle
                        text={project.name}
                        className={
                            "max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
                        }
                        wordSpace={"mr-[0.25em]"}
                        charSpace={"-mr-[0.01em]"}
                    />
                    <AnimatedBody
                        text={project.description}
                        className={
                            "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
                        }
                    />
                    <div className="mt-9 mb-9 grid grid-cols-5 gap-5 col-start-1 col-end-2">
                        {project.technologies.map((IconComponent, id) => (
                            <div key={id} className={"relative"}>
                                <Link
                                    href={project.techLinks[id]}
                                    target="_blank"
                                    aria-label={`Learn more about ${project.techNames[id]}`}
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    title={project.techLinks[id]}
                                    data-blobity-tooltip={project.techNames[id]}
                                    data-blobity-magnetic="false"
                                >
                                    <IconComponent/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Card reflection effect for non-center cards */}
                      {!isCenter && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30" />
                      )}
                    </motion.div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom indicators */}
    
    </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-yellow w-8" : "bg-white/40 hover:bg-white/60 w-2"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      </>
  )
}
