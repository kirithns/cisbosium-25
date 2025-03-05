"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Trophy, Users, Calendar } from 'lucide-react'
import { FaWhatsapp, FaUserPlus, FaInfoCircle } from 'react-icons/fa'
import { useState } from 'react'

interface Event {
  title: string
  description: string
  image: string
  date: string
  time: string
  location: string
  mode: "technical" | "online"
  rules: string[]
  prizes?: string[]
  registrationLink: string
  whatsappLink: string
  coordinators?: string
  icon?: string
  details?: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const events: Event[] = [
  {
    title: "Stock Market Challenge",
    description: "Test your trading skills in a simulated market environment. Compete with peers and learn real-world investment strategies.",
    image: "/images/stock-market.jpg",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Online",
    mode: "online",
    rules: [
      "Participants must register individually",
      "Each participant gets virtual currency of ₹1,00,000",
      "Trading period: 5 hours",
      "Top 3 performers win exciting prizes",
      "Real-time market data will be provided"
    ],
    prizes: [
      "1st Prize: ₹5,000 + Certificate",
      "2nd Prize: ₹3,000 + Certificate",
      "3rd Prize: ₹2,000 + Certificate"
    ],
    registrationLink: "https://forms.gle/example1",
    whatsappLink: "https://chat.whatsapp.com/example1"
  },
  {
    title: "Research Guru",
    description: "Present your innovative research ideas and compete for recognition in this prestigious event.",
    image: "/images/research.jpg",
    date: "March 20, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    mode: "technical",
    rules: [
      "Research papers must be original",
      "Maximum 3 members per team",
      "Presentation time: 15 minutes",
      "Q&A session: 5 minutes",
      "Submit abstracts by March 10"
    ],
    prizes: [
      "Best Research: ₹10,000 + Certificate",
      "Runner-up: ₹5,000 + Certificate"
    ],
    registrationLink: "https://forms.gle/example2",
    whatsappLink: "https://chat.whatsapp.com/example2"
  },
  {
    title: "MystIQ",
    description: "Challenge your problem-solving skills in this exciting technical quiz competition.",
    image: "/images/quiz.jpg",
    date: "March 25, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Online",
    mode: "online",
    rules: [
      "Individual participation",
      "Time limit: 2 hours",
      "No external resources allowed",
      "Top 5 participants qualify for finals",
      "Final round: March 26"
    ],
    prizes: [
      "Winner: ₹3,000 + Certificate",
      "Runner-up: ₹2,000 + Certificate"
    ],
    registrationLink: "https://forms.gle/example3",
    whatsappLink: "https://chat.whatsapp.com/example3"
  },
  {
    title: "Code Warriors",
    description: "Showcase your programming skills in this competitive coding event.",
    image: "/images/coding.jpg",
    date: "April 1, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Computer Lab 1",
    mode: "technical",
    rules: [
      "Solo participation",
      "Duration: 6 hours",
      "Allowed languages: C++, Java, Python",
      "Internet access provided",
      "Top 3 solutions win prizes"
    ],
    prizes: [
      "1st Place: ₹7,000 + Certificate",
      "2nd Place: ₹5,000 + Certificate",
      "3rd Place: ₹3,000 + Certificate"
    ],
    registrationLink: "https://forms.gle/example4",
    whatsappLink: "https://chat.whatsapp.com/example4"
  },
  {
    title: "Tech Talks",
    description: "Share your technical knowledge and insights with fellow students.",
    image: "/images/tech-talks.jpg",
    date: "April 5, 2024",
    time: "11:00 AM - 5:00 PM",
    location: "Seminar Hall",
    mode: "technical",
    rules: [
      "Individual presentations",
      "Duration: 20 minutes per speaker",
      "Topics must be technical",
      "Visual aids encouraged",
      "Q&A session included"
    ],
    prizes: [
      "Best Speaker: ₹4,000 + Certificate",
      "Audience Choice: ₹2,000 + Certificate"
    ],
    registrationLink: "https://forms.gle/example5",
    whatsappLink: "https://chat.whatsapp.com/example5"
  }
];

export default function Events() {
  const [mode, setMode] = useState<'choice' | 'technical' | 'online'>('choice');

  if (mode === 'choice') {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <Image
                src="/Tech.gif"
                alt="Technical Background"
                width={3000} // Adjust width as needed
                height={100} // Adjust height as needed
                className="object-contain"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 mix-blend-overlay" />
            </div>
            <div className="w-1/2 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <Image
                src="/Online.gif"
                alt="Online Background"
                width={3000} // Adjust width as needed
                height={100} // Adjust height as needed
                className="object-contain"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 mix-blend-overlay" />
            </div>
          </div>

          <div className="max-w-4xl w-full mx-auto relative z-20">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center drop-shadow-lg"
            >
              SELECT EVENT TYPE
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                <Button
                  onClick={() => setMode('technical')}
                  className="relative w-full h-40 bg-black/50 hover:bg-black/40 border-2 border-blue-500/50 rounded-xl p-6 text-center flex flex-col items-center justify-center gap-4 transition-all duration-300 backdrop-blur-sm group-hover:border-blue-400"
                >
                  <span className="text-3xl font-bold text-blue-200 group-hover:text-blue-100">Technical</span>
                  <span className="text-sm text-blue-300/90">View technical events and competitions</span>
                </Button>
              </motion.div>

              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                <Button
                  onClick={() => setMode('online')}
                  className="relative w-full h-40 bg-black/50 hover:bg-black/40 border-2 border-purple-500/50 rounded-xl p-6 text-center flex flex-col items-center justify-center gap-4 transition-all duration-300 backdrop-blur-sm group-hover:border-purple-400"
                >
                  <span className="text-3xl font-bold text-purple-200 group-hover:text-purple-100">Online</span>
                  <span className="text-sm text-purple-300/90">View online events and competitions</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative bg-gradient-to-b from-violet-950 via-violet-900 to-violet-800 text-white py-8 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {mode.toUpperCase()} EVENTS
            </h2>
            <Button
              onClick={() => setMode('choice')}
              variant="outline"
              className="text-violet-400 border-violet-500/20 hover:bg-violet-900/50"
            >
              Change Mode
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        className="container mx-auto px-4 py-16 relative z-20 -mt-8"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {mode === 'online' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {events
              .filter(event => ['Stock Market Challenge', 'MystIQ'].includes(event.title))
              .map((event, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="group h-full flex flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-violet-800 dark:text-violet-200 flex items-center justify-between">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
                        <Users className="w-4 h-4" />
                        Coordinators: {event.coordinators}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg opacity-20 blur group-hover:opacity-30 transition-opacity duration-300" />
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02] relative"
                          style={{ aspectRatio: '1/2' }}
                        />
                      </div>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">{event.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap justify-between mt-auto gap-4 pt-6">
                      <div className="flex gap-2">
                        <Link
                          href={event.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button 
                            variant="outline" 
                            className="bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-800/50 transition-all duration-300 flex items-center gap-2"
                          >
                            <FaWhatsapp className="w-4 h-4" />
                            Join Group
                          </Button>
                        </Link>
                        <Link
                          href={event.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button 
                            variant="outline" 
                            className="bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-all duration-300 flex items-center gap-2"
                          >
                            <FaUserPlus className="w-4 h-4" />
                            Register
                          </Button>
                        </Link>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-800/50 transition-all duration-300"
                          >
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
                          <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              type: "spring",
                              duration: 0.5,
                              bounce: 0.3
                            }}
                          >
                            <DialogHeader>
                              <DialogTitle className="text-xl text-violet-800 dark:text-violet-200">
                                {event.title}
                              </DialogTitle>
                              <DialogDescription className="text-gray-600 dark:text-gray-300">
                                {event.details}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <motion.div 
                                className="relative group mb-4"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                              >
                                {event.title === "Stock Market Challenge" ? (
                                  <div className="relative">
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg z-10"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ duration: 0.5 }}
                                    />
                                    <motion.div
                                      className="relative z-20"
                                      initial={{ rotateX: 45, rotateY: 0 }}
                                      animate={{ 
                                        rotateX: [45, 30, 45],
                                        rotateY: [0, 15, 0],
                                        z: [0, 50, 0]
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
                                      <div className="relative">
                                        <Image
                                          src={event.image}
                                          alt={event.title}
                                          layout="responsive"
                                          width={700}
                                          height={300}
                                          className="w-full h-auto object-contain rounded-lg relative"
                                          style={{ aspectRatio: '1/2' }}
                                        />
                                        <motion.div
                                          className="absolute inset-0 flex items-center justify-center"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: [0, 1, 0] }}
                                          transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                          }}
                                        >
                                          <svg
                                            className="w-full h-full text-violet-500/30"
                                            viewBox="0 0 100 50"
                                            preserveAspectRatio="none"
                                          >
                                            <motion.path
                                              d="M0,25 Q25,0 50,25 T100,25"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              initial={{ pathLength: 0 }}
                                              animate={{ pathLength: 1 }}
                                              transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                              }}
                                            />
                                          </svg>
                                        </motion.div>
                                      </div>
                                    </motion.div>
                                  </div>
                                ) : event.title === "MystIQ" ? (
                                  <div className="relative">
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-lg z-10"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ duration: 0.5 }}
                                    />
                                    <motion.div
                                      className="relative z-30"
                                      initial={{ rotateX: 30, rotateY: 0, scale: 1 }}
                                      animate={{ 
                                        rotateX: [30, 20, 30],
                                        rotateY: [0, 10, 0],
                                        scale: [1, 1.05, 1]
                                      }}
                                      transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                      }}
                                      style={{
                                        transformStyle: "preserve-3d",
                                        perspective: "1000px"
                                      }}
                                    >
                                      <div className="relative">
                                        <Image
                                          src={event.image}
                                          alt={event.title}
                                          layout="responsive"
                                          width={700}
                                          height={300}
                                          className="w-full h-auto object-contain rounded-lg relative"
                                          style={{ aspectRatio: '5/3' }}
                                        />
                                        <motion.div
                                          className="absolute inset-0 z-40"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: [0, 0.3, 0] }}
                                          transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                          }}
                                        >
                                          <svg
                                            className="w-full h-full text-amber-500"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                          >
                                            <motion.path
                                              d="M20,50 Q30,20 50,50 T80,50"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeDasharray="4 4"
                                              initial={{ pathLength: 0 }}
                                              animate={{ pathLength: 1 }}
                                              transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "linear"
                                              }}
                                            />
                                            <motion.circle
                                              cx="80"
                                              cy="50"
                                              r="3"
                                              fill="currentColor"
                                              initial={{ scale: 0 }}
                                              animate={{ scale: [0, 1, 0] }}
                                              transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                              }}
                                            />
                                          </svg>
                                        </motion.div>
                                        <motion.div
                                          className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent z-20"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: [0, 0.5, 0] }}
                                          transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                          }}
                                        />
                                      </div>
                                    </motion.div>
                                  </div>
                                ) : (
                                  <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                  >
                                    <Image
                                      src={event.image}
                                      alt={event.title}
                                      layout="responsive"
                                      width={700}
                                      height={300}
                                      className="w-full h-auto object-contain rounded-lg relative"
                                      style={{ aspectRatio: '5/3' }}
                                    />
                                  </motion.div>
                                )}
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                <p className="text-sm text-violet-600 dark:text-violet-400 flex items-center gap-2 mb-4">
                                  <Users className="w-4 h-4" />
                                  Coordinators: {event.coordinators}
                                </p>
                                <motion.div
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  <h3 className="text-lg font-semibold mb-2 text-violet-800 dark:text-violet-200">Rules</h3>
                                  <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
                                    {event.rules.map((rule, i) => (
                                      <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                      >
                                        {rule}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              </motion.div>
                            </div>
                          </motion.div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
        )}
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events
            .filter(event => {
              if (mode === 'technical') {
                return !event.title.includes('Online') && 
                  !['Stock Market Challenge', 'MystIQ'].includes(event.title);
              } else {
                return event.title.includes('Online');
              }
            })
            .map((event, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="group h-full flex flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-violet-800 dark:text-violet-200 flex items-center justify-between">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
                      <Users className="w-4 h-4" />
                      Coordinators: {event.coordinators}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg opacity-20 blur group-hover:opacity-30 transition-opacity duration-300" />
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02] relative"
                        style={{ aspectRatio: '5/3' }}
                      />
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{event.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap justify-between mt-auto gap-4 pt-6">
                    <div className="flex gap-2">
                      <Link
                        href={event.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="outline" 
                          className="bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-800/50 transition-all duration-300 flex items-center gap-2"
                        >
                          <FaWhatsapp className="w-4 h-4" />
                          Join Group
                        </Button>
                      </Link>
                      <Link
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="outline" 
                          className="bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-all duration-300 flex items-center gap-2"
                        >
                          <FaUserPlus className="w-4 h-4" />
                          Register
                        </Button>
                      </Link>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-800/50 transition-all duration-300"
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            type: "spring",
                            duration: 0.5,
                            bounce: 0.3
                          }}
                        >
                          <DialogHeader>
                            <DialogTitle className="text-xl text-violet-800 dark:text-violet-200">
                              {event.title}
                            </DialogTitle>
                            <DialogDescription className="text-gray-600 dark:text-gray-300">
                              {event.details}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <motion.div 
                              className="relative group mb-4"
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Image
                                  src={event.image}
                                  alt={event.title}
                                  layout="responsive"
                                  width={700}
                                  height={300}
                                  className="w-full h-auto object-contain rounded-lg relative"
                                  style={{ aspectRatio: '5/3' }}
                                />
                              </motion.div>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <p className="text-sm text-violet-600 dark:text-violet-400 flex items-center gap-2 mb-4">
                                <Users className="w-4 h-4" />
                                Coordinators: {event.coordinators}
                              </p>
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                              >
                                <h3 className="text-lg font-semibold mb-2 text-violet-800 dark:text-violet-200">Rules</h3>
                                <ul className="list-disc pl-4 text-gray-600 dark:text-gray-300">
                                  {event.rules.map((rule, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.4 + i * 0.1 }}
                                    >
                                      {rule}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
