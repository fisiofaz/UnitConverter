import { useState } from 'react';
import UnitField from './components/UnitField';
import Button from './components/Button';
import { unitOptions, calculateConversion } from './utils/conversionLogic';

export default function App() {
  // --- ESTADOS ---
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('km');

  // LAZY INITIALIZATION: Carrega o histórico do localStorage apenas uma vez no "nascimento" do componente
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('unit_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // --- CÁLCULO DERIVADO (Síncrono e Seguro) ---
  const result = calculateConversion(value, category, fromUnit, toUnit);
  const isEmpty = !value || parseFloat(value) === 0 || isNaN(value);

  // --- AÇÕES ---
  const switchCategory = (newCat) => {
    setCategory(newCat);
    setFromUnit(unitOptions[newCat][0].value);
    setToUnit(unitOptions[newCat][1].value);
  };

  const saveToHistory = () => {
    if (isEmpty) return;

    const newEntry = {
      id: crypto.randomUUID(), // Gera ID único seguro e puro
      fromValue: value,
      fromLabel: fromUnit,
      toValue: result.toFixed(4),
      toLabel: toUnit,
      icon: category === 'length' ? '📏' : category === 'temp' ? '🌡️' : '⚖️'
    };

    const newHistory = [newEntry, ...history].slice(0, 3);
    setHistory(newHistory);
    localStorage.setItem('unit_history', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('unit_history');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans text-slate-900">
      <div className="w-full max-w-md space-y-6">
        
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Unit<span className="text-indigo-600">Converter</span>
          </h1>
          <p className="text-slate-400 text-sm font-medium">Conversão profissional em segundos.</p>
        </header>

        {/* Card Principal */}
        <main className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-100 border border-slate-100 space-y-8">
          
          {/* Tabs de Categoria */}
          <div className="flex bg-slate-100 p-1 rounded-2xl gap-1">
            {Object.keys(unitOptions).map((cat) => (
              <Button 
                key={cat}
                variant={category === cat ? "primary" : "secondary"}
                onClick={() => switchCategory(cat)}
                className="flex-1 !py-2 !rounded-xl text-[10px] uppercase tracking-wider transition-all"
              >
                {cat === 'length' ? 'Comprimento' : cat === 'temp' ? 'Temperatura' : 'Massa'}
              </Button>
            ))}
          </div>

          {/* Campos de Conversão */}
          <div className="space-y-4">
            <UnitField 
              label="De (Origem)"
              value={value}
              onChange={setValue}
              options={unitOptions[category]}
              selectedUnit={fromUnit}
              onUnitChange={setFromUnit}
            />

            <div className="flex justify-center">
              <div className={`p-2 rounded-full transition-all duration-500 ${isEmpty ? 'text-slate-200' : 'text-indigo-400 animate-bounce'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <UnitField 
              label="Para (Resultado)"
              value={result.toFixed(4)}
              isResult={true}
              options={unitOptions[category]}
              selectedUnit={toUnit}
              onUnitChange={setToUnit}
            />
          </div>

          {/* Ação de Salvar com Validação */}
          <div className="space-y-3">
            <Button 
              onClick={saveToHistory} 
              disabled={isEmpty}
              className={`w-full !rounded-2xl py-4 transition-all ${isEmpty ? 'grayscale opacity-50' : 'shadow-lg shadow-indigo-200'}`}
            >
              {isEmpty ? 'Aguardando valor...' : 'Guardar no Histórico'}
            </Button>
            {isEmpty && value !== 0 && (
               <p className="text-[10px] text-amber-500 font-bold text-center animate-pulse tracking-widest uppercase">⚠️ Entrada Inválida</p>
            )}
          </div>
        </main>

        {/* Seção de Histórico */}
        {history.length > 0 && (
          <section className="bg-slate-200/30 backdrop-blur-md p-6 rounded-[2rem] border border-slate-200 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Recentes</h3>
              <Button 
                variant="secondary" 
                onClick={clearHistory} 
                className="!py-1 !px-3 !text-[10px] !rounded-lg hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                Limpar
              </Button>
            </div>
            
            <div className="space-y-2">
              {history.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group hover:border-indigo-200 transition-all hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="text-lg opacity-80">{item.icon}</span>
                    <span className="text-xs font-mono text-slate-500">{item.fromValue} {item.fromLabel}</span>
                  </div>
                  <span className="text-indigo-200 font-light">→</span>
                  <span className="text-sm font-bold text-indigo-600 font-mono">{item.toValue} {item.toLabel}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <footer className="text-center pt-4">
          <p className="text-slate-300 text-[9px] font-bold uppercase tracking-[0.3em]">
            Micro SaaS Blueprint • React & Tailwind • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}