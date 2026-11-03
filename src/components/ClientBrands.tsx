import React from 'react';
import { Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { TRUSTED_CLIENTS, ClientBrand } from '../data/siteData';

export const ClientBrands: React.FC = () => {
  return (
    <section id="clients" className="py-20 md:py-28 bg-[#f9f8f3] border-b border-[#4b3621]/10 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#8a302b] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
            <Award className="w-4 h-4 text-[#b8903f]" />
            <span>Prestigious Brand Partners / 06</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-normal text-[#4b3621] leading-tight">
            Official work delivered for <br />
            <em className="text-[#8a302b] italic font-serif">Sri Lanka's premier institutions.</em>
          </h2>
          <p className="text-xs sm:text-sm text-[#716758] mt-3 leading-relaxed">
            Real commercial advertising, architectural interior fit-outs, and large-scale hoardings executed for these official brand partners.
          </p>
        </div>

        {/* 7 Official User-Provided Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TRUSTED_CLIENTS.map((brand: ClientBrand) => (
            <div
              key={brand.id}
              className="bg-white rounded-xl border border-[#b8903f]/25 hover:border-[#b8903f]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              style={{
                borderTopColor: brand.brandColor,
                borderTopWidth: '3.5px'
              }}
            >
              <div>
                {/* Real Brand Logo Container */}
                <div
                  className={`w-full h-24 rounded-lg flex items-center justify-center p-3 mb-5 border transition-transform duration-300 group-hover:scale-[1.02] ${
                    brand.darkLogoBg
                      ? 'bg-[#0f172a] border-slate-800'
                      : 'bg-white border-[#4b3621]/10'
                  }`}
                  style={{
                    boxShadow: '0 2px 10px rgba(75, 54, 33, 0.04)'
                  }}
                >
                  <img
                    src={brand.logoImg}
                    alt={`${brand.name} official brand logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Category Sector Pill */}
                <div className="mb-2.5">
                  <span
                    className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full inline-block"
                    style={{
                      backgroundColor: `${brand.brandColor}14`,
                      color: brand.brandColor
                    }}
                  >
                    {brand.categoryTag}
                  </span>
                </div>

                {/* Brand Name */}
                <h3 className="font-display text-lg font-bold text-[#4b3621] group-hover:text-[#2c1e11] leading-snug">
                  {brand.name}
                </h3>

                {/* Subtitle / Background */}
                <p className="text-[11px] text-[#716758] mt-0.5 mb-4">
                  {brand.subtitle}
                </p>
              </div>

              {/* Service Delivered by MacGra */}
              <div className="pt-3.5 border-t border-[#4b3621]/10 flex items-start gap-2 bg-[#eee9df]/30 -mx-6 -mb-6 p-4 rounded-b-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#607c46] shrink-0 mt-0.5" />
                <span className="text-[11px] font-medium text-[#4b3621] leading-snug">
                  {brand.serviceProvided}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 text-center text-xs text-[#716758] flex flex-wrap items-center justify-center gap-3">
          <span>Official brand assets provided by client partners.</span>
          <span className="w-1 h-1 rounded-full bg-[#b8903f]" />
          <a
            href="#work"
            className="font-semibold text-[#8a302b] hover:text-[#722622] inline-flex items-center gap-1"
          >
            <span>Explore Real Project Photos in Portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
