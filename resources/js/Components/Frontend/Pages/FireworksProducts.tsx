
import { Link,usePage } from '@inertiajs/react';
import { Product,PageProps } from "@/types";

const FireworksProducts = () => {
    const { props } = usePage<PageProps<{ products: Product }>>();
    const { products } = props;
  
  return (
    <section className="bg-white py-12 mt-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold md:text-start text-center mb-8">Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((products) => (
            <div key={products.id} className="relative overflow-hidden rounded-lg shadow-md group bg-white">
              {/* Link para Detalhes na Imagem */}
              <Link href={route('products.single',[products.slug])}>
                <div className="relative cursor-pointer">
                  <img
                    src={'storage/'+products.image}
                    alt={products.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
              </Link>

              {/* Nome e Preço do Produto */}
              <div className="px-4 py-2 flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{products.name}</p>
                  <p className="text-md font-medium text-gray-700">{products.price}</p>
                </div>
                {/* Botão de Comprar (Ícone de Carrinho) ao lado do nome */}
                <Link href={'#'}>
                  <button className="text-white bg-[#1741BA] hover:bg-[#FF7F01] h-12 w-12 rounded-full 
                    flex items-center justify-center">
                    {/* Usando o ícone de carrinho via CDN do FontAwesome */}
                    <i className="fas fa-shopping-cart" />
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

export default FireworksProducts;
