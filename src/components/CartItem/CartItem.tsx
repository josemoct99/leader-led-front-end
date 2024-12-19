import './CartItem.css'
import {QuantityComponent} from "../utils";
import {Product} from "../../types";
import {ReactNode, useState} from "react";
import {useCart} from "../../hooks";


interface Props {
    product: Product;
    children: ReactNode;
}

export const CartItem = ({product,children}: Props) => {
    const {setQuantity:setContextQuantity,getQuantity} = useCart();
    const [quantity,setQuantity] = useState(getQuantity(product));


    const img: string =
        product.imageList?.[0]?.url + '.webp';
    const name: string = product.marketName;
    const description: string = product.desc;
    const urlImg = '/images/products/' + img

    const changeQuantity = (quantity: number) => {
        if (quantity < 1) {
            return
        }
        setContextQuantity(quantity,product);
        setQuantity(quantity);
    }


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
                <QuantityComponent quantity={quantity} parentMethod={changeQuantity}></QuantityComponent>
            </div>
            {children}
        </div>
    )
}