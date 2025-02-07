import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Frontend from '@/Layouts/FrontendLayout';

const ConsultoriaLicenciamento: React.FC = () => {
    return (
        <Frontend>
            <Head title="Consultoria e Licenciamento" />

            {/* Banner com Vídeo */}
            <section className="relative w-full h-[350px] md:h-[500px]">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/01.mp4" type="video/mp4" />
                    O seu navegador não suporta vídeos.
                </video>

                {/* Sobreposição Escura */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-4xl md:text-6xl font-bold uppercase">Consultoria e Licenciamento</h1>
                    <p className="text-white text-lg md:text-2xl mt-4 max-w-3xl">
                        Garantimos conformidade legal e segurança total para os seus eventos e negócios pirotécnicos.
                    </p>
                </div>
            </section>

            {/* Explicação */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center">O que fazemos?</h2>
                <p className="text-lg md:text-xl mt-6 text-center max-w-4xl mx-auto">
                    Oferecemos consultoria especializada para garantir que todas as operações com fogos de artifício 
                    estejam de acordo com as normas e regulamentações locais. Desde a obtenção de licenças até auditorias 
                    de segurança, garantimos que os seus eventos e negócios estejam 100% legais.
                </p>
            </section>

            {/* Tipos de Serviços */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Os Nossos Serviços</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">📜 Licenciamento de Eventos</h3>
                            <p className="mt-2">Auxiliamos no processo de obtenção de licenças para eventos pirotécnicos.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">⚖️ Conformidade Legal</h3>
                            <p className="mt-2">Garantimos que sua empresa esteja dentro das normas e regulamentos de segurança.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">🛠️ Auditoria de Segurança</h3>
                            <p className="mt-2">Realizamos inspeções para garantir que todos os protocolos de segurança sejam seguidos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action - Entre em Contacto */}
            <section className="bg-[#1641BA] text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Precisa de Consultoria?</h2>
                    <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
                        Entre em contacto connosco para garantir que o seu evento ou negócio pirotécnico cumpra todas as normas legais!
                    </p>
                    <Link 
                        href={route('contact')} 
                        className="mt-6 inline-block px-8 py-3 bg-white text-[#1641BA] font-semibold text-lg rounded-lg 
                                   hover:bg-gray-200 transition"
                    >
                        Entre em Contacto
                    </Link>
                </div>
            </section>
        </Frontend>
    );
};

export default ConsultoriaLicenciamento;
