import {TitleDecorate} from '../../components';
import {BrandChooser} from "../../components/Products";
import './ProductsPage.css';

export const ProductsPage = () => {
    return (
        <>
            <div className="product-page">
                <TitleDecorate title="Productos" subTitle="Iluminaria"/>
                <BrandChooser/>
            </div>

        </>
    )
}