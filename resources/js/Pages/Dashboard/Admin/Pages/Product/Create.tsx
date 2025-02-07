import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps, Category } from "@/types";

const CreateProduct: React.FC = () => {
    const { props } = usePage<PageProps<{ categories: Category[] }>>();
    const { categories } = props;

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        price: "",
        image: null as File | null,
        category_id: "",
        discount: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        if (data.discount) {
            formData.append("discount", data.discount);
        }
        if (data.image) {
            formData.append("image", data.image);
        }
        formData.append("category_id", data.category_id);

        // Usar o fetch diretamente para enviar o FormData
        fetch(route("admin.products.store"), {
            method: "POST",
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                // Processar resposta após envio, pode usar o Swal ou qualquer outro tratamento aqui
                console.log(data);
            })
            .catch(error => {
                console.error("Erro ao enviar produto", error);
            });
    };

    return (
        <AdminLayout>
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Criar Produto</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium">Nome</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            maxLength={255}
                            className="w-full border-gray-300 rounded-md p-2"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Descrição</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            className="w-full border-gray-300 rounded-md p-2"
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Preço</label>
                        <input
                            type="number"
                            value={data.price}
                            onChange={(e) => setData("price", e.target.value)}
                            required
                            className="w-full border-gray-300 rounded-md p-2"
                        />
                        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                    </div>
                    <div>
                        <label className="block font-medium">Desconto</label>
                        <input
                            type="number"
                            value={data.discount}
                            onChange={(e) => setData("discount", e.target.value)}
                            className="w-full border-gray-300 rounded-md p-2"
                        />
                        {errors.discount && <p className="text-red-500 text-sm">{errors.discount}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Imagem</label>
                        <input
                            type="file"
                            onChange={(e) => setData("image", e.target.files ? e.target.files[0] : null)}
                            className="w-full border-gray-300 rounded-md p-2"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Categoria</label>
                        <select
                            value={data.category_id}
                            onChange={(e) => setData("category_id", e.target.value)}
                            required
                            className="w-full border-gray-300 rounded-md p-2"
                        >
                            <option value="">Selecione uma categoria</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {errors.category_id && <p className="text-red-500 text-sm">{errors.category_id}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className={`w-full text-white py-2 rounded-md transition ${
                            processing ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        {processing ? "Criando..." : "Criar Produto"}
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default CreateProduct;
