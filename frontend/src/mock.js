// Mock data for SofaShine website - Updated with Urban Company-style pricing

export const services = [
  {
    id: 1,
    name: "Sofa Cleaning",
    description: "Deep cleaning for fabric & leather sofas",
    image: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85",
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
    image: "https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZ3xlbnwwfHx8fDE3NjIyMzcwOTR8MA&ixlib=rb-4.1.0&q=85",
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
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85",
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
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZ3xlbnwwfHx8fDE3NjIyMzcwOTR8MA&ixlib=rb-4.1.0&q=85",
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
    excerpt: "Learn simple daily habits to maintain your sofa's cleanliness and extend its lifespan.",
    content: `Keeping your sofa clean doesn't have to be a chore. Here are 5 essential tips:

1. **Vacuum Weekly**: Use a soft brush attachment to remove dust and debris.
2. **Address Spills Immediately**: Blot (don't rub) spills with a clean cloth.
3. **Rotate Cushions**: This ensures even wear and prevents sagging.
4. **Avoid Direct Sunlight**: UV rays can fade and damage fabric.
5. **Professional Cleaning**: Schedule deep cleaning every 6-12 months.

Regular maintenance keeps your sofa looking new and saves money in the long run!`,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85",
    date: "March 15, 2025",
    author: "SofaShine Team"
  },
  {
    id: 2,
    title: "Fabric vs Leather Sofa: Cleaning Guide",
    slug: "fabric-vs-leather-sofa-cleaning-guide",
    excerpt: "Different materials require different care. Discover the best cleaning methods for your sofa type.",
    content: `Understanding your sofa material is crucial for proper care:

**Fabric Sofas:**
- Use vacuum with upholstery attachment
- Steam cleaning removes deep-seated dirt
- Eco-friendly detergents are safe and effective
- Dry quickly to prevent mold

**Leather Sofas:**
- Wipe with slightly damp cloth regularly
- Use leather conditioner every 6 months
- Avoid harsh chemicals and excessive water
- Keep away from heat sources

Professional cleaning ensures the right treatment for your specific sofa material!`,
    image: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzYyMjM3MDg4fDA&ixlib=rb-4.1.0&q=85",
    date: "March 10, 2025",
    author: "SofaShine Team"
  },
  {
    id: 3,
    title: "When to Call Professional Sofa Cleaners",
    slug: "when-to-call-professional-sofa-cleaners",
    excerpt: "Know the signs that indicate your sofa needs professional cleaning services.",
    content: `Here are clear signs you need professional sofa cleaning:

**Visible Stains**: Oil, wine, food stains that won't come out
**Unpleasant Odors**: Musty or pet smells lingering in fabric
**Allergies**: Dust mites and allergens cause sneezing
**Discoloration**: Fading or dull appearance
**Before Special Occasions**: Guests coming over

Professional cleaners have:
- Industrial-grade equipment
- Specialized cleaning solutions
- Experience with all fabric types
- Quick drying techniques

Don't wait for visible dirt - regular professional cleaning extends sofa life by years!`,
    image: "https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZ3xlbnwwfHx8fDE3NjIyMzcwOTR8MA&ixlib=rb-4.1.0&q=85",
    date: "March 5, 2025",
    author: "SofaShine Team"
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
  }
];
