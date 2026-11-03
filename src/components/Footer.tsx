import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_BRAND } from '../data/siteData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage?: (page: 'home' | 'portfolio', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onNavigatePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === 'portfolio') {
      if (onNavigatePage) {
        onNavigatePage('portfolio');
      } else {
        window.location.hash = '#portfolio';
      }
      scrollToTop();
      return;
    }

    if (targetId === 'home') {
      if (onNavigatePage) {
        onNavigatePage('home', 'home');
      } else {
        window.location.hash = '#home';
      }
      scrollToTop();
      return;
    }

    if (onNavigatePage) {
      onNavigatePage('home', targetId);
    } else {
      onNavigateSection(targetId);
    }
  };

  return (
    <footer className="bg-[#0b132b] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white p-1 border border-slate-700 shadow-sm flex items-center justify-center">
                <img
                  src="/assets/icons/macgra-logo.jpg"
                  alt="MagGra Advertising"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-white block leading-none">
                  MagGra
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase font-bold text-[#f15a24]">
                  Advertising & Interiors
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your creative partner for Sri Lankan spaces. Commercial production of outdoor hoardings, roll-up banners, architectural glass partitions, reception counters, and vehicle fleet branding.
            </p>

            <div className="text-xs text-[#f15a24] font-serif italic">
              "Independent by nature. Better together."
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="hover:text-[#f15a24] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, 'portfolio')}
                  className="hover:text-[#f15a24] transition-colors"
                >
                  Project Portfolio (18 Cases)
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="hover:text-[#f15a24] transition-colors"
                >
                  Capabilities & Services
                </a>
              </li>
              <li>
                <a
                  href="#interiors"
                  onClick={(e) => handleNavClick(e, 'interiors')}
                  className="hover:text-[#f15a24] transition-colors"
                >
                  Interior Solutions Spotlight
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  onClick={(e) => handleNavClick(e, 'clients')}
                  className="hover:text-[#f15a24] transition-colors"
                >
                  Client Partners
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="hover:text-[#f15a24] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f15a24] shrink-0 mt-0.5" />
                <span>{SITE_BRAND.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f15a24] shrink-0" />
                <a href={`tel:${SITE_BRAND.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#f15a24]">
                  {SITE_BRAND.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f15a24] shrink-0" />
                <a href={`mailto:${SITE_BRAND.contact.email}`} className="hover:text-[#f15a24]">
                  {SITE_BRAND.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-semibold">Island-Wide Coverage:</span>
              <span className="text-xs text-slate-400">Colombo · Kandy · Galle · Kurunegala · Jaffna</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MagGra Advertising. All rights reserved. Sri Lanka.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-[#f15a24] hover:bg-[#f15a24]/10 transition-colors text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
