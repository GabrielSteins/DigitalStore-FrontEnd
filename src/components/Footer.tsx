import React from 'react';
import Logo from './Logo';
import twitter from '../Assets/twitter.svg';
import facebook from '../Assets/facebook.svg';
import instagram from '../Assets/instagram.svg';
import Informations from './Information';
export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white p-8 mt-auto h-[454px]">
      <div className="flex gap-20">
      <div>
      <Logo white />
      <p className="mt-4 max-w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </p>
      <ul className="flex gap-6 py-6">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="h-[20px] w-[10px] hover:opacity-70 transition"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="h-[20px] w-[20px] hover:opacity-70 transition"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt="Twitter"
              className="h-[18px] w-[22px] hover:opacity-70 transition"
            />
          </a>
        </li>
      </ul>
</div>
      <Informations
          title="Informação"
          informations={[
            { text: 'Sobre Drip Store', link: '/about' },
            { text: 'Segurança', link: '/security' },
            { text: 'Whishlist', link: '/whishlist' },
            { text: 'Blog', link: '/blog' },
            { text: 'Trabalhe conosco', link:'work with us'},
            { text: 'Meus pedidos', link:'my orders'}
          ]}
        />

        <Informations
          title="Categorias"
          informations={[
            { text: 'Camisetas', link: '/camisetas' },
            { text: 'Calças', link: '/calcas' },
            { text: 'Bonés', link: '/bones' },
            { text: 'Headphones', link: '/headphones' },
            { text: 'Tênis', link: '/tenis'}
          ]}
        />

        <Informations
          title="Contato"
          informations={[
            { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', link: '/endereco' },
            { text: '(85) 3051-3411', link: '/telefone' },
          ]}
        /></div>
<hr/>
<p className='text-center'>© 2024 Digital Store</p>
    </footer>

  );
}
