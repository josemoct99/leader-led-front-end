import './ContentProductCard.css'
import {Product} from "../../../types";


interface Props {
    product?: Product;
    parentMethod?: () => void;
}

export const ContentProductCard = ({product, parentMethod}: Props) => {
    // Si product es undefined o null, no se renderiza nada
    if (!product) return null;
    const handleClick = () => {
        if (parentMethod) {
            parentMethod();
        }
    };

    return (
        <section className="cardProduct" onClick={handleClick}>
            <section id="imageProductContainer">
                <img
                    src={`/images/products/${product.imageList?.[0]?.url ?? 'default'}.webp`}
                    alt="Imagen del producto"
                />
            </section>
            <section id="nameDescContainer">
                <div id="nameProduct">{product.marketName ?? 'Sin nombre'}</div>
                <div id="descProduct" style={{color: "#d7d7d7", textAlign: "center"}}>
                    {product.desc ?? 'Sin descripción'}
                </div>
            </section>
            <section id="utilsContainer">
                <div className="desc-properties" id="techTypeProduct">
                    {product.technologySetInventory?.[0]?.name ?? 'N/A'}
                </div>
                <div className="desc-properties" id="appTypeProduct">
                    {product.installationTypeSetInventory?.[0]?.name ?? 'N/A'}
                </div>
                <div className="desc-properties" id="catTypeProduct">
                    {product.categorySetInventory?.[0]?.name ?? 'N/A'}
                </div>
            </section>
        </section>
    );
}