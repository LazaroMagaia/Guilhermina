import React from 'react';
import {Link, Head } from '@inertiajs/react';
import Frontend from '@/Layouts/FrontendLayout';

const Pirotecnicos: React.FC = () => {
    return (
        <Frontend>
            <Head title="Espetáculos Pirotécnicos" />

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
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center 
                    justify-center text-center px-4">
                    <h1 className="text-white text-2xl md:text-6xl font-bold uppercase">
                        Espetáculos Pirotécnicos
                    </h1>
                    <p className="text-white text-lg md:text-2xl mt-4 max-w-3xl">
                        Experimente a magia dos fogos de artifício com espetáculos sincronizados e
                        emocionantes, perfeitos para qualquer grande evento!
                    </p>
                </div>
            </section>

            {/* Explicação */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-xl md:text-4xl font-bold text-center">O que são espetáculos pirotécnicos?</h2>
                <p className="text-lg md:text-xl mt-6 text-center max-w-4xl mx-auto">
                    Os espetáculos pirotécnicos são uma arte visual que combina luz, cor e som para criar um efeito 
                    inesquecível no céu. Utilizando tecnologia de ponta, conseguimos sincronizar explosões com música 
                    e efeitos especiais, garantindo uma experiência envolvente para o público.
                </p>
            </section>

            {/* Tipos de Espetáculos */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Tipos de Espetáculos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">🎆 Fogos de Artifício Aéreos</h3>
                            <p className="mt-2">Grandes explosões coloridas no céu, perfeitas para eventos públicos.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">🎇 Pirotecnia de Palco</h3>
                            <p className="mt-2">Efeitos especiais para espetáculos musicais e performances ao vivo.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">🔇 Pirotecnia Silenciosa</h3>
                            <p className="mt-2">Fogos de artifício com impacto visual sem ruído excessivo.</p>
                        </div>
                    </div>
                </div>
            </section>

                {/* Call to Action - Entre em Contacto */}
                <section className="bg-[#1641BA] text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Quer um espetáculo inesquecível?</h2>
                    <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
                        Entre em contacto connosco e leve a magia dos fogos de artifício ao seu evento!
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

export default Pirotecnicos;
