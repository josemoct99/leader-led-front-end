import "./ProductCard.css"
import {Product} from "../../../types";


export const ProductCard = (product:Product) => {
    return (

        <>
            return (
            <article id="cardTotal-article">
                <section className="cardProduct">
                    <section id="imageProductContainer">
                        <img
                            src={`/images/products/${product.images[0]?.url}.webp`}
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
                        <div id="techTypeProduct">
                            {product.technology[0]?.name}
                        </div>
                        <div id="appTypeProduct">
                            {product.application[0]?.name}
                        </div>
                        <div id="catTypeProduct">
                            {product.category[0]?.name}
                        </div>
                    </section>
                </section>
            </article>
            );

        </>
    )
}

