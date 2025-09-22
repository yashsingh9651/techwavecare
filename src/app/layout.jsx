import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

// Primary font for body text and UI
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Accent font for headings and emphasis
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Monospace font for code and tech elements
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TechWaveCare - Top Managed IT Services Provider",
  description: "Strategic technology advice to help plan your future growth. Leading IT consulting and managed services.",
  keywords: "IT services, managed IT, technical support, computer repair, network setup, Wi-Fi issues, printer problems, smart home setup",
  openGraph: {
    title: "TechWaveCare - Professional IT Services",
    description: "Expert solutions for all your technology challenges. From simple setup issues to complex network problems.",
    type: "website",
    url: "https://techwavecare.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechWaveCare",
    "url": "https://techwavecare.com",
    "description": "Professional IT services and technical support for businesses and individuals",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-647-123-4567",
      "contactType": "customer service",
      "areaServed": "CA",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.className} ${jetbrainsMono.variable} w-screen font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
