export const COMPANY = {
  name: "BeltForge Industries",
  tagline: "Engineering Excellence in Conveyor Solutions",
  description:
    "Leading manufacturer of premium industrial conveyor belts, delivering precision-engineered solutions for mining, cement, steel, and heavy industries worldwide.",
  phone: "+91-8200223669",
  email: "info@beltforge.com",
  address: "Industrial Area, Phase II, Ahmedabad, Gujarat, India",
  established: "2008",
  iso: "ISO 9001:2015",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products/conveyor-belt", hasMenu: true },
  { label: "Industries", href: "/industries" },
  { label: "Certifications", href: "/certifications" },

];

export const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Industries Served" },
  { value: "99.2%", label: "Client Satisfaction" },
];

// ─── COMPREHENSIVE PRODUCT CATALOG ───────────────────────────────────────────

export const PRODUCT_CATALOG = [
  {
    slug: "conveyor-belt",
    title: "Conveyor Belt",
    shortDesc: "Heavy-duty material transport solutions",
    icon: "conveyor",
    category: "Core Products",
    image: "/product-conveyor-belt.png",
    overview:
      "BeltForge Conveyor Belts are engineered for the most demanding material handling applications. Our multi-ply rubber construction ensures exceptional durability, load-bearing capacity, and resistance to operational wear in heavy industries.",
    description:
      "Our General Duty Conveyor Belts are the backbone of material handling across industries. Engineered with precision-selected rubber compounds, they deliver consistent performance under continuous load, harsh environments, and high-throughput operations. Each belt undergoes multi-stage quality testing before dispatch.",
    material: "Multi-ply rubber with fabric carcass",
    applications: ["Mining & Quarrying", "Cement Plants", "Steel Mills", "Power Generation", "Ports & Logistics", "Construction"],
    specifications: {
      material: "SBR / Natural Rubber Compound",
      thickness: "8mm – 35mm",
      width: "300mm – 2400mm",
      heatResistance: "Up to 80°C (Standard)",
      tensileStrength: "500 – 2500 N/mm",
      elongation: "≥ 400%",
      loadCapacity: "Up to 10,000 TPH",
      customSizing: "Yes – to client specifications",
    },
    features: [
      { title: "High Durability", desc: "Multi-ply construction withstands extreme operational loads and abrasive materials" },
      { title: "Low Maintenance", desc: "Engineered rubber compounds reduce replacement cycles and operational downtime" },
      { title: "Custom Sizing", desc: "Available in widths from 300mm to 2400mm to match your exact conveyor system" },
      { title: "Smooth Operation", desc: "Precision-balanced construction ensures vibration-free, silent running" },
      { title: "IS:1891 Compliant", desc: "Fully compliant with Indian and international belt manufacturing standards" },
      { title: "Long Service Life", desc: "Superior cover compounds deliver 2–3x longer service life than standard belts" },
    ],
    related: ["heat-resistant-belt", "chevron-belt", "abrasion-resistant-belt"],
  },
  {
    slug: "timing-belt",
    title: "Timing Belt",
    shortDesc: "Precision synchronization & power transfer",
    icon: "timing",
    category: "Precision Belts",
    image: "/product-heat-resistant.png",
    overview:
      "Engineered for exact synchronization, BeltForge Timing Belts deliver zero-slip power transmission in high-speed and precision-critical applications across automotive, textile, and packaging industries.",
    description:
      "Timing Belts from BeltForge are designed to provide accurate, synchronous power transmission without the need for lubrication. With a toothed inner surface that meshes perfectly with toothed pulleys, these belts eliminate slippage, reduce noise, and deliver exceptional positional accuracy. Ideal for CNC machines, packaging lines, and automotive drives.",
    material: "Neoprene / Polyurethane with fiberglass tension cord",
    applications: ["Automotive Manufacturing", "CNC Machinery", "Packaging Lines", "Textile Machinery", "Printing", "Robotics"],
    specifications: {
      material: "Neoprene or Polyurethane + Fiberglass Cords",
      thickness: "4mm – 14mm (pitch dependent)",
      width: "6mm – 300mm",
      heatResistance: "Up to 100°C",
      tensileStrength: "High tensile fiberglass reinforced",
      elongation: "< 1% (negligible)",
      loadCapacity: "Up to 500 kW per belt",
      customSizing: "Yes – all standard and custom pitches",
    },
    features: [
      { title: "Zero Slip", desc: "Toothed profile eliminates slippage for precise synchronization at all speeds" },
      { title: "No Lubrication", desc: "Maintenance-free operation — no oil or grease required throughout service life" },
      { title: "Low Noise", desc: "Smooth tooth engagement ensures quiet, vibration-free operation in precision machinery" },
      { title: "High Efficiency", desc: "98%+ power transmission efficiency reduces energy consumption significantly" },
      { title: "Chemical Resistant", desc: "Neoprene compound resists oils, coolants, and common industrial chemicals" },
      { title: "Precision Positioning", desc: "Ideal for CNC and robotic applications requiring exact positional accuracy" },
    ],
    related: ["pu-belt", "flat-belt", "transmission-belt"],
  },
  {
    slug: "pu-belt",
    title: "PU Belt",
    shortDesc: "Polyurethane belts for hygiene-critical lines",
    icon: "pu",
    category: "Specialty Belts",
    image: "/product-oil-resistant.png",
    overview:
      "BeltForge Polyurethane Belts offer an unmatched combination of strength, flexibility, and hygienic properties. FDA-compliant formulations make them essential in food processing, pharmaceutical, and clean-room applications.",
    description:
      "Polyurethane (PU) Belts represent the gold standard in food-grade and hygienic belt technology. Manufactured from FDA-approved materials, these belts resist bacteria growth, withstand rigorous wash-down procedures, and maintain structural integrity under continuous exposure to food acids, fats, and cleaning agents. Their smooth, pore-free surface prevents contamination buildup.",
    material: "FDA-grade Polyurethane with high-tenacity polyester cords",
    applications: ["Food Processing", "Pharmaceutical", "Confectionery", "Dairy Industry", "Bakeries", "Clean Rooms"],
    specifications: {
      material: "FDA-Grade Polyurethane (TPU)",
      thickness: "1.5mm – 12mm",
      width: "50mm – 3000mm",
      heatResistance: "–40°C to +100°C",
      tensileStrength: "200 – 1200 N/mm",
      elongation: "≤ 2% at working load",
      loadCapacity: "Light to medium duty",
      customSizing: "Yes – any length and width",
    },
    features: [
      { title: "FDA Compliant", desc: "All materials meet FDA 21 CFR 177.2600 regulations for food contact surfaces" },
      { title: "Anti-Microbial", desc: "Non-porous surface prevents bacterial adhesion and biofilm formation" },
      { title: "Easy Clean", desc: "Smooth surface allows rapid wash-down with standard food-industry cleaning agents" },
      { title: "Chemical Resistant", desc: "Resists oils, fats, mild acids, and alkaline cleaning agents without degradation" },
      { title: "Transparent Options", desc: "Available in transparent formulation for visible product inspection during transport" },
      { title: "Weld-Joinable", desc: "Finger-joint and endless weld options for seamless, hygienic belt construction" },
    ],
    related: ["pvc-belt", "conveyor-belt", "flat-belt"],
  },
  {
    slug: "pvc-belt",
    title: "PVC Belt",
    shortDesc: "Versatile PVC solutions for light industry",
    icon: "pvc",
    category: "Specialty Belts",
    image: "/product-chevron.png",
    overview:
      "BeltForge PVC Belts combine excellent flexibility, oil resistance, and cost-efficiency for light-to-medium duty conveying across packaging, logistics, and general manufacturing applications.",
    description:
      "PVC Conveyor Belts from BeltForge offer an exceptional balance between performance and economy. Manufactured with high-quality PVC compounds, these belts deliver reliable service in packaging, distribution, and light manufacturing environments. Their smooth, textured, or cleated surfaces can be customized to meet specific grip and friction requirements.",
    material: "PVC compound with polyester fabric reinforcement",
    applications: ["Packaging", "Logistics & Distribution", "Light Manufacturing", "Airport Baggage", "Postal Sorting", "Retail"],
    specifications: {
      material: "PVC Compound + Polyester Fabric",
      thickness: "2mm – 10mm",
      width: "100mm – 2500mm",
      heatResistance: "Up to 70°C",
      tensileStrength: "150 – 800 N/mm",
      elongation: "≤ 3% at working load",
      loadCapacity: "Light to medium duty",
      customSizing: "Yes – all standard widths",
    },
    features: [
      { title: "Oil Resistant", desc: "PVC compound resists petroleum-based oils and lubricants for long service life" },
      { title: "Flame Retardant", desc: "Fire-retardant grades available meeting DIN 4102 and equivalent standards" },
      { title: "Surface Options", desc: "Available in smooth, rough-top, textured, and cleated surface profiles" },
      { title: "Lightweight", desc: "Low belt weight reduces drive power requirements and conveyor frame loading" },
      { title: "Color Options", desc: "Multiple color options for product differentiation and quality control processes" },
      { title: "Low Elongation", desc: "Polyester carcass maintains tension under load for consistent conveyor performance" },
    ],
    related: ["pu-belt", "flat-belt", "modular-belt"],
  },
  {
    slug: "rubber-belt",
    title: "Rubber Belt",
    shortDesc: "Natural & synthetic rubber for extreme conditions",
    icon: "rubber",
    category: "Core Products",
    image: "/product-conveyor-belt.png",
    overview:
      "BeltForge Rubber Belts are formulated for high-impact, abrasive, and chemically aggressive environments. SBR, NR, and specialty compound options deliver tailored performance for your toughest conveying challenges.",
    description:
      "Our Rubber Conveyor Belts are manufactured from carefully selected natural rubber (NR), styrene-butadiene rubber (SBR), and specialty compound blends to handle the most demanding industrial environments. Whether transporting sharp rock, hot clinker, or chemically aggressive materials, BeltForge rubber belts deliver unmatched durability.",
    material: "Natural Rubber (NR) / SBR / Specialty compounds",
    applications: ["Mining", "Cement", "Steel", "Chemical Plants", "Quarrying", "Agriculture"],
    specifications: {
      material: "NR/SBR/EPDM Rubber Compound",
      thickness: "6mm – 40mm",
      width: "300mm – 2400mm",
      heatResistance: "Up to 200°C (specialty grades)",
      tensileStrength: "400 – 3000 N/mm",
      elongation: "≥ 450%",
      loadCapacity: "Up to 12,000 TPH",
      customSizing: "Yes – full custom engineering",
    },
    features: [
      { title: "Extreme Durability", desc: "Premium rubber compounds endure sharp, heavy, and high-impact material conveying" },
      { title: "Chemical Resistance", desc: "Specialty formulations resist acids, alkalis, oils, and solvents" },
      { title: "High Impact Rating", desc: "Thick top cover absorbs impact from sharp and heavy materials at loading points" },
      { title: "Temperature Range", desc: "Standard to 80°C; heat-resistant grades to 200°C; cold-flex grades to –40°C" },
      { title: "Multi-Ply Options", desc: "2-ply to 6-ply construction options for varying strength requirements" },
      { title: "IS Certified", desc: "All grades manufactured in compliance with IS:1891 and DIN 22102 standards" },
    ],
    related: ["conveyor-belt", "heat-resistant-belt", "abrasion-resistant-belt"],
  },
  {
    slug: "transmission-belt",
    title: "Transmission Belt",
    shortDesc: "V-belt & flat belt power drive systems",
    icon: "transmission",
    category: "Drive Belts",
    image: "/product-heat-resistant.png",
    overview:
      "BeltForge Transmission Belts — including V-belts, wedge belts, and wrapped drives — deliver efficient, reliable power transmission across pumps, compressors, fans, and industrial machinery.",
    description:
      "Power Transmission Belts from BeltForge are engineered to transfer mechanical power with maximum efficiency and minimum maintenance. Our V-belt, wedge belt, and banded belt range covers all standard cross-sections (A, B, C, D, E, SPZ, SPA, SPB, SPC) and custom lengths, meeting or exceeding ISO 4184 and DIN 2215 standards.",
    material: "CR/EPDM rubber with polyester or aramid tension cords",
    applications: ["Industrial Pumps", "Air Compressors", "HVAC Systems", "Fans & Blowers", "Agricultural Machinery", "Mining Equipment"],
    specifications: {
      material: "CR/EPDM + Polyester/Aramid Cords",
      thickness: "Cross-section dependent",
      width: "All standard cross-sections (A–E, SP series)",
      heatResistance: "Up to 120°C",
      tensileStrength: "Varies by cross-section",
      elongation: "< 2% at working load",
      loadCapacity: "Up to 1500 kW per drive",
      customSizing: "Yes – ISO 4184 and custom lengths",
    },
    features: [
      { title: "High Power Density", desc: "Wedge design delivers 30–50% more power than equivalent classic V-belt sections" },
      { title: "Anti-Static", desc: "Electrically conductive compounds prevent static buildup in hazardous environments" },
      { title: "Oil Resistant", desc: "CR compound maintains dimensions and performance in oil-splash environments" },
      { title: "Heat Stable", desc: "Stable operating characteristics from –20°C to +120°C ambient temperatures" },
      { title: "Matched Sets", desc: "Precision-matched belt sets ensure equal load distribution in multi-belt drives" },
      { title: "Long Service Life", desc: "Superior cord quality and compound formulation deliver 2–3x standard belt life" },
    ],
    related: ["timing-belt", "flat-belt", "rubber-belt"],
  },
  {
    slug: "flat-belt",
    title: "Flat Belt",
    shortDesc: "High-speed flat conveying & power drives",
    icon: "flat",
    category: "Drive Belts",
    image: "/product-oil-resistant.png",
    overview:
      "BeltForge Flat Belts provide smooth, high-speed conveying and power transmission for textile machinery, woodworking, printing, and high-precision manufacturing where quiet, efficient drives are essential.",
    description:
      "Flat Belts from BeltForge excel in applications requiring high-speed, smooth, and vibration-free operation. Manufactured from high-quality rubber, polyurethane, or leather substitute compounds with polyamide or polyester reinforcement, these belts maintain consistent tension and alignment even at speeds exceeding 50 m/s.",
    material: "Rubber / Polyurethane / Chrome leather with polyamide fabric",
    applications: ["Textile Machinery", "Woodworking", "Printing Presses", "Paper Industry", "Light Conveying", "High-Speed Drives"],
    specifications: {
      material: "CR Rubber / PU / Leather Substitute + Polyamide",
      thickness: "2mm – 15mm",
      width: "20mm – 1200mm",
      heatResistance: "Up to 100°C",
      tensileStrength: "200 – 1000 N/mm",
      elongation: "≤ 1.5% at working load",
      loadCapacity: "Up to 300 kW at high speed",
      customSizing: "Yes – all widths and lengths",
    },
    features: [
      { title: "High Speed Rated", desc: "Designed for belt speeds up to 50+ m/s in high-speed textile and printing machinery" },
      { title: "Low Noise", desc: "Smooth surface delivers near-silent operation in noise-sensitive environments" },
      { title: "Slip Resistant", desc: "Available with high-friction coatings for positive drive without additional tension" },
      { title: "Minimal Stretch", desc: "Polyamide reinforcement ensures consistent tension and precise speed ratios" },
      { title: "Flex Fatigue Resistant", desc: "Special compound resists flex fatigue over millions of bending cycles" },
      { title: "Anti-Static Options", desc: "Antistatic compounds available for electronics and clean-room applications" },
    ],
    related: ["timing-belt", "pu-belt", "transmission-belt"],
  },
  {
    slug: "modular-belt",
    title: "Modular Belt",
    shortDesc: "Interlocking plastic modular conveyor systems",
    icon: "modular",
    category: "Specialty Belts",
    image: "/product-chevron.png",
    overview:
      "BeltForge Modular Belts are interlocking plastic belt systems that provide open mesh conveying, easy cleaning, and rapid replacement — ideal for food processing, beverage, and pharmaceutical production lines.",
    description:
      "Modular Plastic Conveyor Belts from BeltForge consist of interlocking plastic modules that snap together to form a flexible, hygienic conveyor belt. Their open-grid design allows air, water, and cleaning solutions to flow through, making them the preferred choice for food processing, washdown environments, and applications requiring product visibility during conveying.",
    material: "Acetal (POM) / Polypropylene (PP) / Polyethylene (PE)",
    applications: ["Food & Beverage", "Meat Processing", "Poultry Plants", "Bakeries", "Pharmaceutical", "Electronics Assembly"],
    specifications: {
      material: "Acetal (POM) / PP / PE plastic modules",
      thickness: "Module pitch: 25.4mm – 101.6mm",
      width: "100mm – 4000mm (modular)",
      heatResistance: "–40°C to +120°C",
      tensileStrength: "Varies by module series",
      elongation: "Dimensionally stable",
      loadCapacity: "Light to heavy duty",
      customSizing: "Yes – any width by module count",
    },
    features: [
      { title: "Easy Repair", desc: "Individual damaged modules snap out and are replaced without tools or full belt change" },
      { title: "Hygienic Design", desc: "Open grid design facilitates complete cleaning and prevents product contamination" },
      { title: "Chemical Resistant", desc: "Acetal and PP materials resist acids, alkalis, and standard cleaning compounds" },
      { title: "Non-Porous", desc: "Smooth module surfaces prevent bacterial adhesion for HACCP compliance" },
      { title: "Low Noise", desc: "Special noise-reducing module designs for quiet operation in food plants" },
      { title: "Multiple Surfaces", desc: "Solid, grid, perforated, and cleated module types for varied applications" },
    ],
    related: ["pvc-belt", "pu-belt", "conveyor-belt"],
  },
  {
    slug: "customized-belt",
    title: "Customized Belt",
    shortDesc: "Bespoke engineering for unique requirements",
    icon: "custom",
    category: "Custom Solutions",
    image: "/product-oil-resistant.png",
    overview:
      "BeltForge's Custom Belt Engineering division designs and manufactures fully bespoke industrial belts for unique operational challenges that standard off-the-shelf products cannot solve.",
    description:
      "When standard belt products cannot meet your specific operational, environmental, or dimensional requirements, BeltForge's Custom Belt Engineering team delivers fully tailored solutions. From concept design and material selection through prototyping, testing, and production, we engineer belts that solve your exact problem. Our engineering team has resolved over 200 unique custom belt challenges.",
    material: "Any rubber, PU, PVC, fabric, steel cord compound",
    applications: ["Special OEM Applications", "Unique Conveyor Geometries", "Extreme Environments", "Novel Material Handling", "Research & Development", "Defense & Aerospace"],
    specifications: {
      material: "Any compound per client requirement",
      thickness: "Fully custom",
      width: "Fully custom",
      heatResistance: "Fully custom",
      tensileStrength: "Fully custom",
      elongation: "Fully custom",
      loadCapacity: "Fully custom",
      customSizing: "Completely bespoke engineering",
    },
    features: [
      { title: "Full Design Support", desc: "Dedicated engineers work with you from concept to production-ready belt specification" },
      { title: "Any Material", desc: "Access to the full range of rubber, PU, PVC, and specialty compound options" },
      { title: "Rapid Prototyping", desc: "Prototype samples delivered within 2–4 weeks for testing and validation" },
      { title: "Testing Services", desc: "In-house testing lab validates performance before full production run" },
      { title: "IP Protection", desc: "NDA-backed development process protects your proprietary design requirements" },
      { title: "Volume Scaling", desc: "From single prototype to full production run with consistent quality" },
    ],
    related: ["conveyor-belt", "rubber-belt", "pu-belt"],
  },
];

// Legacy PRODUCTS array for backward compatibility with existing homepage ProductsSection
export const PRODUCTS = [
  {
    id: "general-duty",
    title: "General Duty Conveyor Belts",
    description:
      "Engineered for standard material handling applications. Ideal for transporting medium-weight materials across short to moderate distances with reliable performance.",
    image: "/product-conveyor-belt.png",
    features: ["Multi-ply construction", "Abrasion resistant cover", "IS:1891 compliant"],
  },
  {
    id: "heat-resistant",
    title: "Heat Resistant Conveyor Belts",
    description:
      "Designed to withstand extreme temperatures up to 200°C. Perfect for cement plants, foundries, and steel mills where hot material handling is critical.",
    image: "/product-heat-resistant.png",
    features: ["Up to 200°C resistance", "Special rubber compound", "Extended service life"],
  },
  {
    id: "chevron",
    title: "Chevron Conveyor Belts",
    description:
      "V-shaped cleated surface prevents material rollback on inclined conveyors. Essential for steep-angle conveying in mining, quarrying, and aggregate processing.",
    image: "/product-chevron.png",
    features: ["Incline angles up to 40°", "Multiple cleat patterns", "Anti-slip surface"],
  },
  {
    id: "oil-resistant",
    title: "Oil Resistant Conveyor Belts",
    description:
      "Formulated with specialized rubber compounds to resist degradation from oils, fats, and petroleum-based materials. Critical for food processing and petrochemical industries.",
    image: "/product-oil-resistant.png",
    features: ["Chemical resistance", "FDA-grade available", "Swelling resistant"],
  },
  {
    id: "abrasion-resistant",
    title: "Abrasion Resistant Conveyor Belts",
    description:
      "Super abrasion-resistant covers for handling sharp, heavy, and highly abrasive materials like crushed stone, iron ore, and construction aggregates.",
    image: "/product-conveyor-belt.png",
    features: ["SAR/SSAR grade", "Extended wear life", "Impact resistant"],
  },
  {
    id: "fire-resistant",
    title: "Fire Resistant Conveyor Belts",
    description:
      "Self-extinguishing belts meeting international fire safety standards. Mandatory for underground mining operations and enclosed conveyor systems.",
    image: "/product-heat-resistant.png",
    features: ["Self-extinguishing", "IS:3181 compliant", "Underground mining grade"],
  },
];

export const INDUSTRIES = [
  {
    id: "mining",
    title: "Mining & Quarrying",
    description:
      "Heavy-duty conveyor solutions for open-pit and underground mining operations, handling ore, coal, and aggregate materials.",
    image: "/industry-mining.png",
  },
  {
    id: "cement",
    title: "Cement & Construction",
    description:
      "Temperature and abrasion resistant belts for cement manufacturing, from raw material handling to clinker transport.",
    image: "/industry-cement.png",
  },
  {
    id: "steel",
    title: "Steel & Metallurgy",
    description:
      "Heat resistant and heavy-duty conveyor systems for steel plants, foundries, and metal processing facilities.",
    image: "/industry-steel.png",
  },
  {
    id: "power",
    title: "Power Generation",
    description:
      "Reliable coal handling conveyor belts for thermal power plants, designed for continuous high-volume operations.",
    image: "/industry-mining.png",
  },
  {
    id: "food",
    title: "Food Processing",
    description:
      "FDA-compliant, food-grade conveyor belts for hygienic material handling in food and beverage manufacturing.",
    image: "/industry-cement.png",
  },
  {
    id: "ports",
    title: "Ports & Logistics",
    description:
      "High-capacity conveyor systems for port terminals, ship loading, and bulk material logistics operations.",
    image: "/industry-steel.png",
  },
];

export const WHY_US = [
  {
    title: "Quality Assurance",
    description:
      "Every belt undergoes rigorous multi-stage testing including tensile strength, abrasion resistance, and adhesion testing before dispatch.",
    icon: "quality",
  },
  {
    title: "Custom Engineering",
    description:
      "Our engineering team designs belts tailored to your specific operational requirements, material type, and environmental conditions.",
    icon: "engineering",
  },
  {
    title: "On-Time Delivery",
    description:
      "With India's largest ready stock inventory and streamlined logistics, we guarantee delivery within 7 business days.",
    icon: "delivery",
  },
  {
    title: "Technical Support",
    description:
      "Dedicated technical team provides on-site installation guidance, belt selection consultation, and preventive maintenance support.",
    icon: "support",
  },
];

export const CERTIFICATIONS = [
  "ISO 9001:2015",
  "IS:1891 Part I & II",
  "IS:3181",
  "DIN 22102",
  "AS 1332",
];

// ─── COMPREHENSIVE INDUSTRY CATALOG ──────────────────────────────────────────

export const INDUSTRY_CATALOG = [
  {
    slug: "textile",
    title: "Textile Industry",
    shortDesc: "Precision belts for spinning, weaving & garment production",
    icon: "textile",
    image: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=800&auto=format&fit=crop",
    overview:
      "The textile industry demands belts with exceptional grip, minimal elongation, and consistent tension across high-speed spinning and weaving operations. BeltForge delivers precision flat belts, timing belts, and spindle tapes that maintain dimensional stability under continuous load — ensuring zero-slip performance on looms, spinning frames, and garment production lines.",
    challenge:
      "Textile mills operate at extremely high speeds with zero tolerance for slippage or vibration. Any belt inconsistency leads to yarn breakage, fabric defects, and costly production downtime. Additionally, textile environments expose belts to lint, dust, static buildup, and continuous bending cycles.",
    solution:
      "BeltForge textile-grade flat belts and timing belts are engineered with advanced polyurethane compounds that maintain dimensional stability under continuous load. Our anti-static surface treatments prevent lint adhesion, while our proprietary flex-fatigue resistant formulations deliver millions of bending cycles without degradation.",
    benefits: [
      "Anti-static surface prevents lint adhesion",
      "Low elongation under continuous load",
      "Precision tension control for looms",
      "Oil and chemical resistant compounds",
      "High-speed rated up to 50+ m/s",
      "Flex-fatigue resistant construction",
    ],
    stats: [
      { value: 99, suffix: "%", label: "Slip-Free Performance" },
      { value: 40, suffix: "%", label: "Longer Belt Life" },
      { value: 24, suffix: "/7", label: "Operation Ready" },
      { value: 500, suffix: "+", label: "Mills Served" },
    ],
    beltTypes: [
      { name: "Flat Belts", desc: "High-speed flat drive belts for spinning and weaving machinery" },
      { name: "Timing Belts", desc: "Synchronous belts for precise loom timing and registration" },
      { name: "Spindle Tapes", desc: "Lightweight tapes for ring spinning frame applications" },
      { name: "Tangential Belts", desc: "Power transmission for textile processing equipment" },
    ],
    applications: ["Spinning Mills", "Weaving Looms", "Knitting Machines", "Garment Production", "Dyeing & Finishing", "Yarn Processing"],
  },
  {
    slug: "food-processing",
    title: "Food Processing Industry",
    shortDesc: "FDA-compliant belts for hygienic processing & packaging",
    icon: "food",
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop",
    overview:
      "Food processing environments demand the highest standards of hygiene, safety, and regulatory compliance. BeltForge food-grade conveyor belts are manufactured from FDA-approved polyurethane and PVC compounds with sealed edges, anti-microbial surface treatments, and easy-clean profiles — meeting HACCP, GMP, and FDA 21 CFR 177.2600 requirements.",
    challenge:
      "Food processing facilities require conveyor belts that meet strict hygiene standards, resist bacterial growth, and withstand continuous wash-down procedures without material degradation. Belts must also handle varying temperatures from frozen goods to hot ovens while maintaining food-safe compliance at every stage.",
    solution:
      "BeltForge food-grade PU and PVC belts feature FDA-approved compounds with sealed edges that prevent moisture ingress and bacterial harborage. Our anti-microbial surface treatments actively inhibit bacterial colonization, while our easy-clean profiles allow rapid wash-down with standard food-industry sanitizers.",
    benefits: [
      "FDA 21 CFR 177.2600 compliant",
      "Anti-microbial surface treatment",
      "Easy wash-down & rapid sanitation",
      "Temperature resistant (-40°C to 200°C)",
      "Sealed edges prevent contamination",
      "HACCP & GMP certified materials",
    ],
    stats: [
      { value: 100, suffix: "%", label: "FDA Compliant" },
      { value: 50, suffix: "%", label: "Reduced Downtime" },
      { value: 200, suffix: "°C", label: "Max Temperature" },
      { value: 300, suffix: "+", label: "Plants Served" },
    ],
    beltTypes: [
      { name: "PU Food-Grade Belts", desc: "FDA-approved polyurethane belts for direct food contact" },
      { name: "PVC Conveyor Belts", desc: "Versatile PVC belts for general food transport" },
      { name: "Modular Plastic Belts", desc: "Open-grid belts for washdown environments" },
      { name: "Anti-Bacterial Belts", desc: "Belts with active anti-microbial surface treatment" },
    ],
    applications: ["Meat Processing", "Dairy & Cheese", "Bakery & Confectionery", "Frozen Foods", "Beverage Lines", "Fruit & Vegetable Processing"],
  },
  {
    slug: "packaging",
    title: "Packaging Industry",
    shortDesc: "High-speed belts for packaging, sealing & sorting",
    icon: "packaging",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
    overview:
      "Modern packaging lines operate at extremely high speeds with zero tolerance for belt-related failures. BeltForge packaging belts deliver superior grip, low friction undersides, and consistent tracking — keeping carton sealing, labeling, shrink wrapping, and automated sorting systems running at peak efficiency.",
    challenge:
      "Packaging operations demand belts that maintain precise product positioning at high speeds while handling diverse package sizes, weights, and surface textures. Belts must resist adhesive buildup, provide consistent grip without damaging packaging materials, and deliver reliable performance across multiple shift operations.",
    solution:
      "Our packaging-grade flat belts and timing belts feature friction-optimized top surfaces for secure product grip with low-friction undersides that reduce drive power requirements. Anti-static treatments prevent lightweight packaging material from sticking, while our precision tracking ensures accurate product positioning throughout the line.",
    benefits: [
      "High-speed rated for rapid packaging lines",
      "Friction-optimized grip surfaces",
      "Anti-static for lightweight materials",
      "Adhesive-resistant surface treatments",
      "Precision tracking & alignment",
      "Low noise operation",
    ],
    stats: [
      { value: 95, suffix: "%", label: "Line Efficiency" },
      { value: 60, suffix: "%", label: "Less Belt Changes" },
      { value: 200, suffix: "+", label: "Lines Equipped" },
      { value: 30, suffix: "m/s", label: "Max Speed" },
    ],
    beltTypes: [
      { name: "Flat Conveyor Belts", desc: "Smooth surface belts for carton and package transport" },
      { name: "Timing Belts", desc: "Synchronous belts for precise packaging machine timing" },
      { name: "Friction-Top Belts", desc: "High-grip surface for incline and accumulation conveyors" },
      { name: "Vacuum Belts", desc: "Perforated belts for vacuum hold-down packaging applications" },
    ],
    applications: ["Carton Sealing", "Shrink Wrapping", "Label Application", "Automated Sorting", "Case Packing", "Palletizing"],
  },
  {
    slug: "automotive",
    title: "Automotive Industry",
    shortDesc: "Precision belts for assembly lines & power transmission",
    icon: "automotive",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
    overview:
      "Automotive manufacturing demands zero-tolerance precision, extreme durability, and uninterrupted operation. BeltForge automotive-grade V-belts, timing belts, and conveyor systems deliver synchronized power transmission with exact positional accuracy — engineered for continuous duty cycles in engine systems and automated assembly lines.",
    challenge:
      "Automotive assembly lines are multi-million dollar operations where any belt failure cascades into massive production losses. Belts must maintain precise synchronization at high speeds, resist oils and coolants, dampen vibrations, and deliver consistent performance across thousands of hours of continuous operation.",
    solution:
      "BeltForge automotive belts use premium CR/EPDM rubber compounds with fiberglass and aramid tension cords that deliver exceptional power density and zero-slip synchronization. Our vibration-dampening belt constructions reduce harmonic oscillation, while oil-resistant formulations ensure stable performance in engine-room environments.",
    benefits: [
      "High-speed synchronized precision",
      "Oil and coolant resistant compounds",
      "Vibration dampening construction",
      "Extended wear life (15,000+ hours)",
      "Zero-slip power transmission",
      "ISO/TS 16949 compatible",
    ],
    stats: [
      { value: 35, suffix: "%", label: "Efficiency Increase" },
      { value: 60, suffix: "%", label: "Reduced Downtime" },
      { value: 15, suffix: "K+", label: "Hours Belt Life" },
      { value: 150, suffix: "+", label: "Plants Served" },
    ],
    beltTypes: [
      { name: "V-Belts", desc: "Classical and wedge V-belts for engine and machinery drives" },
      { name: "Timing Belts", desc: "Synchronous belts for camshaft and assembly line drives" },
      { name: "Multi-Ribbed Belts", desc: "Poly-V belts for serpentine drive systems" },
      { name: "Conveyor Belts", desc: "Heavy-duty belts for assembly line component transport" },
    ],
    applications: ["Assembly Lines", "Engine Manufacturing", "Paint Shops", "Body Welding", "Component Transport", "Quality Testing"],
  },
  {
    slug: "pharmaceutical",
    title: "Pharmaceutical Industry",
    shortDesc: "Anti-static, anti-bacterial belts for GMP environments",
    icon: "pharmaceutical",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbab4?q=80&w=800&auto=format&fit=crop",
    overview:
      "Pharmaceutical manufacturing operates under the strictest regulatory environments in any industry. BeltForge pharmaceutical-grade belts meet GMP, FDA, and EU 1935/2004 standards with anti-static, anti-bacterial, and non-contaminating properties — essential for tablet, capsule, syrup, and injectable production lines.",
    challenge:
      "Pharmaceutical clean-rooms require belts that produce zero particulate contamination, prevent static buildup that could damage sensitive compounds, and resist the aggressive cleaning chemicals used in sterilization cycles. Traceability, material certification, and batch documentation are mandatory.",
    solution:
      "BeltForge pharmaceutical belts are manufactured from certified, traceable materials with sealed edges and non-porous surfaces that prevent particle shedding and microbial harborage. Our anti-static formulations safely dissipate charges, while our belts withstand CIP/SIP cycles without degradation.",
    benefits: [
      "GMP & FDA compliant construction",
      "Anti-static charge dissipation",
      "Zero particle shedding surfaces",
      "CIP/SIP cycle resistant",
      "Full material traceability & documentation",
      "Clean-room compatible (Class 100,000)",
    ],
    stats: [
      { value: 100, suffix: "%", label: "GMP Compliant" },
      { value: 45, suffix: "%", label: "Less Contamination" },
      { value: 10, suffix: "K+", label: "Hours Service Life" },
      { value: 120, suffix: "+", label: "Pharma Clients" },
    ],
    beltTypes: [
      { name: "White PU Belts", desc: "FDA-approved white polyurethane belts for clean environments" },
      { name: "Anti-Static Belts", desc: "Charge-dissipating belts for sensitive compound handling" },
      { name: "Sealed-Edge Belts", desc: "Welded-edge belts preventing moisture and bacterial ingress" },
      { name: "Silicone Belts", desc: "High-temperature silicone belts for sterilization tunnels" },
    ],
    applications: ["Tablet Manufacturing", "Capsule Lines", "Blister Packaging", "Syrup Filling", "Injectable Production", "Quality Control Labs"],
  },
  {
    slug: "logistics",
    title: "Logistics & Warehousing",
    shortDesc: "Heavy-duty sorting & distribution belt systems",
    icon: "logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    overview:
      "Modern logistics and warehousing operations handle millions of packages daily, requiring conveyor belt systems that deliver exceptional reliability, speed, and sortation accuracy. BeltForge logistics belts are engineered for 24/7 high-volume distribution centers, e-commerce fulfillment hubs, and automated sorting systems.",
    challenge:
      "Logistics facilities operate around the clock with constant start-stop cycles, steep inclines, sharp curves, and heavy package impact loads. Belts must handle diverse package types — from tiny envelopes to heavy cartons — while maintaining precise tracking and sortation accuracy at speeds exceeding 3 m/s.",
    solution:
      "BeltForge logistics belts feature impact-absorbing top covers, low-stretch polyester carcasses, and precision-tracking profiles that maintain alignment through curves and inclines. Our modular belt systems allow rapid zone replacement without full-belt changeouts, minimizing downtime in critical sorting operations.",
    benefits: [
      "24/7 continuous operation rated",
      "Impact-absorbing top covers",
      "Precision tracking on curves & inclines",
      "Quick-change modular belt zones",
      "Low noise for warehouse environments",
      "Fire-retardant grades available",
    ],
    stats: [
      { value: 99, suffix: "%", label: "Uptime Rate" },
      { value: 3, suffix: "m/s", label: "Sort Speed" },
      { value: 1, suffix: "M+", label: "Packages/Day" },
      { value: 80, suffix: "+", label: "DCs Equipped" },
    ],
    beltTypes: [
      { name: "Heavy-Duty Conveyor Belts", desc: "Multi-ply belts for main trunk line distribution" },
      { name: "Roller Belt Systems", desc: "Gravity and powered roller belt combinations" },
      { name: "Incline Conveyor Belts", desc: "Rough-top and cleated belts for level changes" },
      { name: "Modular Sorting Belts", desc: "Quick-change belt modules for sortation systems" },
    ],
    applications: ["E-Commerce Fulfillment", "Parcel Sorting", "Airport Baggage", "Postal Distribution", "Cold Chain Logistics", "Cross-Dock Operations"],
  },
  {
    slug: "printing",
    title: "Printing Industry",
    shortDesc: "Precision flat & timing belts for presses & bindery",
    icon: "printing",
    image: "https://images.unsplash.com/photo-1616400619175-5ebd3009007f?q=80&w=800&auto=format&fit=crop",
    overview:
      "Printing machinery operates at extremely high speeds where even microscopic belt inconsistencies cause registration errors, color misalignment, and paper jams. BeltForge printing-grade belts deliver the ultimate in surface smoothness, dimensional stability, and tracking precision for offset, digital, and flexographic printing operations.",
    challenge:
      "High-speed printing presses demand belts with near-perfect surface flatness, consistent coefficient of friction, and zero stretch under varying loads. Ink, solvents, and cleaning chemicals constantly attack belt surfaces, while high-speed operation generates heat and static that can cause paper feeding issues.",
    solution:
      "BeltForge printing belts are precision-ground to sub-millimeter surface tolerances with chemical-resistant surface treatments that withstand ink, solvents, and UV cleaning agents. Our anti-static formulations prevent paper feeding issues, while our ultra-low stretch constructions maintain perfect registration at all speeds.",
    benefits: [
      "Sub-millimeter surface flatness",
      "Chemical resistant to inks & solvents",
      "Anti-static paper feeding support",
      "Ultra-low stretch construction",
      "High-speed balanced for zero vibration",
      "Consistent coefficient of friction",
    ],
    stats: [
      { value: 98, suffix: "%", label: "Registration Accuracy" },
      { value: 50, suffix: "m/s", label: "Max Speed Rating" },
      { value: 70, suffix: "%", label: "Less Downtime" },
      { value: 90, suffix: "+", label: "Presses Equipped" },
    ],
    beltTypes: [
      { name: "Flat Drive Belts", desc: "Precision-ground flat belts for press main drives" },
      { name: "Suction Belts", desc: "Perforated belts for vacuum paper transport systems" },
      { name: "Timing Belts", desc: "Synchronous belts for exact color registration" },
      { name: "Folder Belts", desc: "Anti-marking belts for bindery and folding machines" },
    ],
    applications: ["Offset Printing", "Digital Printing", "Flexographic Printing", "Newspaper Presses", "Bindery Equipment", "Paper Converting"],
  },
  {
    slug: "ceramic",
    title: "Ceramic Industry",
    shortDesc: "Heat & abrasion resistant belts for kiln environments",
    icon: "ceramic",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    overview:
      "Ceramic manufacturing subjects conveyor belts to extreme heat near kilns, highly abrasive glazing materials, and heavy tile loads. BeltForge ceramic-grade belts are engineered with heat-resistant compounds and abrasion-proof surfaces that withstand the harshest conditions in tile, sanitaryware, and technical ceramic production.",
    challenge:
      "Ceramic production lines expose belts to temperatures exceeding 150°C near kilns, abrasive glazing compounds that rapidly wear standard belts, and heavy loads from stacked tiles and sanitaryware. Belts must also resist chemical attack from glazing slurries and provide smooth, mark-free product transport.",
    solution:
      "BeltForge ceramic belts use heat-stabilized EPDM and silicone compounds rated for continuous operation at elevated temperatures. Our super-abrasion-resistant (SAR) top covers withstand glazing material contact, while non-marking surfaces prevent product discoloration during transport.",
    benefits: [
      "Heat resistant up to 200°C continuous",
      "Super abrasion resistant (SAR grade)",
      "Non-marking product contact surfaces",
      "Chemical resistant to glazing compounds",
      "Heavy load capacity for tile stacks",
      "Dust and debris resistant construction",
    ],
    stats: [
      { value: 200, suffix: "°C", label: "Heat Rating" },
      { value: 3, suffix: "x", label: "Wear Life vs Standard" },
      { value: 40, suffix: "%", label: "Cost Savings" },
      { value: 60, suffix: "+", label: "Plants Equipped" },
    ],
    beltTypes: [
      { name: "Heat-Resistant Belts", desc: "EPDM/silicone belts for kiln-adjacent conveying" },
      { name: "Abrasion-Resistant Belts", desc: "SAR grade belts for glazing line environments" },
      { name: "Mesh Belts", desc: "Open-mesh belts for kiln drying and cooling zones" },
      { name: "Non-Marking Belts", desc: "Smooth surface belts for finished tile transport" },
    ],
    applications: ["Tile Production", "Sanitaryware Manufacturing", "Technical Ceramics", "Kiln Loading/Unloading", "Glazing Lines", "Quality Sorting"],
  },
  {
    slug: "paper",
    title: "Paper Industry",
    shortDesc: "Chemical & moisture resistant belts for pulp processing",
    icon: "paper",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop",
    overview:
      "Paper manufacturing is one of the most demanding environments for conveyor belts, combining high moisture, aggressive chemicals, extreme temperatures, and continuous high-speed operation. BeltForge paper-grade belts deliver moisture-proof, chemical-resistant performance for pulp handling, paper converting, and corrugation production lines.",
    challenge:
      "Paper mills expose belts to constant moisture, acidic and alkaline processing chemicals, high temperatures in drying sections, and abrasive paper dust. Belts must maintain grip on wet surfaces, resist swelling from moisture absorption, and deliver consistent tracking through complex machine geometries.",
    solution:
      "BeltForge paper-grade belts feature moisture-barrier polyester carcasses and chemical-resistant PVC/PU compounds that maintain dimensional stability in wet environments. Our corrugator belts deliver the precise tension and heat transfer needed for single and double-face corrugation, while our felt guide belts maintain critical alignment in paper machine wet sections.",
    benefits: [
      "Moisture-proof construction",
      "Chemical resistant to pulp processing agents",
      "Heat resistant for dryer sections",
      "Low moisture absorption (<1%)",
      "High wet-grip surface profiles",
      "Tracking-optimized for paper machines",
    ],
    stats: [
      { value: 150, suffix: "°C", label: "Max Temperature" },
      { value: 55, suffix: "%", label: "Longer Service Life" },
      { value: 1, suffix: "%", label: "Moisture Absorption" },
      { value: 70, suffix: "+", label: "Mills Served" },
    ],
    beltTypes: [
      { name: "Corrugator Belts", desc: "Precision belts for single and double-face corrugation" },
      { name: "Felt Guide Belts", desc: "Alignment belts for paper machine wet sections" },
      { name: "Chemical-Resistant Belts", desc: "Belts for pulp processing chemical environments" },
      { name: "Dryer Section Belts", desc: "Heat-resistant belts for paper drying applications" },
    ],
    applications: ["Pulp Processing", "Paper Converting", "Corrugation Lines", "Tissue Manufacturing", "Board Production", "Recycling Operations"],
  },
  {
    slug: "agriculture",
    title: "Agriculture Industry",
    shortDesc: "Rugged belts for grain handling & farm machinery",
    icon: "agriculture",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop",
    overview:
      "Agricultural belt applications span from grain harvesting and processing to livestock feed systems and farm machinery power transmission. BeltForge agricultural belts are built rugged — engineered to withstand outdoor exposure, abrasive grain handling, and the demanding duty cycles of modern farming operations.",
    challenge:
      "Agricultural belts face a uniquely harsh combination of challenges: outdoor UV exposure, extreme temperature swings, abrasive grain and seed materials, moisture from rain and irrigation, and irregular operation schedules. Farm machinery belts must also deliver reliable power transmission with minimal maintenance in remote locations.",
    solution:
      "BeltForge agricultural belts use UV-stabilized rubber compounds with ozone-resistant formulations that withstand years of outdoor exposure. Our chevron and rough-top profiles prevent grain rollback on inclined conveyors, while our heavy-duty rubber lagging protects drive pulleys from wear in grain elevator applications.",
    benefits: [
      "UV and ozone resistant compounds",
      "Weather-proof for outdoor exposure",
      "Abrasion resistant for grain handling",
      "Chevron profiles for incline conveying",
      "Low maintenance for remote locations",
      "Wide temperature operating range",
    ],
    stats: [
      { value: 40, suffix: "°", label: "Max Incline Angle" },
      { value: 5, suffix: "yr+", label: "Outdoor Service Life" },
      { value: 35, suffix: "%", label: "Reduced Grain Loss" },
      { value: 200, suffix: "+", label: "Farms Served" },
    ],
    beltTypes: [
      { name: "Chevron Belts", desc: "V-pattern belts preventing grain rollback on inclines" },
      { name: "Rough-Top Belts", desc: "High-grip belts for seed and grain transport" },
      { name: "Rubber Lagging", desc: "Drive pulley protection for grain elevators" },
      { name: "V-Belts", desc: "Power transmission belts for agricultural machinery" },
    ],
    applications: ["Grain Harvesting", "Seed Processing", "Feed Systems", "Grain Elevators", "Fruit & Vegetable Handling", "Farm Machinery Drives"],
  },
];
