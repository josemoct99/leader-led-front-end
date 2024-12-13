import {CardModelViewer} from "../../Model";
import {ContactCard, TitleDecorate} from "../../components";
import './ContactPage.css'

export const ContactPage = () => {
    return (
        <div className="contact-page">
            <TitleDecorate title={"Pagina de"} subTitle={"Contacto"}/>
            <div className="contact-body">
                <ContactCard/>
                <CardModelViewer/>
            </div>
        </div>
    )
}