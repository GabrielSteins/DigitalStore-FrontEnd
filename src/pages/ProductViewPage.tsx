import React from 'react';
import Gallery from '../components/Gallery';
import BuyBoxReal from '../components/BuyBoxReal';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
export default function ProductViewPage(){
    return(
        <>
        <div className="p-8 flex gap-8">
        <Gallery
  width="700px"
  height="570px"
  radius="4px"
  showThumbs
  images={[
    { src: '/src/Assets/produc-image-1 (1).jpeg' },
    { src: '/src/Assets/produc-image-2.jpeg' },
    { src: '/src/Assets/produc-image-3.jpeg' },
    { src: '/src/Assets/produc-image-4.jpeg' },
    { src: '/src/Assets/produc-image-5 (1).jpeg' },
  ]}
/>
<BuyBoxReal
        name="Tênis de Corrida XYZ"
        reference="REF12345"
        stars={4.5}
        rating={128}
        price="R$ 299,90"
        priceDiscount="R$ 249,90"
        description="O melhor tênis de corrida, com amortecimento e design inovador."
      >
        <h3 className="text-[18px] font-semibold mb-2">Tamanhos</h3>
        <ProductOptions
          options={['39', '40', '41', '42']}
          shape="square"
          type="text"
          radius="8px"
        />

        <h3 className="text-[18px] font-semibold mb-2 mt-4">Cores</h3>
        <ProductOptions
          options={['#000000', '#FFFFFF', '#FF0000']}
          shape="circle"
          type="color"
        />
      </BuyBoxReal>
</div>
<Section
  title="Produtos recomendados"
  textAlign='left'
  link={{ text: 'Ver todos', href: '/products' }}
>
<ProductListing/>

  
</Section>
</>
    );
}