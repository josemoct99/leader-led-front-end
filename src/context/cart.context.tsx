import {createContext, ReactNode, useEffect, useState} from "react";
import {Product} from "../types";


export interface CartContextType {
    products: Product[];
    addItem: (product: Product) => void;
    updateItem: (idInventory: number, quantity: number) => void;
    removeItem: (product: Product) => void;
    clearCart: () => void;
    totalProducts: number;
    categories: string[];
    totalCategories: number;
    message: () => string;
    setQuantity: (newQuantity: number, product: Product) => void;
    getQuantity: (product: Product) => number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

type ContextProviderProps = {
    children: ReactNode;
}

export const CartProvider = ({children}: ContextProviderProps) => {

    //this one get a cart
    const [products, setProducts] = useState<Product[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    // add item
    const addItem = (product: Product) => {
        setProducts((prevProducts) => {
            if (prevProducts.includes(product)) {
                return prevProducts;
            }
            product.quantity = 1;
            const updateProducts: Product[] = [...prevProducts, product];
            localStorage.setItem("cart", JSON.stringify(updateProducts)); //save in localstorage
            return updateProducts;
        })
    }
    //modify quantity item
    const updateItem = (idInventory: number, quantity: number) => {
        setProducts((prevProducts) =>
            prevProducts.map((p) =>
                p.idInventory === idInventory ? {...p, quantity} : p
            )
        );
    };
    //remove item
    const removeItem = (product: Product) => {
        setProducts((prevProducts) => {
            const updateProducts: Product[] = prevProducts.filter(p => p.idInventory !== product.idInventory);
            localStorage.setItem("cart", JSON.stringify(updateProducts));
            return updateProducts;
        })
    }
    //clear cart
    const clearCart = () => {
        setProducts([]);
        localStorage.removeItem('cart');
    };
    //set Quantity:
    const setQuantity = (newQuantity: number, product: Product) => {
        setProducts((prevProducts) => {
            return prevProducts.map((p) =>
                p.idInventory === product.idInventory ? {...p, quantity: newQuantity} : p
            );
        });
    };
    //get Quantity:
    const getQuantity = (product: Product) => {
        const foundProduct = products.find(p => p.idInventory === product.idInventory);
        return foundProduct ? foundProduct.quantity : 1;
    };

    //more of them things
    const totalProducts = products.length;
    const categories = Array.from(
        new Set(
            products.flatMap(product =>
                product.categorySetInventory?.map(cat => cat.name) || []
            )
        )
    );
    const totalCategories = categories.length;

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(products));
    }, [products]);

    const message = (): string => {
        let m: string = "";

        products.forEach(p => {
            m += p.marketName + " con una cantidad de " + p.quantity + "\n";
        })

        return m;
    }

    return (
        <CartContext.Provider value={
            {
                products,
                addItem,
                updateItem,
                removeItem,
                clearCart,
                totalProducts,
                categories,
                totalCategories,
                message,
                setQuantity,
                getQuantity
            }
        }>
            {children}
        </CartContext.Provider>
    )

}
