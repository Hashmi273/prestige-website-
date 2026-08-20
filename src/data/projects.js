/**
 * Prestige Group Projects Dataset
 * Copyright: IMMENSE AIR PRIVATE LIMITED
 */

export const PROJECTS = [
  {
    id: "prestige-horizon",
    slug: "prestige-horizon",
    name: "Prestige Horizon",
    tagline: "Elevated Living Above the Skyline",
    category: "Residential", // Residential | Commercial
    status: "Under Construction", // Ready to Move | Under Construction | Upcoming
    locality: "Western Suburbs, Mumbai",
    priceRange: "₹ 1.85 Cr - ₹ 3.20 Cr",
    overview: "Prestige Horizon offers luxury 2 & 3 BHK sky residences designed for contemporary urban living. Featuring high-floor floor-to-ceiling glass facades, private sun decks, and world-class rooftop amenities, Prestige Horizon is crafted for families seeking tranquility without missing city accessibility.",
    
    // TODO: Insert real RERA registration number once available from client
    reraNumberPlaceholder: "P518000XXXXX (Registration Pending / In Progress)",
    
    specs: {
      configurations: "2 & 3 BHK Luxury Apartments",
      carpetArea: "780 sq.ft. - 1,420 sq.ft.",
      towers: "3 High-Rise Towers (32 Floors)",
      possession: "Q4 2027",
    },

    amenities: [
      { name: "Infinity Pool", icon: "Waves" },
      { name: "Sky Lounge & Cafe", icon: "Coffee" },
      { name: "Fitness Studio", icon: "Dumbbell" },
      { name: "Landscaped Podium Garden", icon: "Trees" },
      { name: "Children's Play Zone", icon: "Gamepad2" },
      { name: "24/7 Multi-Tier Security", icon: "Shield" },
      { name: "EV Charging Stations", icon: "Zap" },
      { name: "Clubhouse & Banquet", icon: "Users" },
    ],

    images: {
      main: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      ],
      floorPlans: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      ]
    },

    locationAdvantages: [
      "5 mins from upcoming Metro Station",
      "Direct access to Western Express Highway",
      "Within 2 km radius of top International Schools",
      "15 mins drive from International Airport",
      "Adjacent to proposed eco-park & walking trails"
    ],
  },
  {
    id: "prestige-meridian",
    slug: "prestige-meridian",
    name: "Prestige Meridian",
    tagline: "Grade-A Commercial Workspaces & High-Street Retail",
    category: "Commercial",
    status: "Ready to Move",
    locality: "Financial District, Mumbai",
    priceRange: "₹ 2.50 Cr Onwards",
    overview: "Prestige Meridian is an icon of commercial prestige. Featuring flexible corporate office suites, boutique retail showrooms, high-efficiency floor plates, and sustainable green building architecture, it caters to forward-thinking enterprises and global brands.",
    
    // TODO: Insert real RERA registration number once available from client
    reraNumberPlaceholder: "P518000YYYYY (RERA Verified)",

    specs: {
      configurations: "Office Suites & Retail Showrooms",
      carpetArea: "1,200 sq.ft. - 15,000 sq.ft. (Full Floor)",
      towers: "1 Commercial Tower (18 Floors)",
      possession: "Immediate Possession",
    },

    amenities: [
      { name: "Double-Height Grand Lobby", icon: "Building" },
      { name: "High-Speed Smart Elevators", icon: "ArrowUp" },
      { name: "Central HVAC & Air Filtration", icon: "Wind" },
      { name: "Conference & Convention Center", icon: "Briefcase" },
      { name: "Multi-Level Basement Parking", icon: "Car" },
      { name: "BREEAM Certified Green Structure", icon: "Leaf" },
    ],

    images: {
      main: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      ],
      floorPlans: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      ]
    },

    locationAdvantages: [
      "Prime location in central CBD node",
      "Direct pedestrian connection to Suburban Rail",
      "Surrounded by fine dining & luxury hospitality",
      "24/7 dedicated IT/ITES infrastructure backing"
    ],
  },
  {
    id: "prestige-crescent",
    slug: "prestige-crescent",
    name: "Prestige Crescent",
    tagline: "Bespoke Villa Estates in Serene Environs",
    category: "Residential",
    status: "Upcoming",
    locality: "Northern Enclave, Mumbai",
    priceRange: "₹ 4.50 Cr - ₹ 8.00 Cr",
    overview: "Prestige Crescent is a limited-edition enclave of private luxury villas surrounded by lush greenery and quiet water features. Each villa offers double-height living spaces, private plunge pools, and expansive private lawns.",
    
    // TODO: Insert real RERA registration number once available from client
    reraNumberPlaceholder: "P518000ZZZZZ (RERA Application Submitted)",

    specs: {
      configurations: "4 & 5 BHK Independent Luxury Villas",
      carpetArea: "3,500 sq.ft. - 5,800 sq.ft.",
      towers: "36 Exclusive Private Villas",
      possession: "Q2 2028",
    },

    amenities: [
      { name: "Private Plunge Pools", icon: "Waves" },
      { name: "Private Clubhouse & Spa", icon: "Sparkles" },
      { name: "Tennis & Squash Courts", icon: "Activity" },
      { name: "Gated Perimeter Security", icon: "ShieldCheck" },
      { name: "Private Solar Power Grids", icon: "Sun" },
    ],

    images: {
      main: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      ],
      floorPlans: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      ]
    },

    locationAdvantages: [
      "Nestled away from city congestion in tranquil greens",
      "10 mins drive to Coastal Road connection",
      "Close proximity to elite country clubs & golf courses"
    ],
  },
  {
    id: "prestige-alcove",
    slug: "prestige-alcove",
    name: "Prestige Alcove",
    tagline: "Smart Urban Residences for Modern Professionals",
    category: "Residential",
    status: "Ready to Move",
    locality: "Central Suburbs, Mumbai",
    priceRange: "₹ 1.25 Cr - ₹ 1.95 Cr",
    overview: "Prestige Alcove is designed for modern living with space-efficient layouts, home-automation capabilities, and integrated co-working hubs inside the residential complex.",
    
    // TODO: Insert real RERA registration number once available from client
    reraNumberPlaceholder: "P518000AAAAA (RERA Possessed & Ready)",

    specs: {
      configurations: "1 & 2 BHK Smart Homes",
      carpetArea: "480 sq.ft. - 790 sq.ft.",
      towers: "2 Towers (24 Floors)",
      possession: "Ready to Move",
    },

    amenities: [
      { name: "Smart Home Automation", icon: "Zap" },
      { name: "Resident Co-Working Lounge", icon: "Laptop" },
      { name: "Rooftop Observatory", icon: "Eye" },
      { name: "EV Fast Chargers", icon: "BatteryCharging" },
    ],

    images: {
      main: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      ],
      floorPlans: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      ]
    },

    locationAdvantages: [
      "2 mins walk from major arterial station",
      "Surrounded by tech parks & financial institutions",
      "Excellent rental yield profile for investors"
    ],
  },
  {
    id: "prestige-pinnacle",
    slug: "prestige-pinnacle",
    name: "Prestige Pinnacle",
    tagline: "Iconic Financial Center & Tech Hub",
    category: "Commercial",
    status: "Under Construction",
    locality: "IT Corridor, Mumbai",
    priceRange: "₹ 3.10 Cr Onwards",
    overview: "Prestige Pinnacle is a state-of-the-art tech park featuring floor plates up to 25,000 sq.ft., IGBC Platinum rating, and dedicated floor spaces for fintech and enterprise headquarters.",
    
    // TODO: Insert real RERA registration number once available from client
    reraNumberPlaceholder: "P518000BBBBB (RERA Approved)",

    specs: {
      configurations: "Corporate Offices & Tech Suites",
      carpetArea: "2,000 sq.ft. - 25,000 sq.ft.",
      towers: "1 Mega Commercial Tower (28 Floors)",
      possession: "Q1 2027",
    },

    amenities: [
      { name: "IGBC Platinum Certified", icon: "Award" },
      { name: "Central Auditorium", icon: "Tv" },
      { name: "Multi-Cuisine Food Court", icon: "Utensils" },
      { name: "Helipad Access", icon: "Navigation" },
    ],

    images: {
      main: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
      ],
      floorPlans: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      ]
    },

    locationAdvantages: [
      "Direct expressway frontage",
      "Adjacent to upcoming international convention center",
      "Proximity to high-density skilled workforce clusters"
    ],
  },
  {
    id: "prestige-aura",
    slug: "prestige-aura",
    name: "Prestige Aura",
    tagline: "Eco-Conscious Urban Oasis Residences",
    category: "Residential",
    status: "Upcoming",
    locality: "Harbor Promenade, Mumbai",
    priceRange: "₹ 2.10 Cr - ₹ 3.90 Cr",
    overview: "Prestige Aura combines waterfront living with zero-carbon design features, rainwater harvesting, solar exterior facades, and tranquil botanical gardens.",
    
    // TODO: Insert real RERA registration number once available from client
    reraNumberPlaceholder: "P518000CCCCC (Pre-Launch Stage)",

    specs: {
      configurations: "2, 3 & 4 BHK Sea View Residences",
      carpetArea: "890 sq.ft. - 1,850 sq.ft.",
      towers: "4 Waterfront Towers (30 Floors)",
      possession: "Q3 2028",
    },

    amenities: [
      { name: "Waterfront Promenade", icon: "Compass" },
      { name: "Botanical Zen Garden", icon: "Flower2" },
      { name: "Yoga & Wellness Deck", icon: "Heart" },
      { name: "Zero-Waste Recycling System", icon: "RefreshCw" },
    ],

    images: {
      main: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      ],
      floorPlans: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      ]
    },

    locationAdvantages: [
      "Unobstructed sea views across all upper floors",
      "3 mins drive to Harbor Sea Link",
      "Walking distance to seaside dining & marina"
    ],
  }
];
