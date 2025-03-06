"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import DeveloperCard from '@/components/developer-card';
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CalendarDays } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-17T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const getCharacterAnimation = (value: number, label: string) => {
    if (value === 0) {
      return "🕐"; // Clock for zero
    }
    
    switch(label) {
      case "days":
        return value > 30 ? "📅" : value > 7 ? "📆" : "⏰";
      case "hours":
        return value > 12 ? "🌞" : value > 6 ? "🌅" : "🌙";
      case "minutes":
        return value > 30 ? "⚡" : "⏳";
      case "seconds":
        return value % 2 === 0 ? "🔵" : "⭐";
      default:
        return "⏱️";
    }
  };

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 sm:gap-8 p-4 sm:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-violet-500/20"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Object.entries(timeLeft).map(([label, value]) => (
        <motion.div
          key={label}
          className="flex flex-col items-center px-2 sm:px-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              animate={{
                scale: [1, 1.1, 1],
                rotate: value === 0 ? [0, 360] : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: value === 0 ? Infinity : 0,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="inline-block"
              style={{
                textShadow: "0 0 20px rgba(1, 45, 155, 0.95)"
              }}
            >
              {value.toString().padStart(2, '0')}
            </motion.span>
            <motion.span
              className="ml-2 text-2xl sm:text-3xl md:text-4xl"
              animate={{
                scale: [1, 1.1, 1],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              {getCharacterAnimation(value, label)}
            </motion.span>
          </motion.div>
          <motion.span
            className="text-base sm:text-lg md:text-xl text-white/80 font-medium capitalize"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {label}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};

const pageAnimations = {
  container: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  item: {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  },
  fadeInScale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }
};

const AnimatedParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: `${Math.random() * 100 - 50}vw`,
            y: `${Math.random() * 100 - 50}vh`,
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <motion.div 
      className="flex flex-col min-h-screen max-w-[1920px] mx-auto"
      variants={pageAnimations.container}
      initial="initial"
      animate="animate"
    >
      <motion.section
        className="relative bg-gradient-to-b from-violet-950 via-violet-900 to-violet-800 text-white py-12 sm:py-20 px-4 sm:px-8 overflow-hidden"
        variants={pageAnimations.item}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, 25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-8 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [-25, 25, -25],
              y: [0, -25, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>

        <AnimatedParticles />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div className="w-full md:w-1/4 max-w-2xl" variants={fadeInUp}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center md:text-left">
                <span className="text-blue-500">C</span>
                <span className="text-white">i</span>
                <span className="text-blue-500">SB</span>
                <span className="text-white">o</span>
                <span className="text-blue-500">S</span>
                <span className="text-white">ium</span>
                <span className="text-blue-500"> 25</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-violet-200 text-center md:text-left">
                Empowering Innovation and Business Acumen
              </p>
              <div className="flex justify-center md:justify-start">
                <Button asChild className="bg-white hover:bg-violet-100 text-violet-900 font-semibold transition-all duration-300 hover:scale-105">
                  <Link href="/events">Explore Events</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="w-full md:w-1/4 flex justify-center" 
              variants={fadeInUp}
            >
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden bg-transparent"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  rotateX: [0, 0],
                  rotateY: [0, 360]
                }}
                transition={{ 
                  rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
                  rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { type: "spring", stiffness: 300, damping: 200 }
                }}
              >
                <Image
                  src="/mm.png"
                  alt="CSBS Symposium Logo"
                  fill
                  className="object-contain mix-blend-screen"
                  priority
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 flex justify-center" 
              variants={fadeInUp}
            >
              <CountdownTimer />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-8 relative z-20 -mt-8"
        variants={pageAnimations.item}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <Alert className="max-w-3xl mx-auto mt-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
            <CalendarDays className="h-4 w-4 text-violet-700 dark:text-violet-300" />
            <AlertTitle className="text-violet-800 dark:text-violet-200">Registration Deadline</AlertTitle>
            <AlertDescription className="text-gray-600 dark:text-gray-300">
              Online registration closes on March 16, 2025. On-spot registration will be available.
            </AlertDescription>
          </Alert>
        </div>
      </motion.section>

      <motion.section className="w-full py-12 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-violet-800 dark:text-violet-200"
            variants={fadeInUp}
          >
            Event Schedule
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-violet-400 dark:hover:border-violet-600">
                <h3 className="text-xl font-semibold mb-4">Morning Session</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="font-medium text-violet-700 dark:text-violet-300">8:30 AM - 9:00 AM</span>
                    <span>Registration & Kit Distribution</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="font-medium text-violet-700 dark:text-violet-300">9:00 AM - 10:00 AM</span>
                    <span>Inauguration Ceremony</span>
                  </li>

                </ul>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-violet-400 dark:hover:border-violet-600">
                <h3 className="text-xl font-semibold mb-4">Afternoon Session</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="font-medium text-violet-700 dark:text-violet-300">12:00 PM - 12:30 PM</span>
                    <span>Lunch</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="font-medium text-violet-700 dark:text-violet-300">1:30 PM - 2:00 PM</span>
                    <span>Valedictory Ceremony</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section className="w-full py-12 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-violet-800 dark:text-violet-200"
            variants={fadeInUp}
          >
            Exciting Prizes, Rewards & Certificates Await!
          </motion.h2>
          <Card className="text-center p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
            <h3 className="text-xl font-semibold mb-4">Win Big!</h3>
            <p className="text-3xl font-bold text-violet-700 mb-4">Cash Prizes & Prestigious Certificates</p>
            <p className="text-gray-600">Offline & Online Categories</p>
          </Card>
        </div>
      </motion.section>

      <motion.section className="w-full py-12 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-violet-800 dark:text-violet-200"
            variants={fadeInUp}
          >
            Important Guidelines
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
              <h3 className="text-xl font-semibold mb-4">Registration Guidelines</h3>
              <ul className="space-y-3 list-disc pl-4">
                <li>Registration fee: free</li>
                <li>Team size depends on events but each person should register individually </li>
                <li>Bring college ID cards which is mandatory</li>
                <li>On-spot registration is available</li>
              </ul>
            </Card>
            <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
              <h3 className="text-xl font-semibold mb-4">General Rules</h3>
              <ul className="space-y-3 list-disc pl-4 text-gray-600 dark:text-gray-300">
                <li>Participants must report 30 minutes before event</li>
                <li>Decision of judges will be final</li>
                <li>Certificates will be provided to all participants</li>
                <li>Lunch and refreshments will be provided</li>
              </ul>
            </Card>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 sm:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-violet-800 dark:text-violet-200">Organized by</h2>
            <p className="text-xl sm:text-2xl font-semibold text-violet-600 dark:text-violet-300">Department of Computer Science and Business Systems</p>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-12 sm:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-violet-800 dark:text-violet-200">
            Venue Location
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col justify-center">
                <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-violet-100 dark:border-violet-900">
                <h3 className="text-xl font-semibold mb-4">RMK Engineering College</h3>
                <p className="text-gray-600 mb-6">
                  206, Taluk, Gummidipoondi, Kavaraipettai,<br />
                  Tamil Nadu 601206
                </p>
                <div className="flex gap-4">
                  <Button asChild className="bg-violet-700 hover:bg-violet-800">
                    <Link 
                      href="https://www.google.com/maps/dir/13.0678784,80.1964032/rmk+engineering+college+location/@13.2126142,80.0151986,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a4d807de229f987:0x11cc13e2927bfabc!2m2!1d80.1413034!2d13.3566859?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link 
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
            <div className="h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.874561175642!2d80.13912407464066!3d13.356685986555505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sRMK%20Engineering%20College!5e0!3m2!1sen!2sin!4v1704718427387!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="RMK Engineering College Location"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="w-full py-12 sm:py-20"
        variants={pageAnimations.item}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <style jsx global>{`
            .animate-card {
              transition: all 0.3s ease;
            }
            .animate-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            }
          `}</style>
          
          <DeveloperCard />
        </div>
      </motion.section>
    </motion.div>
  )
}