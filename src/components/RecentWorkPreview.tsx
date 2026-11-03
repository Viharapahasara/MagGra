import React from 'react';
import { ArrowUpRight, ArrowRight, Images, MapPin, Sparkles, FolderKanban } from 'lucide-react';
import { Project } from '../data/siteData';

interface RecentWorkPreviewProps {
  projects: Project[];
  onOpenModal: (project: Project, initialIndex?: number) => void;
  onViewAllProjects: () => void;
}

export const RecentWorkPreview: React.FC<RecentWorkPreviewProps> = ({
  projects,
  onOpenModal,
  onViewAllProjects,
}) => {
  // Select 3 top featured / recent commercial projects
  const recentProjects = projects.slice(0, 3);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 text-[#f15a24] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              <span>Recent Work / 04</span>
              <span className="w-8 h-[1px] bg-[#1a56b8]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-normal text-[#0f172a] leading-tight tracking-tight">
              Selected Projects & <br />
              <em className="text-[#1a56b8] italic font-serif">Recent Work</em>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="max-w-md text-sm sm:text-base text-slate-600 leading-relaxed">
              A curated look at our latest corporate fit-outs, fleet wraps, and outdoor installations across Sri Lanka.
            </p>
            <button
              type="button"
              onClick={onViewAllProjects}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1a56b8] hover:bg-[#144494] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 shrink-0 group cursor-pointer"
            >
              <FolderKanban className="w-4 h-4 text-[#f15a24]" />
              <span>View Full Portfolio ({projects.length})</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3 Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {recentProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onOpenModal(project, 0)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1.5"
              style={{
                borderTopColor: idx === 0 ? '#1a56b8' : idx === 1 ? '#f15a24' : '#1a56b8',
                borderTopWidth: '4px',
              }}
            >
              {/* Photo Preview Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/95 text-slate-900 shadow-xs">
                    {project.categoryLabel}
                  </span>

                  {project.images.length > 1 && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white">
                      <Images className="w-3 h-3 text-[#f15a24]" />
                      <span>{project.images.length} Photos</span>
                    </span>
                  )}
                </div>

                {/* Hover Quick Action */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f15a24] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    <span>View Gallery</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold tracking-wider text-[#f15a24] uppercase">
                      {project.client}
                    </span>
                    {project.location && (
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#1a56b8]" />
                        <span className="truncate max-w-[130px]">{project.location}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a] group-hover:text-[#1a56b8] transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#1a56b8]">
                    {project.service}
                  </span>
                  <span className="font-bold text-[#f15a24] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Full Portfolio Banner CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-[#1a56b8] via-[#154694] to-[#0f2d62] text-white p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute right-32 top-0 w-32 h-32 rounded-full bg-[#f15a24]/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold text-[#f15a24] uppercase tracking-wider mb-3">
                <Sparkles className="w-3 h-3 text-[#f15a24]" />
                <span>Dedicated Portfolio Showcase</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                Explore All {projects.length} Commercial Projects in Detail
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                Browse our complete project archives organized by category: Hoardings, Fleet Branding, Exhibition Stalls, 3D Illuminated Lettering, and Office Fit-outs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onViewAllProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#f15a24] hover:bg-[#d74614] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 group cursor-pointer"
              >
                <span>Open Full Portfolio Page</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
