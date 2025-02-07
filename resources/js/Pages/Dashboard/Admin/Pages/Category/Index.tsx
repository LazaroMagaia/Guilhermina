import React, { useState } from 'react';
import { Link, usePage, router,Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps, Category } from '@/types';
import DeleteModal from '../Modals/Delete';

const Index: React.FC = () => {
  const { props } = usePage<PageProps<{ categories: Category }>>();
  const { categories } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleDelete = (category: Category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedCategory) {
      router.delete(route("admin.categories.destroy", selectedCategory.slug));
    }
    setModalOpen(false);
    setSelectedCategory(null);
  };

  const cancelDelete = () => {
    setModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <AdminLayout>
      <Head title="Categorias" />
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-lg md:text-2xl font-bold mb-4">Categorias de produtos</h2>
        <Link
          href={route("admin.categories.create")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
        >
          Nova categoria
        </Link>

        {/* Contêiner para tabela e cards responsivos */}
        <div className="overflow-x-auto">
          {/* Tabela para telas grandes */}
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Nome</th>
                <th className="border border-gray-300 px-4 py-2">Slug</th>
                <th className="border border-gray-300 px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((categoria) => (
                <tr key={categoria.id} className="border-t">
                  <td className="border px-4 py-2 text-sm text-gray-800">{categoria.id}</td>
                  <td className="border px-4 py-2 text-sm text-gray-800">{categoria.name}</td>
                  <td className="border px-4 py-2 text-sm text-gray-800">{categoria.slug}</td>
                  <td className="border px-4 py-2 text-sm text-gray-800">
                    <Link
                      href={route("admin.categories.edit", categoria.slug)}
                      className="text-blue-500 mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(categoria)}
                      className="text-red-500 mx-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <DeleteModal
        isOpen={isModalOpen}
        title="Confirmar Exclusão"
        message={`Tem certeza que deseja excluir a categoria "${selectedCategory?.name}"?`}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </AdminLayout>
  );
};

export default Index;
