import './ServiceCard.css'
import {ConsultButton} from "../../utils/ConsultButton/ConsultButton";

interface Props {
    title: string,
    description: string,
}

export const ServiceCard = ({title, description}: Props) => {

    const message = `Un agradable día, quisiera tener información sobre el servicio de ${title}.`;

    return (
        <>
            <div className="service-card">
                <h1 className="title-service-card">{title}</h1>
                <div className="title-service-body">
                    <p>{description}</p>
                </div>
                <ConsultButton message={message}/>
            </div>
        </>
    )
}