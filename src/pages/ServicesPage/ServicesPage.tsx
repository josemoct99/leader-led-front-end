import {TitleDecorate, FlexCards} from "../../components";
import './ServicesPage.css'

export const ServicesPage = () => {
    return (
        <>
            <div className="services-page">
                <TitleDecorate title={"Tipos de"} subTitle={"Servicios"}/>
                <FlexCards/>
            </div>
        </>
    )
}