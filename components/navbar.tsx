"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Bus Routes", path: "/bus" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="relative"
              animate={{
                rotateX: [0, 0, 0],
                rotateY: [0, 360, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 rounded-full opacity-30 blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-purple-500/20 rounded-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <Image
                src="/logo.gif"
                alt="CSBS Logo"
                width={40}
                height={40}
                className="rounded-md relative z-10 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/20"
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                className="text-lg font-bold text-foreground hidden sm:inline relative"
                style={{
                  textShadow: "0 0 10px rgba(139, 92, 246, 0.3)",
                  transformStyle: "preserve-3d",
                  perspective: "700px",
                }}
              >
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-purple-500/20 blur-sm rounded-lg"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.span className="relative inline-block">
                  {"RMKEC".split("").map((letter, index) => (
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
                          "0 0 8px rgba(139, 92, 246, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.span>
              <motion.span className="text-lg sm:hidden relative">
                {"RMKEC".split("").map((letter, index) => (
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
                        "0 0 8px rgba(139, 92, 246, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-1 items-center justify-end space-x-4">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  pathname === item.path
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent hover:shadow-md hover:shadow-accent/20"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[300px] bg-background/95 backdrop-blur-lg"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 mt-4"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                        pathname === item.path
                          ? "bg-primary text-primary-foreground shadow-lg scale-105"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent hover:scale-105"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
