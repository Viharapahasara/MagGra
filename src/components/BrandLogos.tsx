import React from 'react';

interface LogoProps {
  className?: string;
}

// 1. Canon — Iconic red wordmark with distinctive angled hook C
export const CanonLogo: React.FC<LogoProps> = ({ className = "h-6 w-auto" }) => (
  <svg viewBox="0 0 160 36" fill="#CC0000" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Canon Logo">
    {/* C */}
    <path d="M28.4 5.2C25.8 2 21.6.4 16.2.4 6.8.4.2 7.2.2 18.2c0 10.9 6.5 17.6 15.9 17.6 5.5 0 9.8-1.7 12.4-5l-4-3.6c-2 2.3-5 3.5-8.4 3.5-6.5 0-10.7-5-10.7-12.5 0-7.4 4.3-12.5 10.8-12.5 3.3 0 6.2 1.2 8.2 3.4l4-3.9zM16.5 6.3L22 0H16l-4.5 5.2 5 1.1z" />
    {/* a */}
    <path d="M48.2 11.2c-2.4-.8-5.3-1.2-8.3-1.2-6.5 0-10.8 3.5-10.8 9.1 0 5.4 3.9 8.8 9.6 8.8 3.5 0 6.5-1.3 8.3-3.7v3.2h5.1V15.1c0-4.6-3.2-6.9-8.4-6.9-3.2 0-6.4.8-8.8 2.3l2.1 3.8c1.8-1.1 4.1-1.7 6.4-1.7 2.8 0 4.6 1.1 4.6 3.4v1.2l-.2-6.9zm-4.6 12.3c-1.6 1.8-3.9 2.8-6.4 2.8-3.4 0-5.5-1.9-5.5-4.8 0-3 2.3-4.9 6.3-4.9 2.1 0 4.2.4 5.6 1v5.9z" />
    {/* n */}
    <path d="M60.1 10.5h-5.1v24.7h5.1V20.8c0-4.3 2.6-6.6 6.5-6.6 3.6 0 5.8 2 5.8 5.8v15.2h5.1V19.4c0-6-3.7-9.4-9.3-9.4-3.8 0-6.6 1.6-8.1 4.2v-3.7z" />
    {/* o */}
    <path d="M96.7 10c-7.3 0-12.6 5.5-12.6 12.9s5.3 12.9 12.6 12.9 12.6-5.5 12.6-12.9S104 10 96.7 10zm0 20.8c-4.4 0-7.4-3.5-7.4-7.9s3-7.9 7.4-7.9 7.4 3.5 7.4 7.9-3 7.9-7.4 7.9z" />
    {/* n */}
    <path d="M125.1 10.5h-5.1v24.7h5.1V20.8c0-4.3 2.6-6.6 6.5-6.6 3.6 0 5.8 2 5.8 5.8v15.2h5.1V19.4c0-6-3.7-9.4-9.3-9.4-3.8 0-6.6 1.6-8.1 4.2v-3.7z" />
  </svg>
);

// 2. Bank of Ceylon (BOC) — Official Orange/Gold Shield with Lion Head & BOC Monogram
export const BOCLogo: React.FC<LogoProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 150 44" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Bank of Ceylon (BOC) Logo">
    {/* Circle badge in BOC Orange */}
    <circle cx="22" cy="22" r="20" fill="#F58220" />
    {/* Inner decorative ring */}
    <circle cx="22" cy="22" r="18" fill="none" stroke="#FFD200" strokeWidth="1.5" />
    {/* Stylized Ceylon Lion Silhouette in Golden Yellow */}
    <path
      d="M23 9c-1.8 0-3.3 1-4.2 2.5-.5-.3-1.1-.5-1.8-.5-1.5 0-2.8.9-3.4 2.2-.4-.2-.8-.3-1.3-.3-1.5 0-2.7 1.1-2.9 2.5-.9.4-1.5 1.3-1.5 2.4 0 .7.3 1.4.8 1.9-.3.6-.5 1.3-.5 2 0 1.2.6 2.3 1.6 3 .2 1.3 1 2.3 2.2 2.8.6 1.1 1.7 1.8 3 1.9 1 .8 2.3 1.3 3.7 1.3 1.6 0 3-.6 4.1-1.7 1 .5 2.2.7 3.4.5 1.8-.3 3.3-1.5 4-3.1.9-.4 1.7-1.1 2.1-2 .9-.4 1.6-1.2 1.8-2.2.5-.8.7-1.8.5-2.8-.2-1.3-.9-2.3-1.9-2.9.2-.8.1-1.7-.3-2.4-.6-1.1-1.6-1.8-2.8-2-.3-1.4-1.3-2.5-2.6-3-.6-1.3-1.9-2.1-3.4-2.1zm-1 4.5c.8 0 1.5.5 1.8 1.2.3.7.1 1.6-.4 2.1-.5.5-1.3.7-2 .5-.7-.2-1.2-.8-1.3-1.5-.1-.7.2-1.5.8-1.9.3-.3.7-.4 1.1-.4zm5.5 5c.6 0 1.2.4 1.4 1 .2.6 0 1.3-.5 1.7-.5.4-1.1.5-1.7.3-.5-.2-.9-.7-1-1.2-.1-.6.2-1.2.7-1.5.3-.2.7-.3 1.1-.3z"
      fill="#FFD200"
    />
    {/* BOC Bold Typography */}
    <text x="48" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="21" fill="#1C1917" letterSpacing="0.04em">
      BOC
    </text>
    {/* Descriptor */}
    <text x="49" y="34" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="7.5" fill="#E87714" letterSpacing="0.14em">
      BANK OF CEYLON
    </text>
  </svg>
);

// 3. HNB Finance — Royal Navy & Gold Elephant Shield with Modern Financial Typography
export const HNBFinanceLogo: React.FC<LogoProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 44" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="HNB Finance Logo">
    {/* Solid Royal Blue Diamond/Shield Base */}
    <rect x="2" y="4" width="36" height="36" rx="7" fill="#002B66" />
    <path d="M4 22L20 6l16 16-16 16z" fill="#003580" opacity="0.6" />
    {/* HNB Elephant & Sunrise Emblem in Gold */}
    <path
      d="M13 25c0-4 3-7 7-7s7 3 7 7v2h-14v-2zm12-4c-.7-1.5-2.2-2.5-4-2.5-2 0-3.6 1.2-4.2 3h8.2zm-9 6h10v2H16v-2zm-3-1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
      fill="#FDB913"
    />
    <circle cx="20" cy="13" r="2.5" fill="#FDB913" />
    {/* HNB Text */}
    <text x="45" y="23" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="20" fill="#002B66" letterSpacing="0.05em">
      HNB
    </text>
    {/* FINANCE Badge in Gold */}
    <rect x="94" y="11" width="58" height="13" rx="3" fill="#FDB913" />
    <text x="98" y="21" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="8" fill="#002B66" letterSpacing="0.16em">
      FINANCE
    </text>
    {/* Subtitle */}
    <text x="46" y="34" fontFamily="'DM Sans', sans-serif" fontWeight="600" fontSize="7.5" fill="#716758" letterSpacing="0.08em">
      HATTON NATIONAL BANK GROUP
    </text>
  </svg>
);

// 4. Elephant House — Sri Lanka's Iconic Heritage Brand (Gold Sunburst + Elephant Silhouette)
export const ElephantHouseLogo: React.FC<LogoProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 165 44" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Elephant House Logo">
    {/* Golden Sun Emblem */}
    <circle cx="21" cy="22" r="19" fill="#F59E0B" />
    <circle cx="21" cy="22" r="16.5" fill="#D97706" />
    {/* Iconic Ceylon Elephant Silhouette */}
    <path
      d="M12 26c.5-5 3.5-7.5 7-8 1.5-.2 3.5-.2 5 .8 1.5 1 2 2.5 2.5 4 .5 1.5 1 2 2 2.5.8.4 2 .3 2.5 0 .4-.3.6-.8.7-1.3.2-1 .1-2.2-.4-3-.4-.6-.8-1-1.3-1.3-.5-.3-.7-.7-.6-1.2.1-.5.6-.8 1.1-.7 1.2.2 2.3 1.1 2.8 2.2.7 1.5.7 3.3.3 4.8-.4 1.5-1.4 2.7-2.8 3.3-1.5.6-3.2.4-4.5-.4-.7-.4-1.2-1-1.6-1.7-.5-1-1-2.2-1.7-3-.8-.8-1.9-1.2-3-1-2.5.4-4.6 2.5-5 5.5l-.2 3.8h-2.5L12 26z"
      fill="#FFFFFF"
    />
    {/* Text */}
    <text x="46" y="20" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="700" fontSize="16" fill="#1C1917" letterSpacing="0.02em">
      Elephant House
    </text>
    <text x="47" y="31" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="7.5" fill="#D97706" letterSpacing="0.18em">
      SINCE 1866 · CEYLON COLD STORES
    </text>
  </svg>
);

// 5. MSI (Micro-Star International) — Iconic Dragon Shield & Tech Monogram
export const MSILogo: React.FC<LogoProps> = ({ className = "h-6 w-auto" }) => (
  <svg viewBox="0 0 130 36" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="MSI Logo">
    {/* Red Gaming Dragon Badge */}
    <path d="M4 2h24l4 14-16 18L0 16z" fill="#E11D48" />
    {/* Stylized White Dragon Crest Outline */}
    <path
      d="M16 6c1.5 2 4 3 6 2-1 2-1 4 0 6-2-1-4-1-5 1 0-2-1-4-3-4 1 3 0 6-2 7 0-3-1-5-3-6 1 3 0 6-2 7 0-4 3-8 6-10 1-1 2-2 3-3z"
      fill="#FFFFFF"
    />
    {/* Bold Modern "msi" Letters */}
    <text x="36" y="24" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="24" fill="#E11D48" letterSpacing="-0.04em">
      msi
    </text>
    <circle cx="118" cy="18" r="2.5" fill="#E11D48" />
  </svg>
);

// 6. Port City Colombo Duty Free — Luxury Architectural Sails & Golden Emerald Wordmark
export const PortCityLogo: React.FC<LogoProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 170 44" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Port City Colombo Duty Free Logo">
    {/* Luxury Emerald & Gold Waves / Sail Icon */}
    <rect x="2" y="4" width="36" height="36" rx="8" fill="#047857" />
    <path d="M10 32C12 20 22 10 30 8c-4 10-6 16-20 24z" fill="#D4AF37" />
    <path d="M8 32c4-7 10-14 16-16-3 6-5 11-16 16z" fill="#FFFFFF" opacity="0.85" />
    {/* Typography */}
    <text x="45" y="19" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="700" fontSize="15" fill="#047857" letterSpacing="0.08em">
      PORT CITY COLOMBO
    </text>
    <text x="46" y="31" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="8" fill="#B8903F" letterSpacing="0.22em">
      DUTY FREE COMPLEX
    </text>
  </svg>
);

// 7. National Gem & Jewellery Authority (NGJA) — Royal Ceylon Sapphire Gem Crest
export const NGJALogo: React.FC<LogoProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 170 44" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="National Gem & Jewellery Authority Logo">
    {/* Royal Blue / Indigo Gemstone Polygon Badge */}
    <polygon points="20,4 34,13 34,31 20,40 6,31 6,13" fill="#1E3A8A" stroke="#B8903F" strokeWidth="1.5" />
    {/* Inner Gem Facet Lines */}
    <polygon points="20,11 29,17 29,27 20,33 11,27 11,17" fill="none" stroke="#60A5FA" strokeWidth="1" />
    <path d="M20 4v36M6 13l28 18M34 13L6 31" stroke="#93C5FD" strokeWidth="0.8" opacity="0.4" />
    <circle cx="20" cy="22" r="2.5" fill="#F59E0B" />
    {/* Typography */}
    <text x="44" y="18" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="13" fill="#1E3A8A" letterSpacing="0.04em">
      GEM & JEWELLERY
    </text>
    <text x="45" y="29" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="7.5" fill="#B8903F" letterSpacing="0.14em">
      NATIONAL AUTHORITY · SRI LANKA
    </text>
  </svg>
);

// 8. CSSL (Computer Society of Sri Lanka) — Official ICT Council Digital Swoosh
export const CSSLLogo: React.FC<LogoProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 145 44" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="CSSL Logo">
    {/* Tech Cyan Circle */}
    <circle cx="21" cy="22" r="18" fill="#0284C7" />
    {/* Orbit Circuit Swoosh */}
    <path d="M10 22c0-6 5-11 11-11s11 5 11 11-5 11-11 11" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="3 2" />
    <circle cx="27" cy="14" r="2.5" fill="#FFFFFF" />
    <path d="M15 22l4 4 8-8" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Bold CSSL Letters */}
    <text x="46" y="23" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontSize="21" fill="#0284C7" letterSpacing="0.05em">
      CSSL
    </text>
    {/* Subtitle */}
    <text x="47" y="33" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="7" fill="#64748B" letterSpacing="0.12em">
      COMPUTER SOCIETY OF SRI LANKA
    </text>
  </svg>
);
