import React from 'react';

interface Option {
  text: string;
  value?: string;
}

interface FilterGroupProps {
  title: string;
  inputType: 'checkbox' | 'radio';
  options: Option[];
}

export default function FilterGroup({
  title,
  inputType,
  options,
}: FilterGroupProps) {
  return (
    <div className="mb-6">
      <h3 className="text-[14px] text-[#474747] font-semibold mb-3">{title}</h3>
      <div className="flex flex-col gap-3">
        {options.map((opt, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type={inputType}
              value={opt.value ?? opt.text}
              className="w-[22px] h-[22px] accent-[#C92071]"
            />
            <span className="text-[#474747]">{opt.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
