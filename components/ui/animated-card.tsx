"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"
import { cn } from "@/lib/utils"

// Animation variants for different effects
const animationVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  slideIn: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 }
  },
  scaleIn: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 }
  },
  rotateIn: {
    initial: { rotate: -180, scale: 0, opacity: 0 },
    animate: { rotate: 0, scale: 1, opacity: 1 },
    exit: { rotate: 180, scale: 0, opacity: 0 }
  },
  springIn: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 }
  }
}

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  animationType?: keyof typeof animationVariants;
  delay?: number;
  isVisible?: boolean;
  onClose?: () => void;
}

export const AnimatedCard = React.forwardRef<
  HTMLDivElement,
  AnimatedCardProps
>(({ className, animationType = "fadeIn", delay = 0, isVisible = true, onClose, children, ...props }, ref) => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const selectedAnimation = animationVariants[animationType]

  return (
    <AnimatePresence>
      {(show && isVisible) && (
        <motion.div
          initial={selectedAnimation.initial}
          animate={selectedAnimation.animate}
          exit={selectedAnimation.exit}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.5 
          }}
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget && onClose) {
              onClose()
            }
          }}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <Card
            ref={ref}
            className={cn(
              "relative z-50 w-full max-w-lg shadow-xl",
              className
            )}
            {...props}
          >
            {children}
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
})
AnimatedCard.displayName = "AnimatedCard"

export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent } 