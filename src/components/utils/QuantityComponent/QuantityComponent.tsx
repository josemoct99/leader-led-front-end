import './QuantityComponent.css'
import {useState} from "react";

export const QuantityComponent = () => {

    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (quantity: number) => {
        if (quantity < 1) {
            return
        }
        setQuantity(quantity);
    }

    return (
        <div className="QuantityComponent">
            <button className="change-button" onClick={() => changeQuantity(quantity - 1)}>-</button>
            <span> {quantity}</span>
            <button className="change-button" onClick={() => changeQuantity(quantity + 1)}>+</button>
        </div>
    )
}