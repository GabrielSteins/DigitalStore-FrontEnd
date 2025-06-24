import React, { useState } from 'react';

export default function ProductOptions({
  options,
  radius = '4px',
  shape,
  type,
}) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (opt) => {
    setSelected(opt);
  };

  return (
    <div className="flex gap-3">
      {options.map((opt) => {
        const isSelected = selected === opt;
        const baseBorder = isSelected
          ? 'border-2 border-[#C92071]'
          : 'border border-[#D9D9D9]';
        if (shape === 'circle') {
          
          return (
            <div
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`cursor-pointer flex items-center justify-center ${baseBorder}`}
              style={{
                width: '31px',
                height: '31px',
                borderRadius: '50%',
                backgroundColor: type === 'color' ? opt : 'transparent',
              }}
            >
              {type === 'text' && (
                <span className="text-[24px] text-[#474747]">{opt}</span>
              )}
            </div>
          );
        } else {
          
          return (
            <div
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`cursor-pointer flex items-center justify-center ${baseBorder}`}
              style={{
                minWidth: '46px',
                height: '46px',
                borderRadius: shape === 'square' ? radius : undefined,
                backgroundColor: type === 'color' ? opt : 'transparent',
                padding: type === 'text' ? '0 12px' : undefined,
              }}
            >
              {type === 'text' && (
                <span className="text-[24px] text-[#474747]">{opt}</span>
              )}
            </div>
          );
        }
      })}
    </div>
  );
}
