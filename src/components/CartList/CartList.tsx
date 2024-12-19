import './CartList.css'
import {CartItem} from "../CartItem/CartItem";
import {Product} from "../../types";
import {useCart} from "../../hooks";

export const CartList = () => {

    const {products, removeItem} = useCart();


    return (
        <div className="CartList">
            {products?.map((product: Product) => {
                return <CartItem key={product.idInventory} product={product}>
                    <button className="close-item-button" onClick={() => removeItem(product)}> X </button>
                </CartItem>
            })
            }
        </div>
    )
}