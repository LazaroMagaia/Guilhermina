import { Link,usePage } from '@inertiajs/react';
import React,{useEffect} from 'react';

const Service: React.FC = () => {
    const { url } = usePage(); // Obtém a URL atual
    useEffect(() => {
        const params = new URLSearchParams(new URL(url, window.location.origin).search);
        const scrollTo = params.get("scroll");

        if (scrollTo) {
            const section = document.getElementById(scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [url]);

    return (
        <div id='service'>
            <div className='container mx-auto px-4 py-6 max-w-6xl'>
                <h1 className='text-md md:text-xl text-gray-700'>Nossos servicos</h1>
                <div className='grid grid-cols-12 gap-4'>
                    <div className="col-span-12 md:col-span-6">
                        <h1 className="text-xl md:text-3xl font-bold text-gray-900">O que Oferecemos</h1>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className="text-gray-700">
                            Descubra uma ampla variedade de fogos de artifício para todas as ocasiões! 
                            Oferecemos produtos de alta qualidade para tornar suas celebrações inesquecíveis, 
                            com segurança e brilho garantidos.
                        </p>
                    </div>
                    <div className='col-span-12 py-5 border-b'>
                        <div className='flex justify-between items-center'>
                            <p className='text-md md:text-2xl text-gray-700'> Espetáculos Pirotécnicos </p>
                            <Link href={route('services.pirotecnico')} className='bg-trasparent border 
                                border-[#1641BA] 
                                text-[#1641BA] rounded-full w-12 h-12 flex items-center justify-center
                                hover:bg-[#1641BA] transition hover:text-white'>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className='col-span-12 py-5 border-b'>
                        <div className='flex justify-between items-center'>
                            <p className='text-md md:text-2xl text-gray-700'> Consultoria e Licenciamento </p>
                            <Link href={route('services.legality')} className='bg-trasparent border border-[#1641BA] 
                                text-[#1641BA] rounded-full w-12 h-12 flex items-center justify-center
                                hover:bg-[#1641BA] transition hover:text-white'>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Service;