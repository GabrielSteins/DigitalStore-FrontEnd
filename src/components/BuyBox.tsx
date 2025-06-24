import React from 'react';
import minicart from '../Assets/minicart.svg';

export default function BuyBox() {
  return (
    <img
      src={minicart}
      alt="Carrinho de compras"
      className="h-[24px] w-[24px]"
    />
  );
}