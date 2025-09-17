"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  brandName,
  className
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-[calc(100%-32px)] mx-auto fixed top-4 bg-white/5 backdrop-blur-md left-0 right-0 px-6 border border-white/10 rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-3 items-center justify-between",
          className
        )}>
        {/* Brand Name - Left */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-white font-poppins hover:text-blue-400 transition-colors">
            {brandName}
          </a>
        </div>

        {/* Navigation Items - Center */}
        <div className="flex items-center space-x-8">
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-white items-center flex space-x-1 hover:text-blue-400 transition-colors font-inter group"
              )}>
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
              <span className="absolute inset-x-0 w-0 group-hover:w-full mx-auto -bottom-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent h-px transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Contact Button - Right */}
        <div className="flex items-center">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg font-inter">
            <span>Contact</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
