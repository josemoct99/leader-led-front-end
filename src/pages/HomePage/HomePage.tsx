import {Content, Hero, ContainerCategoriesCards, Map} from "../../components";
import './HomePage.css'

export const HomePage = () => {
    return (
        <>
            <div className="home-page">
                <Hero/>
                <ContainerCategoriesCards/>
                <Content/>
                <Map/>
            </div>

        </>
    )
}