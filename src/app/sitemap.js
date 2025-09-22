export default function sitemap() {
  const baseUrl = 'https://techwavecare.com';
  
  // Static pages
  const routes = [
    '',
    '/services',
    '/about',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic service pages
  const services = [
    'wifi-connectivity',
    'signal-coverage', 
    'printer-problems',
    'smart-tv-setup',
    'cable-tv-errors',
    'pc-performance',
    'mobile-setup',
    'password-recovery',
    'device-compatibility',
    'smart-home',
    'video-calls',
    'email-sync',
    'cloud-storage',
    'software-installation',
    'office-printers',
    'vpn-issues',
    'internet-outages',
    'surge-damage',
    'security-systems',
    'smart-appliances'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...services];
}