'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from "next/image"
import { X } from 'lucide-react'

export default function RegisterNowCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      animate={{
        rotate: isExpanded ? 0 : 360,
        width: isExpanded ? '90vw' : 80,
        height: isExpanded ? '90vh' : 80,
        borderRadius: isExpanded ? '1rem' : '50%'
      }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="relative h-full w-full overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg ring-2 ring-violet-200 dark:ring-violet-800">
        {isExpanded ? (
          <div className="p-4 h-full flex flex-col space-y-4">
            <div className="flex justify-between items-start">
              <div className="text-center flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-violet-800 dark:text-violet-200">
                  Welcome to CISBOSIUM 2025!
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Embark on an exciting journey of innovation, learning, and competition.
                  Here you&apos;ll find all the details you need before you register.
                </p>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="p-2 hover:bg-violet-100 dark:hover:bg-violet-900/50 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-violet-800 dark:text-violet-200" />
              </button>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/img1.jpg"
                width={160}
                height={160}
                className="w-40 h-40 rounded-full ring-2 ring-primary" 
                alt="Event Logo"
              />
            </div>
            <div className="flex-grow overflow-y-auto p-2">
              <section className="mb-4">
                <h3 className="text-xl font-semibold text-violet-800 dark:text-violet-200 mb-2">
                  Event Rules
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-violet-100 dark:border-violet-900 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{rule.icon}</span>
                        <div>
                          <h4 className="font-semibold text-violet-800 dark:text-violet-200">
                            {rule.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {rule.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="mb-4">
                <h3 className="text-xl font-semibold text-violet-800 dark:text-violet-200 mb-2">
                  Additional Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For any questions or further details, feel free to contact our support team.
                  We’re here to help you every step of the way.
                </p>
              </section>
            </div>
          </div>
        ) : (
          <div 
            className="flex items-center justify-center h-full cursor-pointer"
            onClick={() => setIsExpanded(true)}
          >
            <span className="text-lg">🎉</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
