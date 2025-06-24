import React from 'react';
import logoheader from '../Assets/logoheader.svg';

export default function Logo({ white = false }) {
  return (
    <img
      src={logoheader}
      alt="Logo da Digital Store"
      className={`h-[40px] w-auto ${white ? 'invert brightness-0' : ''}`}
    />
  );
}