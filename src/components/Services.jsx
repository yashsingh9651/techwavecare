"use client";
import React, { useState, useEffect, useRef } from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);
  return (
    <div ref={servicesRef} className="relative w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 w-full h-full bg-neutral-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="container text-white mx-auto h-full w-full px-4 md:px-10 py-10 md:py-20">
        <h1 className={`text-lg relative z-20 max-w-fit transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>Our Services</h1>
        <h1
          className={cn(
            `md:text-5xl my-6 font-semibold text-xl max-w-fit text-blue-500 relative z-20 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`
          )}
        >
          Find out more about <br /> our IT support
        </h1>
        <p className={`text-lg max-w-7xl relative z-20 transition-all duration-1000 delay-400 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          TechWaveCare is your trusted partner in IT management, infrastructure,
          optimization, and security. We provide innovative, scalable, and
          secure IT solutions to help businesses thrive in the digital
          landscape.
        </p>

        <div className={`flex flex-col gap-6 mt-8 transition-all duration-1000 delay-500 relative z-40 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Service Card 1 */}
          <Link
            href="/services/managed-it"
            className="group block hover:-translate-y-2 duration-500 w-full"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    01.
                  </div>

                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-100 transition-colors">
                    IT Hardware Services
                  </h3>
                </div>
                <div className="opacity-0 group-hover:opacity-100 bg-blue-500 p-2 rounded-full text-white transition-opacity duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Service Card 2 */}
          <Link
            href="/services/cybersecurity"
            className="group block hover:-translate-y-2 duration-500 w-full"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    02.
                  </div>

                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-100 transition-colors">
                    IT HelpDesk Support
                  </h3>
                </div>

                <div className="opacity-0 group-hover:opacity-100 bg-blue-500 p-2 rounded-full text-white transition-opacity duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Service Card 3 */}
          <Link
            href="/services/cloud-solutions"
            className="group block hover:-translate-y-2 duration-500 w-full"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    03.
                  </div>

                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-100 transition-colors">
                    Cloud Solutions
                  </h3>
                </div>
                <div className="opacity-0 group-hover:opacity-100 bg-blue-500 p-2 rounded-full text-white transition-opacity duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Service Card 4 */}
          <Link
            href="/services/data-analytics"
            className="group block hover:-translate-y-2 duration-500 w-full"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    04.
                  </div>

                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-100 transition-colors">
                    Data Analytics & Business Intelligence
                  </h3>
                </div>
                <div className="opacity-0 group-hover:opacity-100 bg-blue-500 p-2 rounded-full text-white transition-opacity duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Service Card 5 */}
          <Link
            href="/services/digital-transformation"
            className="group block hover:-translate-y-2 duration-500 w-full"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    05.
                  </div>

                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-100 transition-colors">
                    Digital Transformation
                  </h3>
                </div>
                <div className="opacity-0 group-hover:opacity-100 bg-blue-500 p-2 rounded-full text-white transition-opacity duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
