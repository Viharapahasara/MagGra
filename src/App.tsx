/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { InteriorSpotlight } from './components/InteriorSpotlight';
import { RecentWorkPreview } from './components/RecentWorkPreview';
import { PortfolioPage } from './components/PortfolioPage';
import { ClientBrands } from './components/ClientBrands';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS, Project } from './data/siteData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [inquirySummary, setInquirySummary] = useState<string>('');
  const [inquiryCategory, setInquiryCategory] = useState<string>('');

  // Synchronize state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#portfolio' || hash === '#work-all') {
        setCurrentPage('portfolio');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        if (hash && hash !== '#home') {
          const sectionId = hash.replace('#', '');
          const elem = document.getElementById(sectionId);
          if (elem) {
            setTimeout(() => {
              elem.scrollIntoView({ behavior: 'smooth' });
            }, 80);
          }
        }
      }
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Ambient cursor position tracking for atmospheric glow
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${e.clientY}px`);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const handleNavigatePage = (page: 'home' | 'portfolio', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'portfolio') {
      window.location.hash = '#portfolio';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (sectionId && sectionId !== 'home') {
        window.location.hash = `#${sectionId}`;
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = `#${sectionId}`;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenProjectModal = (project: Project, initialIndex = 0) => {
    setSelectedProject(project);
    setSelectedPhotoIndex(initialIndex);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
    setSelectedPhotoIndex(0);
  };

  const handleInquireFromModal = (project: Project) => {
    setInquirySummary(`Inquiry regarding project: ${project.title} (${project.service})`);
    setInquiryCategory(project.category);
    handleNavigatePage('home', 'contact');
  };

  const handleSelectService = (serviceKey: string) => {
    setInquiryCategory(serviceKey);
    setInquirySummary(`Inquiry regarding: ${serviceKey}`);
  };

  const ngjaProject = PROJECTS.find((p) => p.id === 'national-gem-jewellery-authority');

  return (
    <div className="min-h-screen bg-white text-slate-900 relative selection:bg-[#1a56b8] selection:text-white">
      {/* Ambient warm blue and solar orange lighting glow */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onNavigateSection={handleNavigateSection}
      />

      {/* Page Routing */}
      {currentPage === 'home' ? (
        /* Main Landing Page: Compact, clean UX with 3 featured projects */
        <main className="relative z-10">
          <Hero onNavigateSection={handleNavigateSection} />

          <AboutSection onNavigateSection={handleNavigateSection} />

          <ServicesSection
            onNavigateSection={handleNavigateSection}
            onSelectService={handleSelectService}
          />

          <InteriorSpotlight
            onOpenProjectModal={handleOpenProjectModal}
            onNavigateSection={handleNavigateSection}
            ngjaProject={ngjaProject}
          />

          {/* Clean 3-project preview with CTA to open dedicated portfolio page */}
          <RecentWorkPreview
            projects={PROJECTS}
            onOpenModal={handleOpenProjectModal}
            onViewAllProjects={() => handleNavigatePage('portfolio')}
          />

          <ClientBrands />

          <ContactSection
            initialSummary={inquirySummary}
            initialCategory={inquiryCategory}
          />
        </main>
      ) : (
        /* Dedicated Full Portfolio Page: Comprehensive 18-case gallery */
        <main className="relative z-10 pt-[73px]">
          <PortfolioPage
            projects={PROJECTS}
            onBackToHome={() => handleNavigatePage('home')}
            onOpenModal={handleOpenProjectModal}
            onNavigateSection={handleNavigateSection}
          />
        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onNavigatePage={handleNavigatePage}
      />

      {/* Interactive Project Lightbox & Gallery Dialog */}
      <ProjectModal
        project={selectedProject}
        initialIndex={selectedPhotoIndex}
        onClose={handleCloseProjectModal}
        onInquireProject={handleInquireFromModal}
      />
    </div>
  );
}
