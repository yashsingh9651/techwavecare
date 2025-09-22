"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const Achievements = () => {
  const [servicesCount, setServicesCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  const targetValues = {
    services: 850,
    clients: 300,
    projects: 150,
    years: 15
  };

  // Intersection Observer to trigger animation when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, [isVisible]);

  // Animation functions for each counter
  useEffect(() => {
    if (!isVisible) return;

    const animateCounter = (setCount, target, duration = 2000) => {
      const step = target / (duration / 16); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return timer;
    };

    const servicesTimer = animateCounter(setServicesCount, targetValues.services, 2000);
    const clientsTimer = animateCounter(setClientsCount, targetValues.clients, 2200);
    const projectsTimer = animateCounter(setProjectsCount, targetValues.projects, 1800);
    const yearsTimer = animateCounter(setYearsCount, targetValues.years, 1500);

    return () => {
      clearInterval(servicesTimer);
      clearInterval(clientsTimer);
      clearInterval(projectsTimer);
      clearInterval(yearsTimer);
    };
  }, [isVisible]);

  const stats = [
    {
      count: servicesCount,
      label: "Services Completed",
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      count: clientsCount,
      label: "Happy Clients",
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      count: projectsCount,
      label: "Projects Delivered",
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      count: yearsCount,
      label: "Years of Experience",
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={bannerRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-12 md:py-16 lg:py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-sm md:text-lg text-blue-300 mb-2 font-medium">Our Achievements</h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Trusted by Businesses <span className="text-blue-300">Worldwide</span>
          </h2>
          <p className="text-blue-100 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Numbers that reflect our commitment to excellence and customer satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8">
                  {React.cloneElement(stat.icon, { 
                    className: stat.icon.props.className.replace('w-8 h-8', 'w-6 h-6 md:w-8 md:h-8')
                  })}
                </div>
              </div>
              
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.count.toLocaleString()}{stat.suffix}
              </div>
              
              <div className="text-blue-200 text-xs md:text-sm font-medium">
                {stat.label}
              </div>

              {/* Animated progress bar */}
              <div className="mt-3 md:mt-4 bg-white/20 rounded-full h-1 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full transition-all duration-2000 ease-out"
                  style={{ 
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-blue-100 mb-4 md:mb-6 text-sm md:text-base">
            Ready to join our growing family of satisfied clients?
          </p>
          <Link href="/contact" className="bg-white text-blue-900 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base">
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-300 rounded-full opacity-15 animate-pulse delay-500" />
    </section>
  );
};

export default Achievements;