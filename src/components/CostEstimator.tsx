import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';
import { ESTIMATOR_PRESETS, EstimatorPreset } from '../data/siteData';

interface CostEstimatorProps {
  onApplyEstimate: (estimateSummary: string, category: string) => void;
  selectedCategoryFromParent?: string;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  onApplyEstimate,
  selectedCategoryFromParent
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(
    selectedCategoryFromParent || 'hoardings'
  );
  const [tier, setTier] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [quantity, setQuantity] = useState<number>(200);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>({});

  // Sync if parent passes category selection
  React.useEffect(() => {
    if (selectedCategoryFromParent) {
      const match = ESTIMATOR_PRESETS.find(p => p.category === selectedCategoryFromParent || p.id === selectedCategoryFromParent);
      if (match) {
        setSelectedPresetId(match.id);
        setQuantity(match.defaultQty);
        setSelectedOptions({});
      }
    }
  }, [selectedCategoryFromParent]);

  const currentPreset: EstimatorPreset = useMemo(() => {
    return ESTIMATOR_PRESETS.find((p) => p.id === selectedPresetId) || ESTIMATOR_PRESETS[0];
  }, [selectedPresetId]);

  // Handle preset change
  const handleSelectPreset = (preset: EstimatorPreset) => {
    setSelectedPresetId(preset.id);
    setQuantity(preset.defaultQty);
    setSelectedOptions({});
  };

  // Toggle optional add-ons
  const toggleOption = (key: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate price estimate
  const calculation = useMemo(() => {
    const baseRate = currentPreset.rates[tier];
    let subtotal = baseRate * quantity;

    // Apply multiplier options
    currentPreset.options.forEach((opt) => {
      if (selectedOptions[opt.key]) {
        subtotal *= opt.priceMultiplier;
      }
    });

    const minEstimate = Math.round(subtotal * 0.95);
    const maxEstimate = Math.round(subtotal * 1.08);

    return {
      min: minEstimate,
      max: maxEstimate,
      rawTotal: Math.round(subtotal)
    };
  }, [currentPreset, tier, quantity, selectedOptions]);

  const formatLKR = (num: number) => {
    return 'Rs. ' + num.toLocaleString('en-LK');
  };

  const handleApply = () => {
    const activeOpts = currentPreset.options
      .filter((o) => selectedOptions[o.key])
      .map((o) => o.label)
      .join(', ');

    const summary = `${currentPreset.name} (${quantity} ${currentPreset.unit}, ${tier.toUpperCase()} grade${
      activeOpts ? `, Add-ons: ${activeOpts}` : ''
    }) — Estimated: ${formatLKR(calculation.min)} to ${formatLKR(calculation.max)} LKR`;

    onApplyEstimate(summary, currentPreset.category);
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#f15a24] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            <Calculator className="w-4 h-4 text-[#1a56b8]" />
            <span>Interactive Estimator / 05</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-normal text-[#0f172a] leading-tight mb-4">
            Plan your scope with <br />
            <em className="text-[#1a56b8] italic font-serif">transparent Sri Lankan pricing.</em>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Get instant budget clarity for hoardings, commercial partitions, vehicle wraps, and custom reception desks based on current local material and fabrication benchmarks.
          </p>
        </div>

        {/* Estimator Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10">
          {/* Service Selector Tabs */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              1. Select Project Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {ESTIMATOR_PRESETS.map((preset) => {
                const isSelected = selectedPresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className={`p-3 rounded-xl border text-left transition-all text-xs flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#1a56b8] bg-blue-50/80 text-[#0f172a] shadow-xs font-semibold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300'
                    }`}
                  >
                    <span>{preset.name}</span>
                    <span className="text-[10px] text-slate-500 font-normal mt-1.5">
                      per {preset.unit}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-slate-500 mt-2.5 italic">
              {currentPreset.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-slate-100">
            {/* Left Column: Sliders and Tiers */}
            <div className="md:col-span-7 space-y-6">
              {/* Quantity Input & Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Estimated Quantity ({currentPreset.unit})
                  </label>
                  <span className="font-mono text-sm font-bold text-[#1a56b8] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    {quantity} {currentPreset.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={currentPreset.minQty}
                  max={currentPreset.maxQty}
                  step={currentPreset.unit === 'vehicles' || currentPreset.unit === 'units' ? 1 : 10}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1a56b8]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>{currentPreset.minQty} {currentPreset.unit}</span>
                  <span>{currentPreset.maxQty} {currentPreset.unit}</span>
                </div>
              </div>

              {/* Material Tier Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  3. Material & Finishing Tier
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setTier('standard')}
                    className={`py-2.5 px-3 rounded-lg border text-center text-xs transition-all ${
                      tier === 'standard'
                        ? 'border-[#1a56b8] bg-[#1a56b8] text-white font-bold shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>Standard</span>
                    <span className="block text-[10px] font-normal opacity-80 mt-0.5">Commercial</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('premium')}
                    className={`py-2.5 px-3 rounded-lg border text-center text-xs transition-all ${
                      tier === 'premium'
                        ? 'border-[#f15a24] bg-[#f15a24] text-white font-bold shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>Premium</span>
                    <span className="block text-[10px] font-normal opacity-80 mt-0.5">Architectural</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('luxury')}
                    className={`py-2.5 px-3 rounded-lg border text-center text-xs transition-all ${
                      tier === 'luxury'
                        ? 'border-indigo-600 bg-indigo-600 text-white font-bold shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>Executive</span>
                    <span className="block text-[10px] font-normal opacity-80 mt-0.5">Luxury Finish</span>
                  </button>
                </div>
              </div>

              {/* Optional Add-Ons */}
              {currentPreset.options.length > 0 && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    4. Optional Add-Ons
                  </label>
                  <div className="space-y-2">
                    {currentPreset.options.map((opt) => {
                      const isChecked = !!selectedOptions[opt.key];
                      return (
                        <label
                          key={opt.key}
                          onClick={() => toggleOption(opt.key)}
                          className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer select-none transition-colors ${
                            isChecked
                              ? 'border-[#1a56b8] bg-blue-50/70 text-[#0f172a] font-semibold'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                                isChecked ? 'bg-[#1a56b8] border-[#1a56b8] text-white' : 'border-slate-400 bg-white'
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span>{opt.label}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Estimated Price Output Box */}
            <div className="md:col-span-5 bg-gradient-to-br from-blue-50/80 via-white to-orange-50/60 rounded-xl p-6 border-2 border-[#1a56b8]/20 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-slate-500 block mb-1">
                  Estimated Investment
                </span>
                <div className="font-display text-3xl sm:text-4xl font-bold text-[#f15a24] leading-tight">
                  {formatLKR(calculation.min)}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">
                  up to {formatLKR(calculation.max)} (LKR)
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-[11px] text-slate-700">
                  <div className="flex justify-between">
                    <span>Base Tier:</span>
                    <span className="font-bold capitalize text-[#1a56b8]">{tier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Units:</span>
                    <span className="font-bold text-[#0f172a]">{quantity} {currentPreset.unit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Add-ons:</span>
                    <span className="font-bold text-[#f15a24]">
                      {Object.values(selectedOptions).filter(Boolean).length} Selected
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white/90 rounded-lg border border-slate-200 mt-4 text-[10px] text-slate-500 leading-relaxed shadow-xs">
                  *Indicative commercial range based on standard Sri Lankan site conditions. Final quote confirmed following on-site laser measurements and engineering assessment.
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApply}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#f15a24] hover:bg-[#d74614] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all group"
              >
                <span>Apply To Quote Form</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
