"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-violet-950 via-violet-900 to-violet-800 text-white py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <motion.div
          className="container mx-auto max-w-4xl px-4 relative z-10"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-violet-200 text-center mb-12">Get in touch with our team for any queries about the symposium</p>
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto max-w-4xl px-4 py-16 relative z-20 -mt-8"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Coordinators */}
            <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-violet-800 dark:text-violet-200">Contact for any doubts</h2>
            <div className="space-y-4">
              <div className="space-y-2">
              <h3 className="font-medium text-violet-700 dark:text-violet-300"></h3>
              <p className="text-gray-600 dark:text-gray-300">Mr. Sheegan Sri G M: <Link href="tel:+91 88259 20804" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300">+91 98765 43210</Link></p>
                </div>
                <div className="space-y-2">
                <h3 className="font-medium text-violet-700 dark:text-violet-300"></h3>
                <p className="text-gray-600 dark:text-gray-300">Mr. SIVA R: <Link href="tel:+91 93606 61755" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300">+91 98765 43211</Link></p>
                </div>
            </div>
          </Card>

          {/* Faculty Contact */}
            <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-violet-800 dark:text-violet-200">Faculty Coordinator</h2>
            <div className="space-y-4">
                <div>
                <h3 className="font-medium text-violet-700 dark:text-violet-300">Varun CM</h3>
                <p className="text-gray-600 dark:text-gray-300">Associate Professor</p>
                <p className="text-gray-600 dark:text-gray-300">Department of CSBS</p>
                </div>
                <div className="pt-2">
                <p className="text-gray-600 dark:text-gray-300">For official communications and queries</p>
                <Link href="mailto:info@csbssymposium.com" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300">
                  events.csbs@rmkec.ac.in
                </Link>
                </div>
            </div>
          </Card>
        </div>

        {/* Note Section */}
        <Card className="mt-12 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
          <h3 className="font-semibold text-violet-800 dark:text-violet-200 mb-2">Important Note</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>For registration queries, please contact the respective event coordinators</li>
            <li>Technical support is available during office hours only</li>
            <li>Emails will be responded to within 24 hours on working days</li>
          </ul>
        </Card>
      </motion.div>
    </div>
  )
}

