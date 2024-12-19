import {TitleDecorate, CartSummary, CartList} from "../../components";
import './CartPage.css'
import {CartProvider} from "../../context/cart.context";

export const CartPage = () => {
    return (
        <div>
            <CartProvider>
                <TitleDecorate title={"shopping"} subTitle={"Carrito"}/>
                <div className="body-shopping">
                    <CartList/>
                    <CartSummary/>
                </div>
            </CartProvider>
        </div>
    )
}