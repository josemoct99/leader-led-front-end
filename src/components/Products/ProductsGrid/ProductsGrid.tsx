import "./ProductsGrid.css"
import {useFetch} from "../../../hooks";
import {Product} from "../../../types";
import {ProductCard} from "../ProductCard/ProductCard";

const url = "http://localhost:8080/api/inventory/search";

export const ProductsGrid = () => {

    const {data, loading, error} = useFetch<Product[]>(url);

    if(error){
        return (<> error : {error.message}</>)
    }
    if(loading){
        return (<> loading : {loading} </>)
    }

    console.log(data)

    return (
        <>
            <div className="products-grid">
                {data?.map((product) => (
                    <ProductCard key={product.idInventory} product={product} />

                ))}
            </div>
        </>
    )
}