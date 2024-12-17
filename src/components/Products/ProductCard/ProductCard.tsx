import "./ProductCard.css"
import {Product} from "../../../types";
import {useState} from "react";
import {BackDrop} from "../../BackDrop/BackDrop";
import {Modal} from "../../Modal/Modal";
import {ContentModalProduct} from "../../ContentModalProduct/ContentModalProduct";

interface Props {
    product: Product;
}


export const ProductCard = ({product}: Props) => {
    const [modal, setModal] = useState(false);

    const handlerClick = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }


    return (
        <>
            {modal &&
                <><BackDrop onClick={closeModal}/>
                    <Modal>
                        <ContentModalProduct product={product}/>
                    </Modal>
                </>
            }
            <section className="cardProduct" onClick={handlerClick}>
                <section id="imageProductContainer">
                    <img
                        src={`/images/products/${product.imageList[0]?.url}.webp`}
                        alt="Imagen del producto"
                    />
                </section>
                <section id="nameDescContainer">
                    <div id="nameProduct">{product.marketName}</div>
                    <div id="descProduct" style={{color: "#d7d7d7", textAlign: "center"}}>
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

