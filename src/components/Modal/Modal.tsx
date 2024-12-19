import './Modal.css'
import {ReactNode} from "react";

interface Props{

    children: ReactNode
}


export const Modal = ({children}:Props) => {
    return (
        <div className="modal-p">
            {children}
        </div>
    )
}