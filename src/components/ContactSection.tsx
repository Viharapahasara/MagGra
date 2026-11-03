import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Globe } from 'lucide-react';
import { SITE_BRAND } from '../data/siteData';

interface ContactSectionProps {
  initialSummary?: string;
  initialCategory?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSummary = '',
  initialCategory = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('Colombo');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialCategory ? [initialCategory] : ['hoardings']
  );
  const [message, setMessage] = useState(initialSummary || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if initialSummary changes from the cost estimator or modal
  React.useEffect(() => {
    if (initialSummary) {
      setMessage((prev) => (prev ? `${prev}\n\n[Applied Estimate]: ${initialSummary}` : `[Applied Estimate]: ${initialSummary}`));
    }
  }, [initialSummary]);

  React.useEffect(() => {
    if (initialCategory && !selectedServices.includes(initialCategory)) {
      setSelectedServices((prev) => [...prev, initialCategory]);
    }
  }, [initialCategory]);

  const toggleService = (serviceKey: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceKey) ? prev.filter((s) => s !== serviceKey) : [...prev, serviceKey]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = `Hello MagGra Advertising!
My Name: ${name || 'Prospective Client'}
Company: ${company || 'N/A'}
Phone: ${phone || 'N/A'}
Services: ${selectedServices.join(', ')}
Location: ${location}
Message: ${message || 'I would like to request an estimate and site consultation.'}`;
    return `https://wa.me/${SITE_BRAND.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Agency Info & Location */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[#f15a24] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                <span>Start a Project / 09</span>
                <span className="w-8 h-[1px] bg-[#1a56b8]" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-normal text-[#0f172a] leading-tight tracking-tight mb-6">
                Let’s make it <br />
                <em className="text-[#f15a24] italic font-serif">real.</em>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Tell us what you want to build or show on the street. We respond within hours with initial feasibility, material recommendations, and a site measurement schedule anywhere in Sri Lanka.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-3.5">
                <a
                  href={`tel:${SITE_BRAND.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3.5 p-4 bg-slate-50 hover:bg-blue-50/60 rounded-xl border border-slate-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-[#1a56b8] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#1a56b8] group-hover:text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Direct Phone</span>
                    <span className="text-sm font-bold text-[#0f172a]">{SITE_BRAND.contact.phoneDisplay}</span>
                  </div>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 bg-slate-50 hover:bg-emerald-50/60 rounded-xl border border-slate-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Direct WhatsApp Chat</span>
                    <span className="text-sm font-bold text-[#0f172a]">Instant Chat with Production Lead</span>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_BRAND.contact.email}`}
                  className="flex items-start gap-3.5 p-4 bg-slate-50 hover:bg-orange-50/60 rounded-xl border border-slate-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#f15a24] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#f15a24] group-hover:text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Official Email</span>
                    <span className="text-sm font-bold text-[#0f172a]">{SITE_BRAND.contact.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Workshop & Office</span>
                    <span className="text-xs text-slate-700 leading-relaxed block font-medium">{SITE_BRAND.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating info */}
            <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#1a56b8]" />
                <span>{SITE_BRAND.contact.serving}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1a56b8] text-white mx-auto flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-[#0f172a]">
                    Quote Request Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Our project estimator has received your details and will get in touch at <strong>{phone}</strong> to confirm your specifications.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp for Instant Reply</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setPhone('');
                        setEmail('');
                        setCompany('');
                        setMessage('');
                      }}
                      className="px-4 py-2.5 text-xs font-semibold text-[#1a56b8] hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl font-bold text-[#0f172a] mb-1">
                    Request a Project Quote
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Fill out your project requirements below or send them straight to our team.
                  </p>

                  {/* Service Multi-Select Chips */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Required Services (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { key: 'hoardings', label: 'Hoardings & Billboards' },
                        { key: 'interiors', label: 'Office Glass Partitions' },
                        { key: 'reception', label: 'Reception Counters' },
                        { key: 'banners', label: 'Banners & Standees' },
                        { key: 'vehicle-branding', label: 'Vehicle Fleet Wrapping' },
                        { key: 'branding', label: '3D Signs & Branding' }
                      ].map((item) => {
                        const isSelected = selectedServices.includes(item.key);
                        return (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => toggleService(item.key)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                              isSelected
                                ? 'bg-[#1a56b8] text-white border-[#1a56b8]'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                            }`}
                          >
                            {isSelected && <span className="mr-1">✓</span>}
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Two column inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ruwan Silva"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1a56b8]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 077 123 4567"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1a56b8]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. ruwan@company.lk"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1a56b8]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Brand / Authority name"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1a56b8]"
                      />
                    </div>
                  </div>

                  {/* Location Selector */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Project Location
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:border-[#1a56b8]"
                    >
                      <option value="Colombo / Greater Colombo">Colombo & Greater Colombo</option>
                      <option value="Gampaha / Negombo">Gampaha & Negombo</option>
                      <option value="Kandy & Central Province">Kandy & Central Province</option>
                      <option value="Galle & Southern Province">Galle & Southern Province</option>
                      <option value="Kurunegala & North Western">Kurunegala & North Western</option>
                      <option value="Outstation / Other Province">Outstation / Other Province (Island-Wide)</option>
                    </select>
                  </div>

                  {/* Message / Specifications */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Project Details, Approximate Dimensions or Notes
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Need 12mm glass partition wall 15ft x 9ft with one swing door and frosted manifestations for our Colombo 03 office..."
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1a56b8]"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#f15a24] hover:bg-[#d74614] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Request</span>
                    </button>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 border border-emerald-600 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
