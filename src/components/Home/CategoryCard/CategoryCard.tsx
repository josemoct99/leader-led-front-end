import './CategoryCard.css'

interface Card {
    name: string;
    image: string;
}


const CategoryCard = ({name, image}: Card) => {


    return (
        <>
            <div className="card" style={{backgroundImage: `url(${image})`}}>
                {name}
            </div>
        </>
    )
}

export default CategoryCard;