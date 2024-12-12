//Here i gonna just put an image, do a google service's would be uncomfortable
/*
* Even so :
* npm install @vis.gl/react-google-maps
* https://visgl.github.io/react-google-maps/docs/get-started -< would help to place a google service's
* hmmmm i did an iframe xd
* */
import React from 'react';
import './Map.css'

export const Map = () => {

    const style = {
        width: '100%',  // El iframe ocupará el 100% del ancho del contenedor
        height: '100%',  // La altura se ajustará proporcionalmente
        border: 'none',
    }

    return (
        <div className="Map">
            <iframe
                title="Google Maps Embed - Ubicación XYZ"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d885.7606693552804!2d-74.07745345333423!3d4.606405787156332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMzYnMjMuMyJOIDc0wrAwNCczOC40Ilc!5e0!3m2!1ses!2sco!4v1733854613362!5m2!1ses!2sco"
                style={style}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

