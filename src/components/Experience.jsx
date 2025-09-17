"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react'

const Experience = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "Since outsourcing our IT support to TechWaveCare, we have seen a significant improvement in our overall efficiency. Their proactive monitoring and quick response times have minimized disruptions, allowing us to focus on serving our customers.",
      name: "Ethan Marshall",
      role: "Financial Advisor",
      initials: "EM"
    },
    {
      id: 2,
      quote: "TechWaveCare's 24/7 support has been a game-changer for our business. Their team is incredibly responsive and knowledgeable. We've experienced zero downtime since partnering with them.",
      name: "Sarah Johnson",
      role: "Operations Manager",
      initials: "SJ"
    },
    {
      id: 3,
      quote: "The cybersecurity solutions provided by TechWaveCare have given us peace of mind. Their comprehensive approach to security has protected our sensitive data and client information effectively.",
      name: "Michael Chen",
      role: "CEO, FinTech Solutions",
      initials: "MC"
    },
    {
      id: 4,
      quote: "Working with TechWaveCare has streamlined our entire IT infrastructure. Their cloud migration services were seamless, and the ongoing support has been exceptional.",
      name: "Emily Rodriguez",
      role: "CTO, Healthcare Plus",
      initials: "ER"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <section ref={experienceRef} className="relative w-full overflow-hidden bg-neutral-950">
      <div className="relative z-20 text-white">
        <div className="container mx-auto px-4 md:px-10 py-10 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Hero Text and Image */}
          <div className={`space-y-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h3 className="text-lg text-blue-400 mb-2 font-medium">Our Experience</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                For over <span className="text-blue-400">15 Years</span>, We've provided vital IT Support For Clients
              </h2>
            </div>
            
            <p className={`text-lg text-gray-300 leading-relaxed transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              At TechWaveCare, we are committed to delivering top-tier IT
              services tailored to your business needs. Our expertise spans IT
              management, infrastructure, optimization, and security, ensuring
              seamless operations and robust digital protection.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-600 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <Link href="/contact" >
                <button className="px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                  Contact Us
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 cursor-pointer py-3 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`relative transition-all duration-1000 delay-800 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <Image src="/testimonial.jpg" className='object-cover w-full h-full rounded-lg' alt="Team Image" width={500} height={500} />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Testimonial Block */}
        <div className="container mx-auto px-4 md:px-10 py-10 md:py-20">
          <div className={`text-center mb-12 transition-all duration-1000 delay-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-lg text-blue-400 mb-2 font-medium">What Our Clients Say</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Client Testimonials</h2>
          </div>
          
          <div className={`grid md:grid-cols-5 gap-8 items-center transition-all duration-1000 delay-1200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Main Testimonial */}
            <div className="md:col-span-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 min-h-[280px] relative overflow-hidden">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.612-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content with Animation */}
                <div className="relative">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        index === currentTestimonial 
                          ? 'opacity-100 translate-x-0' 
                          : index < currentTestimonial 
                            ? 'opacity-0 -translate-x-full' 
                            : 'opacity-0 translate-x-full'
                      }`}
                    >
                      <blockquote className="text-xl text-gray-200 font-medium mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="absolute backdrop-blur-md rounded-full p-2 cursor-pointer left-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="absolute backdrop-blur-md rounded-full p-2 cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Review Cards */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">Google</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.612-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white font-bold text-lg">4.8/5</p>
                  <p className="text-xs text-gray-400">254 Google reviews</p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">Trustpilot</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.612-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white font-bold text-lg">Excellent</p>
                  <p className="text-xs text-gray-400">Based on 189 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;