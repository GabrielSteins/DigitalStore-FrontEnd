import React from 'react';
import ProductCard from './ProductCard';

export default function ProductListing(){
    return(
<>
<div className ='flex items-center justify-between px-6 gap-x-2'>
<ProductCard
  image='src/Assets/product-thumb-1.jpeg'
  name="Tênis"
  price="200"
  priceDiscount="100"/>
  <ProductCard
  image='src/Assets/product-thumb-2.jpeg'
  name="Tênis"
  price="200"
  priceDiscount="100"/>
  <ProductCard
  image='src/Assets/product-thumb-3.jpeg'
  name="Tênis"
  price="200"
  priceDiscount="100"/>
  <ProductCard
  image='src/Assets/product-thumb-5.jpeg'
  name="Tênis"
  price="200"
  priceDiscount="100"/>

</div>
<div className ='flex items-center justify-between px-6 gap-x-2'>
<ProductCard
  image='src/Assets/product-thumb-4.jpeg'
  name="Tênis"
  price="200"
  priceDiscount="100"/>
  <ProductCard
  image='src/Assets/product-thumb-1.jpeg'
  name="Tênis"
  price="200"
  priceDiscount="100"/>
  <ProductCard
  image='src/Assets/product-thumb-1.jpeg'
  name="Tênis"
  price="200"
  priceDiscount="100"/>
  <ProductCard
  image='src/Assets/product-thumb-1.jpeg'
  name="Tênis"
  price="200"
  priceDiscount="100"/>

</div>
</>
    );
}