import { notFound } from "next/navigation";

const serviceDetails = {
  "wifi-connectivity": {
    title: "Wi-Fi Connectivity Issues",
    description:
      "Expert solutions for slow internet, dropped connections, and router problems",
    fullDescription:
      "Is your Wi-Fi acting up? We understand how frustrating slow internet speeds, dropped connections, and non-responsive routers can be. Our certified technicians specialize in diagnosing and fixing all types of Wi-Fi connectivity issues.",
    solutions: [
      "Router configuration and optimization",
      "Network speed testing and troubleshooting",
      "Wi-Fi range extension solutions",
      "Security configuration and updates",
      "ISP communication and resolution",
    ],
    commonCauses: [
      "Outdated router firmware",
      "Network congestion",
      "Poor router placement",
      "ISP service issues",
      "Device compatibility problems",
    ],
    pricing: "Starting from $89",
    callToAction: "Get your internet working perfectly again",
  },
  "signal-coverage": {
    title: "Weak Signal Coverage Solutions",
    description:
      "Wi-Fi extenders, mesh systems, and signal optimization for your entire home",
    fullDescription:
      "Dead zones in your home or office? We provide comprehensive solutions to ensure strong Wi-Fi coverage throughout your space, including professional installation of extenders and mesh systems.",
    solutions: [
      "Wi-Fi coverage assessment",
      "Mesh network system installation",
      "Wi-Fi extender setup and configuration",
      "Optimal access point placement",
      "Signal strength optimization",
    ],
    commonCauses: [
      "Large home or office space",
      "Thick walls and floors",
      "Single router limitations",
      "Poor router placement",
      "Interference from other devices",
    ],
    pricing: "Starting from $149",
    callToAction: "Eliminate dead zones today",
  },
  "printer-problems": {
    title: "Printer Problem Resolution",
    description:
      "Fix paper jams, cartridge issues, and wireless printing problems",
    fullDescription:
      "Printer giving you trouble? From paper jams to cartridge recognition issues and wireless connectivity problems, our technicians can get your printer working smoothly again.",
    solutions: [
      "Hardware troubleshooting and repair",
      "Driver installation and updates",
      "Wireless printer setup",
      "Cartridge and toner issues",
      "Print queue management",
    ],
    commonCauses: [
      "Outdated or corrupted drivers",
      "Network connectivity issues",
      "Hardware malfunctions",
      "Incorrect cartridge installation",
      "Print spooler problems",
    ],
    pricing: "Starting from $69",
    callToAction: "Get printing again",
  },
  "smart-tv-setup": {
    title: "Smart TV Setup & Streaming Support",
    description:
      "App installation, streaming optimization, and connectivity solutions",
    fullDescription:
      "Having trouble with your Smart TV apps or streaming services? We'll help you set up and optimize your entertainment system for the best viewing experience.",
    solutions: [
      "Smart TV initial setup and configuration",
      "Streaming app installation and setup",
      "Network connectivity optimization",
      "Account linking and management",
      "Performance troubleshooting",
    ],
    commonCauses: [
      "Poor internet connection",
      "Outdated TV software",
      "Account configuration issues",
      "Network bandwidth limitations",
      "App compatibility problems",
    ],
    pricing: "Starting from $79",
    callToAction: "Optimize your streaming experience",
  },
  "cable-tv-errors": {
    title: "Cable TV Box Error Resolution",
    description: "Fix signal loss, frozen channels, and cable box malfunctions",
    fullDescription:
      "Cable TV acting up with frozen channels or signal loss? Our technicians can diagnose and resolve cable box issues to restore your viewing experience.",
    solutions: [
      "Cable box diagnostics and reset",
      "Signal strength testing",
      "Cable connection inspection",
      "Channel lineup configuration",
      "Provider communication",
    ],
    commonCauses: [
      "Loose cable connections",
      "Signal interference",
      "Outdated cable box firmware",
      "Provider service issues",
      "Weather-related disruptions",
    ],
    pricing: "Starting from $59",
    callToAction: "Restore your TV service",
  },
  "pc-performance": {
    title: "Computer Performance Optimization",
    description: "Speed up slow laptops and PCs with professional maintenance",
    fullDescription:
      "Is your computer running slower than usual? We provide comprehensive performance optimization including storage cleanup, malware removal, and software updates.",
    solutions: [
      "System cleanup and optimization",
      "Malware detection and removal",
      "Software updates and patches",
      "Storage space management",
      "Startup program optimization",
    ],
    commonCauses: [
      "Insufficient storage space",
      "Malware infections",
      "Outdated software",
      "Too many startup programs",
      "Hardware aging",
    ],
    pricing: "Starting from $99",
    callToAction: "Speed up your computer",
  },
  "mobile-phone-setup": {
    title: "Mobile Phone Setup & Troubleshooting",
    description:
      "Expert assistance with email sync, updates, and performance issues",
    fullDescription:
      "Struggling with your smartphone? Our technicians can help with email synchronization problems, software updates that won't install, overheating issues, and more to get your mobile device working perfectly.",
    solutions: [
      "Email account configuration",
      "Software update assistance",
      "Performance optimization",
      "App troubleshooting",
      "Data transfer services",
    ],
    commonCauses: [
      "Software conflicts",
      "Insufficient storage space",
      "Outdated operating system",
      "Account configuration errors",
      "Hardware overheating",
    ],
    pricing: "Starting from $69",
    callToAction: "Make your phone work for you again",
  },
  "password-recovery": {
    title: "Password Recovery & Account Access",
    description: "Regain access to locked accounts and forgotten passwords",
    fullDescription:
      "Locked out of your accounts? We provide professional assistance to help you recover access to your Google, Apple ID, Windows login, and other important accounts safely and securely.",
    solutions: [
      "Account recovery procedures",
      "Password reset assistance",
      "Two-factor authentication setup",
      "Security question recovery",
      "Password management solutions",
    ],
    commonCauses: [
      "Forgotten passwords",
      "Changed phone numbers for verification",
      "Lost recovery emails",
      "System updates requiring re-authentication",
      "Security breaches requiring password changes",
    ],
    pricing: "Starting from $49",
    callToAction: "Regain access to your accounts today",
  },
  "device-compatibility": {
    title: "Device Compatibility Solutions",
    description: "Resolve pairing issues between new and older technology",
    fullDescription:
      "Having trouble getting your new devices to work with older technology? Our experts can help resolve compatibility issues, ensuring all your technology works together seamlessly.",
    solutions: [
      "Cross-device pairing assistance",
      "Software updates for compatibility",
      "Alternative connection methods",
      "Driver updates and installation",
      "Hardware interface solutions",
    ],
    commonCauses: [
      "Outdated software or firmware",
      "Protocol differences between devices",
      "Manufacturer compatibility limitations",
      "Missing drivers or software",
      "Hardware interface differences",
    ],
    pricing: "Starting from $79",
    callToAction: "Get your devices working together",
  },
  "smart-home": {
    title: "Smart Home Device Troubleshooting",
    description:
      "Fix issues with Alexa, Google Nest, and connected thermostats",
    fullDescription:
      "Smart home devices not responding? We specialize in troubleshooting and resolving connectivity issues with Alexa, Google Nest, smart thermostats, and other home automation systems.",
    solutions: [
      "Device setup and configuration",
      "Wi-Fi connectivity troubleshooting",
      "App setup and synchronization",
      "Voice command optimization",
      "Device integration services",
    ],
    commonCauses: [
      "Wi-Fi connectivity problems",
      "Incorrect device setup",
      "App compatibility issues",
      "Firmware bugs requiring updates",
      "Account linking problems",
    ],
    pricing: "Starting from $89",
    callToAction: "Make your smart home smart again",
  },
  "video-call-issues": {
    title: "Video Conferencing Solutions",
    description: "Fix Zoom, Teams, and other platforms for flawless meetings",
    fullDescription:
      "Experiencing freezing, poor audio, or video quality during important meetings? Our technicians can resolve issues with Zoom, Microsoft Teams, and other video conferencing platforms to ensure smooth communication.",
    solutions: [
      "Software optimization",
      "Audio/video settings configuration",
      "Network bandwidth testing",
      "Hardware compatibility checks",
      "Background noise reduction setup",
    ],
    commonCauses: [
      "Insufficient internet bandwidth",
      "Outdated software versions",
      "Hardware limitations",
      "Incorrect audio/video settings",
      "Background application interference",
    ],
    pricing: "Starting from $59",
    callToAction: "Perfect your virtual meetings",
  },
  "email-syncing": {
    title: "Email Synchronization Services",
    description: "Resolve syncing issues across all your devices",
    fullDescription:
      "Emails not showing up on all your devices? We can fix synchronization problems with Outlook, Gmail, and other email services to ensure you stay connected across all platforms.",
    solutions: [
      "Email account configuration",
      "Cross-device synchronization",
      "IMAP/POP settings optimization",
      "Email client troubleshooting",
      "Account security verification",
    ],
    commonCauses: [
      "Incorrect server settings",
      "Authentication problems",
      "Storage limitations",
      "App permissions issues",
      "Synchronization conflicts",
    ],
    pricing: "Starting from $69",
    callToAction: "Sync your emails seamlessly",
  },
  "cloud-storage": {
    title: "Cloud Storage Access Solutions",
    description: "Resolve issues with Google Drive, OneDrive, and iCloud",
    fullDescription:
      "Having trouble accessing your cloud storage? Our experts can help resolve issues with Google Drive, OneDrive, iCloud, and other cloud storage services to ensure your data is always available.",
    solutions: [
      "Account access troubleshooting",
      "Sync configuration and repair",
      "Storage management optimization",
      "Offline access setup",
      "Security permission resolution",
    ],
    commonCauses: [
      "Account sign-in problems",
      "Sync conflicts between devices",
      "Storage quota limitations",
      "Network connectivity issues",
      "File permission problems",
    ],
    pricing: "Starting from $59",
    callToAction: "Access your cloud data anywhere",
  },
  "software-installation": {
    title: "Software Installation & Update Support",
    description: "Expert help with software errors and failed updates",
    fullDescription:
      "Encountering errors during software installation or updates? Our technicians can resolve issues with endpoint solutions, office tools, games, and other software to ensure smooth operation.",
    solutions: [
      "Clean installation procedures",
      "Update troubleshooting",
      "Error code resolution",
      "Compatibility checks",
      "System requirement optimization",
    ],
    commonCauses: [
      "Insufficient system resources",
      "Software conflicts",
      "Corrupted installation files",
      "Permission errors",
      "Incompatible system components",
    ],
    pricing: "Starting from $79",
    callToAction: "Get your software working correctly",
  },
  "office-printers": {
    title: "Office Printer Solutions",
    description: "Resolve network printer issues in business environments",
    fullDescription:
      "Office printer not responding? Our business IT support specialists can troubleshoot and fix driver issues, network printer problems, and ensure your office printing system works efficiently.",
    solutions: [
      "Network printer setup and configuration",
      "Driver installation and updates",
      "Print server troubleshooting",
      "Print queue management",
      "User access configuration",
    ],
    commonCauses: [
      "Network connectivity problems",
      "Outdated or incompatible drivers",
      "Print spooler errors",
      "User permission issues",
      "Hardware malfunctions",
    ],
    pricing: "Starting from $99",
    callToAction: "Restore your business printing capabilities",
  },
  "vpn-issues": {
    title: "VPN Connection Troubleshooting",
    description: "Fix VPN drops and connection problems for remote workers",
    fullDescription:
      "Experiencing VPN connection drops while working remotely? Our technicians can resolve virtual private network issues to ensure secure and stable connections for your remote work setup.",
    solutions: [
      "VPN client configuration",
      "Connection stability optimization",
      "Security protocol verification",
      "Network traffic analysis",
      "Alternative connection setup",
    ],
    commonCauses: [
      "Internet stability issues",
      "VPN server overload",
      "Outdated client software",
      "Firewall conflicts",
      "ISP blocking or throttling",
    ],
    pricing: "Starting from $79",
    callToAction: "Secure your remote connections",
  },
  "internet-outages": {
    title: "Internet Outage Resolution",
    description:
      "Expert assistance with Rogers, Bell, Shaw, and Telus service issues",
    fullDescription:
      "Dealing with internet outages in your neighborhood? We can help diagnose issues with major providers like Rogers, Bell, Shaw, and Telus, and provide solutions to restore your connection.",
    solutions: [
      "Provider communication assistance",
      "Service diagnostic testing",
      "Equipment troubleshooting",
      "Alternative connection options",
      "Service restoration guidance",
    ],
    commonCauses: [
      "Provider network issues",
      "Local infrastructure problems",
      "Weather-related disruptions",
      "Equipment failures",
      "Scheduled maintenance",
    ],
    pricing: "Starting from $69",
    callToAction: "Get back online quickly",
  },
  "power-surge-protection": {
    title: "Power Surge Protection",
    description: "Prevent damage to electronics during electrical surges",
    fullDescription:
      "Worried about electrical surges damaging your valuable electronics? We provide expert advice and solutions to protect your devices from power surges, especially in storm-prone areas.",
    solutions: [
      "Surge protector installation",
      "Whole-home surge protection",
      "Electronics assessment",
      "Grounding verification",
      "UPS system setup",
    ],
    commonCauses: [
      "Lightning strikes",
      "Power grid fluctuations",
      "Large appliance cycling",
      "Internal home wiring issues",
      "Utility company issues",
    ],
    pricing: "Starting from $89",
    callToAction: "Protect your valuable electronics",
  },
  "security-systems": {
    title: "Home Security System Support",
    description: "Resolve false alarms and app connectivity issues",
    fullDescription:
      "Experiencing false alarms or connectivity issues with your home security system? Our technicians can troubleshoot and resolve problems with cameras, sensors, and mobile app connections.",
    solutions: [
      "Sensor calibration and testing",
      "Camera connectivity troubleshooting",
      "App configuration assistance",
      "System diagnostics and reset",
      "Remote access setup",
    ],
    commonCauses: [
      "Wi-Fi connectivity problems",
      "Incorrect sensor placement",
      "Software bugs in security apps",
      "Power supply issues",
      "Outdated firmware",
    ],
    pricing: "Starting from $99",
    callToAction: "Secure your home properly",
  },
  "smart-appliances": {
    title: "Smart Appliance Troubleshooting",
    description: "Fix app connectivity for smart fridges, washers, and more",
    fullDescription:
      "Smart appliances not syncing with your apps? Our technicians can resolve connectivity issues with smart refrigerators, washing machines, and other household appliances to restore their smart functionality.",
    solutions: [
      "Wi-Fi connectivity setup",
      "App installation and configuration",
      "Firmware updates",
      "Account linking assistance",
      "Smart home integration",
    ],
    commonCauses: [
      "Wi-Fi signal strength issues",
      "Outdated appliance firmware",
      "App compatibility problems",
      "Account authentication errors",
      "Router configuration issues",
    ],
    pricing: "Starting from $89",
    callToAction: "Make your appliances smart again",
  },
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
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "TechWaveCare",
      url: "https://techwavecare.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    serviceType: "IT Support",
    offers: {
      "@type": "Offer",
      description: service.pricing,
      priceCurrency: "CAD",
    },
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
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Common Causes:
            </h3>
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
            <h2 className="text-2xl font-bold text-white mb-4">
              Our Solutions
            </h2>
            <p className="text-gray-300 mb-6">
              Our certified technicians provide comprehensive solutions to get
              your technology working perfectly again.
            </p>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              What We Do:
            </h3>
            <ul className="space-y-3">
              {service.solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
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
            Don't let technology problems slow you down. Our expert technicians
            are ready to help you get back on track quickly and efficiently.
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
          <a
            href="/services"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to All Services
          </a>
        </div>
      </div>
    </div>
  );
}
