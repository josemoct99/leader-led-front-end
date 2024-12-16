import './ProductsPage.css';
import {FiltersContainer, TitleDecorate} from '../../components';
import {BrandChooser} from "../../components/Products";
import {ProductsGrid} from "../../components/Products/ProductsGrid/ProductsGrid";
import {useState} from "react";
import {FiltersProvider} from "../../context";


let baseUrl = "http://localhost:8080/api/inventory/search"; // This is default url

export const ProductsPage = () => {

    const [url, setUrl] = useState<string>(baseUrl);

    const consultSearch = (searchParams: string) => {
        setUrl(searchParams);
        console.log("estoy consultado: ", searchParams);
    }


    return (
        <>
            <FiltersProvider>
                <div className="product-page">
                    <TitleDecorate title="Productos" subTitle="Iluminaria"/>
                    <BrandChooser parentMethod={consultSearch} urlSearch={baseUrl}/>
                    <div className="product-body">
                        <FiltersContainer parentMethod={consultSearch} urlSearch={baseUrl}/>
                        <ProductsGrid url={url}/>
                    </div>
                </div>
            </FiltersProvider>
        </>
    )
}