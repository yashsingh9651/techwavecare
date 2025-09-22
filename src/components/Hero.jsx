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
      className="min-h-screen md:h-[40rem] w-full bg-neutral-950 antialiased pt-16 md:pt-0">
      <div className="flex flex-col z-50 md:flex-row px-4 h-full md:px-10 items-center container mx-auto justify-center relative py-8 md:py-0">
        <div className={`w-full md:w-2/3 space-y-4 md:space-y-6 text-center md:text-left transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
            <div className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <TypewriterEffect
                words={["IT Services", "Provider"]}
                className="bg-clip-text font-jetbrains text-transparent text-3xl md:text-6xl font-black bg-gradient-to-r from-white via-white to-white"
                typeSpeed={100}
                deleteSpeed={50}
                pauseTime={3000}
              />
            </div>
            <p className={`text-lg md:text-2xl mt-4 leading-relaxed transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Strategic technology advice to help plan your future growth.
            </p>
            <div className={`space-y-4 mt-6 transition-all duration-1000 delay-600 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-white">
                    24/7 Technical Support
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-white">
                    Enterprise Security
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-white">Cloud Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-white">Data Analytics</span>
                </div>
              </div>
            </div>
            <div className={`flex flex-col sm:flex-row relative z-50 gap-4 mt-8 transition-all duration-1000 delay-800 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <Link
                href="/contact"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-neutral-950 transition-all duration-300 shadow-lg transform hover:scale-105 text-center"
              >
                Get Started Today
              </Link>
              <Link
                href="/about"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:text-neutral-950 transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className={`w-full md:w-1/3 h-64 md:h-4/5 mt-8 md:mt-0 transition-all duration-1000 delay-1000 self-baseline-last transform ${
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
