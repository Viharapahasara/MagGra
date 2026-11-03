import React, { useState } from 'react';
import { ArrowUpRight, Check, Eye } from 'lucide-react';
import { Project } from '../data/siteData';

interface InteriorSpotlightProps {
  onOpenProjectModal: (project: Project, initialIndex?: number) => void;
  onNavigateSection: (sectionId: string) => void;
  ngjaProject?: Project;
}

export const InteriorSpotlight: React.FC<InteriorSpotlightProps> = ({
  onOpenProjectModal,
  onNavigateSection,
  ngjaProject
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const photos = [
    {
      src: "/img/Interiors/National Gem & Jewellery Authority/WhatsApp Image 2026-11-03 at 12.39.40.jpeg",
      title: "Executive Reception & Official Sri Lankan Gem Trade Insignia",
      caption: "Solid timber veneer cladding, recessed warm lighting, and embossed golden authority emblem."
    },
    {
      src: "/img/Interiors/National Gem & Jewellery Authority/WhatsApp Image 2026-11-03 at 12.39.38 (1).jpeg",
      title: "Client Service & Verification Counters",
      caption: "High-security counters with polished brass edge trims and acoustic counter shields."
    },
    {
      src: "/img/Interiors/Interior/WhatsApp Image 2026-11-03 at 12.32.43 (1).jpeg",
      title: "Commercial Workspace Glass Partitions",
      caption: "12mm tempered safety glass partitions with concealed aluminium channel tracks."
    },
    {
      src: "/img/Interiors/JSS Consultants/WhatsApp Image 2026-11-03 at 12.39.36 (1).jpeg",
      title: "Professional Consultation Suite",
      caption: "Discreet frosted privacy lines allowing natural light while guaranteeing client confidentiality."
    }
  ];

  return (
    <section id="interiors" className="py-20 md:py-28 bg-[#0f172a] text-white border-b border-slate-800 overflow-hidden relative">
      {/* Ambient Blue & Orange Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#1a56b8]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#f15a24]/12 blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Image Frame */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black aspect-[16/10] sm:aspect-[16/11]">
              <img
                src={photos[activePhotoIdx].src}
                alt={photos[activePhotoIdx].title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] tracking-widest uppercase bg-[#f15a24] px-2.5 py-1 rounded text-white font-bold inline-block mb-1.5 shadow-sm">
                  Spotlight Case Study
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                  {photos[activePhotoIdx].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  {photos[activePhotoIdx].caption}
                </p>
              </div>

              {/* Zoom Action */}
              {ngjaProject && (
                <button
                  type="button"
                  onClick={() => onOpenProjectModal(ngjaProject, activePhotoIdx)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-[#1a56b8] text-white p-2.5 rounded-full backdrop-blur-md transition-colors"
                  title="View full project gallery"
                >
                  <Eye className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Thumbnail Selector Strip */}
            <div className="grid grid-cols-4 gap-3">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActivePhotoIdx(i)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                    activePhotoIdx === i
                      ? 'border-[#f15a24] scale-[1.02] shadow-lg'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${activePhotoIdx === i ? 'bg-[#f15a24]/10' : 'bg-black/30'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Copy & Specs */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2.5 text-[#f15a24] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              <span>Bespoke Fit-Outs / 03</span>
              <span className="w-8 h-[1px] bg-[#1a56b8]" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
              A calmer, more <br />
              <em className="text-[#f15a24] italic font-serif">confident</em> kind of workspace.
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              Commercial interiors shouldn't feel sterile. At MagGra, our joinery and aluminium teams craft reception counters, executive dividers, and customer verification spaces with genuine character and lasting structural integrity.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#1a56b8] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Acoustic & Privacy Control</h4>
                  <p className="text-xs text-slate-400">Sound-insulated frames and custom frosted glass films ensure confidential meetings.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#1a56b8] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Turnkey Joinery & Metalwork</h4>
                  <p className="text-xs text-slate-400">From reception desks to custom cabinetry, built to withstand decades of commercial use.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#f15a24] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Integrated Architectural Illumination</h4>
                  <p className="text-xs text-slate-400">Low-voltage LED back-lit signage and logo plaques wired seamlessly into your ceiling grid.</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (ngjaProject) {
                    onOpenProjectModal(ngjaProject, 0);
                  } else {
                    onNavigateSection('work');
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#f15a24] hover:bg-[#d74614] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-colors"
              >
                <span>View Full 6-Photo Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('contact');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 transition-colors"
              >
                <span>Inquire About Interiors</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
