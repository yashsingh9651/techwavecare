"use client";
import React, { useState, useEffect, useRef } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={heroRef}
      className="h-[40rem] w-full bg-neutral-950 antialiased">
      <div className="flex px-4 h-full md:px-10 items-center container mx-auto justify-center relative">
        <div className={`w-2/3 space-y-6 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
            <div className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <TypewriterEffect
                words={["IT Services", "Provider"]}
                className="bg-clip-text font-jetbrains text-transparent text-6xl font-black bg-gradient-to-r from-white via-blue-200 to-white"
                typeSpeed={100}
                deleteSpeed={50}
                pauseTime={3000}
              />
            </div>
            <p className={`text-2xl mt-4 leading-relaxed transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Strategic technology advice to help plan your future growth.
            </p>
            <div className={`space-y-4 mt-6 transition-all duration-1000 delay-600 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">
                    24/7 Technical Support
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">
                    Enterprise Security
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Cloud Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Data Analytics</span>
                </div>
              </div>
            </div>
            <div className={`flex relative z-50 gap-4 mt-8 transition-all duration-1000 delay-800 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className={`w-1/3 h-4/5 transition-all duration-1000 delay-1000 self-baseline-last transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <Image
              width={500}
              height={500}
              src="/person.png"
              alt="Description of image"
              className="w-full object-contain relative z-50 h-full"
            />
          </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
