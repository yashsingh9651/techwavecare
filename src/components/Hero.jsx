"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div
      className="h-[40rem] w-full bg-neutral-950 antialiased">
      <div className="flex px-4 h-full md:px-10 items-center container mx-auto justify-center relative">
        <div className="w-2/3 space-y-6">
            <TypewriterEffect
              words={["IT Services", "Provider"]}
              className="bg-clip-text font-jetbrains text-transparent text-6xl font-black bg-gradient-to-r from-white via-blue-200 to-white"
              typeSpeed={100}
              deleteSpeed={50}
              pauseTime={3000}
            />
            <p className="text-2xl mt-4 leading-relaxed">
              Strategic technology advice to help plan your future growth.
            </p>
            <div className="space-y-4 mt-6">
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
            <div className="flex relative z-50 gap-4 mt-8">
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
          <Image
            width={500}
            height={500}
            src="/person.png"
            alt="Description of image"
            className="w-1/3 object-contain relative z-50 h-4/5 self-baseline-last"
          />
      </div>
      <BackgroundBeams />
    </div>
  );
}
