import {useState} from 'react';
import { Link, usePage } from '@inertiajs/react';

interface TopbarProps {
  toggleSidebar: () => void;
}

const Topbar = ({ toggleSidebar }: TopbarProps) => {
  const { auth } = usePage().props; // Obter as informações do usuário autenticado
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar a visibilidade do dropdown

  // Alterna a visibilidade do dropdown
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className='overflow-hidden'>
      <header className="bg-white shadow-md text-black p-4 flex flex-wrap justify-between items-center">
            {/* Botão para abrir/fechar a sidebar em dispositivos móveis */}
            <button onClick={toggleSidebar} className="lg:hidden text-black">
              <i className="fa fa-bars"></i>
            </button>

            <div className="flex items-center">
              <span className="text-xl font-semibold hidden md:block">Admin Panel</span>
            </div>

            {/* Avatar e Dropdown */}
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center space-x-2">
                {/* Imagem do usuário (avatar) */}
                <img
                  src={auth.user.avatar || '/images/logo/user.png'}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                {/* Nome do usuário ou ícone */}
                <span className='hidden md:block'>{auth.user.name}</span>
              </button>

              {/* Dropdown de opções */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        href="/admin/profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Meu Perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/logout"
                        method="post"
                        className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-start text-md"
                      >
                        Sair
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
        </header>
    </div>
   
  );
};

export default Topbar;
