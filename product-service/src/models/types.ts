export interface ProductWithID {
    id: string;
    title: string;
    description: string;
    price: number;
    count: number;
    logo?: string;
}

export interface Product {
    title: string;
    description: string;
    price: number;
    count: number;
    logo?: string;
}