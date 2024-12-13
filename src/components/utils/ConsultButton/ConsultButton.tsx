import './ConsultButton.css'
import {sendMessage} from "../../../script";

interface Props {
    message: string,
}


export const ConsultButton = ({message}: Props) => {


    return (
        <>
            <button className="btn-consult-whatsapp" onClick={() => sendMessage(message)}>Consultar</button>
        </>
    )

}