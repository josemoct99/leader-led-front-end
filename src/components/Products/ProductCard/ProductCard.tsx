import "./ProductCard.css"
import {Product} from "../../../types";

interface Props {
    product: Product;
}


export const ProductCard = ({product}:Props) => {
    return (
        <>
                <section className="cardProduct">
                    <section id="imageProductContainer">
                        <img
                            src={`/images/products/${product.imageList[0]?.url}.webp`}
                            alt="Imagen del producto"
                        />
                    </section>
                    <section id="nameDescContainer">
                        <div id="nameProduct">{product.marketName}</div>
                        <div id="descProduct" style={{ color: "#d7d7d7" }}>
                            {product.desc}
                        </div>
                    </section>
                    <section id="utilsContainer">
                        <div className="desc-properties" id="techTypeProduct">
                            {product.technologySetInventory[0]?.name}
                        </div>
                        <div className="desc-properties" id="appTypeProduct">
                            {product.applicationTypeSetInventory[0]?.name}
                        </div>
                        <div className="desc-properties" id="catTypeProduct">
                            {product.categorySetInventory[0]?.name}
                        </div>
                    </section>
                </section>
        </>
    );
}

