import "./ProductsGrid.css"
import {useFetch} from "../../../hooks";
import {Product} from "../../../types";
import {ProductCard} from "../ProductCard/ProductCard";
import {useConsultInventory} from "../../../hooks/useConsultInventory";
import {CartProvider} from "../../../context/cart.context";


export const ProductsGrid = () => {
    const {url} = useConsultInventory();
    const {data, loading, error} = useFetch<Product[]>(url);

    if (error) {
        return (<> error : {error.message}</>)
    }
    if (loading) {
        return (<> loading : {loading} </>)
    }

    console.log(data)

    return (
        <>
            <CartProvider>
                <div className="products-grid">
                    {data?.map((product) => (
                        <ProductCard key={product.idInventory} product={product}/>

                    ))}
                </div>
            </CartProvider>
        </>
    )
}