import { useState } from 'react';

export default function UnitField({ label, value, options, selectedUnit, onUnitChange, isResult = false, onChange }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    // Reseta o ícone após 2 segundos
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2 relative">
      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
        {label}
      </label>
      
      <div className="flex gap-2">
        {isResult ? (
          <div className="flex-1 p-4 bg-indigo-600 text-white rounded-2xl font-mono text-xl shadow-inner overflow-hidden relative group">
            {value}
            {/* Botão Copiar */}
            <button 
              onClick={handleCopy}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-500 hover:bg-indigo-400 rounded-xl transition-all"
              title="Copiar resultado"
            >
              {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              )}
            </button>
          </div>
        ) : (
          <input
            type="number"
            value={value}
            onChange={(e) => {
                const val = e.target.value;
                // Impede valores negativos se não for Temperatura
                if (label.includes("Origem") && val < 0 && !options.some(o => o.value === 'C')) {
                return;
                }
                onChange(val);
            }}
            className={`flex-1 p-4 rounded-2xl font-mono text-xl transition-all outline-none border-2 ${
                !value || value == 0 
                ? 'bg-slate-50 border-slate-100 focus:border-amber-400' // Alerta visual para campo vazio
                : 'bg-white border-slate-100 focus:border-indigo-500'
            }`}
            placeholder="Digite um valor..."
          />
        )}
        
        <select
          value={selectedUnit}
          onChange={(e) => onUnitChange(e.target.value)}
          className="w-24 p-2 bg-slate-100 border-2 border-transparent rounded-2xl text-xs font-bold text-slate-600 outline-none focus:border-indigo-500 cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}