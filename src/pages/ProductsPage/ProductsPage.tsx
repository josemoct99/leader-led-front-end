import './ProductsPage.css';
import { FiltersContainer, TitleDecorate} from '../../components';
import {BrandChooser} from "../../components/Products";
import {ProductsGrid} from "../../components/Products/ProductsGrid/ProductsGrid";

export const ProductsPage = () => {




    return (
        <>
            <div className="product-page">
                <TitleDecorate title="Productos" subTitle="Iluminaria"/>
                <BrandChooser/>
                <div className="product-body">
                    <FiltersContainer></FiltersContainer>
                    <ProductsGrid/>
                </div>
            </div>

        </>
    )
}