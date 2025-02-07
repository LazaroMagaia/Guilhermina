import React from 'react';
import { Link } from '@inertiajs/react';
const ServiceAndContact: React.FC = () => {
    return (
    <div className="relative w-full h-96">
      {/* Imagem de fundo */}
      <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
      >
          <source src="/videos/01.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
      </video>
      {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center
          justify-center text-center px-4">
            {/* Texto sobreposto */}
            <h2 className="text-white text-2xl font-bold">Ilumine Seus Momentos Especiais!</h2>
            <p className="text-white text-lg mt-2">Entre em contato e descubra as melhores opções para sua celebração.</p>
            <Link href={route('contact')} className="mt-4 px-6 py-2 bg-trasparent border text-white text-lg font-semibold rounded-lg 
                hover:bg-[#1641BA] transition hover:border-[#1641BA]">Entre em Contato
            </Link>
        </div>  
    </div>
    );
};

export default ServiceAndContact;