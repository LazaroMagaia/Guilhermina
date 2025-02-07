import React from 'react';
import { Link } from '@inertiajs/react';

interface ServiceCardProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
    reversed?: boolean; // Define se a ordem é invertida
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, link, reversed = false }) => {
    return (
        <div className={`relative bg-gradient-to-r 
                        ${reversed 
                            ? 'from-transparent to-[#1641BA] md:rounded-tr-full md:rounded-br-full' 
                            : 'from-[#1641BA] to-transparent md:rounded-tl-full md:rounded-bl-full'} 
                        p-6 md:p-10 flex flex-col md:flex-row items-center md:items-stretch 
                        max-w-5xl mx-auto shadow-lg overflow-hidden`}>
            
            {/* Imagem */}
            <div className={`w-full md:w-1/2 flex justify-center relative 
                ${reversed ? 'md:order-2' : 'md:order-1'}`}>
                <img 
                    src={imageSrc} 
                    alt={title}
                    className={`w-[180px] h-[180px] md:w-[280px] md:h-[280px] object-cover rounded-full 
                                ${reversed ? 'md:right-[10px]' : 'md:left-[-10px]'} md:absolute 
                                md:top-1/2 md:-translate-y-1/2`}
                />
            </div>

            {/* Conteúdo */}
            <div className={`w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-6 
                            ${reversed ? 'md:pr-20 md:order-1' : 'md:pl-20 md:order-2'}`}>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                    {title}
                </h2>
                <p className="text-gray-600 mt-4">
                    {description}
                </p>
                
                {/* Botão */}
                <Link 
                    href={link}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full 
                               text-center font-semibold transition duration-300 mx-auto md:mx-0"
                >
                    Saiba Mais
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
