import React from 'react';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import productimage5 from '../Assets/productimage5.svg'
import Gallery from '../components/Gallery';
import ProductListing from '../components/ProductListing';
export default function HomePage() {
  return (
    <div className="p-8">
      
      <Gallery
  width="1440px"
  height="681px"
  radius="8px"
  showThumbs
  images={[
    { src: 'src/Assets/home-slide-1.jpeg' },
    { src: 'src/Assets/home-slide-2.jpeg' },
    { src: 'src/Assets/home-slide-3.jpeg' },
    { src: 'src/Assets/home-slide-4.jpeg' },
    { src: 'src/Assets/home-slide-5.jpeg' },
  ]}
/>
<Section
title="Coleção em destaque"
titleAlign= "center"
>
<div className ='flex items-center justify-between px-6 gap-x-2' >
  <img
  src='src/Assets/collection-1.png'
  alt=''
  className='rounded-[4px]'
  />
    <img
  src='src/Assets/collection-2.png'
  alt=''
  className='rounded-[4px]'
  />
    <img
  src='src/Assets/collection-3.png'
  alt=''
  className='rounded-[4px]'
  />
</div>

</Section>

      <Section
  title="Produtos em destaque"
  textAlign='left'
>
<ProductListing/>

  
</Section>
    </div>
  );
}