import './FlexCards.css'
import {ServiceCard} from "../Card/ServiceCard";

export const FlexCards = () => {

    return (
        <div className="FlexCards">
            <ServiceCard title="Mantenimiento Eléctrico"
                         description="Todo lo relacionado a lo que se refiere el mantenimiento eléctrico como instalaciones, contrataciones y cotizaciones del ámbito."/>
            <ServiceCard title="Programación drivers"
                         description="Se realizan las programaciones para drivers dali y 0-10. [protocolos de dimerización]"/>
            <ServiceCard title="Contrataciones"
                         description="Se realiza cotizaciones sobre tipos de contrataciones que se dispongan."/>

        </div>
    )

}