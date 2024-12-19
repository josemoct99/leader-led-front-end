import "./ProductCard.css"
import {Product} from "../../../types";
import {useState} from "react";
import {BackDrop} from "../../BackDrop/BackDrop";
import {Modal} from "../../Modal/Modal";
import {ContentModalProduct} from "../../ContentModalProduct/ContentModalProduct";
import {useCart} from "../../../hooks";
import {ContentProductCard} from "../ContentProductCard/ContentProductCard";

interface Props {
    product: Product;
}


export const ProductCard = ({product}: Props) => {
    const [modal, setModal] = useState(false);
    const {addItem} = useCart();

    const handlerClick = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className="ProductCard">
            {modal &&
                <><BackDrop onClick={closeModal}/>
                    <Modal>
                        <ContentModalProduct product={product}/>
                    </Modal>
                </>
            }
            <button className="add-product-cart-button" onClick={() => addItem(product)}> Añadir</button>
            <ContentProductCard product={product} parentMethod={handlerClick}/>

        </div>
    );
}

