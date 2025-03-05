"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Bus Routes", path: "/bus" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                className="relative"
                animate={{ 
                  rotateX: [0, 0, 0],
                  rotateY: [0, 360, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full opacity-30 blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-full"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <Image
                  src="/logo.gif"
                  alt="CSBS Logo"
                  width={40}
                  height={40}
                  className="rounded-md relative z-10 hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-lg font-bold text-foreground hidden sm:inline relative"
                  style={{
                    textShadow: "0 0 10px rgba(139, 92, 246, 0.3)",
                    transformStyle: "preserve-3d",
                    perspective: "700px"
                  }}
                >
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-blue-500/20 blur-sm rounded-lg"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.span
                    className="relative inline-block"
                  >
                    {"RMKEC".split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        className="inline-block bg-gradient-to-br from-violet-600 via-blue-500 to-purple-600 bg-clip-text text-transparent font-black text-xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          y: [0, -8, 0],
                          scale: [1, 1.1, 1],
                          textShadow: [
                            "0 0 8px rgba(139, 92, 246, 0)",
                            "0 0 12px rgba(139, 92, 246, 0.5)",
                            "0 0 8px rgba(139, 92, 246, 0)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 }
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.span>
                <motion.span 
                  className="text-lg sm:hidden relative"
                >
                  {"RMKEC".split('').map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block bg-gradient-to-br from-violet-600 via-blue-500 to-purple-600 bg-clip-text text-transparent font-black text-xl"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        y: [0, -8, 0],
                        scale: [1, 1.1, 1],
                        textShadow: [
                          "0 0 8px rgba(139, 92, 246, 0)",
                          "0 0 12px rgba(139, 92, 246, 0.5)",
                          "0 0 8px rgba(139, 92, 246, 0)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              </div>
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors touch-target ${
                  pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary touch-target"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } animate-mobile-menu`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg border-b border-border">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-4 rounded-md text-base font-medium transition-colors touch-target ${
                pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-3 py-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar