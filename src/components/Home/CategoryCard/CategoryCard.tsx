import './CategoryCard.css'

interface Card {
    name: string;
    image: string;
}


const CategoryCard = ({name, image}: Card) => {


    return (
        <>
            <div className="card">
                <img src={image} alt=""/>
                <p>{name}</p>
            </div>
        </>
    )
}

export default CategoryCard;