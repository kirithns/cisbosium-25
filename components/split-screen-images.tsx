"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { AnimatePresence } from 'framer-motion'

interface ImageOption {
  src: string
  alt: string
  label: string
}

interface SplitScreenImagesProps {
  leftImages: ImageOption[]
  rightImages: ImageOption[]
}

export function SplitScreenImages({
  leftImages,
  rightImages
}: SplitScreenImagesProps) {
  const [selectedLeft, setSelectedLeft] = useState(0)
  const [selectedRight, setSelectedRight] = useState(0)
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className="relative w-full h-screen flex overflow-hidden">
      {/* Left Image */}
      <motion.div 
        className="w-1/2 h-full relative"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <div className="absolute inset-0 hover:scale-110 transition-transform duration-700">
          <Image
            src={leftImages[selectedLeft].src}
            alt={leftImages[selectedLeft].alt}
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-500" />
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="w-1/2 h-full relative"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <div className="absolute inset-0 hover:scale-110 transition-transform duration-700">
          <Image
            src={rightImages[selectedRight].src}
            alt={rightImages[selectedRight].alt}
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-500" />
        </div>
      </motion.div>

      {/* Center Divider */}
      <motion.div 
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/50 backdrop-blur-sm"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />

      {/* Image Selection Button */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowOptions(!showOptions)}
      >
        {showOptions ? 'Close Options' : 'Change Images'}
      </motion.button>

      {/* Image Selection Panel */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl p-6"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Left Image Options */}
              <div>
                <h3 className="text-white font-semibold mb-4">Left Image</h3>
                <div className="grid grid-cols-2 gap-4">
                  {leftImages.map((image, index) => (
                    <Card
                      key={index}
                      className={`relative h-32 cursor-pointer overflow-hidden ${
                        selectedLeft === index ? 'ring-2 ring-violet-500' : ''
                      }`}
                      onClick={() => setSelectedLeft(index)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">{image.label}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Right Image Options */}
              <div>
                <h3 className="text-white font-semibold mb-4">Right Image</h3>
                <div className="grid grid-cols-2 gap-4">
                  {rightImages.map((image, index) => (
                    <Card
                      key={index}
                      className={`relative h-32 cursor-pointer overflow-hidden ${
                        selectedRight === index ? 'ring-2 ring-violet-500' : ''
                      }`}
                      onClick={() => setSelectedRight(index)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">{image.label}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Indicators */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-1/2 h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
          <motion.div 
            className="text-white text-4xl font-bold tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {leftImages[selectedLeft].label}
          </motion.div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
          <motion.div 
            className="text-white text-4xl font-bold tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {rightImages[selectedRight].label}
          </motion.div>
        </div>
      </div>
    </div>
  )
} 