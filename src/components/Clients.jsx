"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Clients() {
  return (
    <div
      className="rounded-md antialiased relative overflow-hidden">
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
