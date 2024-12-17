import './ProductsPage.css';
import {FiltersContainer, TitleDecorate} from '../../components';
import {BrandChooser,ProductsGrid} from "../../components/Products";
import {FiltersProvider,ConsultInventoryProvider} from "../../context";

export const ProductsPage = () => {

    return (
        <>
            <FiltersProvider>
                <ConsultInventoryProvider>
                    <div className="product-page">
                        <TitleDecorate title="Productos" subTitle="Iluminaria"/>
                        <BrandChooser/>
                        <div className="product-body">
                            <FiltersContainer/>
                            <ProductsGrid />
                        </div>
                    </div>
                </ConsultInventoryProvider>
            </FiltersProvider>
        </>
    )
}