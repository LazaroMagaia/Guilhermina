import React from 'react';
import { useForm, Link, usePage,router,Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps, Category } from '@/types';


const Edit: React.FC = () => {
    const { props } = usePage<PageProps<{ category: Category }>>();
    const { category } = props;

  const { data, setData, put, errors, processing } = useForm({
    name: category.name,
    slug: category.slug,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(route('admin.categories.update', category.slug),{
         onSuccess: () => {
            router.visit(route('admin.categories'));
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
    }); // Rota para atualizar a categoria
  };

  return (
    <AdminLayout>
      <Head title="Editar categoria" />
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Editar Categoria</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                errors.name ? 'border-red-500' : ''
              }`}
              placeholder="Digite o nome da categoria"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Campo Slug */}
          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
              Slug
            </label>
            <input
              type="text"
              id="slug" disabled={true}
              value={data.slug}
              onChange={(e) => setData('slug', e.target.value)}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                errors.slug ? 'border-red-500' : ''
              }`}
              placeholder="Digite o slug da categoria"
            />
            {errors.slug && <p className="text-sm text-red-500 mt-1">{errors.slug}</p>}
          </div>

          {/* Botão de envio */}
          <div className="flex justify-end space-x-4">
            <Link
              href={route('admin.categories')}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={processing}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              {processing ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Edit;
