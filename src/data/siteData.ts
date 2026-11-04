export interface Project {
  id: string;
  client: string;
  title: string;
  service: string;
  category: 'banners' | 'hoardings' | 'interiors' | 'branding' | 'vehicle-branding' ;
  categoryLabel: string;
  label: string;
  date?: string;
  year?: string;
  location?: string;
  materials?: string;
  image: string;
  images: string[];
  alt: string;
  imageAlts: string[];
  description: string;
  highlights?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  categoryKey: 'advertising' | 'interiors' | 'branding' | 'vehicle-branding';
  eyebrow: string;
  tagline: string;
  description: string;
  items: string[];
  materials: string[];
  turnaround: string;
  iconName: string;
}

export interface CategoryOption {
  slug: 'all' | 'banners' | 'hoardings' | 'interiors' | 'branding' | 'vehicle-branding';
  label: string;
  count?: number;
}

export const CATEGORIES: CategoryOption[] = [
  { slug: 'all', label: 'All Work' },
  { slug: 'banners', label: 'Banners & Displays' },
  { slug: 'hoardings', label: 'Hoardings & Billboards' },
  { slug: 'interiors', label: 'Interior Fit-Outs' },
  { slug: 'branding', label: 'Branding & Signage' },
  { slug: 'vehicle-branding', label: 'Vehicle Branding' }
];

export const SITE_BRAND = {
  name: "MacGra",
  descriptor: "Advertising",
  tagline: "Sri Lankan Spaces, Made to Be Seen.",
  mission: "MacGra Advertising brings Sri Lankan brands to life across the street and inside spaces where people work. From a first sketch to final installation, our local team brings design, fabrication, and fit-out together.",
  contact: {
    email: "macgra.advertising@gmail.com",
    phone: "+94 71 439 1602",
    phoneDisplay: "+94 71 439 1602",
    whatsapp: "94714391602",
    address: "Bandaragama,Sri Lanka",
    serving: "Serving businesses and institutions across all 9 provinces in Sri Lanka.",
    hours: "Monday – Saturday: 8:30 AM – 6:00 PM"
  },
  stats: [
    { value: "01", suffix: "Team", label: "Concept through Island-Wide Install" },
    { value: "05", suffix: "Crafts", label: "Banners, Hoardings, Interiors, Fleet & Signage" },
    { value: "100+", suffix: "Projects", label: "Commercial and Institutional Deliveries" },
    { value: "LK", suffix: "Island-Wide", label: "Colombo, Kandy, Galle & Outstation" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "advertising",
    categoryKey: "advertising",
    title: "Large-Format Advertising",
    eyebrow: "Be Seen Out There",
    tagline: "High-impact outdoor and event visibility built for Sri Lankan weather.",
    description: "Clear, commanding brand presence designed for the busy roads, intersections, and event grounds where your customers pass every day.",
    items: [
      "Highway hoardings & steel billboard structures",
      "Roll-up standees, backdrop banners & event stages",
      "Front-lit and back-lit flex skin printing & mounting",
      "Roadside junction directional & promotional signage"
    ],
    materials: ["Heavyweight UV-stable flex", "Rust-inhibited GI framing", "Tear-resistant matte vinyl"],
    turnaround: "3 – 5 days for prints, 1 – 2 weeks for structural fabrication",
    iconName: "Megaphone"
  },
  {
    id: "interiors",
    categoryKey: "interiors",
    title: "Interior & Workspace Solutions",
    eyebrow: "Feel at Home at Work",
    tagline: "Considered office details that make commercial spaces unmistakable.",
    description: "Architectural partitions, custom reception counters, and acoustic wall installations that transform plain offices into welcoming, productive brand spaces.",
    items: [
      "Aluminium & 10mm/12mm tempered glass office partitions",
      "Custom reception desks with back-lit 3D emblems",
      "Frosted film privacy designs & glass safety manifestations",
      "Executive boardroom acoustic paneling & wall graphics"
    ],
    materials: ["Powder-coated architectural aluminium", "Tempered safety glass", "Matte frosted vinyl", "Engineered timber"],
    turnaround: "7 – 14 days based on floor area",
    iconName: "LayoutGrid"
  },
  {
    id: "branding",
    categoryKey: "branding",
    title: "Retail & Corporate Branding",
    eyebrow: "Distinctive Identity in Place",
    tagline: "From national institutions to luxury duty-free store fascias.",
    description: "Translating brand guidelines into tangible 3D physical spaces: acrylic letters, LED illuminated lightboxes, shopfront signs, and commercial environments.",
    items: [
      "3D acrylic illuminated channel letters & logos",
      "Duty-free and flagship retail shopfront installations",
      "Government & municipal building public fascia branding",
      "Point-of-sale display towers & brand pillars"
    ],
    materials: ["Cast acrylic", "Waterproof LED modules", "Brushed aluminium composite panels (ACP)"],
    turnaround: "5 – 10 days",
    iconName: "Sparkles"
  },
  {
    id: "vehicle-branding",
    categoryKey: "vehicle-branding",
    title: "Commercial Vehicle Branding",
    eyebrow: "Every Delivery is an Impression",
    tagline: "Fleet wraps engineered to withstand tropical rain and sun.",
    description: "High-grade vehicle vinyl wrapping for corporate cars, delivery vans, and promotional trucks that turns your fleet into mobile billboards.",
    items: [
      "Full and partial vehicle vinyl wraps",
      "Cut-vinyl fleet decals & contact graphics",
      "UV-protective gloss/matte cold lamination",
      "Clean residue-free installation and removal"
    ],
    materials: ["Cast automotive vinyl", "UV-filter protective over-laminate"],
    turnaround: "1 – 3 days per vehicle",
    iconName: "Truck"
  }
];

export interface ClientBrand {
  id: string;
  name: string;
  subtitle: string;
  serviceProvided: string;
  categoryTag: string;
  brandColor: string;
  logoImg: string;
  darkLogoBg?: boolean;
}

export const TRUSTED_CLIENTS: ClientBrand[] = [
  {
    id: "boc",
    name: "Bank of Ceylon (BOC)",
    subtitle: "Bankers to the Nation · Premier State Bank",
    serviceProvided: "Corporate Branch Signage & Wayfinding",
    categoryTag: "Banking & Finance",
    brandColor: "#F58220",
    logoImg: "/assets/aistudio/OIP_d3f009a6.webp"
  },
  {
    id: "hnb-finance",
    name: "HNB Finance",
    subtitle: "Hatton National Bank Group",
    serviceProvided: "Highway Hoardings & Vehicle Fleet Wraps",
    categoryTag: "Finance & Leasing",
    brandColor: "#002B66",
    logoImg: "/assets/aistudio/R_a18a0b79.jpg"
  },
  {
    id: "elephant-house",
    name: "Elephant House",
    subtitle: "Ceylon Cold Stores (Est. 1866)",
    serviceProvided: "Retail Point-of-Sale Activation & Signage",
    categoryTag: "FMCG Heritage",
    brandColor: "#65A30D",
    logoImg: "/assets/aistudio/OIP__2__c7ab2c88.webp"
  },
  {
    id: "ngja",
    name: "National Gem & Jewellery Authority",
    subtitle: "State Statutory Authority of Sri Lanka",
    serviceProvided: "Prestige Reception & Service Counters",
    categoryTag: "Government Institution",
    brandColor: "#B8903F",
    logoImg: "/assets/aistudio/R_1ca5c915.png"
  },
  {
    id: "port-city",
    name: "Colombo Port City",
    subtitle: "Economic Commission & Duty Free Complex",
    serviceProvided: "Luxury Storefront Facades & 3D Letters",
    categoryTag: "Special Economic Zone",
    brandColor: "#0088CC",
    logoImg: "/assets/aistudio/logo-black-meta_d34e8830.jpg"
  },
  {
    id: "cssl",
    name: "CSSL",
    subtitle: "Computer Society of Sri Lanka (Est. 1976)",
    serviceProvided: "National IT Conference Stage Branding",
    categoryTag: "Apex ICT Council",
    brandColor: "#1D4ED8",
    logoImg: "/assets/aistudio/OIP__3__7a32622d.webp"
  },
  {
    id: "energ1",
    name: "Energ1",
    subtitle: "Commercial Energy & Infrastructure",
    serviceProvided: "High-Visibility Highway Hoardings & Partitions",
    categoryTag: "Energy & Infrastructure",
    brandColor: "#00A3FF",
    logoImg: "/assets/aistudio/OIP__1__1e109a81.webp",
    darkLogoBg: true
  }
];

export const PROJECTS: Project[] = [
  {
    id: "canon-banners",
    client: "Canon",
    title: "Canon — Retail & Event Large Banners",
    service: "Banners & Display Graphics",
    category: "banners",
    categoryLabel: "Banners",
    label: "Banners",
    location: "Colombo, Sri Lanka",
    materials: "High-resolution UV front-lit banner flex, reinforced eyelets, portable aluminium framework",
    image: "/img/Banners/canon/WhatsApp Image 2026-11-03 at 12.26.49.jpeg",
    images: [
      "/img/Banners/canon/WhatsApp Image 2026-11-03 at 12.26.49.jpeg",
      "/img/Banners/canon/WhatsApp Image 2026-11-03 at 12.26.51.jpeg"
    ],
    alt: "Canon Banners and product displays",
    imageAlts: [
      "Canon event banner display with high-resolution graphics",
      "Canon promotional stage backdrop setup"
    ],
    description: "Vibrant promotional event banners and retail exhibition backdrops fabricated for Canon Sri Lanka, delivering photographic color fidelity, crisp optics, and durable hardware.",
    highlights: ["Ultra-sharp 1440 DPI print", "Tear-proof hemmed borders", "Rapid setup hardware"]
  },
  {
    id: "cssl-banners",
    client: "CSSL",
    title: "CSSL — Annual Conference & Event Banners",
    service: "Event Branding & Stage Graphics",
    category: "banners",
    categoryLabel: "Banners",
    label: "Banners",
    location: "BMICH / Colombo",
    materials: "Matte non-glare banner textile, heavy-duty aluminium tension standees",
    image: "/img/Banners/CSSL/WhatsApp Image 2026-11-03 at 12.39.35 (2).jpeg",
    images: [
      "/img/Banners/CSSL/WhatsApp Image 2026-11-03 at 12.39.35 (2).jpeg"
    ],
    alt: "CSSL Conference Backdrop and Branding Banner",
    imageAlts: [
      "CSSL event stage backdrop and executive presentation banner"
    ],
    description: "Official conference stage backdrops and registration area display banners for the Computer Society of Sri Lanka, optimized for photography without reflection under studio lighting.",
    highlights: ["Anti-glare camera-friendly finish", "Wrinkle-resistant tensioned mounting", "Precise sponsor logo rendering"]
  },
  {
    id: "msi-banners",
    client: "MSI",
    title: "MSI — Gaming & Tech Launch Displays",
    service: "Promotional Standees & Banners",
    category: "banners",
    categoryLabel: "Banners",
    label: "Banners",
    location: "Tech Mall, Colombo",
    materials: "Gloss saturated vinyl, anodized black metal roll-up casing",
    image: "/img/Banners/msi/WhatsApp Image 2026-11-03 at 12.26.48 (1).jpeg",
    images: [
      "/img/Banners/msi/WhatsApp Image 2026-11-03 at 12.26.48 (1).jpeg"
    ],
    alt: "MSI Tech Launch Banner standee",
    imageAlts: [
      "MSI Gaming promotional banner roll-up display"
    ],
    description: "Dynamic high-contrast gaming hardware promotional banners designed with bold red-and-black contrast for MSI retail product demonstrations in Sri Lanka.",
    highlights: ["Rich deep blacks & RGB vibrancy", "Lightweight portable carry bag", "Durable curl-free PET core"]
  },
  {
    id: "new-monis-banners",
    client: "New Monis",
    title: "New Monis — Highway & Hospitality Banners",
    service: "Outdoor Promotional Banners",
    category: "banners",
    categoryLabel: "Banners",
    label: "Banners",
    location: "Southern Expressway Corridor",
    materials: "Heavyweight 440gsm weather-treated flex, wind-resistant eyelet spacing",
    image: "/img/Banners/New Monis/WhatsApp Image 2026-11-03 at 12.26.57 (2).jpeg",
    images: [
      "/img/Banners/New Monis/WhatsApp Image 2026-11-03 at 12.26.57 (2).jpeg"
    ],
    alt: "New Monis promotional banner",
    imageAlts: [
      "New Monis highway hospitality banner installation"
    ],
    description: "Outdoor banners designed for long-distance highway recognition and roadside diner promotion, withstanding coastal wind and tropical rain.",
    highlights: ["Fade-resistant solvent inks", "Reinforced welded perimeter", "High-visibility typography"]
  },
  {
    id: "biyagama-branding",
    client: "Biyagama Pradeshiya Sabha",
    title: "Biyagama Pradeshiya Sabha — Civic Identity Branding",
    service: "Public Sector & Architectural Branding",
    category: "branding",
    categoryLabel: "Branding",
    label: "Branding",
    location: "Biyagama, Western Province",
    materials: "All-weather composite aluminium, 3D golden emblem lettering",
    image: "/img/Branding/Biyagama pradeshiya sabha/WhatsApp Image 2026-11-03 at 12.33.59.jpeg",
    images: [
      "/img/Branding/Biyagama pradeshiya sabha/WhatsApp Image 2026-11-03 at 12.33.59.jpeg"
    ],
    alt: "Biyagama Pradeshiya Sabha corporate branding sign",
    imageAlts: [
      "Biyagama Pradeshiya Sabha official building branding"
    ],
    description: "Dignified public sector signage and entrance hall branding for the Biyagama Pradeshiya Sabha, bringing authoritative presence and civic pride to the municipal administration building.",
    highlights: ["Corrosion-proof outdoor composite", "Precision laser-cut lettering", "Government crest integration"]
  },
  {
    id: "boc-branding",
    client: "Bank of Ceylon (BOC)",
    title: "Bank of Ceylon (BOC) — Branch Exterior & Interior Branding",
    service: "Corporate Financial Signage",
    category: "branding",
    categoryLabel: "Branding",
    label: "Branding",
    location: "Colombo District",
    materials: "Official BOC yellow/orange acrylic, energy-efficient LED modules, weatherproof casing",
    image: "/img/Branding/BOC/WhatsApp Image 2026-11-03 at 12.36.34.jpeg",
    images: [
      "/img/Branding/BOC/WhatsApp Image 2026-11-03 at 12.36.34.jpeg"
    ],
    alt: "Bank of Ceylon branch branding and signage",
    imageAlts: [
      "Bank of Ceylon branch illuminated signage installation"
    ],
    description: "Corporate branch branding executed strictly to Bank of Ceylon brand guidelines, featuring uniform illumination, durable acrylic face, and architectural integration.",
    highlights: ["Exact brand pantone matching", "Day/night high-contrast illumination", "Certified electrical safety components"]
  },
  {
    id: "elephant-house-branding",
    client: "Elephant House",
    title: "Elephant House — Heritage FMCG Retail Branding",
    service: "Retail Outlet & Point-of-Sale Activation",
    category: "branding",
    categoryLabel: "Branding",
    label: "Branding",
    location: "Colombo / Island-wide Outlets",
    materials: "High-gloss laminated vinyl, custom-cut POS signage boards",
    image: "/img/Branding/Elephant House/WhatsApp Image 2026-11-03 at 12.33.57.jpeg",
    images: [
      "/img/Branding/Elephant House/WhatsApp Image 2026-11-03 at 12.33.55.jpeg",
      "/img/Branding/Elephant House/WhatsApp Image 2026-11-03 at 12.33.57.jpeg"
    ],
    alt: "Elephant House commercial branding installation",
    imageAlts: [
      "Elephant House point-of-sale branding and outlet signage",
      "Elephant House retail brand display installation"
    ],
    description: "Retail and outlet branding for Sri Lanka’s iconic ice cream and beverage brand Elephant House, celebrating heritage colors and appetizing brand graphics.",
    highlights: ["Scratch-resistant lamination", "Instant consumer recognition", "Durable outdoor shopfront fit"]
  },
  {
    id: "ibeach-branding",
    client: "iBeach",
    title: "iBeach — Coastal Lifestyle & Resort Branding",
    service: "Hospitality Exterior & Wayfinding Signage",
    category: "branding",
    categoryLabel: "Branding",
    label: "Branding",
    location: "Mount Lavinia / Coastal Belt",
    materials: "Marine-grade stainless hardware, weather-treated wood & acrylic elements",
    image: "/img/Branding/iBeach/WhatsApp Image 2026-11-03 at 12.39.31.jpeg",
    images: [
      "/img/Branding/iBeach/WhatsApp Image 2026-11-03 at 12.39.31.jpeg"
    ],
    alt: "iBeach leisure venue branding",
    imageAlts: [
      "iBeach coastal venue facade and lifestyle signage"
    ],
    description: "Relaxed coastal lifestyle branding and entrance facade for iBeach, balancing breezy tropical aesthetics with marine-grade durability against salt spray.",
    highlights: ["Salt-air resistant finishes", "Warm ambient lighting integration", "Natural tropical vibe"]
  },
  {
    id: "port-city-duty-free",
    client: "Port City Duty Free",
    title: "Port City Duty Free Colombo — Luxury Retail Facade",
    service: "High-End Retail & Storefront Signage",
    category: "branding",
    categoryLabel: "Branding",
    label: "Branding",
    location: "Port City Duty Free Mall, Colombo",
    materials: "Premium brushed brass, bevelled acrylic, warm-white recessed LED channels",
    image: "/img/Branding/Port City Duty Free/WhatsApp Image 2026-11-03 at 12.35.57.jpeg",
    images: [
      "/img/Branding/Port City Duty Free/WhatsApp Image 2026-11-03 at 12.35.57.jpeg",
      "/img/Branding/Port City Duty Free/WhatsApp Image 2026-11-03 at 12.35.58.jpeg"
    ],
    alt: "Port City Duty Free Colombo premium retail store branding",
    imageAlts: [
      "Port City Duty Free main luxury entrance branding",
      "Port City Duty Free retail corridor illuminated signage"
    ],
    description: "Prestigious luxury store branding for the premier shopping destination at Port City Colombo, featuring precision-machined materials, seamless joinery, and international retail finishes.",
    highlights: ["World-class luxury aesthetic", "Precision flush-mounted LEDs", "Flawless mirror & brushed brass finishes"]
  },
  {
    id: "energ1-hoardings",
    client: "Energ1",
    title: "Energ1 — High-Visibility Highway Hoardings",
    service: "Outdoor Roadside Hoardings & Billboards",
    category: "hoardings",
    categoryLabel: "Hoardings",
    label: "Hoardings",
    location: "Major Junctions, Sri Lanka",
    materials: "Structural steel angle-iron framework, 480gsm flex skin with tensioned ratchets",
    image: "/img/Hoardings/Energ1/WhatsApp Image 2026-11-03 at 12.25.55.jpeg",
    images: [
      "/img/Hoardings/Energ1/WhatsApp Image 2026-11-03 at 12.25.55.jpeg",
      "/img/Hoardings/Energ1/WhatsApp Image 2026-11-03 at 12.27.54.jpeg",
      "/img/Hoardings/Energ1/WhatsApp Image 2026-11-03 at 12.30.04.jpeg"
    ],
    alt: "Energ1 Roadside Billboard Hoarding",
    imageAlts: [
      "Energ1 large-scale highway billboard hoarding installation",
      "Energ1 roadside advertising display structure",
      "Energ1 billboard lighting and mounting overview"
    ],
    description: "Multiple strategic outdoor hoardings engineered and mounted for Energ1, offering unmissable visibility along prime traffic arteries with high-grade anti-weather tensioning.",
    highlights: ["Engineered wind-load certification", "High-intensity LED floodlights", "Clean wrinkle-free skin tensioning"]
  },
  {
    id: "hnb-finance-hoardings",
    client: "HNB Finance",
    title: "HNB Finance — Regional Financial Hoardings",
    service: "Commercial Billboards & Roadside Signs",
    category: "hoardings",
    categoryLabel: "Hoardings",
    label: "Hoardings",
    location: "Island-Wide Arterial Routes",
    materials: "Treated structural tubing, vivid weather-resistant flex, perimeter trim",
    image: "/img/Hoardings/HNB Finance/WhatsApp Image 2026-11-03 at 12.25.56.jpeg",
    images: [
      "/img/Hoardings/HNB Finance/WhatsApp Image 2026-11-03 at 12.25.56.jpeg",
      "/img/Hoardings/HNB Finance/WhatsApp Image 2026-11-03 at 12.25.57.jpeg"
    ],
    alt: "HNB Finance Roadside Billboard",
    imageAlts: [
      "HNB Finance regional highway billboard structure",
      "HNB Finance urban junction branding billboard"
    ],
    description: "Prominent regional hoardings showcasing HNB Finance loan, leasing, and savings solutions, built to command attention from passing motorists day and night.",
    highlights: ["High-impact financial messaging", "Solid reinforced foundations", "Long-term UV resistance"]
  },
  {
    id: "prageeth-auto-hoardings",
    client: "Prageeth Auto Traders",
    title: "Prageeth Auto Traders — Commercial Hoarding",
    service: "Automotive Commercial Billboard",
    category: "hoardings",
    categoryLabel: "Hoardings",
    label: "Hoardings",
    location: "Automotive Hub, Sri Lanka",
    materials: "Heavy-gauge galvanised iron framing, high-resolution solvent print",
    image: "/img/Hoardings/Prageeth Auto Traders/WhatsApp Image 2026-11-03 at 12.25.49.jpeg",
    images: [
      "/img/Hoardings/Prageeth Auto Traders/WhatsApp Image 2026-11-03 at 12.25.49.jpeg"
    ],
    alt: "Prageeth Auto Traders Commercial Billboard",
    imageAlts: [
      "Prageeth Auto Traders vehicle showroom roadside billboard"
    ],
    description: "Automotive showroom promotional hoarding designed for maximum visual punch, highlighting imported vehicles and financing partnerships.",
    highlights: ["Bold vehicle imagery", "Robust weather-proof mounting", "Directional showroom cue"]
  },
  {
    id: "energ1-interiors",
    client: "Energ1",
    title: "Energ1 — Corporate Office Interior & Partitions",
    service: "Interior Office Fit-Out",
    category: "interiors",
    categoryLabel: "Interiors",
    label: "Interiors",
    location: "Colombo Office HQ",
    materials: "Black anodized aluminium profiles, acoustic glass panels, frosted geometric branding",
    image: "/img/Interiors/Energ1/WhatsApp Image 2026-11-03 at 12.27.49.jpeg",
    images: [
      "/img/Interiors/Energ1/WhatsApp Image 2026-11-03 at 12.27.49.jpeg",
      "/img/Interiors/Energ1/WhatsApp Image 2026-11-03 at 12.27.53.jpeg"
    ],
    alt: "Energ1 Corporate Office Interior and Partitions",
    imageAlts: [
      "Energ1 executive suite glass partitions and ambient lighting",
      "Energ1 conference room custom frosted glass branding"
    ],
    description: "Contemporary workspace interior fit-out for Energ1 featuring black industrial aluminium framing, sound-dampening acoustic glass partitions, and custom frosted privacy graphics.",
    highlights: ["Acoustic sound insulation", "Modern industrial styling", "Custom safety and privacy decals"]
  },
  {
    id: "corporate-interior-suite",
    client: "Interior",
    title: "Commercial Workspace — Executive Glass Partitions",
    service: "Architectural Interior Fit-Out",
    category: "interiors",
    categoryLabel: "Interiors",
    label: "Interiors",
    location: "Colombo Business District",
    materials: "12mm toughened frameless glass, stainless patch fittings, concealed ceiling track",
    image: "/img/Interiors/Interior/WhatsApp Image 2026-11-03 at 12.32.43 (1).jpeg",
    images: [
      "/img/Interiors/Interior/WhatsApp Image 2026-11-03 at 12.32.43 (1).jpeg",
      "/img/Interiors/Interior/WhatsApp Image 2026-11-03 at 12.33.35.jpeg",
      "/img/Interiors/Interior/WhatsApp Image 2026-11-03 at 12.33.54.jpeg",
      "/img/Interiors/Interior/WhatsApp Image 2026-11-03 at 12.33.55.jpeg"
    ],
    alt: "Modern office interior with glass partitions and natural light",
    imageAlts: [
      "Executive suite frameless glass partition wall",
      "Open workspace transition with natural wood accents",
      "Private meeting cubicle with acoustic acoustic seals",
      "Corridor lighting and glass manifestation design"
    ],
    description: "A comprehensive corporate office transformation featuring floor-to-ceiling toughened glass partitions, acoustic privacy seals, and modern minimalism designed to maximize daylight across the open floor plan.",
    highlights: ["Maximum natural daylight transmission", "Concealed track minimalist aesthetics", "High-traffic durability"]
  },
  {
    id: "jss-consultants-interiors",
    client: "JSS Consultants",
    title: "JSS Consultants — Professional Firm Workspace",
    service: "Consulting Suite Fit-Out & Partitions",
    category: "interiors",
    categoryLabel: "Interiors",
    label: "Interiors",
    location: "Nawala / Colombo",
    materials: "Custom acoustic partitions, frosted line privacy design, integrated electrical raceways",
    image: "/img/Interiors/JSS Consultants/WhatsApp Image 2026-11-03 at 12.39.36 (1).jpeg",
    images: [
      "/img/Interiors/JSS Consultants/WhatsApp Image 2026-11-03 at 12.39.36 (1).jpeg",
      "/img/Interiors/JSS Consultants/WhatsApp Image 2026-11-03 at 12.39.37 (1).jpeg",
      "/img/Interiors/JSS Consultants/WhatsApp Image 2026-11-03 at 12.39.37.jpeg"
    ],
    alt: "JSS Consultants office interior fit-out",
    imageAlts: [
      "JSS Consultants consultation rooms and glass doors",
      "JSS Consultants hallway partition layout",
      "JSS Consultants private client discussion room"
    ],
    description: "A clean, private, and confidential environment designed for JSS Consultants. Features discreet acoustic room divides, clean frosted linear detailing, and coordinated door hardware.",
    highlights: ["Strict acoustic confidentiality", "Ergonomic workspace flow", "Precision aligned linear frosting"]
  },
  {
    id: "national-gem-jewellery-authority",
    client: "National Gem & Jewellery Authority",
    title: "National Gem & Jewellery Authority — Reception & Service Center",
    service: "Government Prestige Interior Fit-Out",
    category: "interiors",
    categoryLabel: "Interiors",
    label: "Interiors",
    location: "Colombo 03, Sri Lanka",
    materials: "Premium solid wood veneer, brass accents, illuminated gold crest, heavy-duty service counters",
    image: "/img/Interiors/National Gem & Jewellery Authority/WhatsApp Image 2026-11-03 at 12.39.38 (1).jpeg",
    images: [
      "/img/Interiors/National Gem & Jewellery Authority/WhatsApp Image 2026-11-03 at 12.39.38 (1).jpeg",
      "/img/Interiors/National Gem & Jewellery Authority/WhatsApp Image 2026-11-03 at 12.39.39 (2).jpeg",
      "/img/Interiors/National Gem & Jewellery Authority/WhatsApp Image 2026-11-03 at 12.39.40.jpeg",
      "/img/Interiors/National Gem & Jewellery Authority/WhatsApp Image 2026-11-03 at 12.39.45 (1).jpeg",
      "/img/Interiors/National Gem & Jewellery Authority/WhatsApp Image 2026-11-03 at 12.39.45.jpeg",
      "/assets/images/interiors/national-gem-jewellery-authority/WhatsApp Image 2026-11-03 at 12.39.48.jpeg"
    ],
    alt: "National Gem & Jewellery Authority official reception and service interior",
    imageAlts: [
      "Main reception counter and official Sri Lankan gem insignia",
      "Client waiting lounge and certificate verification counters",
      "Detailed wooden panelling and brass trims",
      "Customer service cubicle partitions and secure desks",
      "Inspection room partitions and lighting setup",
      "Complete entrance foyer architectural view"
    ],
    description: "A landmark interior and counter fabrication for the National Gem & Jewellery Authority. Combines the heritage gravitas of Sri Lanka’s world-renowned gem trade with high-security service counters, brass detailing, and elegant customer reception halls.",
    highlights: ["High-security service counter joinery", "Hand-finished brass & rich timber trims", "6-stage comprehensive interior delivery"]
  },
  {
    id: "star-interiors",
    client: "Star",
    title: "Star — Commercial Facility Interior Fit-Out",
    service: "Commercial Partitions & Entrance Desk",
    category: "interiors",
    categoryLabel: "Interiors",
    label: "Interiors",
    location: "Western Province",
    materials: "Aluminium composite panelling, acrylic accents, modular partition system",
    image: "/img/Interiors/Star/WhatsApp Image 2026-11-03 at 12.30.16 (1).jpeg",
    images: [
      "/img/Interiors/Star/WhatsApp Image 2026-11-03 at 12.30.16 (1).jpeg",
      "/img/Interiors/Star/WhatsApp Image 2026-11-03 at 12.30.17 (1).jpeg"
    ],
    alt: "Star commercial interior project",
    imageAlts: [
      "Star reception counter and lobby partition",
      "Star internal workflow division and office doors"
    ],
    description: "Durable and practical commercial interior layout for Star, optimizing high-traffic areas with scratch-resistant surfaces, welcoming reception elements, and efficient room zoning.",
    highlights: ["Low-maintenance durable materials", "Rapid clean installation", "Modern reception focal point"]
  },
  {
    id: "hnb-finance-vehicle-branding",
    client: "HNB Finance",
    title: "HNB Finance — Commercial Vehicle Fleet Branding",
    service: "Vehicle Fleet Wraps & Vinyl Graphics",
    category: "vehicle-branding",
    categoryLabel: "Vehicle Branding",
    label: "Vehicle Branding",
    location: "Island-Wide Fleet",
    materials: "Premium 3M cast vehicle vinyl, UV-resistant clear protective over-lamination",
    image: "/img/vehicle-branding/HNB Finance/WhatsApp Image 2026-11-03 at 12.24.52 (1).jpeg",
    images: [
      "/img/vehicle-branding/HNB Finance/WhatsApp Image 2026-11-03 at 12.24.52 (1).jpeg",
      "/img/vehicle-branding/HNB Finance/WhatsApp Image 2026-11-03 at 12.24.52.jpeg"
    ],
    alt: "HNB Finance vehicle fleet branding wrap",
    imageAlts: [
      "HNB Finance corporate branded vehicle side profile",
      "HNB Finance delivery and promotional van wrap rear and side detail"
    ],
    description: "Precision-wrapped commercial vehicles for HNB Finance’s customer outreach and field operations. Engineered to resist UV fading from tropical sun, engine heat, and road debris.",
    highlights: ["Bubble-free micro-channel vinyl application", "Curved body contour conformity", "3+ year outdoor durability warranty"]
  }
];

export interface EstimatorPreset {
  id: string;
  name: string;
  category: string;
  unit: string;
  defaultQty: number;
  minQty: number;
  maxQty: number;
  rates: {
    standard: number;
    premium: number;
    luxury: number;
  };
  options: {
    key: string;
    label: string;
    priceMultiplier: number;
  }[];
  description: string;
}

export const ESTIMATOR_PRESETS: EstimatorPreset[] = [
  {
    id: "hoardings",
    name: "Outdoor Highway Hoarding",
    category: "hoardings",
    unit: "sq. ft.",
    defaultQty: 200,
    minQty: 50,
    maxQty: 1200,
    rates: {
      standard: 180, // LKR per sq ft
      premium: 260,
      luxury: 380
    },
    options: [
      { key: "steel", label: "GI Steel Frame Included", priceMultiplier: 1.35 },
      { key: "lights", label: "LED Floodlight System", priceMultiplier: 1.2 },
      { key: "installation", label: "Island-Wide Installation & Rigging", priceMultiplier: 1.15 }
    ],
    description: "Includes high-grade 440gsm/480gsm UV-treated flex skin, precision solvent printing, and wind-load tensioning."
  },
  {
    id: "partitions",
    name: "Office Glass & Aluminium Partition",
    category: "interiors",
    unit: "sq. ft.",
    defaultQty: 180,
    minQty: 40,
    maxQty: 2000,
    rates: {
      standard: 650, // LKR per sq ft
      premium: 950,
      luxury: 1450
    },
    options: [
      { key: "tempered", label: "10mm/12mm Tempered Safety Glass", priceMultiplier: 1.25 },
      { key: "frosting", label: "Custom Frosted Film Manifestations", priceMultiplier: 1.12 },
      { key: "doors", label: "Swing Glass Door with Patch Fittings", priceMultiplier: 1.2 }
    ],
    description: "Commercial powder-coated aluminium or frameless tempered glass partitions with acoustic buffer strips."
  },
  {
    id: "banners",
    name: "Event Backdrops & Roll-up Standees",
    category: "banners",
    unit: "units",
    defaultQty: 2,
    minQty: 1,
    maxQty: 25,
    rates: {
      standard: 8500, // LKR per roll-up
      premium: 14500,
      luxury: 24000
    },
    options: [
      { key: "standee", label: "Heavy Base Deluxe Aluminium Standee", priceMultiplier: 1.25 },
      { key: "anti_glare", label: "Non-Glare Studio Photo Fabric", priceMultiplier: 1.2 },
      { key: "carry_bag", label: "Padded Water-Resistant Carry Case", priceMultiplier: 1.08 }
    ],
    description: "Portable exhibition standees, stage backdrops, and promotional banners with vibrant 1440 DPI fidelity."
  },
  {
    id: "vehicle",
    name: "Commercial Vehicle Branding Wrap",
    category: "vehicle-branding",
    unit: "vehicles",
    defaultQty: 1,
    minQty: 1,
    maxQty: 20,
    rates: {
      standard: 65000, // LKR per vehicle
      premium: 110000,
      luxury: 175000
    },
    options: [
      { key: "full_wrap", label: "Full 360° Body & Window Perforated Wrap", priceMultiplier: 1.4 },
      { key: "uv_laminate", label: "Automotive Cast UV Overlaminate", priceMultiplier: 1.18 },
      { key: "fleet_discount", label: "Fleet Batch Processing (3+ Vehicles)", priceMultiplier: 0.92 }
    ],
    description: "Cast vinyl graphics contour-fitted to vans, trucks, and cars with protective weather clear-coat."
  },
  {
    id: "reception",
    name: "Custom Corporate Reception Counter",
    category: "interiors",
    unit: "counter (r.ft)",
    defaultQty: 8,
    minQty: 4,
    maxQty: 30,
    rates: {
      standard: 18000, // LKR per running ft
      premium: 29000,
      luxury: 48000
    },
    options: [
      { key: "backlit", label: "Back-Lit 3D Acrylic Logo Plaque", priceMultiplier: 1.2 },
      { key: "marble_top", label: "Quartz/Granite Work Surface", priceMultiplier: 1.3 },
      { key: "cable_mgmt", label: "Concealed Cable & Electrical Channels", priceMultiplier: 1.08 }
    ],
    description: "Bespoke executive welcome counter custom-fabricated to match architectural floorplans and branding."
  }
];

export const FAQS = [
  {
    question: "Do you handle local municipal and council hoarding permits in Sri Lanka?",
    answer: "Yes. For roadside hoardings and outdoor billboards across Colombo Municipal Council (CMC), suburban Pradeshiya Sabhas, and regional authorities, we assist with structural drawings, municipal applications, and local regulatory clearances."
  },
  {
    question: "How do your materials hold up against Sri Lanka's intense sun and monsoon rains?",
    answer: "Our outdoor flex banners and hoardings use heavy 440gsm–480gsm UV-stabilized skins with solvent and UV-curable inks that won't run or fade prematurely. For vehicles, we use automotive-grade cast vinyl with cold UV lamination to prevent peeling and discoloration."
  },
  {
    question: "Can MacGra install glass office partitions and reception desks outside of Colombo?",
    answer: "Absolutely. Our installation crews travel island-wide. We have successfully completed large institutional and commercial interior projects across Kandy, Gampaha, Kurunegala, Galle, Jaffna, and the southern coastal belt."
  },
  {
    question: "What is your typical turnaround time for a custom project?",
    answer: "Standee banners and event graphics can be printed and framed within 24 to 48 hours for urgent requirements. Commercial hoardings typically take 3 to 7 days, and full corporate office partitions take 1 to 2 weeks depending on square footage."
  },
  {
    question: "How can I get an exact on-site measurement and quotation?",
    answer: "You can request an estimate using our online cost calculator or submit your details in the contact form below. Our project engineer will schedule a site visit anywhere in Sri Lanka with material swatch samples."
  }
];

export const TESTIMONIALS = [
  {
    quote: "MacGra delivered our reception area and consultation cubicles with remarkable attention to detail. The brass accents and custom joinery gave our public service center the dignity and prestige it deserved.",
    author: "Director of Administration",
    org: "National Gem & Jewellery Authority",
    tag: "Interior Fit-Out"
  },
  {
    quote: "From highway hoardings along the expressway to branch signage, MacGra understands both visual scale and durability against Sri Lankan coastal weather. Reliable delivery every single time.",
    author: "Marketing & Communications Lead",
    org: "HNB Finance",
    tag: "Hoardings & Vehicle Fleet"
  },
  {
    quote: "The luxury storefront facade at Port City Duty Free required international-grade precision. MacGra's illuminated channel lettering and flawless brushed brass exceeded our exacting standards.",
    author: "Retail Project Manager",
    org: "Port City Duty Free Colombo",
    tag: "Luxury Retail Branding"
  }
];
