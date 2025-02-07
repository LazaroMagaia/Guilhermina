import React from 'react';
import { usePage } from '@inertiajs/react';
import Frontend from '@/Layouts/FrontendLayout';
import { Link,Head } from '@inertiajs/react'; // Link do Inertia.js

// Tipagem da estrutura da página
type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
};
type PageProps = {
  slug: string; // "slug" é obrigatório
  auth: {
    user: User;
    };
};

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
  }
  
// Tipagem do retorno de usePage para garantir que props tem a estrutura de PageProps
const SingleProductt: React.FC = () => {
  const { props } = usePage<PageProps>(); // Aplica PageProps diretamente no usePage
  const { slug } = props; // Agora o slug é garantido como string
  const product: Product = {
    id: 1,
    name: 'Rojão Colorido',
    description:
      'Rojão com diversas cores e efeitos especiais. Ideal para festas e celebrações. Seguro e certificado.',
    price: 'MZN 400',
    image: '/images/products/06.jpg',
  };

  // Produtos relacionados simulados
  const relatedProducts: Product[] = [
    {
      id: 2,
      name: 'Fonte Estrela',
      description: 'Fonte com efeitos em forma de estrelas.',
      price: 'MZN 500',
      image: '/images/products/01.jpg',
    },
    {
      id: 3,
      name: 'Bateria Arco-Íris',
      description: 'Bateria com efeitos em várias cores.',
      price: 'MZN 1500',
      image: '/images/products/04.jpg',
    },
    {
      id: 4,
      name: 'Fogos de Chão',
      description: 'Fogos de chão ideais para eventos ao ar livre.',
      price: 'MZN 700',
      image: '/images/products/05.jpg',
    },
  ];

  return (
    <Frontend>
        <Head title="Produto" />
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Grid para a imagem e informações do produto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
                    {/* Imagem do Produto */}
                    <div className="flex justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="rounded-lg shadow-md object-cover"
                    />
                    </div>

                    {/* Informações do Produto */}
                    <div>
                    {/* Título */}
                    <h1 className="text-3xl font-bold text-center md:text-start mb-6">
                        {product.name} ({slug})
                    </h1>
                    <h2 className="text-2xl font-semibold mb-4">Detalhes do Produto</h2>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-2xl font-bold text-blue-600 mb-6">{product.price}</p>

                    {/* Botão de Comprar */}
                    <button
                        className="bg-[#1741BA] hover:bg-[#FF7F01] text-white px-6 py-3 rounded-md flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                        Adicionar ao Carrinho
                    </button>

                    {/* Link para voltar */}
                    <div className="mt-6">
                        <Link href="/categories">
                        <p className="text-blue-500 hover:underline">← Voltar para Categorias</p>
                        </Link>
                    </div>
                    </div>
                </div>

                {/* Produtos Relacionados */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold mb-6">Produtos Relacionados</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedProducts.map((related) => (
                        <div key={related.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Link href={`/product/${related.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            <img
                            src={related.image}
                            alt={related.name}
                            className="w-full h-48 object-cover"
                            />
                        </Link>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{related.name}</h3>
                            <p className="text-gray-700 text-sm mb-2">{related.description}</p>
                            <p className="text-lg font-bold text-blue-600">{related.price}</p>
                            {/* Botão de Comprar */}
                            <button
                            className="mt-4 bg-[#1741BA] hover:bg-[#FF7F01] text-white px-4 py-2 rounded-md flex items-center gap-2"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                            Comprar
                            </button>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    </Frontend>
  );
};

export default SingleProductt;
