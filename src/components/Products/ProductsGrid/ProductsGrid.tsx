import "./ProductsGrid.css"
import {useFetch} from "../../../hooks";
import {Product} from "../../../types";
import {ProductCard} from "../ProductCard/ProductCard";

interface Params{
    url:string
}


export const ProductsGrid = ({url}:Params) => {

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