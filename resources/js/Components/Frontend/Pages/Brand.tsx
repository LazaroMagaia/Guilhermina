import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Brands: React.FC = () => {
    const brandList = [
        { name: 'Black cat', img: '/images/logo/black_cat.jpeg', description: '' },
        { name: 'Grucci', img: '/images/logo/grucci.jpeg', description: '' },
        { name: 'Winda', img: '/images/logo/winda.jpeg', description: '' },
        { name: 'Star fireworks', img: '/images/logo/starfireworks.jpeg', description: '' }
    ];

    return (
        <section className="relative">
            <div className="absolute inset-0 z-[-1]">
                <img
                    src={'/images/fireworks/bg_03.jpg'}
                    alt="Imagem de fundo"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <h1 className="text-lg md:text-3xl uppercase text-center font-semibold">
                    - poupe muito em -
                </h1>
                <p className="max-w-6xl mx-auto text-center text-lg md:text-2xl mt-2">
                    As melhores marcas de fogos de artifício para consumidores e serviços especializados! 
                    A Superior Fireworks oferece os melhores produtos das melhores marcas a preços incríveis 
                    durante todo o ano, juntamente com serviços de personalização e organização de eventos. 
                    Compre fogos de artifício online ou na loja para repetidores aéreos, petardos, projéteis 
                    de artilharia, estalos de casamento e muito mais, tudo aos melhores preços todos os dias!
                </p>
                <p className="max-w-6xl mx-auto text-center text-lg md:text-2xl mt-2">
                    Se precisar de ajuda com a sua encomenda, quiser saber mais sobre os nossos serviços
                    ou tiver alguma questão, ligue-nos para +258 827017601 ou envie um email para 
                    sales@infinityfireworks.com. Também podemos fornecer informações úteis sobre os 
                    produtos ou ajudar a escolher os fogos de artifício certos para o seu evento!
                </p>
            </div>

            {/* Slider de Logotipos */}
            <div className="container mx-auto px-4 py-12 max-w-xl">
                <Swiper
                    spaceBetween={50} // Espaçamento entre os slides
                    slidesPerView={3} // Quantos slides visíveis ao mesmo tempo
                    loop={true} // Loop contínuo
                    navigation={{ prevEl: '.prev-button', nextEl: '.next-button' }} // Definindo as referências dos botões
                    modules={[Navigation]} // Adicionando o módulo de navegação
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // 1 slide em telas pequenas
                        },
                        768: {
                            slidesPerView: 2, // 2 slides em telas médias
                        },
                        1024: {
                            slidesPerView: 3, // 3 slides em telas grandes
                        },
                    }}
                >
                {brandList.map((brand, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center">
                            <img
                                src={brand.img}
                                alt={brand.name}
                                className="w-20 h-20 object-contain rounded-full
                                grayscale hover:grayscale-0 transition-all duration-300
                                cursor-pointer" // Ajuste conforme necessário
                            />
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                {/* Botões de navegação */}
                <div className="flex justify-center space-x-4 mt-4">
                    <button className="prev-button text-black p-2 rounded-full">
                    <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="next-button text-black p-2 rounded-full">
                        <i className="fa-solid fa-arrow-right "></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Brands;
