export const EH_COMPANY = {
  name: "EarthHaul",
  fullName: "EarthHaul Conveyor & Automation Systems",
  tagline: "Smart Conveyor & Automation Systems Built for Industrial Performance",
  description:
    "EarthHaul is a trusted conveyor and automation systems company specializing in engineered material handling and industrial automation solutions tailored to demanding industries.",
  phone: "+91-8200223669",
  email: "info@earthhaul.com",
  address: "Industrial Area, Phase II, Ahmedabad, Gujarat, India",
  hours: "Mon – Sat: 9:00 AM – 6:00 PM IST",
  established: "2004",
  parent: "Earth India Group",
};

export const EH_NAV_LINKS = [
  { label: "Home", href: "/earthhaul" },
  { label: "About Us", href: "/earthhaul/about" },
  { label: "Products", href: "#", hasMenu: true },
  { label: "Industries", href: "#", hasMenu: true },
  { label: "Case Studies", href: "/earthhaul#case-studies" },
  { label: "Contact Us", href: "/earthhaul#contact" },
];

export const EH_STATS = [
  { value: "20+", label: "Years Experience", icon: "calendar" },
  { value: "500+", label: "Projects Delivered", icon: "projects" },
  { value: "25+", label: "Industries Served", icon: "industries" },
  { value: "1000+", label: "Conveyor Installations", icon: "installations" },
];

export const EH_PRODUCTS = [
  {
    slug: "heavy-duty-conveyor-systems",
    title: "Heavy Duty Conveyor Systems",
    shortDesc: "Engineered for extreme load capacity and continuous operation in mining, steel, and cement industries.",
    category: "Heavy Duty Systems",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    applications: ["Mining", "Steel Plants", "Cement"],
  },
  {
    slug: "general-purpose-conveyor-systems",
    title: "General Purpose Conveyor Systems",
    shortDesc: "Versatile, reliable conveyor systems for standard material handling across manufacturing and warehousing.",
    category: "Standard Systems",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    applications: ["Manufacturing", "Warehousing", "Logistics"],
  },
  {
    slug: "heat-oil-resistant-conveyor",
    title: "Heat & Oil Resistant Systems",
    shortDesc: "Specialized systems built to operate in extreme temperature and chemical exposure environments.",
    category: "Specialized Systems",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80",
    applications: ["Foundries", "Chemical Plants", "Steel Mills"],
  },
  {
    slug: "steel-cord-conveyor-systems",
    title: "Steel Cord Conveyor Systems",
    shortDesc: "High-tensile steel cord reinforced systems for long-distance, heavy-load conveying applications.",
    category: "Heavy Duty Systems",
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=800&q=80",
    applications: ["Mining", "Ports", "Power Plants"],
  },
  {
    slug: "sidewall-conveyor-systems",
    title: "Sidewall Conveyor Systems",
    shortDesc: "Steep-angle conveying solutions with corrugated sidewalls for vertical material transport.",
    category: "Specialized Designs",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
    applications: ["Quarrying", "Bulk Handling", "Agriculture"],
  },
  {
    slug: "modular-chain-conveyors",
    title: "Modular Chain Conveyors",
    shortDesc: "Interlocking chain conveyor modules for precise, flexible material handling in automated lines.",
    category: "Modular & Automation",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    applications: ["Automotive", "Food Processing", "Packaging"],
  },
  {
    slug: "vacuum-processing-belts",
    title: "Vacuum & Processing Belts",
    shortDesc: "Precision vacuum hold-down belt systems for delicate material handling and processing lines.",
    category: "Modular & Automation",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    applications: ["Electronics", "Paper", "Printing"],
  },
  {
    slug: "haul-off-systems",
    title: "Haul-Off Systems",
    shortDesc: "Engineered caterpillar haul-off units for continuous extrusion and cable manufacturing lines.",
    category: "Modular & Automation",
    image: "https://images.unsplash.com/photo-1553413719-875871274715?auto=format&fit=crop&w=800&q=80",
    applications: ["Cable Manufacturing", "Extrusion Lines", "Pipe Production"],
  },
];

export const EH_PRODUCT_MEGAMENU = {
  columns: [
    {
      title: "Heavy Duty Conveyor Systems",
      items: [
        { name: "Heavy Duty Conveyor Systems", slug: "heavy-duty-conveyor-systems" },
        { name: "General Purpose Conveyor Systems", slug: "general-purpose-conveyor-systems" },
        { name: "Heat & Oil Resistant Conveyor Belts", slug: "heat-oil-resistant-conveyor" },
        { name: "Flame & Chemical Resistant Systems", slug: "flame-chemical-resistant" },
        { name: "Steel Cord Conveyor Belts", slug: "steel-cord-conveyor-systems" },
        { name: "PVC / PVG Solid Woven Systems", slug: "pvc-pvg-solid-woven" },
      ],
    },
    {
      title: "Specialized Conveyor Designs",
      items: [
        { name: "Sidewall Conveyor Systems", slug: "sidewall-conveyor-systems" },
        { name: "Chevron Belt Systems", slug: "chevron-belt-systems" },
        { name: "Rough Top Conveyors", slug: "rough-top-conveyors" },
        { name: "Elevator & Endless Belting Systems", slug: "elevator-endless-belting" },
      ],
    },
    {
      title: "Modular & Automation Belts",
      items: [
        { name: "Modular Chain Conveyors", slug: "modular-chain-conveyors" },
        { name: "PVC-PU-Silicone Cleated Belts (CCB)", slug: "cleated-belts" },
        { name: "Haul-off Systems", slug: "haul-off-systems" },
        { name: "Vacuum & Processing Belts", slug: "vacuum-processing-belts" },
      ],
    },
  ],
};

export const EH_INDUSTRY_MEGAMENU = {
  columns: [
    {
      title: "Heavy Engineering & Infrastructure",
      items: [
        { name: "Mining & Minerals", slug: "mining-minerals" },
        { name: "Iron & Steel Plants", slug: "iron-steel" },
        { name: "Cement & Infrastructure", slug: "cement-infrastructure" },
        { name: "Power Generation Units", slug: "power-generation" },
        { name: "Rolling Mills & Foundry", slug: "rolling-mills" },
        { name: "Agriculture & Grain Handling", slug: "agriculture-grain" },
      ],
    },
    {
      title: "Manufacturing & Processing",
      items: [
        { name: "Warehousing & Logistics Automation", slug: "warehousing-logistics" },
        { name: "Food, Bakery & Confectionery", slug: "food-bakery" },
        { name: "Pharmaceutical & Chemical Labs", slug: "pharmaceutical-chemical" },
        { name: "Tyre & Automotive Assembly", slug: "tyre-automotive" },
        { name: "Paper, Printing & Packaging", slug: "paper-printing" },
        { name: "Ceramic & Glass Manufacturing", slug: "ceramic-glass" },
      ],
    },
  ],
};

export const EH_INDUSTRIES = [
  { id: "mining", name: "Mining & Minerals", icon: "mining" },
  { id: "iron-steel", name: "Iron & Steel", icon: "steel" },
  { id: "warehousing", name: "Warehousing & Logistics", icon: "warehousing" },
  { id: "food", name: "Food Processing", icon: "food" },
  { id: "automotive", name: "Automotive", icon: "automotive" },
  { id: "pharmaceutical", name: "Pharmaceutical", icon: "pharmaceutical" },
  { id: "power", name: "Power Generation", icon: "power" },
  { id: "paper", name: "Paper & Packaging", icon: "paper" },
  { id: "agriculture", name: "Agriculture", icon: "agriculture" },
  { id: "ceramic", name: "Ceramic & Glass", icon: "ceramic" },
];

export const EH_WHY_CHOOSE = [
  {
    title: "Customized Automation Solutions",
    description: "Every system is engineered to match your specific production requirements, facility layout, and throughput targets.",
  },
  {
    title: "Engineering Expertise",
    description: "Our team of mechanical and automation engineers brings 20+ years of conveyor system design experience.",
  },
  {
    title: "Heavy Duty Industrial Systems",
    description: "Built for 24/7 operation in the harshest industrial environments — mining, steel, cement, and power generation.",
  },
  {
    title: "Reliable After-Sales Support",
    description: "Dedicated maintenance teams and rapid spare parts supply ensure your systems run without interruption.",
  },
  {
    title: "Precision Manufacturing",
    description: "ISO-certified manufacturing processes with multi-stage quality testing at every production stage.",
  },
  {
    title: "End-to-End Project Consultation",
    description: "From initial site assessment through installation and commissioning — a single partner for the entire project lifecycle.",
  },
];

export const EH_PROCESS = [
  {
    step: "01",
    title: "Site Assessment",
    description: "On-site evaluation of facility layout, material flow requirements, and environmental conditions.",
  },
  {
    step: "02",
    title: "Requirement Analysis",
    description: "Detailed engineering analysis of throughput, load capacity, speed, and automation integration needs.",
  },
  {
    step: "03",
    title: "Engineering Design",
    description: "CAD-based conveyor system design with structural calculations, motor selection, and control system architecture.",
  },
  {
    step: "04",
    title: "Manufacturing & Testing",
    description: "Precision fabrication with multi-stage quality testing including load, alignment, and endurance tests.",
  },
  {
    step: "05",
    title: "Installation & Support",
    description: "Professional on-site installation, commissioning, operator training, and ongoing technical support.",
  },
];

export const EH_CASE_STUDIES = [
  {
    id: "mining-conveyor",
    title: "Automated Conveyor Network for Mining Operation",
    industry: "Mining & Minerals",
    problem: "Legacy belt system causing 15+ hours of unplanned downtime per month in a high-volume open-pit mining operation.",
    solution: "Designed and installed a 2.4km automated conveyor network with real-time monitoring and predictive maintenance integration.",
    result: "97% reduction in unplanned downtime, 40% increase in material throughput.",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "food-automation",
    title: "FDA-Grade Processing Line for Food Manufacturer",
    industry: "Food Processing",
    problem: "Manual material handling causing contamination risks and bottlenecks in a food processing plant.",
    solution: "Deployed modular FDA-grade conveyor system with automated sanitation cycles and CIP-compatible construction.",
    result: "100% FDA compliance achieved, 60% improvement in line efficiency.",
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "warehouse-sorting",
    title: "High-Speed Sorting System for Distribution Hub",
    industry: "Warehousing & Logistics",
    problem: "Manual sorting limiting throughput to 2,000 packages/hour in a major e-commerce distribution center.",
    solution: "Installed automated high-speed sortation system with barcode scanning and diverter belt technology.",
    result: "8,000+ packages/hour throughput, 75% labor cost reduction.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
];

export const EH_CERTIFICATIONS = [
  "ISO 9001:2015",
  "IS:1891 Part I & II",
  "DIN 22102",
  "CE Marking",
  "BIS Certified",
];

export const EH_TRUST_PARTNERS = [
  "Tata Steel", "Ultratech Cement", "Ambuja Cements", "JSW Steel",
  "Adani Power", "Hindalco Industries", "ACC Limited", "Dalmia Bharat",
];
