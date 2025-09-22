"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Technician = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const technicianRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (technicianRef.current) {
      observer.observe(technicianRef.current);
    }

    return () => {
      if (technicianRef.current) {
        observer.unobserve(technicianRef.current);
      }
    };
  }, []);

  const technicians = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Senior Network Engineer",
      expertise: "Network Security & Infrastructure",
      experience: "8+ Years",
      image: "/technicians/alex.jpg",
      skills: [
        "Cisco Certified",
        "Azure Expert",
        "Network Security",
        "Cloud Infrastructure",
      ],
      certifications: ["CCNP", "Azure Solutions Architect", "CISSP"],
      description:
        "Specializes in enterprise network architecture and cloud security implementations.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Cybersecurity Specialist",
      expertise: "Threat Detection & Prevention",
      experience: "6+ Years",
      image: "/technicians/sarah.jpg",
      skills: [
        "Ethical Hacking",
        "SOC Operations",
        "Incident Response",
        "Vulnerability Assessment",
      ],
      certifications: ["CEH", "CISSP", "GCIH"],
      description:
        "Expert in cybersecurity frameworks and advanced threat protection strategies.",
    },
    {
      id: 3,
      name: "Michael Thompson",
      role: "Cloud Solutions Architect",
      expertise: "AWS & Azure Cloud Services",
      experience: "10+ Years",
      image: "/technicians/michael.jpg",
      skills: ["AWS Solutions", "DevOps", "Kubernetes", "Microservices"],
      certifications: ["AWS Certified", "Azure Expert", "Kubernetes Admin"],
      description:
        "Designs scalable cloud infrastructures and leads digital transformation projects.",
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "IT Support Manager",
      expertise: "Help Desk & User Support",
      experience: "7+ Years",
      image: "/technicians/emily.jpg",
      skills: [
        "Service Management",
        "ITIL Framework",
        "User Training",
        "System Administration",
      ],
      certifications: ["ITIL Expert", "CompTIA A+", "Microsoft 365"],
      description:
        "Ensures seamless IT operations and exceptional user support experiences.",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Database Administrator",
      expertise: "Database Design & Optimization",
      experience: "9+ Years",
      image: "/technicians/david.jpg",
      skills: ["SQL Server", "Oracle", "MySQL", "Database Security"],
      certifications: ["Oracle DBA", "SQL Server Expert", "MongoDB"],
      description:
        "Optimizes database performance and ensures data integrity across all platforms.",
    },
    {
      id: 6,
      name: "Lisa Martinez",
      role: "Systems Integration Engineer",
      expertise: "Enterprise System Integration",
      experience: "5+ Years",
      image: "/technicians/lisa.jpg",
      skills: ["API Integration", "Middleware", "ERP Systems", "Automation"],
      certifications: ["Salesforce Admin", "SAP Certified", "MuleSoft"],
      description:
        "Streamlines business processes through seamless system integrations.",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(technicians.length / 4)
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [technicians.length]);

  // Get visible technicians (4 at a time)
  const getVisibleTechnicians = () => {
    const start = currentIndex * 4;
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const techIndex = (start + i) % technicians.length;
      visible.push(technicians[techIndex]);
    }
    return visible;
  };

  const visibleTechnicians = getVisibleTechnicians();

  return (
    <section
      ref={technicianRef}
      className="relative w-full py-12 md:py-16 bg-blue-600 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-10">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8">
          <h3
            className={`text-sm md:text-lg text-white mb-3 md:mb-4 font-medium transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Meet Our Expert Team
          </h3>
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 transition-all duration-1000 delay-200 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Certified <span className="text-white">IT Professionals</span>
          </h2>
          <p
            className={`text-sm md:text-lg text-white max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Our team of certified technicians brings decades of combined
            experience to solve your most complex IT challenges.
          </p>
        </div>

        {/* Technician Cards Container */}
        <div
          className={`relative transition-all duration-1000 delay-600 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 transition-all duration-1000 ease-in-out">
            {visibleTechnicians.map((tech, index) => (
              <div
                key={`${tech.id}-${currentIndex}`}
                className="w-full"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 h-full hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 group">
                  {/* Profile Image */}
                  <div className="relative mb-3">
                    <div className="w-12 h-12 mx-auto bg-neutral-950 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {tech.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>

                  {/* Technician Info */}
                  <div className="text-center mb-3">
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-neutral-950 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-white font-medium mb-1 text-xs">
                      {tech.role}
                    </p>
                    <div className="inline-flex items-center bg-blue-500/20 px-2 py-1 rounded-full">
                      <svg
                        className="w-3 h-3 text-blue-400 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-blue-300 text-xs font-medium">
                        {tech.experience}
                      </span>
                    </div>
                  </div>

                  {/* Skills (Top 2 only) */}
                  <div className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {tech.skills.slice(0, 2).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-white/10 px-2 py-1 rounded-full text-xs text-gray-300 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div
          className={`flex justify-center mt-6 md:mt-8 space-x-2 transition-all duration-1000 delay-800 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {Array.from({ length: Math.ceil(technicians.length / 4) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-400 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-8 md:mt-12 transition-all duration-1000 delay-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Need Expert IT Support?
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
              Our certified technicians are ready to help you solve complex IT
              challenges and optimize your technology infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base">
                Schedule Consultation
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 text-sm md:text-base">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technician;
