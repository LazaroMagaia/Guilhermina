import React from 'react';
import { useForm,usePage,Link,Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps,Product } from '@/types';

interface StockEntryFormProps {
  productId: number;
}

const StockEntry: React.FC<StockEntryFormProps> = () => {
  const { props } = usePage<PageProps<{ product: Product }>>();
  const { product} = props
  const { data, setData, put, processing, errors } = useForm({
    quantity: 0,
    price: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Enviar os dados para o backend via Inertia
    put(route('admin.stock.increase',product.id), {
      data,
      onSuccess: () => {
        // Resetar os campos após sucesso
        setData('quantity', 0);
        setData('price', '');
      },
      onError: (errors) => {
        if (errors) {
            let errorMessage = 'Ocorreram os seguintes erros:\n';
            Object.keys(errors).forEach((field) => {
                errorMessage += `- ${errors[field]}\n`;
            });
            alert(errorMessage);
        }
      },     
    });
  };

  return (
    <AdminLayout>
      <Head title="Registrar Movimento de Entrada de Estoque" />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Registrar Movimento de Entrada de Estoque
          do produto {product.name}
        </h2>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          {/* Campo para a quantidade */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">
              Quantidade
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={data.quantity}
              onChange={(e) => setData('quantity', Number(e.target.value))}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.quantity ? 'border-red-500' : ''
              }`}
              min="1"
              required
            />
            {errors.quantity && <p className="text-sm text-red-500">{errors.quantity}</p>}
          </div>

          {/* Campo para o preço (opcional) */}
          {/*
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="price">
                Preço (Opcional)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={data.price}
                onChange={(e) => setData('price', e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.price ? 'border-red-500' : ''
                }`}
                step="0.01"
              />
              {errors.price && <p className="text-sm text-red-500">{errors.price}</p>}
            </div>
          */}
          

          {/* Botão de submissão */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={processing}
            >
              {processing ? 'Registrando...' : 'Registrar Entrada'}
            </button>
            <Link href={route('admin.stock')} className="px-4 py-[10px] bg-gray-600 text-white font-semibold rounded-lg 
                shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-gray-500 ml-2">
                 {processing ? 'Registrando...' : 'Cancelar'}
            </Link>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default StockEntry;
