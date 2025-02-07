import React, { useState } from 'react';
import Frontend from '@/Layouts/FrontendLayout';
import { Head, Link,useForm } from '@inertiajs/react';
import FAQPage from '@/Components/Frontend/Pages/Faq';
import ServiceCard from '@/Components/Frontend/Pages/ServiceCard';
const ServicesIndex: React.FC = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
      });
      const handleSubmit = (e) => {
        e.preventDefault();
        post(route('newsletter.subscribe'), {
          onSuccess: () => {
            setData({ email: '' });
            alert('Inscrição realizada com sucesso!');
          },
          onError: () => {
            alert('Houve um erro na inscrição.');
          },
        });
      };

    return (
        <Frontend>
            <Head title="Services" />
            <div className='container mx-auto px-4 py-10 max-w-6xl'>   
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 md:col-span-6'>
                        <h1 className='text-xl md:text-5xl font-bold text-center md:text-start'>
                            Infinity Fireworks
                        </h1>
                        <p className='text-xl md:text-5xl font-bold text-center md:text-start'>servicos</p>
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <p className='text-center md:text-start'>
                            Explore nossa seleção exclusiva de fogos de artifício, perfeitos para qualquer
                            evento! Com produtos de primeira linha, garantimos espetáculos deslumbrantes e 
                            seguros, criando momentos memoráveis em todas as celebrações.
                        </p>
                    </div>
                </div>
            </div>
            {/* SERVICES */}
            {/*
                <div className='my-10 grid grid-cols-12 gap-4'>
                    <div className='col-span-12 group bg-gray-200 py-5 group px-2'>
                        <div className='container mx-auto max-w-6xl flex flex-wrap justify-between 
                            items-center'>
                            <h1 className="text-black text-lg md:text-2xl font-bold bottom-0">
                                Espetáculos Pirotécnicos
                            </h1>
                            <div className='flex flex-col'>
                                <p className='text-sm hidden group-hover:flex'>
                                    Shows de fogos sincronizados para eventos privados e corporativos.
                                </p>
                                <p className='text-sm hidden group-hover:flex'>
                                    Personalização conforme tema e orçamento.
                                </p>
                            </div>
                            <Link href='' className='bg-[#1641BA] w-12 h-12 flex justify-center items-center
                                rounded-full block md:hidden transition duration-300 ease-in-out 
                                transform hover:scale-110'>
                                <i className="fa-solid fa-arrow-right text-white"></i>
                            </Link>

                            <Link href='' className='bg-[#1641BA] w-12 h-12 flex justify-center items-center
                                rounded-full hidden group-hover:flex transition duration-300 ease-in-out 
                                transform hover:scale-110'>
                                <i className="fa-solid fa-arrow-right text-white"></i>
                            </Link>
                        </div>
                    </div>
                    <div className='col-span-12 group bg-gray-200 py-5 group px-2'>
                        <div className='container mx-auto max-w-6xl flex flex-wrap justify-between 
                            items-center'>
                            <h1 className="text-black text-lg md:text-2xl font-bold bottom-0">
                                Consultoria e Licenciamento
                            </h1>
                            <div className='flex flex-col'>
                                <p className='text-sm hidden group-hover:flex'>
                                    Auxílio na obtenção de licenças e autorizações legais.
                                </p>
                                <p className='text-sm hidden group-hover:flex'>
                                    Aconselhamento sobre normas ambientais e de segurança.
                                </p>
                            </div>
                        
                            <Link href='' className='bg-[#1641BA] w-12 h-12 flex justify-center items-center
                                rounded-full block md:hidden transition duration-300 ease-in-out 
                                transform hover:scale-110'>
                                <i className="fa-solid fa-arrow-right text-white"></i>
                            </Link>

                            <Link href='' className='bg-[#1641BA] w-12 h-12 flex justify-center items-center
                                rounded-full hidden group-hover:flex transition duration-300 ease-in-out 
                                transform hover:scale-110'>
                                <i className="fa-solid fa-arrow-right text-white"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            */}
   
            <div className="space-y-12 py-10">
                {/* Primeiro Serviço */}
                <ServiceCard 
                    imageSrc="/images/products/01.jpg"
                    title="Espetáculos Pirotécnicos"
                    description="Criamos espetáculos deslumbrantes para eventos especiais 
                        com segurança e qualidade."
                    link="/servico/detalhes"
                />

                {/* Segundo Serviço (Inverso) */}
                <ServiceCard 
                    imageSrc="/images/products/02.jpg"
                    title="Consultoria e Licenciamento"
                    description="Auxiliamos na legalização e segurança para a realização de shows 
                        pirotécnicos."
                    link="/servico/detalhes"
                    reversed={true} // Inverte a ordem
                />
            </div>

           <div className="px-6 py-20 text-center max-w-full mx-auto ">
                <div className='max-w-6xl mx-auto container'>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        Inscreva-se na nossa Newsletter
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Receba as últimas novidades, promoções e ofertas exclusivas diretamente no seu e-mail.
                    </p>
                    
                    {/* Formulário */}
                    <form className="mt-6 flex flex-col md:flex-row items-center gap-4 justify-center"
                        onSubmit={handleSubmit}>
                        <input 
                            type="email"
                            name="email" 
                            value={data.email} 
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Digite seu e-mail" 
                            className="w-full md:w-2/3 p-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                      
                        <button 
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full 
                                    font-semibold transition duration-300 w-full md:w-auto"
                        >
                             {processing ? 'Enviando...' : 'Inscrever-se'}
                        </button>
                    </form>
                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>
                
            </div>
            <div className='container mx-auto px-4 py-10 max-w-6xl'>
                <FAQPage/>
            </div>
        </Frontend>
    );
};

export default ServicesIndex;
