// src/components/BuyBox.jsx
import React from 'react';
import starIcon from '../Assets/star-icon.svg';

export default function BuyBoxReal({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
      <h1 className="text-[32px] text-[#474747] font-semibold">{name}</h1>
      <p className="text-[12px] text-[#666666]">Ref: {reference}</p>

     
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-[#F6AA1C] rounded-[4px] px-2 py-1">
          <span className="text-[14px] font-medium">{stars}</span>
          <img src={starIcon} alt="Estrela" className="w-4 h-4" />
        </div>
        <span className="text-[14px] text-[#8F8F8F]">({rating})</span>
      </div>

      
      <div className="flex items-baseline gap-3">
        {priceDiscount ? (
          <>
            <span className="text-[16px] text-[#CCCCCC] line-through">
              {price}
            </span>
            <span className="text-[32px] text-[#474747] font-semibold">
              {priceDiscount}
            </span>
          </>
        ) : (
          <span className="text-[32px] text-[#CCCCCC] font-semibold">
            {price}
          </span>
        )}
      </div>

      
      <p className="text-[14px] text-[#333333]">{description}</p>

      
      <div>{children}</div>

      <button className="mt-4 bg-[#F6AA1C] text-[#FFFFFF] text-[16px] font-medium py-3 rounded-md ">
        Comprar
      </button>
    </div>
  );
}
