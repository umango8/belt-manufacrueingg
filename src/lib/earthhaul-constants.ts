export const EH_COMPANY = {
  name: "EarthHaul",
  fullName: "EarthHaul Conveyor & Automation Systems",
  tagline: "Smart Conveyor & Industrial Automation Solutions",
  description:
    "EarthHaul is a premium industrial engineering company specializing in reliable conveyor systems and intelligent automation solutions for factories, warehouses, and manufacturing industries.",
  phone: "+91-8200223669",
  email: "info@earthhaul.com",
  address: "Industrial Area, Phase II, Ahmedabad, Gujarat, India – 382 445",
  hours: "Mon – Sat: 9:00 AM – 6:00 PM IST",
  established: "2009",
  parent: "Earth India Group",
  mission:
    "To engineer reliable conveyor and automation systems that maximize productivity, improve operational efficiency, and support industrial growth.",
  vision:
    "To shape the future of industrial material handling through intelligent, efficient, and seamlessly integrated automation solutions.",
};

export const EH_NAV_LINKS = [
  { label: "Home", href: "/earthhaul" },
  { label: "About Us", href: "/earthhaul/about" },
  { label: "Products", href: "/earthhaul/products", hasMenu: true },
  { label: "Industries", href: "/earthhaul/industries", hasMenu: true },
  { label: "Solutions", href: "/earthhaul/solutions" },
  { label: "Projects", href: "/earthhaul/projects" },
  { label: "Infrastructure", href: "/earthhaul/infrastructure" },
  { label: "Quality", href: "/earthhaul/quality" },
  { label: "Gallery", href: "/earthhaul/gallery" },
  { label: "Contact", href: "/earthhaul/contact" },
];

export const EH_STATS = [
  { value: "15+", label: "Years Experience", icon: "calendar" },
  { value: "500+", label: "Projects Delivered", icon: "projects" },
  { value: "100+", label: "Clients Served", icon: "clients" },
  { value: "24/7", label: "Technical Support", icon: "support" },
];

export const EH_PRODUCTS = [
  {
    slug: "conveyor-systems",
    title: "Conveyor Systems",
    shortDesc:
      "Heavy-duty belt conveyors engineered for continuous bulk material movement in mining, steel, cement, and manufacturing plants.",
    whatItIs:
      "A conveyor system is a mechanical device that moves materials from one point to another automatically — eliminating manual handling and improving productivity.",
    howItWorks:
      "Material is placed on a continuous belt driven by motorized rollers. Speed, tension, and load capacity are precisely engineered for each application.",
    whyItHelps:
      "Reduces labor costs, prevents material spillage, ensures 24/7 continuous operation, and dramatically improves plant throughput.",
    category: "Core Systems",
    icon: "conveyor",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    applications: ["Mining", "Steel Plants", "Cement", "Warehousing"],
    specs: ["Capacity: Up to 12,000 TPH", "Belt Width: 400–2400mm", "Speed: 0.5–6 m/s"],
  },
  {
    slug: "automation-systems",
    title: "Automation Systems",
    shortDesc:
      "Intelligent industrial automation solutions integrating PLCs, sensors, and control panels for smart factory operations.",
    whatItIs:
      "Automation systems replace manual production tasks with smart machines, sensors, and software — making your factory run faster and smarter.",
    howItWorks:
      "Programmable Logic Controllers (PLCs) receive data from sensors and control motors, valves, and actuators to automate precise industrial operations.",
    whyItHelps:
      "Eliminates human error, reduces operating costs, enables 24/7 production, and gives you real-time visibility into every process.",
    category: "Automation",
    icon: "automation",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    applications: ["Automotive", "Pharmaceuticals", "Food Processing", "Electronics"],
    specs: ["PLC/SCADA Integration", "Remote Monitoring", "HMI Panels"],
  },
  {
    slug: "material-handling",
    title: "Material Handling",
    shortDesc:
      "Complete material flow solutions including bucket elevators, screw conveyors, and pneumatic systems for bulk handling.",
    whatItIs:
      "Material handling equipment moves, stores, and controls materials within a facility — from raw ingredients to finished products.",
    howItWorks:
      "A combination of conveyors, elevators, chutes, and hoppers creates a seamless material flow path engineered for your specific product type.",
    whyItHelps:
      "Minimizes product damage, speeds up production cycles, reduces waste, and keeps your facility organized and safe.",
    category: "Handling Systems",
    icon: "handling",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80",
    applications: ["Grain Handling", "Chemical Plants", "FMCG", "Logistics"],
    specs: ["Bucket Elevators", "Screw Conveyors", "Pneumatic Systems"],
  },
  {
    slug: "industrial-belting",
    title: "Industrial Belting",
    shortDesc:
      "Premium conveyor belts including steel cord, multi-ply fabric, heat-resistant, and specialty grade belts for all conditions.",
    whatItIs:
      "Industrial belts are the core carrying surface of any conveyor — engineered to withstand extreme loads, temperatures, chemicals, and continuous operation.",
    howItWorks:
      "Multi-ply fabric or steel-cord reinforced belts run over precisely aligned idlers, maintained under calculated tension to carry materials safely.",
    whyItHelps:
      "The right belt extends conveyor life, reduces maintenance frequency, prevents costly downtime, and ensures safe material transport.",
    category: "Belting",
    icon: "belting",
    image:
      "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80",
    applications: ["Mining", "Foundries", "Food Grade", "Outdoor"],
    specs: ["IS:1891 Certified", "Fire Resistant", "Heat up to 250°C"],
  },
  {
    slug: "custom-engineering",
    title: "Custom Engineering",
    shortDesc:
      "Bespoke conveyor and automation solutions designed from scratch to meet unique facility layouts, materials, and production needs.",
    whatItIs:
      "Custom engineering means we design a solution from the ground up — specifically for your facility, your material, and your production goals.",
    howItWorks:
      "Our engineers visit your site, study material flow, and use CAD design software to create a custom-engineered system with full structural calculations.",
    whyItHelps:
      "Off-the-shelf systems never perfectly fit industrial operations. Custom systems maximize efficiency, reduce waste, and fit your exact space.",
    category: "Custom Solutions",
    icon: "custom",
    image:
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
    applications: ["Any Industry", "Retrofit Projects", "Greenfield Plants"],
    specs: ["CAD Engineering", "3D Modelling", "Site Survey Included"],
  },
];

export const EH_PRODUCT_MEGAMENU = {
  columns: [
    {
      title: "Conveyor Systems",
      items: [
        { name: "Heavy Duty Belt Conveyors", slug: "heavy-duty-conveyor-systems" },
        { name: "General Purpose Conveyors", slug: "general-purpose-conveyor-systems" },
        { name: "Heat & Oil Resistant Systems", slug: "heat-oil-resistant-conveyor" },
        { name: "Flame & Chemical Resistant", slug: "flame-chemical-resistant" },
        { name: "Steel Cord Conveyor Systems", slug: "steel-cord-conveyor-systems" },
        { name: "PVC / PVG Solid Woven", slug: "pvc-pvg-solid-woven" },
      ],
    },
    {
      title: "Specialized Designs",
      items: [
        { name: "Sidewall Conveyor Systems", slug: "sidewall-conveyor-systems" },
        { name: "Chevron Belt Systems", slug: "chevron-belt-systems" },
        { name: "Rough Top Conveyors", slug: "rough-top-conveyors" },
        { name: "Elevator & Endless Belting", slug: "elevator-endless-belting" },
      ],
    },
    {
      title: "Automation & Handling",
      items: [
        { name: "Modular Chain Conveyors", slug: "modular-chain-conveyors" },
        { name: "Material Handling Systems", slug: "material-handling" },
        { name: "Haul-off Systems", slug: "haul-off-systems" },
        { name: "Custom Engineering", slug: "custom-engineering" },
      ],
    },
  ],
};

export const EH_INDUSTRY_MEGAMENU = {
  columns: [
    {
      title: "Heavy Engineering",
      items: [
        { name: "Mining & Minerals", slug: "mining-minerals" },
        { name: "Iron & Steel Plants", slug: "iron-steel" },
        { name: "Cement & Infrastructure", slug: "cement-infrastructure" },
        { name: "Power Generation", slug: "power-generation" },
        { name: "Rolling Mills & Foundry", slug: "rolling-mills" },
      ],
    },
    {
      title: "Manufacturing & Processing",
      items: [
        { name: "Automotive Assembly", slug: "automotive" },
        { name: "Food & Pharmaceutical", slug: "food-bakery" },
        { name: "Warehousing & Logistics", slug: "warehousing-logistics" },
        { name: "Packaging & FMCG", slug: "packaging-fmcg" },
        { name: "Textile & Ceramic", slug: "textile-ceramic" },
      ],
    },
  ],
};

export const EH_INDUSTRIES = [
  {
    id: "automotive",
    name: "Automotive",
    icon: "automotive",
    desc: "Assembly line conveyors for vehicle body, engine, and components manufacturing.",
    benefit: "Zero-defect assembly, precise timing",
  },
  {
    id: "food",
    name: "Food Processing",
    icon: "food",
    desc: "FDA-grade conveyor systems for safe, hygienic food handling and processing.",
    benefit: "Hygienic, compliant, easy-clean",
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    icon: "pharmaceutical",
    desc: "Clean-room compatible automation for tablet, capsule, and liquid production lines.",
    benefit: "GMP-compliant, contamination-free",
  },
  {
    id: "packaging",
    name: "Packaging",
    icon: "packaging",
    desc: "High-speed sortation and packaging line conveyors for FMCG and consumer goods.",
    benefit: "High-speed, accurate, reliable",
  },
  {
    id: "warehousing",
    name: "Warehousing",
    icon: "warehousing",
    desc: "Automated storage, retrieval, and sortation systems for modern distribution centers.",
    benefit: "10x throughput improvement",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: "logistics",
    desc: "Barcode-scanning, diverting, and sortation conveyors for e-commerce fulfillment.",
    benefit: "Faster dispatch, lower errors",
  },
  {
    id: "cement",
    name: "Cement & Construction",
    icon: "cement",
    desc: "Dust-resistant, heavy-load conveyor systems for cement and aggregate handling.",
    benefit: "Built for extreme dust & load",
  },
  {
    id: "mining",
    name: "Mining",
    icon: "mining",
    desc: "Extra-heavy-duty conveyors for bulk ore, coal, and mineral extraction operations.",
    benefit: "24/7 operation, extreme loads",
  },
  {
    id: "textile",
    name: "Textile",
    icon: "textile",
    desc: "Gentle fabric and yarn handling conveyors for weaving and dyeing processes.",
    benefit: "Gentle handling, no product damage",
  },
  {
    id: "fmcg",
    name: "FMCG",
    icon: "fmcg",
    desc: "Fast-moving consumer goods production conveyors for high-volume packaging lines.",
    benefit: "High-speed, continuous operation",
  },
];

export const EH_WHY_CHOOSE = [
  {
    title: "Precision Engineering",
    description:
      "Every system is engineered with CAD-precision, structural calculations, and tolerance controls that meet international standards.",
    icon: "precision",
  },
  {
    title: "Custom Solutions",
    description:
      "No two plants are the same. We design systems around your specific space, material, throughput, and budget requirements.",
    icon: "custom",
  },
  {
    title: "Durable Systems",
    description:
      "Built for 24/7 continuous operation in extreme environments — mining, foundries, cement plants, and outdoor installations.",
    icon: "durable",
  },
  {
    title: "Expert Support",
    description:
      "A dedicated team of engineers provides rapid response maintenance, spare parts supply, and on-site technical assistance.",
    icon: "support",
  },
  {
    title: "Fast Installation",
    description:
      "Pre-fabricated, modular components enable rapid site assembly with minimal production disruption and downtime.",
    icon: "fast",
  },
  {
    title: "Quality Assurance",
    description:
      "ISO 9001:2015 certified manufacturing with multi-stage quality inspection at every production milestone.",
    icon: "quality",
  },
];

export const EH_PROCESS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We start with a free consultation to understand your production challenges, objectives, and operational requirements.",
    duration: "Day 1",
  },
  {
    step: "02",
    title: "Site Inspection",
    description:
      "Our engineers visit your facility for a thorough site survey — measuring space, analyzing material flow, and assessing conditions.",
    duration: "Day 2–3",
  },
  {
    step: "03",
    title: "Design Engineering",
    description:
      "CAD-based conveyor and automation system design with full structural calculations, motor sizing, and control architecture.",
    duration: "Week 1–3",
  },
  {
    step: "04",
    title: "Manufacturing",
    description:
      "Precision fabrication in our ISO-certified facility with multi-stage quality testing — load, alignment, and endurance tests.",
    duration: "Week 3–8",
  },
  {
    step: "05",
    title: "Installation",
    description:
      "Professional on-site installation by our certified technicians with alignment verification and commissioning runs.",
    duration: "Week 8–10",
  },
  {
    step: "06",
    title: "Maintenance Support",
    description:
      "Ongoing preventive maintenance plans, 24/7 emergency support, spare parts supply, and operator training programs.",
    duration: "Ongoing",
  },
];

export const EH_CASE_STUDIES = [
  {
    id: "mining-conveyor",
    title: "Automated Conveyor Network — Open-Pit Mining",
    industry: "Mining & Minerals",
    location: "Rajasthan, India",
    challenge:
      "Legacy belt system causing 15+ hours of unplanned downtime per month in a high-volume open-pit mining operation.",
    solution:
      "Designed and installed a 2.4km automated conveyor network with real-time monitoring and predictive maintenance integration.",
    result: "97% reduction in unplanned downtime, 40% increase in material throughput.",
    image:
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "food-automation",
    title: "FDA-Grade Processing Line — Food Manufacturer",
    industry: "Food Processing",
    location: "Gujarat, India",
    challenge:
      "Manual material handling causing contamination risks and significant bottlenecks in a growing food processing plant.",
    solution:
      "Deployed modular FDA-grade conveyor system with automated sanitation cycles and CIP-compatible construction.",
    result: "100% FDA compliance achieved, 60% improvement in line efficiency.",
    image:
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "warehouse-sorting",
    title: "High-Speed Sortation — E-Commerce Distribution Hub",
    industry: "Warehousing & Logistics",
    location: "Maharashtra, India",
    challenge:
      "Manual sorting limiting throughput to 2,000 packages/hour in a major e-commerce distribution center.",
    solution:
      "Installed automated high-speed sortation system with barcode scanning and diverter belt technology.",
    result: "8,000+ packages/hour throughput, 75% labor cost reduction.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
];

export const EH_TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Mehta",
    title: "Plant Manager",
    company: "Tata Steel Ltd.",
    location: "Jamshedpur, Jharkhand",
    review:
      "EarthHaul delivered a steel cord conveyor system that has been running flawlessly for three years. Their engineering precision and after-sales support are genuinely exceptional — they understand heavy-duty industrial requirements.",
    rating: 5,
    industry: "Iron & Steel",
  },
  {
    id: 2,
    name: "Sunil Desai",
    title: "Head of Operations",
    company: "Ultratech Cement",
    location: "Ahmedabad, Gujarat",
    review:
      "We replaced three aging conveyor lines with EarthHaul's custom-engineered system. Installation was completed within the promised timeline, and throughput improved by 35% immediately. Outstanding team.",
    rating: 5,
    industry: "Cement",
  },
  {
    id: 3,
    name: "Priya Sharma",
    title: "Procurement Director",
    company: "Zydus Cadila",
    location: "Ahmedabad, Gujarat",
    review:
      "Implementing pharma-grade conveyors in a GMP environment is complex, but EarthHaul's team handled every compliance requirement professionally. Zero contamination incidents since installation.",
    rating: 5,
    industry: "Pharmaceutical",
  },
  {
    id: 4,
    name: "Amit Joshi",
    title: "Logistics Head",
    company: "Delhivery Ltd.",
    location: "Delhi NCR",
    review:
      "Our sortation throughput went from 2,000 to 8,000 packages per hour. The system paid for itself in under 8 months. EarthHaul's automation team was responsive and technically excellent.",
    rating: 5,
    industry: "Logistics",
  },
  {
    id: 5,
    name: "Vikram Nair",
    title: "Factory Director",
    company: "Parle Products",
    location: "Mumbai, Maharashtra",
    review:
      "The food-grade conveyor system EarthHaul designed for our biscuit line meets all FSSAI requirements and has dramatically improved our line efficiency. Highly recommend for food manufacturing applications.",
    rating: 5,
    industry: "Food Processing",
  },
  {
    id: 6,
    name: "Deepak Agarwal",
    title: "VP Engineering",
    company: "Adani Power",
    location: "Mundra, Gujarat",
    review:
      "Coal handling conveyor systems for a 4,620 MW power plant — a demanding project. EarthHaul delivered on time, on spec, and the systems have operated without major issues for over two years.",
    rating: 5,
    industry: "Power Generation",
  },
];

export const EH_FAQ = [
  {
    question: "What types of conveyor systems does EarthHaul manufacture?",
    answer:
      "EarthHaul manufactures a comprehensive range including heavy-duty belt conveyors, steel cord systems, heat and oil-resistant conveyors, sidewall conveyors, modular chain conveyors, screw conveyors, bucket elevators, and custom-engineered solutions for any industrial application.",
  },
  {
    question: "Do you offer custom-engineered conveyor solutions for our specific plant layout?",
    answer:
      "Yes — custom engineering is one of our core strengths. Our engineers will conduct a site visit, analyze your material flow requirements, and design a conveyor or automation system specifically for your facility. No off-the-shelf approach.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve mining, iron & steel, cement, power generation, automotive, food processing, pharmaceuticals, warehousing & logistics, packaging, FMCG, textile, agriculture, and more. Any industry that moves materials can benefit from our solutions.",
  },
  {
    question: "What is the typical project timeline from order to installation?",
    answer:
      "Standard conveyor systems typically take 6–10 weeks from order confirmation to installation completion. Complex custom automation projects may require 12–20 weeks. We provide a detailed project schedule after site assessment.",
  },
  {
    question: "Are your conveyor systems ISO certified?",
    answer:
      "Yes. EarthHaul operates under ISO 9001:2015 quality management certification. Our conveyor belts conform to IS:1891 (Part I & II), DIN 22102, and international standards. All systems are CE-marked where applicable.",
  },
  {
    question: "Do you provide after-sales maintenance and spare parts support?",
    answer:
      "Absolutely. We offer comprehensive annual maintenance contracts (AMC), emergency breakdown support, preventive maintenance schedules, operator training programs, and fast spare parts supply across India.",
  },
  {
    question: "What is the minimum order for a conveyor system?",
    answer:
      "We do not have a minimum order value. Whether you need a 10-meter packaging conveyor or a 2-kilometer mining conveyor network, we engineer and supply systems of all scales. Contact us for a specific quote.",
  },
  {
    question: "Can you retrofit automation into our existing conveyor system?",
    answer:
      "Yes — we specialize in upgrading existing conveyor systems with modern automation, PLC controls, variable frequency drives (VFDs), remote monitoring, and predictive maintenance sensors without full replacement.",
  },
];

export const EH_CERTIFICATIONS = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    body: "Bureau Veritas",
  },
  {
    name: "IS:1891 Part I & II",
    description: "Conveyor Belt Standards",
    body: "Bureau of Indian Standards",
  },
  {
    name: "DIN 22102",
    description: "Textile Conveyor Belts",
    body: "Deutsches Institut für Normung",
  },
  {
    name: "CE Marking",
    description: "European Conformity",
    body: "EU Certification Body",
  },
  {
    name: "BIS Certified",
    description: "Bureau of Indian Standards",
    body: "Government of India",
  },
];

export const EH_TRUST_PARTNERS = [
  "Tata Steel",
  "Ultratech Cement",
  "Ambuja Cements",
  "JSW Steel",
  "Adani Power",
  "Hindalco Industries",
  "ACC Limited",
  "Dalmia Bharat",
];

export const EH_INFRASTRUCTURE = [
  {
    title: "Manufacturing Plant",
    desc: "40,000 sq ft precision manufacturing facility with CNC machinery, fabrication bays, and assembly lines.",
    icon: "factory",
    value: "40,000 sq ft",
  },
  {
    title: "Engineering Team",
    desc: "50+ qualified mechanical, electrical, and automation engineers with domain-specific industrial expertise.",
    icon: "team",
    value: "50+ Engineers",
  },
  {
    title: "Testing Facility",
    desc: "Dedicated multi-stage testing labs for load testing, alignment verification, and belt endurance runs.",
    icon: "testing",
    value: "Multi-Stage QC",
  },
  {
    title: "Machine Park",
    desc: "State-of-the-art CNC cutting, plasma, laser welding, and precision bending machines for component fabrication.",
    icon: "machines",
    value: "Advanced CNC",
  },
];

export const EH_SOLUTIONS = [
  {
    slug: "bulk-material-handling",
    title: "Bulk Material Handling",
    desc: "End-to-end bulk material transport solutions for mining, cement, and power industries — from extraction point to processing plant.",
    icon: "bulk",
    applications: ["Mining", "Cement", "Power Generation"],
  },
  {
    slug: "factory-automation",
    title: "Factory Automation",
    desc: "Complete factory line automation with PLCs, HMIs, VFDs, and SCADA integration for intelligent manufacturing control.",
    icon: "factory",
    applications: ["Automotive", "Electronics", "Pharmaceuticals"],
  },
  {
    slug: "warehouse-automation",
    title: "Warehouse Automation",
    desc: "Automated storage, retrieval, sortation, and dispatch systems to maximize warehouse throughput and accuracy.",
    icon: "warehouse",
    applications: ["E-Commerce", "Logistics", "FMCG"],
  },
  {
    slug: "conveyor-retrofit",
    title: "Conveyor Retrofit & Upgrade",
    desc: "Modernize your existing conveyor systems with latest automation technology without full replacement investment.",
    icon: "retrofit",
    applications: ["All Industries", "Existing Plants"],
  },
  {
    slug: "turnkey-projects",
    title: "Turnkey Project Solutions",
    desc: "Full project responsibility from concept design through commissioning — a single point of accountability.",
    icon: "turnkey",
    applications: ["Greenfield", "Brownfield"],
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance",
    desc: "IoT sensor-based monitoring systems that detect wear, misalignment, and failures before they cause costly downtime.",
    icon: "predictive",
    applications: ["All Conveyor Systems"],
  },
];
