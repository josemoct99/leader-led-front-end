import './CartItem.css'
import {QuantityComponent} from "../utils";
import {Product} from "../../types";
import {ReactNode} from "react";


interface Props {
    product: Product;
    children: ReactNode;
}

export const CartItem = ({product}: Props) => {
    const img: string =
        product.imageList?.[0]?.url && product.imageList?.[0]?.typeSet?.[0]?.type
            ? product.imageList[0].url + product.imageList[0].typeSet[0].type
            : '.'; // didn't like it

    const name: string = product.marketName;
    const description: string = product.desc;

    const urlImg = '/images/products/' + img
    return (
        <div className="CartItem">
            <div className="head-cart-item">
                <img src={urlImg} alt={img}/>
            </div>
            <div className="cart-item-details">
                <strong>{name}</strong>
                <p >{description}</p>
            </div>
            <div className="cart-item-quantity">
                <QuantityComponent></QuantityComponent>
            </div>
        </div>
    )
}