import React,{useState} from "react";
import { router, usePage, Link } from "@inertiajs/react";
import { Product,PageProps } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import DeleteModal from "../Modals/Delete";
const Products: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { props } = usePage<PageProps<{ products: Product }>>();
    const { products} = props;

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Função para fechar a modal
    const closeModal = () => setIsModalOpen(false);

      const handleDelete = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
      };
    
      const confirmDelete = () => {
        if (selectedProduct) {
            router.delete(route("admin.products.destroy",[selectedProduct]));
        }
        setIsModalOpen(false);
        setSelectedProduct(null);
      };
    
      const cancelDelete = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
      };


    return (
        <AdminLayout>
            <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
                   <h2 className="text-lg md:text-2xl font-bold mb-4">Produtos</h2>
                   <Link
                     href={route("admin.products.create")}
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
                   >
                     Novo produto
                   </Link>
           
                   {/* Contêiner para tabela e cards responsivos */}
                   <div className="overflow-x-auto">
                     {/* Tabela para telas grandes */}
                     <table className="min-w-full bg-white shadow-md rounded-lg">
                       <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Imagem</th>
                            <th className="border border-gray-300 px-4 py-2">Nome</th>
                            <th className="border border-gray-300 px-4 py-2">Descrição</th>
                            <th className="border border-gray-300 px-4 py-2">Preço</th>
                            <th className="border border-gray-300 px-4 py-2">Categoria</th>
                            <th className="border border-gray-300 px-4 py-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                             <tr key={product.id} className="border-t">
                                <td className="border px-4 py-2 text-sm text-gray-800">{product.id}</td>
                                <td className="border px-4 py-2 text-sm text-gray-800">
                                    {product.image ? (
                                        <img src={`/storage/${product.image}`} alt={product.name} className="w-12 h-12 mx-auto rounded-md" />
                                    ) : (
                                        "Sem imagem"
                                    )}
                                </td>
                                <td className="border px-4 py-2 text-sm text-gray-800">{product.name}</td>
                                <td className="border px-4 py-2 text-sm text-gray-800">
                                    {product.description || "—"}
                                </td>
                                <td className="border px-4 py-2 text-sm text-gray-800">{product.price}</td>
                                <td className="border px-4 py-2 text-sm text-gray-800">
                                    {product.category?.name}
                                </td>
                                <td className="border px-4 py-2 text-sm text-gray-800">
                                    <Link href={route('admin.products.edit',[product])} 
                                        className="bg-blue-500 text-white px-2 py-[6px] rounded-md 
                                        hover:bg-blue-600 mx-2">
                                        Editar
                                    </Link>
                                    <button
                                        onClick={()=>{handleDelete(product)}}
                                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                                        Excluir
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
            message={`Tem certeza que deseja excluir o produto "${selectedProduct?.name}"?`}
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
        />
        </AdminLayout>
       
    );
};

export default Products;
