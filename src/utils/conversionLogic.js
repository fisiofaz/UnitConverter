export const unitOptions = {
  length: [
    { value: 'm', label: 'M' }, { value: 'km', label: 'KM' },
    { value: 'cm', label: 'CM' }, { value: 'mi', label: 'MI' }
  ],
  temp: [
    { value: 'C', label: '°C' }, { value: 'F', label: '°F' }, { value: 'K', label: 'K' }
  ],
  mass: [
    { value: 'g', label: 'G' }, { value: 'kg', label: 'KG' },
    { value: 'lb', label: 'LB' }, { value: 'oz', label: 'OZ' }
  ]
};

export const calculateConversion = (value, category, fromUnit, toUnit) => {
  const num = parseFloat(value);

  if (isNaN(num)) return 0;
  
  if (category === 'length') {
    const rates = { m: 1, km: 1000, cm: 0.01, mi: 1609.34 };
    return (num * rates[fromUnit]) / rates[toUnit];
  }
  
  if (category === 'temp') {
    let c = fromUnit === 'C' ? num : fromUnit === 'F' ? (num - 32) * 5/9 : num - 273.15;
    if (toUnit === 'C') return c;
    if (toUnit === 'F') return (c * 9/5) + 32;
    if (toUnit === 'K') return c + 273.15;
  }
  
  if (category === 'mass') {
    const rates = { g: 1, kg: 1000, lb: 453.592, oz: 28.3495 };
    const inGrams = num * rates[fromUnit];
    return inGrams / rates[toUnit];
  }

  return 0;
};