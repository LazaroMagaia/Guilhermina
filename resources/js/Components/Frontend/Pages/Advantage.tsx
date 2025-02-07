
const Advantage: React.FC = () => {
    const brandList = [
        {   name: 'Comércio a Retalho', img: '/images/fireworks/01.jpg',
            description: 'Compre fogos de artifício na nossa loja em Orange Park, FL'+
                'Faça o pedido online para levantamento.'
         },
        { name: 'Atacado', img: '/images/fireworks/02.jpg',
            description: 'Compre fogos de artifício por caixa com preços especiais para atacado.'+
            'Pedido mínimo de MZN 10.000'
        },
        { name: 'Celebrações', img: '/images/fireworks/03.jpg',
            description: 'Compre bengalas de fogo, confetes e novidades para eventos. Sem pedido mínimo.'
        }
    ];

    return (
        <section className="">
            <div className="flex flex-wrap">
                {brandList.map((brand, index) => {
                    // Define a cor de fundo baseada no índice
                    const bgColor = index === 1 ? "#330100" : "#10141D";

                    return (
                        <div className="w-full md:w-1/3" key={index}>
                            <div className="relative w-full h-[400px]">
                                {/* Imagem de fundo */}
                                <img 
                                    src={brand.img} 
                                    alt={brand.name} 
                                    className="w-full h-full object-cover"
                                />

                                {/* Conteúdo sobre a imagem */}
                                <div className="absolute inset-0">
                                    {/* Camada de Opacidade com cor dinâmica */}
                                    <div className="absolute inset-0"
                                        style={{ backgroundColor: bgColor, opacity: 0.5 }}></div>

                                    {/* Conteúdo acima da opacidade */}
                                    <div className="absolute inset-0 flex flex-col justify-center
                                         items-center p-6 md:p-12 z-10 text-center">
                                        <h2 className="text-white text-2xl md:text-4xl font-bold">
                                            {brand.name}
                                        </h2>
                                        <p className="text-white text-base md:text-lg mt-2">
                                        {brand.description}
                                        </p>
                                        <button className="mt-4 border border-white bg-[#040608] 
                                            hover:border-[#1641BA] text-white
                                            px-10 py-3 rounded-sm transition">
                                            Saiba Mais
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Advantage;
