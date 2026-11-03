import React from 'react';
import { ArrowRight, Megaphone, LayoutGrid, Flag, Truck, Check } from 'lucide-react';

interface ServicesSectionProps {
  onNavigateSection: (sectionId: string) => void;
  onSelectService?: (serviceKey: string) => void;
}

interface SimpleService {
  id: string;
  serviceKey: string;
  title: string;
  eyebrow: string;
  icon: React.ReactNode;
  brandColor: string;
  items: string[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigateSection,
  onSelectService
}) => {
  const simpleServices: SimpleService[] = [
    {
      id: "hoardings",
      serviceKey: "hoardings",
      title: "Hoardings & Billboards",
      eyebrow: "Outdoor Visibility",
      brandColor: "#1a56b8",
      icon: <Megaphone className="w-5 h-5 text-[#1a56b8]" />,
      items: [
        "Highway hoardings & steel billboard structures",
        "Heavy-duty front-lit & back-lit tropical flex skins",
        "Roadside junction directional & promotional signage",
        "Island-wide fabrication, rigging & maintenance"
      ]
    },
    {
      id: "interiors",
      serviceKey: "interiors",
      title: "Interior Solutions",
      eyebrow: "Offices & Commercial Spaces",
      brandColor: "#f15a24",
      icon: <LayoutGrid className="w-5 h-5 text-[#f15a24]" />,
      items: [
        "Aluminium & tempered glass office partitions",
        "Custom executive reception counters & desks",
        "Frosted privacy films & architectural manifestations",
        "Acoustic wall paneling & executive boardroom fit-outs"
      ]
    },
    {
      id: "banners",
      serviceKey: "banners",
      title: "Banners & Event Displays",
      eyebrow: "Conferences & Events",
      brandColor: "#1a56b8",
      icon: <Flag className="w-5 h-5 text-[#1a56b8]" />,
      items: [
        "Heavy-base roll-up standees & portable banner stands",
        "Anti-glare stage backdrops for media & photography",
        "Promotional hanging banners & retail displays",
        "High-definition 1440 DPI vibrant color printing"
      ]
    },
    {
      id: "vehicle-branding",
      serviceKey: "vehicle-branding",
      title: "Vehicle Fleet Branding",
      eyebrow: "Mobile Advertising",
      brandColor: "#f15a24",
      icon: <Truck className="w-5 h-5 text-[#f15a24]" />,
      items: [
        "Full and partial vehicle vinyl wrapping",
        "Delivery van, lorry, and corporate car fleet graphics",
        "Automotive-grade cast vinyl with UV over-lamination",
        "Residue-free clean application with weather guarantee"
      ]
    }
  ];

  const handleContactClick = (serviceKey: string) => {
    if (onSelectService) {
      onSelectService(serviceKey);
    }
    onNavigateSection('contact');
  };

  return (
    <section id="services" className="py-20 md:py-24 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#f15a24] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
            <span>What We Do / 02</span>
            <span className="w-6 h-[1.5px] bg-[#1a56b8]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-normal text-[#0f172a] leading-tight">
            Our Services & <em className="text-[#1a56b8] italic font-serif">Solutions.</em>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Simple, dependable production and installation across Sri Lanka.
          </p>
        </div>

        {/* Simplified Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {simpleServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              style={{
                borderTopColor: service.brandColor,
                borderTopWidth: '3.5px'
              }}
            >
              <div>
                {/* Icon & Eyebrow */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: `${service.brandColor}12`
                    }}
                  >
                    {service.icon}
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${service.brandColor}10`,
                      color: service.brandColor
                    }}
                  >
                    {service.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[#0f172a] mb-4">
                  {service.title}
                </h3>

                {/* Simple "We do these" Checklist */}
                <div className="space-y-2.5 mb-6">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          backgroundColor: `${service.brandColor}18`,
                          color: service.brandColor
                        }}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Link to Contact Section */}
              <button
                type="button"
                onClick={() => handleContactClick(service.serviceKey)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs group-hover:shadow"
                style={{
                  backgroundColor: service.brandColor,
                  color: '#ffffff'
                }}
              >
                <span>Contact for This Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
