import {ConsultButton} from "../utils";
import {useCart} from "../../hooks";
import './CartSummary.css'

export const CartSummary = () => {

    const { totalProducts, categories,totalCategories,message} = useCart();

    return (
        <div className="summary-section">
            <dl className="dl-summary">
                <dt className="text-center">Resumen:</dt>
                <hr/>
                <dd className="summary-info-section">
                    <p>
                        Número de productos: <span> {totalProducts}</span>
                    </p>
                    <p>Categorías: {totalCategories}</p>
                    <ul>
                        {categories.map(category => (
                            <li key={category}>{category}</li>
                        ))}
                    </ul>
                    <ConsultButton message={`Quisiera : ${message()}`}/>

                </dd>
            </dl>
        </div>

    )
}