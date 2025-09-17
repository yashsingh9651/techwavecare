import { Clients } from "@/components/Clients";
import { Hero } from "@/components/Hero";
import Services from "@/components/Services";
import Technician from "@/components/Technician";
import WhyChooseUs from "@/components/WhyChooseUs";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Achievements />
      <WhyChooseUs />
      <Technician />
      <Experience/>
    </>
  );
}
