---
applyTo: '**'
---

### Project Context
- This is a **Next.js project** for a technical support/service provider website.  
- The website will list **common technical problems** as **services** offered to customers.  
- Each service should be visible in the **Services section** and also in the **navbar dropdown** under "Services".  

---

#### 1. Navbar
- Create a **navbar** with the following links:
  - Home  
  - About  
  - Services (dropdown containing all services below)  
  - Contact  

#### 2. Services Section
- Add a **Services section** on the homepage (or a dedicated `/services` page).  
- Each service should be displayed in a **card format** (icon + title + description).  
- Use a responsive **grid layout** for the services.  

#### 3. Services List
Add the following services:

1. Wi-Fi connectivity issues (slow speed, dropped connections, router not working).  
2. Weak signal coverage in certain rooms (need for Wi-Fi extenders/mesh systems).  
3. Printer problems (paper jams, cartridges not detected, Wi-Fi printer not connecting).  
4. Smart TV setup & streaming issues (apps not working, buffering on Netflix/Prime).  
5. Cable TV box errors (signal lost, frozen channels).  
6. Laptop/PC running slow (storage full, malware, outdated software).  
7. Mobile phone setup problems (email sync, updates not installing, overheating).  
8. Forgotten passwords or account lockouts (Google, Apple ID, Windows login).  
9. Device compatibility issues (new phones not pairing with older smart devices).  
10. Smart home device issues (Alexa, Google Nest, thermostat not connecting to Wi-Fi).  
11. Video call issues (Zoom/Teams freezing, poor audio/video quality).  
12. Email not syncing properly (Outlook, Gmail issues with multiple devices).  
13. Cloud storage access issues (Google Drive, OneDrive, iCloud).  
14. Software installation & update errors (endpoints solutions, office tools, games).  
15. Printer not working in offices (driver issues, network printers not responding).  
16. VPN connection drops (common for remote workers).  
17. Internet outages in neighborhoods (common with Rogers, Bell, Shaw, Telus).  
18. Electricity surges damaging electronics (common in storm-prone areas).  
19. Home security systems false alarms or app connectivity issues.  
20. Smart appliance malfunctions (smart fridge, washing machines not syncing with apps).  

---

#### 4. Service Details Page (Optional)
- Each service card should link to a **dedicated service page** (`/services/[id]`).  
- Service detail page should include:
  - Title  
  - Full description  
  - Possible solutions  
  - Contact/Booking button  

---

#### 5. Styling & UI
- Use **Tailwind CSS** for styling.  
- **blue-600**: Navbar background, section backgrounds (where emphasis is needed), important button backgrounds, tagline or headings.  
- **white**: Text color, button text, and some buttons with transparent backgrounds + white borders.  
- **neutral-950**: Default background for most sections.  
- **Cards**: Apply a **blur backdrop effect** with subtle shadows. 
- Make sure it’s **mobile-friendly** with a clean and modern look and main focus is our mobile devices.  



---

## Part 1: Techniques to Use (The "White Hat" Approach)

### 1. Master Technical SEO (Next.js advantage)
- Performance is Key:  
  - Use `next/image` for optimized images.  
  - Use **SSG** for static pages, **ISR** for periodic updates, and **SSR** for dynamic dashboards.  
- Perfect Meta Tags: Use `next/head` with unique titles + descriptions.  
- Structured Data: Add JSON-LD schema (Articles, Products, FAQs) inside `next/head`.  
- Clean URLs + Sitemaps: Next.js routing ensures clean URLs. Add dynamic `sitemap.xml`.  

### 2. Create High-Converting, Honest Landing Pages
- Message Match: Ad promise = Landing page content.  
- Clear CTA: Prominent action buttons ("Buy Now," "Sign Up").  
- Transparency: Show pricing, shipping, and clear Privacy Policy + Contact links.  

### 3. Ethical Marketing & Advertising
- Permission-Based Email: Only opt-in, include 1-click unsubscribe.  
- Honest Ad Copy: Truthful, benefit-focused, no exaggeration.  
- Quality Backlinks: Earn links via valuable content. Never buy them.  

---

## Part 2: Techniques to AVOID (The "Black Hat" Approach)
- Cloaking: Serving bots different content than humans.  
- Keyword Stuffing: Overuse of target keywords.  
- Misleading Claims: Unrealistic promises ("Lose 30kg in 10 days").  
- Bait and Switch: Ads promoting one thing, landing page showing another.  
- Duplicate/Scraped Content: No copy-pasting from other sites.  
- Hidden Text/Links: Avoid hidden keywords in same background color.  
- Aggressive Pop-ups: No intrusive interstitials, especially on mobile.  
- Malware: Ensure website and outbound links are safe.  

---

## Part 3: Keywords & Topics to Be Very Careful With 
- Misleading Language: guaranteed, instant results, secret trick, shocking, "free" with hidden costs.  
- Trademarked Terms: Avoid competitor brand names in ads (e.g., "Official Facebook Support").   

---

## Next.js Website Guidelines
- Speed: Use `next/image`, SSG/ISR, and code-splitting.  
- SEO: Unique `next/head` metadata per page, include `sitemap.xml`.  
- User Experience: Mobile-friendly, accessible, avoid intrusive popups.  
- Honesty: Content and meta descriptions must reflect reality.  
- Avoid Risky Niches: Skip financial, health, gambling, or misleading topics.