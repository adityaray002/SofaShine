// Mock data for SofaShine website - Updated with Urban Company-style pricing

export const services = [
  {
    id: 1,
    name: "Sofa Cleaning",
    description: "Deep cleaning for fabric & leather sofas",
    image: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85",
    rating: 4.85,
    reviews: "7K",
    startingPrice: 449,
    duration: "45 mins",
    packages: [
      { id: 1, type: "3 seats", price: 449, description: "Perfect for small sofas" },
      { id: 2, type: "4 seats", price: 549, description: "Standard sofa size" },
      { id: 3, type: "5 seats", price: 649, description: "Large sofa or L-shape" },
      { id: 4, type: "6 seats", price: 749, description: "Extra large sofa set" },
      { id: 5, type: "7+ seats", price: 899, description: "Corner or sectional sofa" }
    ],
    features: [
      "Dry vacuuming to remove dust & crumbs",
      "Wet shampooing with eco-friendly solution",
      "Stain removal treatment",
      "Quick dry technology (2-3 hours)"
    ]
  },
  {
    id: 2,
    name: "Carpet Cleaning",
    description: "Professional carpet deep cleaning",
    image: "https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZ3xlbnwwfHx8fDE3NjIyMzcwOTR8MA&ixlib=rb-4.1.0&q=85",
    rating: 4.80,
    reviews: "5K",
    startingPrice: 399,
    duration: "30-45 mins",
    packages: [
      { id: 1, type: "Small (up to 3x5 ft)", price: 399, description: "Small area carpet" },
      { id: 2, type: "Medium (up to 5x7 ft)", price: 599, description: "Standard room carpet" },
      { id: 3, type: "Large (up to 8x10 ft)", price: 899, description: "Large living room carpet" },
      { id: 4, type: "Extra Large (10x12 ft)", price: 1199, description: "Hall or bedroom carpet" }
    ],
    features: [
      "Deep vacuuming for dust removal",
      "Shampooing to remove tough stains",
      "Sanitization treatment",
      "Fast drying process"
    ]
  },
  {
    id: 3,
    name: "Bed & Mattress",
    description: "Mattress deep cleaning & sanitization",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85",
    rating: 4.85,
    reviews: "6K",
    startingPrice: 449,
    duration: "40 mins",
    packages: [
      { id: 1, type: "Single Mattress", price: 449, description: "3x6 ft mattress" },
      { id: 2, type: "Double Mattress", price: 599, description: "4.5x6 ft mattress" },
      { id: 3, type: "Queen Mattress", price: 699, description: "5x6.5 ft mattress" },
      { id: 4, type: "King Mattress", price: 799, description: "6x6.5 ft mattress" }
    ],
    features: [
      "Deep cleaning on both sides",
      "Dust mite removal",
      "Stain & odor treatment",
      "Sanitization with UV treatment"
    ]
  },
  {
    id: 4,
    name: "Dining Table & Chairs",
    description: "Complete dining set cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZ3xlbnwwfHx8fDE3NjIyMzcwOTR8MA&ixlib=rb-4.1.0&q=85",
    rating: 4.82,
    reviews: "4K",
    startingPrice: 299,
    duration: "30 mins",
    packages: [
      { id: 1, type: "2 Chairs", price: 299, description: "2 dining chairs" },
      { id: 2, type: "4 Chairs", price: 499, description: "4 chairs + table wiping" },
      { id: 3, type: "6 Chairs", price: 699, description: "6 chairs + table cleaning" },
      { id: 4, type: "8 Chairs", price: 899, description: "8 chairs + table deep clean" }
    ],
    features: [
      "Dusting & wet wiping of surfaces",
      "Cushion shampooing if applicable",
      "Wood polish for wooden furniture",
      "Fabric stain removal"
    ]
  },{
    id: 5,
    name: "Full Home Cleaning",
    description: "Complete deep cleaning for entire home including kitchen, bathroom and living areas.",
    image: "https://images.unsplash.com/photo-1581578949510-fa7315c4c350?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviews: "2K",
    startingPrice: 3999,
    duration: "3-6 hours",
    packages: [
      { id: 1, type: "1 BHK", price: 3999, description: "Complete 1 BHK cleaning" },
      { id: 2, type: "2 BHK", price: 4999, description: "Complete 2 BHK cleaning" },
      { id: 3, type: "3 BHK", price: 5999, description: "Complete 3 BHK cleaning" },
      { id: 4, type: "4 BHK", price: 2399, description: "Large home cleaning" },
      { id: 5, type: "5 BHK", price: 2999, description: "Villa or duplex cleaning" }
    ],
    features: [
      "Floor scrubbing and mopping",
      "Kitchen deep cleaning",
      "Bathroom sanitization",
      "Dusting of furniture and surfaces"
    ]
  }, {
    id: 6,
    name: "Bathroom Cleaning",
    description: "Deep bathroom cleaning including exhaust, basin, and tiles.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80",
    rating: 4.7,
    reviews: "1K",
    startingPrice: 350,
    duration: "1 hour",
    packages: [
      { id: 1, type: "1 Bathroom", price: 350 },
      { id: 2, type: "2 Bathrooms", price: 680 },
      { id: 3, type: "3 Bathrooms", price: 1100 }
    ],
    features: [
      "Tile and floor scrubbing",
      "Toilet and basin cleaning",
      "Mirror and fittings polishing",
      "Disinfection and odor removal"
    ]
  },{
    id: 7,
    name: "Cockroach Control",
    description: "Complete cockroach removal with safe pest control treatment.",
    image: "https://plus.unsplash.com/premium_photo-1682126082802-983618de1dd9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviews: "3K",
    startingPrice: 849,
    duration: "1-2 hours",
    packages: [
      { id: 1, type: "Kitchen Only", price: 849 },
      { id: 2, type: "1 Bathroom + Kitchen", price: 1049 },
      { id: 3, type: "2 Bathroom + Kitchen", price: 1249 },
      { id: 4, type: "3 Bathroom + Kitchen", price: 1299 },
      { id: 5, type: "4+ Bathroom + Kitchen", price: 1399 }
    ],
    features: [
      "Odorless chemical treatment",
      "Safe for family and pets",
      "Long lasting protection",
      "Professional pest inspection"
    ]
  }, {
    id: 8,
    name: "Bed Bug Control",
    description: "Advanced bed bug treatment for complete pest elimination.",
    image: "https://media.istockphoto.com/id/1030358908/photo/insanitation-concept-woman-holds-lens-shows-there-are-bugs-in-bedclothes-detects-bad-insects.jpg?s=2048x2048&w=is&k=20&c=1-zFvZl95mJ84n61k9cjsePM4mcFRN6FU7Ivz6Or79E=",
    rating: 4.9,
    reviews: "1.5K",
    startingPrice: 1499,
    duration: "2-3 hours",
    packages: [
      { id: 1, type: "1 BHK", price: 1499 },
      { id: 2, type: "2 BHK", price: 1699 },
      { id: 3, type: "3 BHK", price: 2199 }
    ],
    features: [
      "Complete room treatment",
      "Safe chemical spray",
      "Mattress treatment included",
      "Follow-up guidance"
    ]
  },

  {
    id: 9,
    name: "Office Cleaning",
    description: "Professional office cleaning for hygienic workspace.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80",
    rating: 4.7,
    reviews: "900",
    startingPrice: 4999,
    duration: "5 hours",
    packages: [
      { id: 1, type: "Small Office", price: 4999 },
      { id: 2, type: "Medium Office", price: 7999 },
      { id: 3, type: "Large Office", price: 12999 }
    ],
    features: [
      "Desk and workstation cleaning",
      "Floor and carpet cleaning",
      "Washroom sanitization",
      "Waste removal"
    ]
  }

];

export const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "Amazing service! My 5-year-old sofa looks brand new. The team was professional and punctual.",
    location: "Delhi",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Rahul Verma",
    rating: 5,
    text: "Best sofa cleaning service in the city. Eco-friendly products and great results. Highly recommend!",
    location: "Delhi",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Anjali Gupta",
    rating: 5,
    text: "Quick booking, transparent pricing, and excellent service. My leather sofa looks perfect now!",
    location: "Delhi",
    date: "3 days ago"
  },
  {
    id: 4,
    name: "Vikram Singh",
    rating: 4,
    text: "Good service and fair pricing. The stain removal was impressive. Will book again.",
    location: "Delhi",
    date: "1 week ago"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Top 5 Tips to Keep Your Sofa Fresh and Clean",
    slug: "top-5-tips-keep-sofa-fresh-clean",
    excerpt: "Learn simple daily habits to maintain your sofa's cleanliness and extend its lifespan by years.",
    content: `Your sofa is one of the most used pieces of furniture in your home. In Delhi NCR, where dust, humidity, and pollution are constant challenges, keeping it clean requires consistent effort. Here are 5 essential tips that professional cleaners recommend:

**1. Vacuum Your Sofa Every Week**

Weekly vacuuming is the single most effective habit for sofa maintenance. Use a soft brush attachment to remove dust, pet hair, crumbs, and debris from the cushions, armrests, and crevices. Pay special attention to the seams and underneath the cushions where dust accumulates fastest. In Delhi, where air quality is poor for much of the year, dust settles on fabric surfaces rapidly â€” skipping even two weeks of vacuuming can lead to significant buildup.

For fabric sofas, use low suction to avoid damaging the fibers. For leather sofas, a dry soft cloth or a leather-specific vacuum attachment works better than bristle brushes.

**2. Address Spills Immediately â€” Blot, Never Rub**

The 30-second rule applies to sofa spills: act within half a minute and you can prevent a permanent stain. The key technique is blotting, not rubbing. Rubbing pushes the liquid deeper into the fibers and spreads the stain. Instead, press a clean white cloth firmly onto the spill and lift it straight up. Repeat with a fresh section of the cloth until no more liquid transfers.

For stubborn spills like tea or coffee, mix one teaspoon of dish soap with two cups of cold water and blot gently. Always test any cleaning solution on a hidden area first. Check the care label on your sofa â€” labels showing "W" mean water-based cleaners are safe; "S" means only solvent-based cleaners should be used; "X" means vacuuming only.

**3. Rotate and Flip Cushions Regularly**

Rotating your sofa cushions every 2â€“3 weeks distributes wear evenly. If your cushions are reversible, flip them as well. This prevents one side from becoming flat and misshapen while the other stays plump. Uneven cushion wear is one of the most common complaints among sofa owners and is almost entirely preventable with this simple habit.

For sectional sofas and L-shapes common in Delhi apartments, rotate corner pieces as well. If your sofa has fixed cushions (attached to the frame), use a cushion freshener spray to deodorize them periodically.

**4. Protect from Sunlight and Heat**

UV rays from direct sunlight cause fabric colors to fade in as little as 6 months of consistent exposure. Position your sofa away from windows where direct sunlight hits it, or use curtains and UV-blocking window film. This is especially important in Delhi summers, where sunlight is intense for 8â€“10 hours a day.

Keep the sofa at least 2 feet away from heaters, ACs, and other heat sources. Rapid temperature changes can crack leather and cause fabric to become brittle over time. If you have leather upholstery, apply a leather conditioner every 6 months to prevent cracking from heat exposure.

**5. Schedule Professional Deep Cleaning Every 6â€“12 Months**

No matter how diligent your daily maintenance, dust mites, bacteria, and embedded dirt accumulate in sofa fabric over time. Professional cleaning uses steam extraction and industrial-grade equipment to clean at a depth that home methods cannot reach. A professional clean every 6 months (or every 12 months for low-use sofas) removes allergens, eliminates odors, and restores the original look of the fabric.

In Delhi NCR, we recommend cleaning more frequently â€” every 4â€“6 months â€” because the higher pollution and dust levels mean sofas accumulate grime faster than in cleaner cities. SofaShine's professional team uses eco-friendly, non-toxic solutions that are safe for children and pets, with a quick-dry process that has your sofa ready to use within 2â€“4 hours.

**Signs You Need Professional Cleaning Now**

Even if you follow all five tips, watch for these warning signs that indicate you need professional intervention: visible stains that DIY methods haven't removed, a musty or stale odor that persists after airing, allergic reactions when sitting on the sofa, or fabric that looks dull and flat despite regular vacuuming. If you notice any of these, book a professional cleaning immediately to prevent further deterioration.`,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85",
    date: "March 15, 2025",
    author: "SofaShine Team",
    howToSteps: [
      { name: "Vacuum weekly", text: "Use a soft brush attachment to vacuum all surfaces, seams, and crevices of your sofa every week to remove dust, pet hair, and debris." },
      { name: "Blot spills immediately", text: "Act within 30 seconds of a spill. Press a clean white cloth firmly onto the liquid and lift straight up — never rub. Repeat with a fresh section until no more liquid transfers." },
      { name: "Rotate and flip cushions", text: "Rotate sofa cushions every 2–3 weeks and flip reversible ones to distribute wear evenly and prevent sagging." },
      { name: "Protect from sunlight and heat", text: "Position your sofa away from direct sunlight and at least 2 feet from heat sources to prevent fabric fading and leather cracking." },
      { name: "Schedule professional cleaning", text: "Book a professional deep clean every 6–12 months (every 4–6 months in Delhi NCR due to higher pollution) to remove embedded allergens and restore fabric appearance." }
    ]
  },
  {
    id: 2,
    title: "Fabric vs Leather Sofa: Complete Cleaning Guide",
    slug: "fabric-vs-leather-sofa-cleaning-guide",
    excerpt: "Different materials require very different care methods. Discover the right cleaning approach for your sofa type.",
    content: `Choosing the right cleaning method for your sofa is not just about getting it clean â€” it's about doing it safely without damaging the material. Fabric and leather sofas have fundamentally different care requirements, and using the wrong method on either can cause permanent damage. Here's a complete guide to understanding and cleaning both types.

**Understanding Fabric Sofas**

Fabric sofas come in several varieties: microfiber, chenille, linen, velvet, polyester blends, and cotton. Each fabric has different properties, but all fabric sofas share one thing: they absorb spills, dust, and odors into their fibers. The good news is that most fabric sofas are designed to be cleaned â€” check the tag for the cleaning code.

Cleaning codes for fabric sofas:
- W (Water): Safe to clean with water-based solutions
- S (Solvent): Use only dry-cleaning solvents, no water
- WS (Water/Solvent): Either type of cleaner is safe
- X (Vacuum Only): Professional cleaning only; no liquids

**How to Clean Fabric Sofas at Home**

For water-safe fabrics (code W or WS), mix a small amount of mild dish soap or upholstery shampoo with warm water to create a foam. Apply the foam â€” not the liquid â€” to the sofa using a soft brush, working in circular motions. The key is to use as little moisture as possible. After scrubbing, use a clean dry cloth to blot away the foam and extracted dirt. Allow the sofa to air-dry completely with windows open or a fan running. In Delhi's humid monsoon months (Julyâ€“September), use a dehumidifier or keep the AC running to speed up drying and prevent mold.

For microfiber sofas, use isopropyl alcohol (rubbing alcohol) sprayed lightly onto the surface and scrubbed with a white sponge in circular motions. This method is particularly effective for microfiber because it cleans without saturating the fabric, and it dries quickly.

**Understanding Leather Sofas**

Leather sofas are categorized as full-grain, top-grain, corrected-grain, and bonded leather. Full-grain and top-grain are premium leathers that are more durable and easier to maintain. Bonded leather (found in budget sofas) is a composite material that can peel after 2â€“3 years regardless of how well you clean it.

**How to Clean Leather Sofas**

Regular maintenance for leather is simple: wipe with a slightly damp microfiber cloth weekly to remove surface dust and oils. For deeper cleaning, use a pH-neutral leather cleaner applied with a soft cloth â€” never spray directly onto the leather. Work in small sections, wiping in the direction of the grain.

After cleaning, apply a leather conditioner every 4â€“6 months. Leather is a natural material that dries out over time, especially in Delhi where summer temperatures can exceed 45Â°C. Conditioning prevents cracking and keeps the surface supple. Avoid products containing alcohol, bleach, or ammonia â€” these strip the natural oils from leather and cause long-term damage.

**Common Cleaning Mistakes to Avoid**

For fabric sofas: Never scrub vigorously â€” it damages fibers and spreads stains. Never use hot water â€” it sets protein stains like blood permanently. Never over-wet the fabric â€” it causes mold and mildew inside the cushion padding.

For leather sofas: Never use baby wipes or household cleaning sprays â€” most contain chemicals that dry out leather. Never use dark-colored cloths â€” dye transfer can stain light leather. Never leave spills to dry â€” leather absorbs liquids quickly and staining becomes permanent.

**When to Call a Professional**

DIY cleaning works well for routine maintenance and fresh spills. But for the following situations, professional cleaning is the right choice: deep-set stains older than 24 hours, overall dullness and discoloration, odors that return after cleaning, delicate or antique upholstery, and annual deep cleaning. SofaShine's technicians are trained to identify fabric types and use the appropriate cleaning method for each, ensuring your sofa is cleaned effectively without any risk of damage.`,
    image: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85",
    date: "March 10, 2025",
    author: "SofaShine Team"
  },
  {
    id: 3,
    title: "When to Call Professional Sofa Cleaners: 7 Clear Signs",
    slug: "when-to-call-professional-sofa-cleaners",
    excerpt: "Know the signs that indicate your sofa needs professional cleaning services â€” and why waiting makes it worse.",
    content: `Most sofa owners wait too long before calling a professional cleaner. By the time the sofa looks visibly dirty, the damage â€” embedded bacteria, mold spores, dust mite colonies â€” has already progressed beyond what a regular clean can reverse. Here are 7 clear signs you need to call a professional today.

**1. Stains That Won't Come Out with Home Methods**

If you've tried blotting, commercial stain removers, or home remedies and the stain is still visible, it's time to call a professional. Common stubborn stains include old food grease, pet urine, ink, red wine, and curry. These stains penetrate into the inner layers of fabric and bond chemically with the fibers. Professional cleaners use enzymatic solutions and extraction equipment that break down these chemical bonds and remove stains that home methods simply cannot reach.

The longer you wait after a stain sets, the harder it is to remove. A fresh stain that could have been removed completely with professional treatment may be permanent if left for weeks.

**2. A Persistent Musty or Stale Odor**

If your sofa smells musty even after airing it out, the odor is coming from inside the cushion padding â€” not just the surface fabric. This usually means mold or mildew has developed inside the cushions due to moisture, or the foam padding has absorbed years of sweat, food odors, and pet dander. Surface sprays and deodorizers mask the smell temporarily but don't solve the root cause.

Professional cleaning extracts the contaminants from deep within the cushion structure. In Delhi's humid monsoon season, sofa odors are an especially common complaint because the combination of heat, humidity, and dust creates ideal conditions for bacterial and fungal growth inside upholstery.

**3. Allergy or Respiratory Symptoms at Home**

If you or family members experience sneezing, itchy eyes, a runny nose, or worsened asthma symptoms specifically when sitting on the sofa or in the room where it is placed, dust mites are almost certainly the cause. Dust mites thrive in fabric upholstery â€” a typical sofa can harbor hundreds of thousands of dust mites and their waste particles.

No amount of surface vacuuming eliminates dust mite colonies from inside sofa cushions. Professional steam cleaning reaches temperatures above 60Â°C that kill dust mites and neutralize their allergen-producing waste. If anyone in your home has allergies, professional sofa cleaning every 4â€“6 months is not a luxury â€” it's a health necessity.

**4. Visible Discoloration or Dullness**

If your sofa looks consistently dull, faded, or grey-tinged compared to its original color â€” even after vacuuming â€” it means a layer of fine dust and embedded grime has built up on the surface fibers. This type of soiling is not removable by vacuuming alone because the particles are woven into the fabric.

Professional hot water extraction or dry cleaning methods restore the original brightness of the fabric by removing this embedded layer. After a professional clean, colors appear significantly more vivid and the fabric feels softer because the dirt that was causing friction between fibers has been removed.

**5. The Sofa Has Not Been Professionally Cleaned in Over a Year**

Even if your sofa looks and smells fine, a professional clean is recommended every 12 months for sofas in regular use. The visible surface may appear clean while the inner layers have accumulated significant contamination. Think of it like getting a dental cleaning â€” you brush daily, but a professional clean removes buildup that routine care cannot.

In high-use households with children or pets, or in pollution-heavy areas like central Delhi, we recommend cleaning every 6 months.

**6. Pet Hair and Dander Embedded in the Fabric**

If you have pets, standard vacuuming removes loose hair from the surface but leaves dander and fine hair embedded deep in the fabric weave. Pet dander is a potent allergen that causes reactions in both pet-allergic and non-allergic people over time. Professional extraction equipment with pet-specific attachments can remove embedded pet hair and neutralize dander proteins effectively.

**7. Before or After a Major Life Event**

Planning a house party, a wedding function, guests staying over, or moving into a new home? Professional sofa cleaning before these events ensures your furniture looks its best and presents a clean, well-maintained home. Similarly, cleaning after a major event â€” especially if children attended â€” removes any stains or contaminants before they set permanently.

**What Professional Cleaning Involves**

A professional SofaShine service includes: pre-inspection to identify fabric type and stain composition, dry vacuuming to remove loose particles, pre-treatment of stains with targeted solutions, hot water extraction or dry-cleaning depending on the fabric type, deodorization, and a post-clean inspection. The entire process takes 45â€“75 minutes, and the sofa is ready to use within 2â€“4 hours.`,
    image: "https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZ3xlbnwwfHx8fDE3NjIyMzcwOTR8MA&ixlib=rb-4.1.0&q=85",
    date: "March 5, 2025",
    author: "SofaShine Team"
  },
  {
    id: 4,
    title: "Sofa Cleaning Cost in Delhi NCR: Complete Price Guide 2025",
    slug: "sofa-cleaning-cost-delhi-ncr-price-guide-2025",
    excerpt: "Transparent breakdown of sofa cleaning prices in Delhi NCR â€” what you should pay, what affects cost, and how to avoid overpriced services.",
    content: `If you've searched for sofa cleaning services in Delhi NCR and gotten wildly different quotes, you're not alone. Prices for the same job can range from â‚¹200 to â‚¹2,000 depending on the provider, the method used, and hidden charges added at the end. This guide gives you a complete, honest breakdown of what sofa cleaning should cost in Delhi NCR in 2025.

**Standard Sofa Cleaning Prices in Delhi NCR**

For fabric sofas, expect to pay between â‚¹449 and â‚¹899 depending on size:
- 2â€“3 seater sofa: â‚¹449â€“â‚¹499
- 4 seater sofa: â‚¹549â€“â‚¹599
- 5 seater / L-shape sofa: â‚¹649â€“â‚¹699
- 6 seater sofa set: â‚¹749â€“â‚¹799
- 7+ seater / sectional: â‚¹899â€“â‚¹999

For leather sofas, pricing is typically 20â€“30% higher than fabric due to the specialized cleaning solutions and conditioning required. A 3-seater leather sofa clean starts around â‚¹599, and a full leather sofa set (6â€“7 seater) costs â‚¹1,000â€“â‚¹1,200.

**What Affects the Price**

Several factors influence the final cost of sofa cleaning in Delhi:

Sofa size and number of seats: More seats means more surface area and more time. A 7-seater sectional takes nearly twice as long as a 3-seater.

Fabric type: Delicate fabrics like velvet, silk blend, or white/light-colored upholstery require extra care and specialized products, adding â‚¹100â€“â‚¹200 to the base price.

Stain severity: If your sofa has multiple deep-set stains, oil stains, or pet urine contamination, stain treatment is charged separately â€” typically â‚¹100â€“â‚¹200 per stain area.

Location in Delhi NCR: Providers in South Delhi and Gurgaon sometimes charge a premium. Rates in Noida, Faridabad, and peripheral areas may be slightly lower.

Cleaning method: Steam/hot-water extraction is the gold standard and costs slightly more than dry-clean or foam-only methods. However, it gives much better results and is worth the small price difference.

**DIY Sofa Cleaning vs. Professional: Real Cost Comparison**

Many people attempt DIY cleaning first. Here's the honest cost breakdown:

DIY costs: Upholstery shampoo â‚¹300â€“â‚¹500, spray bottle â‚¹50, scrub brush â‚¹100, drying time 4â€“12 hours with no guarantee of results. Risk of over-wetting causing mold, fabric damage, or stain spreading. Total: â‚¹450â€“â‚¹650 with uncertain results.

Professional cleaning: â‚¹449â€“â‚¹899 for a guaranteed result, with the right equipment, expertise, and a re-clean guarantee if you're not satisfied.

For most sofa sizes, the price difference between DIY and professional is under â‚¹200 â€” and the professional result is almost always significantly better.

**Red Flags: How to Spot Overpriced or Underqualified Services**

Watch out for these warning signs when booking sofa cleaning in Delhi:

Prices below â‚¹299 for a full sofa clean: At this price, the service almost certainly uses diluted chemicals or quick-spray-and-wipe methods that don't actually clean the fabric deeply.

No upfront pricing: If a service won't give you a clear price before arriving, expect surprise charges after the job.

No satisfaction guarantee: Reputable services like SofaShine offer a free re-clean if you're not satisfied. Any provider that doesn't stand behind their work is a risk.

Unlicensed or unverified workers: Always book through a platform where technicians are background-verified.

**SofaShine Pricing Promise**

At SofaShine, our pricing is 100% transparent and confirmed before booking. There are no hidden charges â€” the price you see is the price you pay. We offer:
- Sofa cleaning from â‚¹449
- Carpet cleaning from â‚¹399
- Mattress cleaning from â‚¹449
- 10% off for first-time customers
- Free re-clean if not satisfied

Book online or via WhatsApp and get an instant confirmation with the exact price for your sofa size and type.`,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZ3xlbnwwfHx8fDE3NjIyMzcwOTR8MA&ixlib=rb-4.1.0&q=85",
    date: "April 2, 2025",
    author: "SofaShine Team"
  },
  {
    id: 5,
    title: "How to Remove Common Sofa Stains at Home: Step-by-Step Guide",
    slug: "how-to-remove-sofa-stains-at-home",
    excerpt: "Tea, coffee, food, pet stains â€” a step-by-step guide to removing the most common sofa stains before they become permanent.",
    content: `Acting fast is the single most important factor in stain removal. Most sofa stains that become permanent did so because they were treated too late or treated incorrectly. This guide covers the most common sofa stains in Indian homes and gives you step-by-step instructions for each.

**Before You Start: Important Rules**

Always blot, never rub. Rubbing pushes the stain deeper into the fibers and spreads it outward. Use white cloths or paper towels only â€” colored cloths can transfer dye to the sofa. Test any cleaning solution on a hidden area (underside of a cushion) before applying to the visible stain. Check your sofa's cleaning code (W, S, WS, or X) on the care label before using any liquid.

**Tea and Coffee Stains**

These are among the most common stains in Indian homes. Act immediately for best results.

Fresh stain: Blot up as much liquid as possible with a clean white cloth. Mix 1 teaspoon of liquid dish soap + 1 tablespoon of white vinegar + 2 cups of warm water. Apply a small amount to the stain using a clean cloth and blot â€” working from the outside of the stain inward. Rinse by blotting with plain cold water. Blot dry.

Dried stain: Rehydrate the stain by pressing a damp cloth over it for 2 minutes before applying the soap solution above. Older tea stains with tannins may require a commercial enzyme cleaner.

**Food and Curry Stains**

Remove any solid food first by scooping gently with a spoon â€” never wipe. Then mix 1 teaspoon of dish soap with 1 cup of cold water (use cold water for protein and oil stains â€” hot water makes them permanent). Blot from the outside in.

For turmeric or curry stains (notoriously difficult), apply a paste of baking soda and water directly to the stain, let it sit for 10 minutes, then brush away gently. Follow with the soap solution. Repeat 2â€“3 times. Turmeric stains that have dried for more than a few hours often require professional treatment.

**Pet Urine Stains**

Pet urine stains have two components: the stain itself and the odor. Standard cleaners remove the stain but leave the odor molecules (uric acid crystals) in the fabric, which causes pets to remark the same spot. Only enzyme-based cleaners break down uric acid crystals completely.

Blot up fresh urine immediately. Apply an enzyme-based pet stain cleaner (available at pet stores) generously and allow it to sit for 10â€“15 minutes. Blot dry. Do not use ammonia-based cleaners on pet stains â€” urine contains ammonia and using more of it actually attracts pets to the spot again.

For soaked-in urine that has reached the cushion foam, DIY treatment is rarely fully effective. Professional cleaning with extraction equipment is the reliable solution.

**Ink and Pen Stains**

Isopropyl alcohol (rubbing alcohol, available at pharmacies) is the most effective home remedy for ink stains. Apply a small amount to a white cloth and blot the stain â€” don't pour it directly on the sofa. The alcohol dissolves the ink and transfers it to the cloth. Work quickly and use a fresh section of cloth with each blot. Follow with a light soap-and-water treatment to remove the alcohol residue.

Ball-point pen ink responds well to this method. Marker ink and permanent ink stains are very difficult to remove at home â€” call a professional.

**Red Wine Stains**

Act within minutes for best results. Blot up the wine immediately. Pour a small amount of cold sparkling water or club soda onto the stain â€” the carbonation helps lift the wine from the fibers. Blot again. Apply a paste of salt over the remaining stain and let it absorb for 5 minutes before brushing away. Follow with the dish soap solution.

Never use hot water on wine stains. The "white wine on red wine" trick actually dilutes the stain slightly but doesn't remove it â€” soap and cold water is more effective.

**Grease and Oil Stains**

Sprinkle baking soda or cornstarch generously over the fresh grease stain and leave for 15â€“20 minutes to absorb the oil. Brush away the powder carefully. Apply a small amount of dish soap (dish soap is formulated to cut grease) directly to the stain and work it in gently with a damp cloth. Blot with cold water. Repeat as needed. For old, set grease stains, a dry-cleaning solvent is more effective than water-based solutions.

**When Home Methods Aren't Enough**

If the stain covers a large area, has been set for more than 24 hours, involves multiple layers of contamination, or is on a delicate fabric (velvet, silk blend, white linen), home treatment risks making the stain worse. SofaShine's professional stain treatment service uses targeted enzyme cleaners and extraction equipment that remove stains safely without risk of fabric damage. Book a professional clean if you're unsure â€” the cost of professional treatment is far less than the cost of replacing a damaged sofa.`,
    image: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=srgb&fm=webp&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85",
    date: "April 10, 2025",
    author: "SofaShine Team",
    howToSteps: [
      { name: "Blot — never rub", text: "Press a clean white cloth onto the stain and lift straight up. Never rub. Work from the outside of the stain inward to avoid spreading." },
      { name: "Treat tea and coffee stains", text: "Mix 1 tsp dish soap + 1 tbsp white vinegar + 2 cups warm water. Blot onto fresh stain, work inward, then blot with plain cold water to rinse." },
      { name: "Remove food and curry stains", text: "Scoop solids with a spoon. Apply cold soapy water and blot. For turmeric, apply a baking soda paste, wait 10 minutes, brush away, then follow with soapy water." },
      { name: "Treat pet urine stains", text: "Blot fresh urine immediately. Apply an enzyme-based pet cleaner, allow 10–15 minutes, then blot dry. Only enzyme cleaners break down uric acid crystals completely." },
      { name: "Remove ink stains", text: "Apply isopropyl alcohol (rubbing alcohol) to a white cloth and blot the stain. Use a fresh cloth section with each blot. Follow with a light soap-and-water treatment." },
      { name: "Treat red wine stains", text: "Blot immediately, then pour a small amount of cold sparkling water to lift the wine. Apply a salt paste, leave 5 minutes, brush away, then treat with cold soapy water." }
    ]
  }
];

export const faqs = [
  {
    question: "How long does the cleaning process take?",
    answer: "Most sofa cleaning takes 45-75 minutes depending on size and condition. We'll provide an accurate estimate during booking."
  },
  {
    question: "Are your cleaning products safe for pets and children?",
    answer: "Yes! We use 100% eco-friendly, non-toxic cleaning solutions that are completely safe for your family and pets."
  },
  {
    question: "How soon can I use my sofa after cleaning?",
    answer: "Our quick-dry process means you can use your sofa within 2-4 hours. We'll advise you based on the cleaning method used."
  },
  {
    question: "Do you provide same-day service?",
    answer: "Yes! Subject to availability, we offer same-day and next-day booking slots in Delhi."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "Your satisfaction is guaranteed! If you're not happy, we'll re-clean at no extra cost or provide a full refund."
  },
  {
    question: "Which areas in Delhi NCR do you serve?",
    answer: "We serve all areas across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, and Greater Noida. Enter your pincode during booking to confirm availability in your area."
  },
  {
    question: "How much does sofa cleaning cost in Delhi?",
    answer: "Our sofa cleaning starts at â‚¹449 for a 3-seater fabric sofa. Pricing depends on sofa size and type. All prices are transparent with no hidden charges â€” you get the exact price before booking."
  },
  {
    question: "Do I need to move my sofa before the cleaning team arrives?",
    answer: "No, you don't need to move anything. Our technicians bring all necessary equipment and will work around your furniture. Just ensure easy access to the sofa area."
  },
  {
    question: "Can you remove tough stains like curry, pet urine, or ink?",
    answer: "Yes, we have specialized stain treatment for most common stains including food, pet urine, oil, and ink. While we cannot guarantee 100% removal for very old or deep stains, our success rate is very high. We'll assess the stain before starting and advise you honestly."
  },
  {
    question: "How often should I get my sofa professionally cleaned?",
    answer: "We recommend professional cleaning every 6-12 months for regular household use. If you have pets, children, or allergies, every 4-6 months is ideal. Delhi's high dust and pollution levels mean sofas accumulate grime faster than average."
  }
];
