---
applyTo: '**'
---

### Project Context
- This is a **Next.js project** for a technical support/service provider website.  
- The website will list **common technical problems** as **services** offered to customers.  
- Each service should be visible in the **Services section** and also in the **navbar dropdown** under "Services".  

---

#### 1. Styling & UI
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
- speed up JavaScript execution: Use code-splitting and lazy loading for non-critical JS.
- Only send the code that your users need by implementing code splitting.
- Reduce network trips by caching your code with the PRPL pattern.

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