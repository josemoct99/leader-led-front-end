import './ProductsPage.css';
import { FiltersContainer, TitleDecorate} from '../../components';
import {BrandChooser} from "../../components/Products";
import {ProductsGrid} from "../../components/Products/ProductsGrid/ProductsGrid";
import {useState} from "react";


let baseUrl = "http://localhost:8080/api/inventory/search"; // This is default url

export const ProductsPage = () => {

    const [url, setUrl] = useState<string>(baseUrl); // use this

    const consultSearch = (searchParams:string) => {
        //technically searchParams bring us 'search?.....' ; so :
        setUrl(searchParams);
        console.log(searchParams);
    }


    return (
        <>
            <div className="product-page">
                <TitleDecorate title="Productos" subTitle="Iluminaria"/>
                <BrandChooser/>
                <div className="product-body">
                    <FiltersContainer parentMethod={consultSearch} urlSearch={baseUrl}/>
                    <ProductsGrid url={url}/>
                </div>
            </div>

        </>
    )
}