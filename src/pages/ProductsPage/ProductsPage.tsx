import {ProductGrid, TitleDecorate} from '../../components';
import './ProductsPage.css';

export const ProductsPage = () => {
    return (
        <>
            <div className="product-page">
                <TitleDecorate title="Productos" subTitle="Iluminaria"/>
                <h1 className='products-title'>Nuestros productos:</h1>
                <ProductGrid/>
            </div>

        </>
    )
}