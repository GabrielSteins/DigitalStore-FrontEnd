import React from 'react';
import { Link } from 'react-router-dom';

interface SectionProps {
  title: string;
  titleAlign?: 'left' | 'center';
  link?: {
    text: string;
    href: string;
  };
  children: React.ReactNode;
}

export default function Section({
  title,
  titleAlign = 'left',
  link,
  children,
}: SectionProps) {
  const isCenter = titleAlign === 'center';

  return (
    <section className="w-full">
      
      <div
        className={`flex ${
          isCenter ? 'justify-center' : 'justify-between'
        } items-center mb-6`}
      >
        <h2
          className={`text-[24px] font-semibold text-[#474747] ${
            isCenter ? 'text-center w-full' : ''
          }`}
        >
          {title}
        </h2>

        
        {!isCenter && link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C92071] text-[18px] hover:underline"
          >
            {link.text}
          </a>
        )}
      </div>

      
      <div>{children}</div>
    </section>
  );
}
