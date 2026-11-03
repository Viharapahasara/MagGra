import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Images,
  ArrowUpRight,
  MapPin,
  SlidersHorizontal,
  Phone,
  MessageSquare,
  Sparkles,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { Project, CATEGORIES, SITE_BRAND } from '../data/siteData';

interface PortfolioPageProps {
  projects: Project[];
  onBackToHome: () => void;
  onOpenModal: (project: Project, initialIndex?: number) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  projects,
  onBackToHome,
  onOpenModal,
  onNavigateSection,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Category items with live counts
  const categoriesWithCounts = useMemo(() => {
    return CATEGORIES.map((cat) => {
      if (cat.slug === 'all') {
        return { ...cat, count: projects.length };
      }
      const count = projects.filter((p) => p.category === cat.slug).length;
      return { ...cat, count };
    });
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20">
      {/* Top Breadcrumb & Return Bar */}
      <div className="bg-white border-b border-slate-200/90 sticky top-[73px] z-30 shadow-xs backdrop-blur-md">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-3.5 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1a56b8] hover:text-[#144494] transition-colors py-1 px-2.5 rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Page</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span>Portfolio</span>
            <span>/</span>
            <span className="text-[#f15a24] font-bold">All 18 Commercial Projects</span>
          </div>
        </div>
      </div>

      {/* Hero Header for Portfolio Page */}
      <section className="bg-gradient-to-b from-white via-blue-50/30 to-[#f8fafc] pt-12 pb-14 border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-[#1a56b8] text-[11px] font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#f15a24]" />
              <span>Commercial Portfolio Archive</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0f172a] leading-tight tracking-tight mb-4">
              Our Work — <br />
              <em className="text-[#1a56b8] italic font-serif">Sri Lankan Spaces,</em>{' '}
              <span className="text-[#f15a24]">Made to Be Seen.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Browse our complete record of 18 delivered commercial executions across Sri Lanka—spanning bank branch signboards, corporate vehicle fleets, exhibition pavilions, and architectural glass partitions.
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1a56b8]" />
                18 Documented Case Studies
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1a56b8]" />
                Direct In-House Fabrication
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1a56b8]" />
                Island-Wide Sri Lanka Installation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Content */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 pt-10">
        {/* Filter and Search Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Category Pills */}
            <div
              className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none flex-wrap"
              role="group"
              aria-label="Filter portfolio by service category"
            >
              {categoriesWithCounts.map((cat) => {
                const isActive = activeCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#1a56b8] text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-[#f15a24] text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 px-4 bg-white rounded-2xl border border-dashed border-slate-300">
            <SlidersHorizontal className="w-10 h-10 text-[#1a56b8] mx-auto mb-3" />
            <p className="text-lg font-bold text-slate-800">No projects match this category</p>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Please choose another service category or view all commercial projects.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="mt-5 px-5 py-2.5 bg-[#f15a24] text-white text-xs font-bold rounded-lg uppercase tracking-wider shadow cursor-pointer hover:bg-[#d74614]"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          /* Projects Grid: All 18 Projects */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onOpenModal(project, 0)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1.5"
                style={{
                  borderTopColor: idx % 2 === 0 ? '#1a56b8' : '#f15a24',
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

                  {/* Top Badges */}
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

                  {/* Hover Action */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f15a24] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                      <span>Inspect Gallery</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
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

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#0f172a] group-hover:text-[#1a56b8] transition-colors line-clamp-1 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Materials & Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1a56b8] truncate max-w-[190px]">
                      {project.service}
                    </span>
                    <span className="font-bold text-[#f15a24] group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Consultation Banner */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#1a56b8] text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4 text-[#f15a24]" />
              <span>Need Commercial Signage or Interiors?</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Have a similar commercial project in mind?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our engineering & design team visits your site anywhere in Sri Lanka, prepares 3D mockups, and delivers directly with guaranteed warranties.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={`https://wa.me/${SITE_BRAND.contact.whatsapp}?text=Hello%20MagGra%20Advertising,%20I%20am%20looking%20at%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-blue-200 bg-blue-50/70 hover:bg-blue-100 text-[#1a56b8] text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#1a56b8]" />
              <span>WhatsApp Us</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onBackToHome();
                setTimeout(() => onNavigateSection('contact'), 100);
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#f15a24] hover:bg-[#d74614] text-white text-xs font-bold tracking-wider uppercase shadow-md transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
