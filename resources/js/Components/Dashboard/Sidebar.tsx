import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";


interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const { props } = usePage(); // Obter a URL atual e as propriedades da página
  const { auth } = props;

  
  // Função para verificar se o link é o atual
  const isActive = (path: string) => {
    const currentRoute = route().current(); // Obtem a rota atual
    const trueValue = currentRoute ? currentRoute.startsWith(path) : false;
    console.log(path,currentRoute);
    if (trueValue) return 'bg-[#0A0045]'; // Retorna a classe de fundo cinza
  };
  // Mapeamento das rotas baseadas no papel do usuário
  const menuItems = [
    {
      name: 'Dashboard',
      icon: 'fa-solid fa-chart-simple', // Ícone para "Dashboard"
      link: 'admin.index',
      roles: ['admin'], // Apenas admin pode acessar
    },
    {
      name: 'Categorias',
      icon: 'fa fa-list', // Ícone para "Dashboard"
      link: 'admin.categories',
      roles: ['admin'], // Apenas admin pode acessar
    },
    {
      name: 'Produtos',
      icon: 'fa fa-box', // Ícone para "Dashboard"
      link: 'admin.products',
      roles: ['admin'], // Apenas admin pode acessar
    },
    {
      name:'stock',
      icon:'fa fa-box',
      link:'admin.stock',
      roles:['admin'],
    },
    /*{
      name: 'Usuários',
      icon: 'fa fa-users', // Ícone para "Usuários"
      link: 'user.index',
      roles: ['admin'], // Apenas admin pode acessar
    },*/
    {
      name: 'Dashboard',
      icon: 'fa-solid fa-chart-simple', // Ícone para "Usuários"
      link: 'user.index',
      roles: ['user'], // Apenas user pode acessar
    },
    // Adicione mais itens conforme necessário
  ];

  return (
    <aside
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } md:block bg-[#2264DC] w-64 shadow-lg h-screen fixed md:relative z-50`}
    >
      <div className="h-full flex flex-col">
        <div className="text-white px-4  font-bold text-lg py-4">
          Infinity fireworks
        </div>

        <nav className="mt-10">
          <ul>
            {menuItems.map((item, index) => (
              // Verifica se o usuário tem permissão para acessar a rota com base em seu papel
              item.roles.includes(auth.user.role) && (
                <li key={index}>
                  <Link
                    href={route(item.link)}
                    className={`block px-4 py-2 text-lg hover:bg-[#0A0045] text-white
                      ${isActive(item.link)} flex items-center space-x-3`}
                  >
                    {/* Ícone */}
                    <i className={`${item.icon} text-xl`}></i>
                    {/* Nome do item */}
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
