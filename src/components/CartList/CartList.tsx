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
                    <button onClick={() => removeItem(product)}></button>
                </CartItem>
            })
            }
        </div>
    )
}