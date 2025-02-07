import React, { useState } from "react";
import { usePage,Link } from '@inertiajs/react';

const DropdownPerfil = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { auth } = usePage().props;
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative z-60">
        {/* Botão do dropdown com imagem */}
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
            src="/images/logo/user.png"
            alt="Perfil"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <span className="hidden md:block text-gray-800 font-medium">
            { auth.user.name|| "Nome do Usuário"}
          </span>
          <svg
            className={`w-4 h-4 text-gray-800 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
  
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <ul className="py-2">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Perfil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Configurações
                </a>
              </li>
              <li>
                <Link href={route('logout')} method="post" as="button"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
                >
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
};

export default DropdownPerfil;
