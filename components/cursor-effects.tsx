"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SparkParticle {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
}

export function CursorEffects() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trails, setTrails] = useState<{ id: number; x: number; y: number }[]>([])
  const [sparks, setSparks] = useState<SparkParticle[]>([])
  const [isClient, setIsClient] = useState(false)

  const colors = [
    'rgba(255, 217, 0, 0.93)',   // Gold
    'rgba(255, 0, 0, 0.8)', // White
    'rgb(85, 0, 255)', // Purple
    'rgba(0, 255, 251, 0.98)'  // Light Blue
  ]

  useEffect(() => {
    setIsClient(true)
    let trailId = 0
    let sparkId = 0
    let lastTrailTime = 0
    let lastSparkTime = 0

    const createSpark = (x: number, y: number) => {
      const newSparks: SparkParticle[] = []
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 4 * i) / 9 + Math.random() * 8.5
        newSparks.push({
          id: sparkId++,
          x,
          y,
          angle,
          speed: 2 + Math.random() * 3,
          size: 3 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
      return newSparks
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const now = Date.now()
      
      // Add trail particles
      if (now - lastTrailTime > 30) {
        setTrails(prevTrails => [
          ...prevTrails.slice(-20),
          { id: trailId++, x: e.clientX, y: e.clientY }
        ])
        lastTrailTime = now
      }

      // Add spark particles
      if (now - lastSparkTime > 100) {
        setSparks(prevSparks => [
          ...prevSparks.slice(-50),
          ...createSpark(e.clientX, e.clientY)
        ])
        lastSparkTime = now
      }
    }

    const updateSparkPositions = () => {
      setSparks(prevSparks => 
        prevSparks
          .map(spark => ({
            ...spark,
            x: spark.x + Math.cos(spark.angle) * spark.speed,
            y: spark.y + Math.sin(spark.angle) * spark.speed,
            speed: spark.speed * 0.98,
            size: spark.size * 0.95
          }))
          .filter(spark => spark.size > 0.5)
      )
    }

    const animationFrame = setInterval(updateSparkPositions, 1000 / 60)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(animationFrame)
    }
  }, [])

  if (!isClient) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 w-8 h-8"
        animate={{ x: position.x - 16, y: position.y - 16 }}
        transition={{ type: "spring", mass: 0.2, stiffness: 800, damping: 35 }}
      >
        <motion.div 
          className="relative w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-md" />
          <img 
            src="/cursors/default-cursor.png" 
            alt=""
            className="w-full h-full object-contain relative z-10"
          />
        </motion.div>
      </motion.div>

      {/* Trail effects */}
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'fixed',
              left: trail.x - 10,
              top: trail.y - 10,
              width: '20px',
              height: '20px',
              background: `radial-gradient(circle, rgba(147, 51, 234, ${0.3 + (index / trails.length) * 0.7}) 0%, transparent 70%)`,
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 48
            }}
          />
        ))}
      </AnimatePresence>

      {/* Spark particles */}
      <AnimatePresence>
        {sparks.map(spark => (
          <motion.div
            key={spark.id}
            style={{
              position: 'fixed',
              left: spark.x,
              top: spark.y,
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 47,
              boxShadow: `0 0 ${spark.size * 2}px ${spark.color}`
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </AnimatePresence>
    </>
  )
} 