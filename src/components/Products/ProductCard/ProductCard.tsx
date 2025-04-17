import "./ProductCard.css"
import {Product, ProductCardJson} from "../../../types";
import {useEffect, useState} from "react";
import {BackDrop} from "../../BackDrop/BackDrop";
import {Modal} from "../../Modal/Modal";
import {ContentModalProduct} from "../../ContentModalProduct/ContentModalProduct";
import {useCart, useFetch} from "../../../hooks";
import {ContentProductCard} from "../ContentProductCard/ContentProductCard";
import {INVENTORY_URL} from "../../../utils/api";

interface Props {
    productCard: ProductCardJson;
}

const url = INVENTORY_URL;

export const ProductCard = ({ productCard }: Props) => {
    const [modal, setModal] = useState(false);
    const [fetchTriggered, setFetchTriggered] = useState(false);
    const { addItem } = useCart();

    // Usamos useFetch solo cuando se activa el trigger
    const { data: product } = useFetch<Product>(fetchTriggered ? url + `/${productCard.idInventory}` : "");


    const handlerClick = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleAddToCart = () => {
        setFetchTriggered(true); // Activa el trigger para hacer la llamada
    };

    useEffect(() => {
        if (product) {
            addItem(product);
        }
    }, [product, addItem]); // Ejecuta esto solo cuando el producto se haya recibido

    return (
        <div className="ProductCard">
            {modal && (
                <>
                    <BackDrop onClick={closeModal} />
                    <Modal>
                        <ContentModalProduct productId={productCard.idInventory} />
                    </Modal>
                </>
            )}
            <button className="add-product-cart-button" onClick={handleAddToCart}>
                Añadir
            </button>
            <ContentProductCard productCardJson={productCard} parentMethod={handlerClick} />
        </div>
    );
};


