import './ServiceCard.css'

interface Props {
    title: string,
    description: string,
}

export const ServiceCard = ({title, description}: Props) => {


    return (
        <>
            <div className="service-card">
                <h1 className="title-service-card">{title}</h1>
                <div className="title-service-body">
                    <p>{description}</p>
                </div>
                <button> Consultar</button>
            </div>
        </>
    )
}