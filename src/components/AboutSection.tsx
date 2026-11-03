import React from 'react';
import { ArrowUpRight, ShieldCheck, Hammer, Palette, Compass } from 'lucide-react';
import { SITE_BRAND } from '../data/siteData';

interface AboutSectionProps {
  onNavigateSection: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateSection }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Tagline */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2.5 text-[#f15a24] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              <span>A Little About Us / 01</span>
              <span className="w-8 h-[1px] bg-[#1a56b8]" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#0f172a] leading-[1.05] tracking-tight mb-8">
              Good work <br />
              <em className="text-[#1a56b8] italic font-serif">belongs</em> somewhere.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
              MagGra Advertising is a dedicated Sri Lankan production and interior fit-out agency. We believe commercial brands deserve more than generic prints and hasty setups.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Whether mounting a 60-foot structural hoarding along the expressway, outfitting a state-of-the-art corporate office with frameless acoustic glass, or wrapping an entire distribution vehicle fleet, we manage the full journey: design translation, engineering, local workshop fabrication, and on-site fitting.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('contact');
                }}
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wider uppercase text-[#f15a24] hover:text-[#d74614] transition-colors group"
              >
                <span>Speak With Our Team</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <span className="text-slate-500 text-xs">· Colombo & Island-Wide</span>
            </div>
          </div>

          {/* Right Column: Key Pillars & Guarantee */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-[#f8fafc] rounded-xl border border-slate-200/90 shadow-xs hover:border-[#1a56b8]/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a56b8] border border-blue-200 flex items-center justify-center mb-4">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0f172a] mb-2">
                  In-House Fabrication
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No middleman markups. Our skilled joiners, welders, and print specialists build everything in our dedicated workshops.
                </p>
              </div>

              <div className="p-6 bg-[#f8fafc] rounded-xl border border-slate-200/90 shadow-xs hover:border-[#f15a24]/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#f15a24] border border-orange-200 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0f172a] mb-2">
                  Monsoon & Sun Rated
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tested specifically for Sri Lanka’s coastal humidity, heavy rainfall, and UV exposure. Built to remain taut and vibrant.
                </p>
              </div>

              <div className="p-6 bg-[#f8fafc] rounded-xl border border-slate-200/90 shadow-xs hover:border-[#1a56b8]/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a56b8] border border-blue-200 flex items-center justify-center mb-4">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0f172a] mb-2">
                  Brand Color Accuracy
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calibrated profiling ensures corporate PMS and brand guidelines are faithfully reproduced across vinyl, acrylic, and textiles.
                </p>
              </div>

              <div className="p-6 bg-[#f8fafc] rounded-xl border border-slate-200/90 shadow-xs hover:border-[#f15a24]/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#f15a24] border border-orange-200 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0f172a] mb-2">
                  All 9 Provinces Covered
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated mobile rigging teams deploy to Northern, Central, Southern, and Eastern provinces on strict schedules.
                </p>
              </div>
            </div>

            {/* Quote block */}
            <div className="p-5 bg-gradient-to-r from-blue-50/70 to-orange-50/50 border-l-3 border-[#1a56b8] rounded-r-lg text-xs text-slate-700 italic">
              "Thoughtful details. Dependable delivery. A bold, unmistakable character in every installation."
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          {SITE_BRAND.stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl sm:text-5xl font-bold text-[#1a56b8]">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-[#f15a24] tracking-wider uppercase">
                  {stat.suffix}
                </span>
              </div>
              <span className="text-xs text-slate-500 mt-1.5 uppercase tracking-wider font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
