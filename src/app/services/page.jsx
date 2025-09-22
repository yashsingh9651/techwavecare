import Services from "@/components/Services";
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "IT Services - TechWaveCare | Professional Technical Support",
  description: "Professional IT services for common technical problems. Wi-Fi issues, printer problems, smart home setup, and more. Expert technicians available 24/7.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-neutral-950 min-h-screen pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="text-blue-500">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert solutions for all your technology challenges. From simple setup issues to complex network problems, we've got you covered.
            </p>
          </div>
        </div>
        <Services />
      </div>
    </>
  );
}