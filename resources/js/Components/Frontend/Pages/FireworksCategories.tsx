
import { Link } from '@inertiajs/react';

interface FireworksCategory {
  id: number;
  name: string;
  image: string;
  link: string;
}

const FireworksCategories = () => {
  // Array de categorias de fogos de artifício
  const categories: FireworksCategory[] = [
    {
      id: 1,
      name: 'Promoções',
      image: '/images/products/01.jpg',
      link: '/categories/Promotions',
    },
    {
      id: 2,
      name: 'Baterias',
      image: '/images/products/04.jpg',
      link: '/categories/baterias',
    },
    {
      id: 3,
      name: 'Fogos de Chão',
      image: '/images/products/05.jpg',
      link: '/categories/fogos-de-chao',
    },
    {
      id: 4,
      name: 'Rojões',
      image: '/images/products/06.jpg',
      link: '/categories/rojoes',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center md:text-start mb-8">Categorias de Fireworks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={category.image}
                alt={category.name}
                width={300}
                height={200}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end 
                  justify-center opacity-100 transition-opacity duration-300 py-5">
                {/* Usando o Link em vez de Link do Next.js */}
                <Link href={category.link}>
                  <button className="text-black bg-gray-200 px-4 py-2 rounded-sm
                     flex items-center space-x-2 gap-5">
                    <span>{category.name}</span>
                    {/* Usando a classe do CDN para o ícone de seta */}
                    <i className="fas fa-arrow-right text-md" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FireworksCategories;
