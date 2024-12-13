import {TitleDecorate,CartSummary,CartList} from "../../components";
import './CartPage.css'

export const CartPage = () => {
    return (
        <div>
            <TitleDecorate title={"shopping"} subTitle={"Carrito"}/>
            <div className="body-shopping">
                <CartList/>
                <CartSummary/>
            </div>
        </div>
    )
}