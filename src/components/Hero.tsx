import React from 'react';
import { ArrowUpRight, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateSection }) => {
  const tickerItems = [
    "Outdoor Hoardings",
    "Office Glass Partitions",
    "Highway Billboards",
    "Reception Counters",
    "Roll-Up Banners",
    "Vehicle Fleet Wraps",
    "3D Acrylic Signage",
    "Event Stage Graphics",
    "Shopfront Fascias",
    "Island-Wide Installation"
  ];

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-subtle-grid bg-white">
      {/* Dynamic MagGra Blue & Solar Orange Atmosphere Glows */}
      <div className="absolute top-1/4 right-5 w-96 h-96 rounded-full bg-[#1a56b8]/08 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#f15a24]/08 blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Eyebrow in Solar Orange */}
            <div className="inline-flex items-center gap-2.5 text-[#f15a24] text-[11px] font-bold tracking-[0.2em] uppercase mb-6 bg-[#fff3ec] px-3 py-1 rounded-full border border-[#f15a24]/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#f15a24] animate-pulse" />
              <span>Sri Lankan Craft · Made to Be Seen</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-normal tracking-[-0.03em] text-[#0f172a] leading-[0.98] mb-6 max-w-4xl">
              Creative work <br className="hidden sm:inline" />
              for brands <em className="italic text-[#1a56b8] font-serif">with place.</em>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-9 font-normal">
              From commanding highway hoardings and commercial vehicle fleet wraps to architectural glass partitions and executive reception suites across Sri Lankan workspaces.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('work');
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#f15a24] hover:bg-[#d74614] text-white text-[13px] font-bold tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('contact');
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-50/70 hover:bg-blue-100/70 text-[#1a56b8] text-[13px] font-bold tracking-wider uppercase rounded-lg border border-blue-200 transition-all duration-200"
              >
                <span>Request a Quote</span>
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('services');
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-slate-600 hover:text-[#1a56b8] text-[13px] font-medium transition-colors"
              >
                <span>Our Capabilities</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-y-3 gap-x-6 text-[12px] text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1a56b8]" />
                <span className="font-medium">Direct In-House Fabrication</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1a56b8]" />
                <span className="font-medium">Heavy-Duty UV Tropical Resistant Flex</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f15a24]" />
                <span className="font-medium">Island-Wide Rigging & Fitting Crews</span>
              </span>
            </div>
          </div>

          {/* Right Hero Feature Graphic & Stamp */}
          <div className="lg:col-span-4 relative flex flex-col items-center lg:items-end">
            {/* Visual Card showing real commercial execution */}
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/img/Interiors/National Gem & Jewellery Authority/WhatsApp Image 2026-11-03 at 12.39.40.jpeg"
                  alt="National Gem and Jewellery Authority interior reception by MagGra"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] tracking-wider uppercase bg-[#f15a24] px-2.5 py-0.5 rounded text-white font-bold inline-block mb-1 shadow-sm">
                    Featured Fit-Out
                  </span>
                  <p className="font-display text-lg font-bold leading-tight">
                    National Gem & Jewellery Authority
                  </p>
                  <p className="text-[11px] text-slate-200 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#f15a24]" />
                    Colombo 03 · Reception & Service Counters
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">Client Grade</span>
                  <span className="font-bold text-[#0f172a]">State Authority & Corporate</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">Execution</span>
                  <span className="font-bold text-[#1a56b8]">100% Turnkey Delivery</span>
                </div>
              </div>
            </div>

            {/* Circular Floating Badge styled like MagGra Blue & Solar Orange Orbit */}
            <div className="absolute -bottom-6 -left-6 sm:-left-10 w-28 h-28 rounded-full border-2 border-[#1a56b8]/30 bg-white/95 backdrop-blur-md shadow-xl p-2 flex flex-col items-center justify-center text-center animate-float z-20">
              <div className="w-6 h-6 rounded-full bg-[#fff3ec] flex items-center justify-center mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-[#f15a24]" />
              </div>
              <span className="font-display text-[12px] leading-tight font-bold text-[#1a56b8]">
                Designed Here.
              </span>
              <span className="font-serif italic text-[11px] font-semibold text-[#f15a24]">
                Made to Last.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker in Brand Blue & Solar Orange */}
      <div className="mt-14 w-full overflow-hidden border-y border-slate-200 bg-[#f8fafc] py-3.5 relative">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-[#1a56b8] text-xs font-bold tracking-[0.16em] uppercase">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              <span className="w-2 h-2 rounded-full bg-[#f15a24] shadow-xs" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
