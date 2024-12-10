import CategoryCard from "../CategoryCard/CategoryCard";
import './ContainerCategoriesCards.css'


export const ContainerCategoriesCards = () => {

    return (
        <>
            <div className="container-cards">
                <CategoryCard name="Productos" image="./images/home-cards/products.webp"/>
                <CategoryCard name="Servicios" image="./images/home-cards/service.webp"/>
                <CategoryCard name="Tienda" image="./images/home-cards/shop.webp"/>
            </div>
        </>
    )
}