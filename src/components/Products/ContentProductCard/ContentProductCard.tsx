import './ContentProductCard.css'
import {ProductCardJson} from "../../../types";


interface Props {
    productCardJson?: ProductCardJson;
    parentMethod?: () => void;
}

export const ContentProductCard = ({productCardJson, parentMethod}: Props) => {
    if (!productCardJson) return null;
    const handleClick = () => {
        if (parentMethod) {
            parentMethod();
        }
    };

    return (
        <section className="cardProduct" onClick={handleClick}>
            <section id="imageProductContainer">
                <img
                    src={`/images/products/${productCardJson.mainImageUrl ?? 'default'}.webp`}
                    alt="Imagen del producto"
                />
            </section>
            <section id="nameDescContainer">
                <div id="nameProduct">{productCardJson.marketName ?? 'Sin nombre'}</div>
                <div id="descProduct" style={{color: "#d7d7d7", textAlign: "center"}}>
                    {productCardJson.desc ?? 'Sin descripción'}
                </div>
            </section>
            <section id="utilsContainer">
                <div className="desc-properties" id="techTypeProduct">
                    {productCardJson.primaryTechnology ?? 'N/A'}
                </div>
                <div className="desc-properties" id="appTypeProduct">
                    {productCardJson.primaryInstallation ?? 'N/A'}
                </div>
                <div className="desc-properties" id="catTypeProduct">
                    {productCardJson.primaryCategory?? 'N/A'}
                </div>
            </section>
        </section>
    );
}