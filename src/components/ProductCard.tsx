import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  priceDiscount?: string;
}

export default function ProductCard({
  image,
  name,
  price,
  priceDiscount,
}: ProductCardProps) {
  return (
    <div className="w-[292px]">
      <img
        src={image}
        alt={name}
        className="w-[292px] h-[321px] object-cover rounded-[8px]"
      />
      <h3 className="text-[16px] text-[#474747] font-medium mt-4">
        {name}
      </h3>
      <div className="flex items-center gap-2 mt-2">
        {priceDiscount ? (
          <>
          <span className="text-[#A8A8A8] text-[16px] line-through">
          R$ {price}
        </span>
            <span className="text-[#C92071] text-[24px] font-bold">
              R$ {priceDiscount}
            </span>
          </>
        ) : (
          <span className="text-[#474747] text-[24px] font-bold">
            R$ {price}
          </span>
        )}
      </div>
    </div>
  );
}
