import {Product} from "../types";
import {useEffect, useState} from "react";


export const useCart = () => {

    //this one get a cart
    const [products, setProducts] = useState<Product[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    // add item
    const addItem = (product: Product) => {
        setProducts((prevProducts) => {
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
    //more of them things
    const totalProducts = products.length;
    const categories = Array.from(new Set(products.map(product => product.category?.name)));
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

    return {
        products,
        addItem,
        updateItem,
        removeItem,
        clearCart,
        totalProducts,
        categories,
        totalCategories,
        message,
    }
}


