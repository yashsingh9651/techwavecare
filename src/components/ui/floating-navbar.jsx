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
          "flex w-full fixed top-0 left-0 right-0 bg-blue-600 backdrop-blur-md px-6 border-b border-blue-500 shadow-lg z-[5000] py-4 items-center justify-between",
          className
        )}>
        {/* Brand Name - Left */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-white font-poppins hover:text-blue-200 transition-colors">
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
                "relative text-white items-center flex space-x-1 hover:text-blue-200 transition-colors font-inter group"
              )}>
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
              <span className="absolute inset-x-0 w-0 group-hover:w-full mx-auto -bottom-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent h-px transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Contact Button - Right */}
        <div className="flex items-center">
          <button className="bg-white text-blue-600 text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg font-inter">
            <span>Contact</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
