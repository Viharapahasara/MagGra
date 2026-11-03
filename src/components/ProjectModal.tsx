import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Layers, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Project, SITE_BRAND } from '../data/siteData';

interface ProjectModalProps {
  project: Project | null;
  initialIndex?: number;
  onClose: () => void;
  onInquireProject: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialIndex = 0,
  onClose,
  onInquireProject
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, project]);

  const images = project?.images && project.images.length > 0 ? project.images : (project ? [project.image] : []);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, handleNext, handlePrev]);

  if (!project) return null;

  const currentImage = images[currentIndex] || project.image;
  const currentAlt = (project.imageAlts && project.imageAlts[currentIndex]) || project.alt;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#f15a24]">
              {project.categoryLabel} · {project.client}
            </span>
            <h2 id="modal-project-title" className="font-display text-lg sm:text-2xl font-bold text-[#0f172a]">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#f15a24] hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-xs border border-slate-200"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">
          {/* Main Photo Carousel Stage */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center group shadow-inner">
            <img
              src={currentImage}
              alt={currentAlt}
              className="w-full h-full object-contain select-none"
            />

            {/* Prev / Next Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#1a56b8] text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#1a56b8] text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Photo Counter Pill */}
                <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-white">
                  Photo {currentIndex + 1} of {images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Filmstrip */}
          {images.length > 1 && (
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-20 h-14 sm:w-24 sm:h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    currentIndex === idx
                      ? 'border-[#f15a24] scale-[1.04] shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Project Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            <div className="md:col-span-8 space-y-4">
              <h3 className="font-display text-xl font-bold text-[#0f172a]">
                Project Scope & Execution
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Key Deliverables & Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#1a56b8] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Meta Box */}
            <div className="md:col-span-4 bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3.5 text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Client</span>
                <span className="font-bold text-[#0f172a] text-sm">{project.client}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Discipline</span>
                <span className="font-semibold text-[#1a56b8]">{project.service}</span>
              </div>

              {project.location && (
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Location</span>
                  <span className="font-medium text-slate-700 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#f15a24]" />
                    {project.location}
                  </span>
                </div>
              )}

              {project.materials && (
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Materials & Specs</span>
                  <span className="font-medium text-slate-600 flex items-start gap-1 mt-0.5">
                    <Layers className="w-3.5 h-3.5 text-[#1a56b8] shrink-0 mt-0.5" />
                    <span>{project.materials}</span>
                  </span>
                </div>
              )}

              {/* Direct Actions */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onInquireProject(project);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#f15a24] hover:bg-[#d74614] text-white rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${SITE_BRAND.contact.whatsapp}?text=Hi%20MagGra,%20I%20am%20interested%20in%20a%20project%20similar%20to%20your%20${encodeURIComponent(project.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 border border-[#1a56b8]/30 text-[#1a56b8] bg-blue-50/50 hover:bg-blue-50 rounded-lg font-semibold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
