import { ProductGrid } from '../../components';
import './ProductsPage.css';

export const ProductsPage = () => {
    return (
        <>
            <h1 className='products-title'>Nuestros productos:</h1>
            <ProductGrid />
        </>
    )
}