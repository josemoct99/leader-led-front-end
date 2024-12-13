import './Footer.css';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer id="main_footer">
            <div className="footer-content">
                {/* Sección "Acerca de" con más espacio */}
                <div className="footer-section about">
                    <h3>Transformamos Espacios</h3>
                    <p>En LeaderLed, nos especializamos en iluminar tus espacios de manera innovadora.</p>
                </div>

                {/* Sección de enlaces */}
                <div className="footer-section links">
                    <h3>Explora</h3>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/products">Productos</Link></li>
                        <li><Link to="/services">Servicios</Link></li>
                        <li><Link to="/contact">Contáctenos</Link></li>
                        <li><Link to="/cart">Carrito</Link></li>
                    </ul>
                </div>

                {/* Sección de redes sociales */}
                <div className="footer-section social">
                    <h3>Síguenos</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                LeaderLed | Todos los derechos reservados
            </div>
        </footer>
    );
}
