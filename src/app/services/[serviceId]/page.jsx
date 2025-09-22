import { notFound } from "next/navigation";

const serviceDetails = {
  "wifi-connectivity": {
    title: "Wi-Fi Connectivity Issues",
    description: "Expert solutions for slow internet, dropped connections, and router problems",
    fullDescription: "Is your Wi-Fi acting up? We understand how frustrating slow internet speeds, dropped connections, and non-responsive routers can be. Our certified technicians specialize in diagnosing and fixing all types of Wi-Fi connectivity issues.",
    solutions: [
      "Router configuration and optimization",
      "Network speed testing and troubleshooting", 
      "Wi-Fi range extension solutions",
      "Security configuration and updates",
      "ISP communication and resolution"
    ],
    commonCauses: [
      "Outdated router firmware",
      "Network congestion",
      "Poor router placement",
      "ISP service issues",
      "Device compatibility problems"
    ],
    pricing: "Starting from $89",
    callToAction: "Get your internet working perfectly again"
  },
  "signal-coverage": {
    title: "Weak Signal Coverage Solutions", 
    description: "Wi-Fi extenders, mesh systems, and signal optimization for your entire home",
    fullDescription: "Dead zones in your home or office? We provide comprehensive solutions to ensure strong Wi-Fi coverage throughout your space, including professional installation of extenders and mesh systems.",
    solutions: [
      "Wi-Fi coverage assessment",
      "Mesh network system installation",
      "Wi-Fi extender setup and configuration",
      "Optimal access point placement",
      "Signal strength optimization"
    ],
    commonCauses: [
      "Large home or office space",
      "Thick walls and floors",
      "Single router limitations",
      "Poor router placement",
      "Interference from other devices"
    ],
    pricing: "Starting from $149",
    callToAction: "Eliminate dead zones today"
  },
  "printer-problems": {
    title: "Printer Problem Resolution",
    description: "Fix paper jams, cartridge issues, and wireless printing problems",
    fullDescription: "Printer giving you trouble? From paper jams to cartridge recognition issues and wireless connectivity problems, our technicians can get your printer working smoothly again.",
    solutions: [
      "Hardware troubleshooting and repair",
      "Driver installation and updates", 
      "Wireless printer setup",
      "Cartridge and toner issues",
      "Print queue management"
    ],
    commonCauses: [
      "Outdated or corrupted drivers",
      "Network connectivity issues",
      "Hardware malfunctions",
      "Incorrect cartridge installation",
      "Print spooler problems"
    ],
    pricing: "Starting from $69",
    callToAction: "Get printing again"
  },
  "smart-tv-setup": {
    title: "Smart TV Setup & Streaming Support",
    description: "App installation, streaming optimization, and connectivity solutions",
    fullDescription: "Having trouble with your Smart TV apps or streaming services? We'll help you set up and optimize your entertainment system for the best viewing experience.",
    solutions: [
      "Smart TV initial setup and configuration",
      "Streaming app installation and setup",
      "Network connectivity optimization",
      "Account linking and management",
      "Performance troubleshooting"
    ],
    commonCauses: [
      "Poor internet connection",
      "Outdated TV software",
      "Account configuration issues",
      "Network bandwidth limitations",
      "App compatibility problems"
    ],
    pricing: "Starting from $79",
    callToAction: "Optimize your streaming experience"
  },
  "cable-tv-errors": {
    title: "Cable TV Box Error Resolution",
    description: "Fix signal loss, frozen channels, and cable box malfunctions",
    fullDescription: "Cable TV acting up with frozen channels or signal loss? Our technicians can diagnose and resolve cable box issues to restore your viewing experience.",
    solutions: [
      "Cable box diagnostics and reset",
      "Signal strength testing",
      "Cable connection inspection",
      "Channel lineup configuration",
      "Provider communication"
    ],
    commonCauses: [
      "Loose cable connections",
      "Signal interference",
      "Outdated cable box firmware",
      "Provider service issues",
      "Weather-related disruptions"
    ],
    pricing: "Starting from $59",
    callToAction: "Restore your TV service"
  },
  "pc-performance": {
    title: "Computer Performance Optimization",
    description: "Speed up slow laptops and PCs with professional maintenance",
    fullDescription: "Is your computer running slower than usual? We provide comprehensive performance optimization including storage cleanup, malware removal, and software updates.",
    solutions: [
      "System cleanup and optimization",
      "Malware detection and removal",
      "Software updates and patches",
      "Storage space management",
      "Startup program optimization"
    ],
    commonCauses: [
      "Insufficient storage space",
      "Malware infections",
      "Outdated software",
      "Too many startup programs",
      "Hardware aging"
    ],
    pricing: "Starting from $99",
    callToAction: "Speed up your computer"
  }
  // Add more service details as needed...
};

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((serviceId) => ({
    serviceId: serviceId,
  }));
}

export async function generateMetadata({ params }) {
  const service = serviceDetails[params.serviceId];
  
  if (!service) {
    return {
      title: "Service Not Found - TechWaveCare",
    };
  }

  return {
    title: `${service.title} - TechWaveCare Professional IT Services`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      type: "website",
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = serviceDetails[params.serviceId];

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "TechWaveCare",
      "url": "https://techwavecare.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    },
    "serviceType": "IT Support",
    "offers": {
      "@type": "Offer",
      "description": service.pricing,
      "priceCurrency": "CAD"
    }
  };

  return (
    <div className="bg-neutral-950 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Book Service - {service.pricing}
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
              Call (647) 123-4567
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Problem Description */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {service.fullDescription}
            </p>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Common Causes:</h3>
            <ul className="space-y-2">
              {service.commonCauses.map((cause, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solutions */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Solutions</h2>
            <p className="text-gray-300 mb-6">
              Our certified technicians provide comprehensive solutions to get your technology working perfectly again.
            </p>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">What We Do:</h3>
            <ul className="space-y-3">
              {service.solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {service.callToAction}
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't let technology problems slow you down. Our expert technicians are ready to help you get back on track quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Schedule Service Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Get Free Quote
            </button>
          </div>
        </div>

        {/* Back to Services */}
        <div className="text-center mt-12">
          <a href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to All Services
          </a>
        </div>
      </div>
    </div>
  );
}