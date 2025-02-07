import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm,Link,router,Head } from '@inertiajs/react';
import { on } from 'events';
const Index: React.FC = () => {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        slug: '',
      });
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.categories.store'),{
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
        });
      };
    return (
        <AdminLayout>
            <Head title="Nova categoria" />
              <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Criar Nova Categoria</h1>
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
                    {/* Botão de envio */}
                    <div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {processing ? 'Salvando...' : 'Criar Categoria'}
                    </button>
                    </div>
                </form>
                </div>
        </AdminLayout>
    );
};

export default Index;