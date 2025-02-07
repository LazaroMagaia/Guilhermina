import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}


const Sidebar = ({ sidebarOpen, toggleSidebar }: SidebarProps) => {
  const { props } = usePage(); // Obter a URL atual e as propriedades da página
  const { auth } = props; // Obter as informações do usuário autenticado

  // Função para verificar se o link é o atual
  const isActive = (path: string) => {
    const currentRoute = route().current(); // Obtem a rota atual
    const trueValue = currentRoute ? currentRoute.startsWith(path) : false;
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
      name: 'Dashboard',
      icon: 'fa-solid fa-chart-simple', // Ícone para "Usuários"
      link: 'user.index',
      roles: ['user'], // Apenas user pode acessar
    },
    // Adicione mais itens conforme necessário
  ];

  return (
    <div className={`lg:w-64 w-64 bg-[#2264DC] text-white h-full fixed top-0 left-0 transform ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300 lg:translate-x-0 z-50`}>
      <div className="flex justify-between items-center p-4">
        <img src="/images/logo/logo.jpeg" alt="Logo" className='w-24 h-16 object-cover'/>
        <button onClick={toggleSidebar} className="lg:hidden text-white">
          <i className="fa fa-times"></i>
        </button>
      </div>
      <nav className="mt-10">
        <ul>
          {menuItems.map((item, index) => (
            // Verifica se o usuário tem permissão para acessar a rota com base em seu papel
            item.roles.includes(auth.user.role) && (
              <li key={index}>
                <Link
                  href={route(item.link)}
                  className={`block px-4 py-2 text-lg hover:bg-[#0A0045] 
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
  );
};

export default Sidebar;
