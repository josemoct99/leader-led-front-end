import './QuantityComponent.css'

interface Props{
    quantity:number;
    parentMethod: (quantity:number) => void;
}


export const QuantityComponent = ({quantity,parentMethod}:Props) => {



    return (
        <div className="QuantityComponent">
            <button className="change-button" onClick={() => parentMethod(quantity - 1)}>-</button>
            <span> {quantity}</span>
            <button className="change-button" onClick={() => parentMethod(quantity + 1)}>+</button>
        </div>
    )
}