import React, { useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import Logo from './Logo';
import BuyBox from './BuyBox';
export default function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
    e.preventDefault();

    if (search.trim() !== '') {
      navigate(`/products?filter=${encodeURIComponent(search.trim())}`);
    }
  };
  return (
  <>
    <header className="bg-white text-white flex items-center justify-between px-6 h-[192px] gap-x-6">
      <Logo/>
      <form onSubmit={handleSubmit} className="flex items-center bg-[#F5F5F5] rounded-[8px] overflow-hidden w-[559px] h-[60px] ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar produtos..."
          className="px-4 py-2 text-black focus:outline-none bg-[#F5F5F5]"
        />
        <button
          type="submit"
          className="px-3 hover:bg-[#F5F5F5]"
          onClick={handleSubmit}
        >
          🔍
        </button>
      </form>
      <a className="text-[#474747] underline hover whitespace-nowrap" >Cadastre-se</a>
      <a className="bg-[#C92071] w-[114px] h-[40px] rounded-[4px] text-[14px] text-white font-bold flex items-center justify-center">Entrar</a>
      <BuyBox/>
    </header>
    <nav className="w-full bg-white border-t border-b border-[#E5E5E5]">
        <ul className="flex justify-center gap-10 py-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#C92071] border-b-2 border-[#C92071] pb-1 font-semibold transition'
                  : 'text-[#474747] hover:text-[#C92071] transition'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#C92071] border-b-2 border-[#C92071] pb-1 font-semibold transition'
                  : 'text-[#474747] hover:text-[#C92071] transition'
              }
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#C92071] border-b-2 border-[#C92071] pb-1 font-semibold transition'
                  : 'text-[#474747] hover:text-[#C92071] transition'
              }
            >
              Categorias
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#C92071] border-b-2 border-[#C92071] pb-1 font-semibold transition'
                  : 'text-[#474747] hover:text-[#C92071] transition'
              }
            >
              Meus Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>
      </>
  );
}
