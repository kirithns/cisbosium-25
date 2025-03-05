'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from "next/image"
import { X } from 'lucide-react'

export default function RegisterNowCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={false}
        animate={{
          rotate: isExpanded ? 0 : 360,
          width: isExpanded ? 'min(90vw, 600px)' : 'min(60px, 15vw)',
          height: isExpanded ? 'min(90vh, 800px)' : 'min(60px, 15vw)',
          borderRadius: isExpanded ? '1rem' : '50%'
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 100, 
          damping: 20,
          mass: 1
        }}
      >
        <div className="relative h-full w-full overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg ring-2 ring-violet-200 dark:ring-violet-800">
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div 
                className="p-3 sm:p-4 h-full flex flex-col space-y-3 sm:space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div className="text-center flex-1">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-violet-800 dark:text-violet-200"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Welcome to CISBOSIUM 2025!
                    </motion.h2>
                    <motion.p 
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-300"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Embark on an exciting journey of innovation, learning, and competition.
                      Here you&apos;ll find all the details you need before you register.
                    </motion.p>
                  </div>
                  <motion.button 
                    onClick={() => setIsExpanded(false)}
                    className="p-1.5 sm:p-2 hover:bg-violet-100 dark:hover:bg-violet-900/50 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-violet-800 dark:text-violet-200" />
                  </motion.button>
                </div>
                <motion.div 
                  className="flex justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3
                  }}
                >
                  <Image 
                    src="/img1.jpg"
                    width={160}
                    height={160}
                    className="w-28 h-28 sm:w-40 sm:h-40 rounded-full ring-2 ring-primary" 
                    alt="Event Logo"
                  />
                </motion.div>
                <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-violet-100 dark:scrollbar-thumb-violet-700 dark:scrollbar-track-violet-900 p-2">
                  <section className="mb-4">
                    <motion.h3 
                      className="text-lg sm:text-xl font-semibold text-violet-800 dark:text-violet-200 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Event Rules
                    </motion.h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {[
                        {
                          title: 'Respect & Professionalism',
                          icon: '🤝',
                          desc: 'Maintain respectful conduct and professional attitude throughout'
                        },
                        {
                          title: 'Guideline Adherence',
                          icon: '📜',
                          desc: 'Strictly follow all competition rules and regulations'
                        },
                        {
                          title: 'Mandatory Registration',
                          icon: '📝',
                          desc: 'Valid registration required for participation'
                        },
                        {
                          title: 'Ethical Integrity',
                          icon: '⚖️',
                          desc: 'Ensure fairness and honesty in all activities'
                        },
                        {
                          title: 'Innovation Focus',
                          icon: '💡',
                          desc: 'Prioritize creative problem-solving approaches'
                        },
                        {
                          title: 'Collaborative Spirit',
                          icon: '🤝',
                          desc: 'Encourage teamwork and knowledge sharing'
                        }
                      ].map((rule, index) => (
                        <motion.div
                          key={index}
                          className="p-2 sm:p-3 rounded-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-violet-100 dark:border-violet-900 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-xl sm:text-2xl">{rule.icon}</span>
                            <div>
                              <h4 className="text-sm sm:text-base font-semibold text-violet-800 dark:text-violet-200">
                                {rule.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                {rule.desc}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                  <section className="mb-4">
                    <motion.h3 
                      className="text-lg sm:text-xl font-semibold text-violet-800 dark:text-violet-200 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      Additional Information
                    </motion.h3>
                    <motion.p 
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 }}
                    >
                      For any questions or further details, feel free to contact our support team.
                      We're here to help you every step of the way.
                    </motion.p>
                  </section>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="flex items-center justify-center h-full cursor-pointer"
                onClick={() => setIsExpanded(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-base sm:text-lg">🎉</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
