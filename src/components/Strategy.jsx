import { HoverEffect } from "./ui/card-hover-effect";

export function Strategy() {
  return (
    <div className="container bg-neutral-950 mx-auto px-4 py-10 md:px-10 md:py-20">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Strategy",
    description:
      "Strategic technology advice to help plan your future growth.",
  },
  {
    title: "Planning",
    description:
      "Strategic roadmap for seamless IT growth and efficiency.",
  },
  {
    title: "Security",
    description:
      "Robust Security solutions for managed IT protection.",
  },
  {
    title: "Support",
    description:
      "Reliable IT Support For Seamless business operations 24/7.",
  },
  {
    title: "Cloud Solutions",
    description:
        "Scalable cloud infrastructure for modern business needs."
    },
    {
    title: "Digital Transformation",
    description:
        "End-to-end digital solutions to modernize your business processes."
  }
];
