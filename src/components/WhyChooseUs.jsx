"use client";
import React, { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const expertiseCards = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Advanced Security",
      description: "Enterprise-grade security protocols with 24/7 monitoring, threat detection, and data encryption to protect your digital assets.",
      features: ["SSL Encryption", "DDoS Protection", "Regular Security Audits", "Backup & Recovery"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Performance",
      description: "Optimized infrastructure delivering blazing-fast load times and seamless user experiences across all platforms.",
      features: ["99.9% Uptime", "CDN Integration", "Speed Optimization", "Performance Monitoring"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Expert Team",
      description: "Skilled professionals with decades of combined experience in technology, development, and digital transformation.",
      features: ["Certified Experts", "24/7 Support", "Custom Solutions", "Industry Experience"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Customer-Centric Approach",
      description: "Dedicated to understanding your unique needs and delivering personalized solutions that drive real business results.",
      features: ["Personal Account Manager", "Custom Development", "Flexible Solutions", "Long-term Partnership"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-16 md:py-20 bg-neutral-950 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h3 
            className={`text-base md:text-lg text-blue-600 mb-3 md:mb-4 font-medium transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Why Choose TechWave Care
          </h3>
          <h2 
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Your Success is Our <span className="text-blue-600">Priority</span>
          </h2>
          <p 
            className={`text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            We combine cutting-edge technology with proven expertise to deliver exceptional results that transform your business and exceed expectations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertiseCards.map((card, index) => (
            <div
              key={index}
              className={`group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${600 + index * 200}ms`
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                {card.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300 text-center">
                {card.title}
              </h3>
              
              <p className="text-white text-sm leading-relaxed mb-3 md:mb-4 text-center px-2">
                {card.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {card.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white">
                    <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div 
          className={`text-center mt-8 md:mt-12 transition-all duration-1000 delay-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-white text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us with their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-neutral-950 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-white hover:text-neutral-950 transition-all duration-300 text-sm md:text-base">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;