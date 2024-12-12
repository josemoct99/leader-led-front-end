import {TitleDecorate, GridCards} from "../../components";
import './ServicesPage.css'

export const ServicesPage = () => {
    return (
        <>
            <div className="services-page">
                <TitleDecorate title={"Tipos de"} subTitle={"Servicios"}/>
                <GridCards/>
            </div>
        </>
    )
}