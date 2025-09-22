"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

const servicesList = [
  { id: 1, name: "Wi-Fi Connectivity Issues", href: "/services/wifi-connectivity" },
  { id: 2, name: "Weak Signal Coverage", href: "/services/signal-coverage" },
  { id: 3, name: "Printer Problems", href: "/services/printer-problems" },
  { id: 4, name: "Smart TV Setup & Streaming", href: "/services/smart-tv-setup" },
  { id: 5, name: "Cable TV Box Errors", href: "/services/cable-tv-errors" },
  { id: 6, name: "Laptop/PC Running Slow", href: "/services/pc-performance" },
  { id: 7, name: "Mobile Phone Setup", href: "/services/mobile-setup" },
  { id: 8, name: "Password Recovery", href: "/services/password-recovery" },
  { id: 9, name: "Device Compatibility", href: "/services/device-compatibility" },
  { id: 10, name: "Smart Home Devices", href: "/services/smart-home" },
  { id: 11, name: "Video Call Issues", href: "/services/video-calls" },
  { id: 12, name: "Email Sync Problems", href: "/services/email-sync" },
  { id: 13, name: "Cloud Storage Access", href: "/services/cloud-storage" },
  { id: 14, name: "Software Installation", href: "/services/software-installation" },
  { id: 15, name: "Office Printer Issues", href: "/services/office-printers" },
  { id: 16, name: "VPN Connection Drops", href: "/services/vpn-issues" },
  { id: 17, name: "Internet Outages", href: "/services/internet-outages" },
  { id: 18, name: "Electronics Surge Damage", href: "/services/surge-damage" },
  { id: 19, name: "Security System Issues", href: "/services/security-systems" },
  { id: 20, name: "Smart Appliance Malfunctions", href: "/services/smart-appliances" }
];

export const FloatingNav = ({
  navItems,
  brandName,
  className
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          "flex w-full fixed top-0 left-0 right-0 bg-blue-600 px-4 md:px-6 border-b border-neutral-950 shadow-lg z-[5000] py-3 md:py-4 items-center justify-between",
          className
        )}>
        {/* Brand Name - Left */}
        <div className="flex items-center">
          <a href="/" className="text-lg md:text-xl font-bold text-white font-poppins hover:text-neutral-950 transition-colors">
            {brandName}
          </a>
        </div>

        {/* Navigation Items - Center */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((navItem, idx) => (
            <div key={`nav-${idx}`} className="relative">
              {navItem.name === "Services" ? (
                <div 
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a
                    href={navItem.link}
                    className={cn(
                      "relative text-white items-center flex space-x-1 hover:text-neutral-950 transition-colors font-inter group cursor-pointer"
                    )}>
                    <span className="text-sm font-medium">{navItem.name}</span>
                    <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute inset-x-0 w-0 group-hover:w-full mx-auto -bottom-1 bg-neutral-950 h-px transition-all duration-300" />
                  </a>
                  
                  {/* Services Dropdown */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-blue-600 backdrop-blur-md border border-blue-500 rounded-2xl shadow-2xl z-50 max-h-96 overflow-y-auto"
                      >
                        <div className="p-4">
                          <h3 className="text-white font-semibold text-sm mb-3 px-2">Our Services</h3>
                          <div className="space-y-1">
                            {servicesList.map((service) => (
                              <a
                                key={service.id}
                                href={service.href}
                                className="block px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white rounded-lg transition-colors duration-200"
                              >
                                {service.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  href={navItem.link}
                  className={cn(
                    "relative text-white items-center flex space-x-1 hover:text-neutral-950 transition-colors font-inter group"
                  )}>
                  <span className="text-sm font-medium">{navItem.name}</span>
                  <span className="absolute inset-x-0 w-0 group-hover:w-full mx-auto -bottom-1 bg-neutral-950 h-px transition-all duration-300" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation Icons - Center (Mobile Only) */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-neutral-950 transition-colors p-2"
            title="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-blue-600 border-t border-blue-500 md:hidden z-50"
            >
              <div className="p-4">
                {navItems.map((navItem, idx) => (
                  <div key={`mobile-nav-${idx}`} className="mb-2">
                    {navItem.name === "Services" ? (
                      <div>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full text-left text-white px-3 py-2 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-between"
                        >
                          <span>{navItem.name}</span>
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isServicesOpen && (
                          <div className="ml-4 mt-2 space-y-1">
                            {servicesList.slice(0, 10).map((service) => (
                              <a
                                key={service.id}
                                href={service.href}
                                className="block px-3 py-2 text-sm text-blue-200 hover:bg-blue-500 hover:text-white rounded-lg transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {service.name}
                              </a>
                            ))}
                            <a
                              href="/services"
                              className="block px-3 py-2 text-sm text-blue-300 hover:bg-blue-500 hover:text-white rounded-lg transition-colors duration-200 font-semibold"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              View All Services →
                            </a>
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={navItem.link}
                        className="block text-white px-3 py-2 rounded-lg hover:bg-blue-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {navItem.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Button - Right */}
        <div className="flex items-center">
          <button className="bg-white text-blue-600 text-xs md:text-sm font-medium px-3 md:px-6 py-2 rounded-full hover:bg-neutral-950 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg font-inter">
            <span>Contact</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
