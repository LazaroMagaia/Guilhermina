import React from 'react';
import { Link,Head } from '@inertiajs/react';
import Frontend from '@/Layouts/FrontendLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Brands from '@/Components/Frontend/Pages/Brand';
import ExclusiveBenefits from '@/Components/Frontend/Pages/ExclusiveBenefits';
import FireworksCategories from '@/Components/Frontend/Pages/FireworksCategories';
import FireworksProducts from '@/Components/Frontend/Pages/FireworksProducts';
import SpecialOffer from '@/Components/Frontend/Pages/SpecialOffer';
import Testimonials from '@/Components/Frontend/Pages/Testemonial';
import ServiceAndContact from '@/Components/Frontend/Pages/ServiceAndContact';
import Service from '@/Components/Frontend/Pages/Service';
import Contact from '@/Components/Frontend/Pages/Contact';
import FAQPage from '@/Components/Frontend/Pages/Faq';
import Advantage from '@/Components/Frontend/Pages/Advantage';
const Index: React.FC = () => {
    const images =[
        1
      ]
    return (
        <Frontend>
            <Head title="Pagina inicial" />   
            <div className="w-full relative">
                <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        className="mySwiper"
                    >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="relative">
                            <img
                                src={"images/products/05.jpg"}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[320px] md:h-[500px] object-cover"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#10141D] opacity-60"></div>

                            {/* Conteúdo sobre a imagem */}
                            <div className="absolute inset-0 flex flex-col justify-center 
                                items-center md:items-start
                                z-10 text-white max-w-7xl md:max-w-4xl md:mx-20 p-6 md:p-12">
                                <h2 className="text-2xl md:text-8xl font-bold">Infinity Fireworks</h2>
                                <p className="text-lg md:text-5xl mt-2 text-center md:text-start">
                                    Celebre a Liberdade com Fogos de Artifício
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Advantage />
            <Brands />
            
            <ExclusiveBenefits />
             {/*
            <div className='container mx-auto px-4 py-6 max-w-6xl'>
               <FireworksCategories />
            </div>
            */}
            <ServiceAndContact />
            <Service />
            <div className='container mx-auto px-4 py-6 max-w-6xl'>
                {/*<FireworksProducts />*/}
                <SpecialOffer />
            </div>
            <Contact />
            <Testimonials />
            <div className='container mx-auto px-4 py-6 max-w-6xl'>
                <FAQPage />
            </div>
        </Frontend>

    );
};

export default Index;