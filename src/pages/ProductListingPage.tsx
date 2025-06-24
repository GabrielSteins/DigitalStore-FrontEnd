import React, { useState } from 'react';
import FilterGroup from '../components/FilterGroup';
import ProductCard from '../components/ProductCard';
import Section from '../components/Section';

export default function ProductListingPage() {
  const [sortOrder, setSortOrder] = useState('lowest');

  return (
    
      <div className="flex gap-8 px-8 py-6">

        
        <aside className="w-[308px] flex-shrink-0">
          
          <div className="mb-6">
            <label className="block text-[16px] text-[#474747] mb-2">
              Ordenar por
            </label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full h-[60px] border border-[#ccc] rounded-md px-3 text-[#474747]"
            >
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
            </select>
          </div>

         
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h2 className="text-[16px] text-[#474747] font-semibold mb-2">
              Filtrar por
            </h2>
            <hr className="border-[#D9D9D9] mb-4" />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: 'Camisetas' },
                { text: 'Tênis' },
                { text: 'Acessórios' },
                { text: 'Calças' },
              ]}
            />

            <FilterGroup
              title="Tamanhos"
              inputType="checkbox"
              options={[
                { text: 'P' },
                { text: 'M' },
                { text: 'G' },
                { text: 'GG' },
              ]}
            />

            <FilterGroup
              title="Faixa de Preço"
              inputType="checkbox"
              options={[
                { text: 'Até R$100', value: '100' },
                { text: 'R$100 a R$500', value: '500' },
                { text: 'Acima de R$500', value: '500+' },
              ]}
            />
          </div>
        </aside>

        
        <main className="flex-1">
          <Section title="Todos os Produtos" titleAlign="left">
            <div className="grid grid-cols-3 gap-6">
              <ProductCard
                image="src/Assets/productimage5.svg"
                name="Tênis Cinza"
                price="R$200"
                priceDiscount="R$150"
              />
              <ProductCard
                image="/Assets/productimage4.svg"
                name="Boné"
                price="R$40"
              />
              <ProductCard
                image="/Assets/productimage3.svg"
                name="Camiseta Vermelha"
                price="R$200"
                priceDiscount="R$150"
              />
              
            </div>
          </Section>
        </main>
      </div>
    
  );
}
