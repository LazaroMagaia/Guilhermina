import React, { useState } from "react";
import { useForm, usePage,router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { PageProps, Category, Product } from "@/types";
const UpdateProduct: React.FC = () => {
    const { props } = usePage<PageProps<{ categories: Category[],product:Product }>>();
    const { product, categories } = props;

    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        description: product.description || "",
        price: product.price.toString(),
        category_id: product.category?.id.toString() || "",
        image: null as File | null, // Não é necessário para atualizar os dados
        discount: product.discount ? product.discount.toString() : "",
    });

    const [image, setImage] = useState<File | null>(null);
    const [imageUploading, setImageUploading] = useState(false);

    // Enviar apenas os dados do produto
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("admin.products.update", product.id));
    };

    // Enviar apenas a imagem
    const handleImageUpload = (e: React.FormEvent) => {
        e.preventDefault();
        if (!image) return;

        setImageUploading(true);
        const formData = new FormData();
        formData.append("image", image);

        router.post(route("admin.products.image.store", product.id), formData, {
            onFinish: () => setImageUploading(false),
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>

                {/* Formulário para atualizar apenas os dados */}
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
                            processing ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                        }`}
                    >
                        {processing ? "Atualizando..." : "Atualizar Produto"}
                    </button>
                </form>

                {/* Formulário separado para atualizar apenas a imagem */}
                <form onSubmit={handleImageUpload} className="mt-6 space-y-4">
                    <div>
                        <label className="block font-medium">Imagem</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                            className="w-full border-gray-300 rounded-md p-2"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={imageUploading}
                        className={`w-full text-white py-2 rounded-md transition ${
                            imageUploading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        {imageUploading ? "Enviando Imagem..." : "Atualizar Imagem"}
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default UpdateProduct;
