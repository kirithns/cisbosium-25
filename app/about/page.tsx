"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Sparkles, Cpu, Users, BookOpen, ShieldCheck } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />, 
    title: "Curriculum Enrichment", 
    description: "Industry-designed syllabus with 40% CS and 20% Business courses."
  },
  {
    icon: <Cpu className="w-6 h-6" />, 
    title: "Industry Collaboration", 
    description: "Courses delivered by TCS experts and certified faculty."
  },
  {
    icon: <Users className="w-6 h-6" />, 
    title: "Faculty Strength", 
    description: "Experienced faculty trained by industry leaders."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />, 
    title: "Professional Societies", 
    description: "15 student clubs and industry-recognized associations."
  }
]

export default function AboutDepartment() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-violet-950 via-violet-900 to-violet-800 text-white overflow-hidden">
        <motion.div
          className="container mx-auto px-4 py-24 relative z-10"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
            Department of CSBS
            <span className="inline-block ml-2">
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-violet-200 text-center max-w-3xl mx-auto mb-12">
            Bridging the gap between Computer Science and Business Systems
          </p>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        className="py-20 relative z-20 -mt-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="p-6 h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300">
                  <div className="bg-gradient-to-br from-violet-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-6 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-violet-800 dark:text-violet-200">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-violet-800 dark:text-violet-200 text-center">About the Department</h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Established in 2020, the Department of Computer Science and Business Systems offers an industry-relevant curriculum powered by Tata Consultancy Services. The program is designed to meet the evolving needs of Business 4.0, integrating both Computer Science and Business Systems to prepare students for the future.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Our mission is to provide top-notch infrastructure and innovative teaching methods to cultivate professional excellence, business competence, and a spirit of innovation and entrepreneurship.
                </p>
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6 rounded-xl text-white">
                  <p className="text-lg font-medium italic">
                    &ldquo;Empowering students with the right blend of technology and business acumen to drive future innovation.&rdquo;
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}