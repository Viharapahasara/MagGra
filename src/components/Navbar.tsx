import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { SITE_BRAND } from '../data/siteData';

interface NavbarProps {
  currentPage?: 'home' | 'portfolio';
  onNavigatePage?: (page: 'home' | 'portfolio', sectionId?: string) => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigatePage,
  onNavigateSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (target === 'portfolio') {
      if (onNavigatePage) {
        onNavigatePage('portfolio');
      } else {
        window.location.hash = '#portfolio';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'home') {
      if (onNavigatePage) {
        onNavigatePage('home', 'home');
      } else {
        window.location.hash = '#home';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Target is a section on the home page (services, interiors, clients, contact)
    if (onNavigatePage) {
      onNavigatePage('home', target);
    } else if (onNavigateSection) {
      onNavigateSection(target);
    } else {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
          : 'bg-white/85 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Brand Emblem & Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="MagGra Advertising Home"
        >
          <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
            <img
              src="/assets/icons/macgra-logo.jpg"
              alt="MagGra Official Emblem"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[#1a56b8] leading-none group-hover:text-[#144494] transition-colors">
              MagGra
            </span>
            <span className="text-[10px] tracking-[0.22em] uppercase font-bold text-[#f15a24] mt-0.5">
              Advertising
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Without FAQ and Cost Estimator) */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-slate-700">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className={`transition-colors py-1 ${
              currentPage === 'home'
                ? 'text-[#1a56b8] font-bold border-b-2 border-[#1a56b8]'
                : 'hover:text-[#1a56b8]'
            }`}
          >
            Home
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className={`inline-flex items-center gap-1.5 transition-colors py-1 ${
              currentPage === 'portfolio'
                ? 'text-[#1a56b8] font-bold border-b-2 border-[#1a56b8]'
                : 'hover:text-[#1a56b8]'
            }`}
          >
            <span>Our Work</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#f15a24] text-white">
              18
            </span>
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="hover:text-[#1a56b8] transition-colors py-1"
          >
            Services
          </a>
          <a
            href="#interiors"
            onClick={(e) => handleNavClick(e, 'interiors')}
            className="hover:text-[#1a56b8] transition-colors py-1"
          >
            Interior Solutions
          </a>
          <a
            href="#clients"
            onClick={(e) => handleNavClick(e, 'clients')}
            className="hover:text-[#1a56b8] transition-colors py-1"
          >
            Clients
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hover:text-[#1a56b8] transition-colors py-1"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${SITE_BRAND.contact.whatsapp}?text=Hello%20MagGra%20Advertising,%20I%20would%20like%20to%20inquire%20about%20a%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-[12px] font-semibold text-[#1a56b8] hover:text-[#144494] transition-colors border border-blue-200 bg-blue-50/60 rounded-lg hover:bg-blue-50"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#1a56b8]" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#f15a24] hover:bg-[#d74614] text-white text-[12px] font-bold tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-800 hover:text-[#1a56b8] focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-7 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3.5 text-[15px] font-medium text-slate-800">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className={`py-2 border-b border-slate-100 ${
                currentPage === 'home' ? 'text-[#1a56b8] font-bold' : 'hover:text-[#1a56b8]'
              }`}
            >
              Home
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, 'portfolio')}
              className={`py-2 border-b border-slate-100 flex items-center justify-between ${
                currentPage === 'portfolio' ? 'text-[#1a56b8] font-bold' : 'hover:text-[#1a56b8]'
              }`}
            >
              <span>Our Work (Full 18-Project Portfolio)</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f15a24] text-white">
                View All
              </span>
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="py-2 border-b border-slate-100 hover:text-[#1a56b8]"
            >
              Services & Capabilities
            </a>
            <a
              href="#interiors"
              onClick={(e) => handleNavClick(e, 'interiors')}
              className="py-2 border-b border-slate-100 hover:text-[#1a56b8]"
            >
              Interior Solutions
            </a>
            <a
              href="#clients"
              onClick={(e) => handleNavClick(e, 'clients')}
              className="py-2 border-b border-slate-100 hover:text-[#1a56b8]"
            >
              Client Partners
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="py-2 hover:text-[#1a56b8]"
            >
              Contact Us
            </a>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE_BRAND.contact.phone.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 rounded-lg text-[13px] text-slate-800 hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-[#1a56b8]" />
                <span>Call {SITE_BRAND.contact.phoneDisplay}</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#f15a24] text-white rounded-lg text-[13px] font-bold uppercase tracking-wider shadow"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
