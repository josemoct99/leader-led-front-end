import CategoryCard from "../CategoryCard/CategoryCard";
import {Link} from "react-router-dom";
import './ContainerCategoriesCards.css'


export const ContainerCategoriesCards = () => {

    return (
        <>
            <div className="container-cards">
                <Link to="/products"> <CategoryCard name="Productos" image="./images/home-cards/products.webp"/> </Link>
                <Link to="/services"><CategoryCard name="Servicios" image="./images/home-cards/service.webp"/></Link>
                <Link to="/cart"><CategoryCard name="Carrito" image="./images/home-cards/shop.webp"/></Link>
            </div>
        </>
    )
}