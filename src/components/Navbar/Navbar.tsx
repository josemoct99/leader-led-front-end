import "./Navbar.css";
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/images/logos/leaderled.svg" alt="Leader Led Logo" style={{height: '80px', width: '220px'}}/>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/services">Servicios</Link></li>
                <li><Link to="/contact">Contáctenos</Link></li>
                <li><Link to="/cart">Carrito</Link></li>
                {/* here maybe we should put an icon of shop idk*/}
            </ul>
        </nav>
    );
};
