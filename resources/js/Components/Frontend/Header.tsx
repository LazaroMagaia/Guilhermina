import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const { props } = usePage(); // Obter a URL atual e as propriedades da página
  const { auth } = props; // Obter as informações do usuário autenticado
  return (
    <header className="bg-white text-black p-4 shadow-lg"> {/* Sombra aplicada aqui */}
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold">
          <Link href="/">
            <img src="/images/logo/logo.jpeg" alt="Logo" className="h-16" />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-600">Infinity Fireworks</Link>
          <Link href='/?scroll=service' className="hover:text-gray-600">Serviços</Link>
          {/*<Link href="/" className="hover:text-gray-600">Loja</Link>*/}
          <Link href={'contact'} className="hover:text-gray-600">Contacto</Link>
          {auth.user ? (
            <>
              {/* Verifica a role do usuário */}
              {auth.user.role === 'admin' ? (
                <Link href="/admin" className="hover:text-gray-600">Painel de controle</Link>
              ) : (
                <Link href="/admin/user" className="hover:text-gray-600">Painel de controle</Link>
              )}
            </>
          ) : (
            <Link href="/login" className="hover:text-gray-600">Entrar</Link>
          )}
          {/*<Link href="/carrinho" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

            <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full px-1">1</span>
          </Link>*/}
        </div>

        {/* Menu Responsivo */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <div className="space-y-4">
            <Link href="/" className="block py-2 hover:text-gray-600">Infinity Fireworks</Link>
            <Link href='/?scroll=service' className="block py-2 hover:text-gray-600">Serviços</Link>
           {/* <Link href="/" className="block py-2 text-black">Loja</Link> */}
            <Link href={'contact'} className="block py-2 text-black">Contacto</Link>
            {auth.user ? (
            <>
              {/* Verifica a role do usuário */}
              {auth.user.role === 'admin' ? (
                <Link href="/admin" className="block py-2 text-black">Painel de controle</Link>
              ) : (
                <Link href="/admin/user" className="block py-2 text-black">Painel de controle</Link>
              )}
            </>
          ) : (
            <Link href="/login" className="block py-2 text-black">Entrar</Link>
          )}
            {/*<Link href="/carrinho" className="block py-2 text-black">Carrinho [1]</Link>*/}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
