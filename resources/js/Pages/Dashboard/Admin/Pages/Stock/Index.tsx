import React,{useState} from "react";
import AdminLayout from '@/Layouts/AdminLayout';
import { router, usePage, Link,Head } from "@inertiajs/react";
import { Stock,PageProps } from "@/types";
import DeleteModal from "../Modals/Delete";
const Index: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { props } = usePage<PageProps<{ stocks: Stock }>>();
    const { stocks} = props;

      const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
    
          const handleDelete = (stock: Stock) => {
            setSelectedStock(stock);
            setIsModalOpen(true);
          };
        
          const confirmDelete = () => {
            if (selectedStock) {
                router.delete(route("admin.products.destroy",[selectedStock]));
            }
            setIsModalOpen(false);
            setSelectedStock(null);
          };
        
          const cancelDelete = () => {
            setIsModalOpen(false);
            setSelectedStock(null);
          };
    return (
        <AdminLayout>
            <Head title="Estoque" />
            <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
                <h2 className="text-lg md:text-2xl font-bold mb-4">Stock</h2>
            
                {/* Contêiner para tabela e cards responsivos */}
                <div className="overflow-x-auto">
                    {/* Tabela para telas grandes */}
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">#</th>
                        <th className="border border-gray-300 px-4 py-2">Imagem</th>
                        <th className="border border-gray-300 px-4 py-2">Nome do produto</th>
                        <th className="border border-gray-300 px-4 py-2">Quantidade</th>
                        <th className="border border-gray-300 px-4 py-2">Preço</th>
                        <th className="border border-gray-300 px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock) => (
                            <tr key={stock.id} className="border-t">
                            <td className="border px-4 py-2 text-sm text-gray-800">{stock.id}</td>
                            <td className="border px-4 py-2 text-sm text-gray-800">
                                {stock.product.image ? (
                                    <img src={`/storage/${stock.product.image}`} alt={stock.product.name} 
                                    className="w-12 h-12 mx-auto rounded-md" />
                                ) : (
                                    "Sem imagem"
                                )}
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-800">{stock.product.name}</td>
                            <td className="border px-4 py-2 text-sm text-gray-800">
                                {stock.quantity || "—"}
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-800">{stock.product.price}</td>
                            <td className="border px-4 py-2 text-sm text-gray-800">
                                <div className="flex flex-wrap gap-2">
                                <Link href={route('admin.stock.moviments_create',[stock.product.id])} 
                                    className="bg-blue-500 text-white px-2 py-[6px] rounded-md 
                                    hover:bg-blue-600 mx-2">
                                    Nova entrada
                                </Link>
                                <Link href={route('admin.stock.moviments_remove',[stock.product.id])} 
                                    className="bg-yellow-400 text-white px-2 py-[6px] rounded-md 
                                    hover:bg-yellow-500 mx-2">
                                    Nova saida
                                </Link>
                                </div>
                             
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
                message={`Tem certeza que deseja excluir o produto "${selectedStock?.product.name}"?`}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />
        </AdminLayout>
    );
};

export default Index;