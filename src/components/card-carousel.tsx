"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "./projectDetails"

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
                      className="relative w-[670px] h-[480px] border-2 border-yellow bg-darkblue rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={isCenter ? { y: -10 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                        style={{
                          backgroundImage: `url(${project.image})`,
                        }}
                      />

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
                            <div className="space-y-4">
                              <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                              >
                                <h1 className="text-4xl font-bold tracking-wider mb-2">{project.title}</h1>
                                {project.subtitle && (
                                  <h2 className="text-4xl font-bold tracking-wider">{project.subtitle}</h2>
                                )}
                              </motion.div>

                              {/* Decorative line */}
                              <motion.div
                                className="w-16 h-0.5 bg-white mx-auto"
                                initial={{ width: 0 }}
                                animate={{ width: 64 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                              />

                              {project.description && (
                                <motion.p
                                  className="text-lg text-white/90 font-light tracking-wide"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                  {project.description}
                                </motion.p>
                              )}
                            </div>
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
