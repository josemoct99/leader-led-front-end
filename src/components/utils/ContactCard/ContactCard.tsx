import React from "react";
import "./ContactCard.css";
import {ConsultButton} from "../ConsultButton/ConsultButton";

export const ContactCard = () => {
    return (
        <div className="contact-card">
            <div className="card-contact-header">
                <h2>LeaderLed</h2>
                <p className="card-tagline"> Iluminaciones y más </p>
            </div>
            <div className="card-content">
                <p><strong>Propietario:</strong>Henry Ricaurte Rodriguez</p>
                <p><strong>Teléfono:</strong> 281 6903</p>
                <p><strong>Celular:</strong> +57 313 205 6541</p>
                <p><strong>Correo:</strong> <a href="mailto:leaderled@hotmail.com"> leaderled@hotmail.com</a></p>
                <p><strong>Página web:</strong> <a href="https://leaderled.com.co/" target="_blank" rel="noopener noreferrer">leaderled.com.co</a></p>
            </div>
            <div className="card-contact-footer">
                <ConsultButton message={"Buen día, quisiera saber mas sobre el negocio"}/>
            </div>
        </div>
    );
};
