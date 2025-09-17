"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser, IconBriefcase, IconMail, IconShield, IconPhone } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <IconBriefcase className="h-4 w-4 text-white" />,
    },
    {
      name: "Security",
      link: "/security",
      icon: <IconShield className="h-4 w-4 text-white" />,
    },
    {
      name: "Support",
      link: "/support",
      icon: <IconPhone className="h-4 w-4 text-white" />,
    },
  ];
  
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} brandName="TechWaveCare" />
    </div>
  );
}
