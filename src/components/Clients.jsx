"use client";

import React, { useState, useEffect, useRef } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const clientsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (clientsRef.current) {
      observer.observe(clientsRef.current);
    }

    return () => {
      if (clientsRef.current) {
        observer.unobserve(clientsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={clientsRef}
      className={`rounded-md antialiased relative overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
      <InfiniteMovingCards items={images} direction="right" speed="slow" />
    </div>
  );
}

const images = [
  {
    src: "/clients/cieh.png",
    alt: "CIEH Logo",
  },
  {
    src: "/clients/cisco.png",
    alt: "Cisco Logo",
  },
  {
    src:"/clients/dell.png",
    alt: "Dell Logo",
  },
  {
    src:"/clients/dell.jpeg",
    alt: "Dell Logo",
  },
  {
    src:"/clients/fortinet.png",
    alt: "Fortinet Logo",
  },{
    src:"/clients/hewlett.png",
    alt: "Hewlett Logo",
  },{
    src:"/clients/hp.jpeg",
    alt: "HP Logo",
  },{
    src:"/clients/microsoft.png",
    alt: "Microsoft Logo",
  },{
    src:"/clients/iro.png",
    alt: "IRO Logo",
  },
  {
    src:"/clients/sophos.webp",
    alt: "Sophos Logo",
  },
  {
    src:"/clients/vmware.png",
    alt: "VMware Logo",
  },
  {
    src:"/clients/ubiquiti.png",
    alt: "Ubiquiti Logo",
  }
];
