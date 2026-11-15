import React, { useState } from 'react';
import { Check, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { Translation } from '../data/translations';

interface CalculatorProps {
  t: Translation;
  onOpenQuoteWithDetails?: (details: { service: string; area: number; estimate: string }) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ t, onOpenQuoteWithDetails }) => {
  const [area, setArea] = useState<number>(80);
  const [serviceType, setServiceType] = useState<'airless' | 'kitanje' | 'prenova'>('kitanje');
  const [highCeilings, setHighCeilings] = useState<boolean>(false);

  const calc = t.calculator;

  // Pricing rates per m²
  const pricing = {
    airless: { min: 3.5, max: 5.0, days: (a: number) => Math.max(1, Math.round(a / 120)) },
    kitanje: { min: 10.5, max: 13.5, days: (a: number) => Math.max(2, Math.round(a / 50)) },
    prenova: { min: 14.0, max: 18.0, days: (a: number) => Math.max(3, Math.round(a / 35)) },
  };

  const currentRate = pricing[serviceType];
  const multiplier = highCeilings ? 1.15 : 1.0;
  
  const minPrice = Math.round(area * currentRate.min * multiplier);
  const maxPrice = Math.round(area * currentRate.max * multiplier);
  const estimatedDays = currentRate.days(area);

  const getServiceName = () => {
    switch (serviceType) {
      case 'airless':
        return calc.serviceAirless;
      case 'kitanje':
        return calc.serviceKitanje;
      case 'prenova':
        return calc.servicePrenova;
    }
  };

  const daysUnit =
    estimatedDays === 1
      ? calc.daysOne
      : estimatedDays === 2
      ? calc.daysTwo
      : calc.daysMany;

  const handleWhatsAppSend = () => {
    const text = `Pozdravljeni DAST!\nIzračun:\n- Storitev: ${getServiceName()}\n- Kvadratura: ${area} m²\n- Visoki stropi: ${highCeilings ? 'Da' : 'Ne'}\n- Ocena: ${minPrice} € – ${maxPrice} €\n- Čas: cca. ${estimatedDays} ${daysUnit}\nŽelim se dogovoriti za brezplačen ogled.`;
    const url = `https://wa.me/38669950491?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="kalkulator" className="py-24 bg-[#141418] relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#F59E0B]" />
            <span>{calc.tag}</span>
            <span className="w-6 h-0.5 bg-[#F59E0B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {calc.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {calc.subtitle}
          </p>
        </div>

        {/* Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#18181D] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            {/* Step 1: Service Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                {calc.step1Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType('airless')}
                  className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                    serviceType === 'airless'
                      ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold text-[#F59E0B] mb-1">01</span>
                  <div className="text-sm font-bold text-white mb-1">{calc.serviceAirless}</div>
                  <div className="text-[11px] text-zinc-400">{calc.serviceAirlessSub}</div>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('kitanje')}
                  className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                    serviceType === 'kitanje'
                      ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold text-[#F59E0B] mb-1">02</span>
                  <div className="text-sm font-bold text-white mb-1">{calc.serviceKitanje}</div>
                  <div className="text-[11px] text-zinc-400">{calc.serviceKitanjeSub}</div>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('prenova')}
                  className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                    serviceType === 'prenova'
                      ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold text-[#F59E0B] mb-1">03</span>
                  <div className="text-sm font-bold text-white mb-1">{calc.servicePrenova}</div>
                  <div className="text-[11px] text-zinc-400">{calc.servicePrenovaSub}</div>
                </button>
              </div>
            </div>

            {/* Step 2: Surface Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  {calc.step2Title}
                </label>
                <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-700">
                  <span className="text-lg font-black text-white font-['Rajdhani']">{area}</span>
                  <span className="text-xs text-amber-500 font-semibold">m²</span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="20"
                max="400"
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
              />

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { label: calc.presets.studio, val: 40 },
                  { label: calc.presets.twoRoom, val: 90 },
                  { label: calc.presets.threeRoom, val: 150 },
                  { label: calc.presets.house, val: 250 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    type="button"
                    onClick={() => setArea(preset.val)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                      area === preset.val
                        ? 'bg-[#F59E0B] text-black font-semibold'
                        : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Options */}
            <div className="pt-2 border-t border-zinc-800/80">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={highCeilings}
                  onChange={(e) => setHighCeilings(e.target.checked)}
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-[#F59E0B] focus:ring-0 cursor-pointer accent-[#F59E0B]"
                />
                <span className="text-xs text-zinc-300 group-hover:text-white transition-colors">
                  {calc.highCeilingsLabel}
                </span>
              </label>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1C1C22] to-[#16161B] border-2 border-amber-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                  {calc.estimateTitle}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  {calc.estimateBadge}
                </span>
              </div>

              {/* Price Range Display */}
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-['Rajdhani']">
                  {minPrice} € – {maxPrice} €
                </div>
                <div className="text-xs text-zinc-400">
                  {calc.estimateNote}
                </div>
              </div>

              {/* Estimated duration */}
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 mb-6 flex items-center justify-between">
                <span className="text-xs text-zinc-300">{calc.durationLabel}</span>
                <span className="text-xs font-bold text-amber-400">
                  cca. {estimatedDays} {daysUnit}
                </span>
              </div>

              {/* What is always included */}
              <div className="space-y-2 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  {calc.includedTitle}
                </div>
                {calc.includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <button
                type="button"
                onClick={() => {
                  if (onOpenQuoteWithDetails) {
                    onOpenQuoteWithDetails({
                      service: getServiceName(),
                      area,
                      estimate: `${minPrice} € – ${maxPrice} €`,
                    });
                  }
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all duration-200"
              >
                <span>{calc.ctaInspection}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full flex items-center justify-center gap-2 border border-emerald-600/70 bg-emerald-950/20 hover:bg-emerald-900/30 text-emerald-400 font-semibold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{calc.ctaWhatsapp}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
