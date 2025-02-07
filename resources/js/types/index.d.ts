export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    email_verified_at?: string;
    avatar?: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
}
interface Product {
    id: number;
    name: string;
    slug: string;
    description?: string;
    price: number;
    image?: string;
    discount?: number;
    category?: {
        id: number;
        name: string;
        slug: string;
    };
}
interface Stock {
    id: number;
    product_id: number;
    quantity: number;
    created_at: string;
    updated_at: string;
    product: Product;
}
// Adicionando genericidade e renomeando "Category" para evitar conflitos com o tipo
export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    categories?: Category[]; // Supondo que você esteja recebendo uma lista de categorias
    products?: Product[]; // Supondo que você esteja recebendo um produto
    stock?: Stock[]; // Supondo que você esteja recebendo um estoque
};
