import { PropsWithChildren, useState } from 'react';
import Sidebar from '@/Components/Dashboard/Sidebar';
import DropdownPerfil from '@/Components/Dashboard/PerfilDropdown';
import { Link } from '@inertiajs/react';


export default function AdminLayout({ children }: PropsWithChildren) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <header className="bg-white shadow-lg w-full">
                <div className="container mx-auto max-w-7xl px-4 py-3 flex justify-between 
                  items-center">
                  <Link href={route("admin.index")}> 
                      <img src="/images/logo/logo.jpeg" alt="logo.jpeg" className='w-10' />
                    </Link>
                   
                    <button
                        className="md:hidden text-gray-800 focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <i className="fas fa-bars text-2xl" />
                    </button>
                    <DropdownPerfil />
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 p-6 ">
                    {children}
                </main>
            </div>
        </div>
    );
};
