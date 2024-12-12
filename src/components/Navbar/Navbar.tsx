import "./Navbar.css";
import {Link} from "react-router-dom";
import {MenuButton} from "../utils";
import {useState} from "react";
import {SideBar} from "../Sidebar/SideBar";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const sideBarOC = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/images/logos/leaderled.svg" alt="Leader Led Logo"
                     className="principal-image"/>
                <img src="/images/logos/leaderled-logo-colorized.svg" alt="Leader Led Logo"
                     className="secondary-image"/>

            </div>
            <ul className="navbar-links">
                <li className="side-responsive"><Link to="/">Inicio</Link></li>
                <li className="side-responsive"><Link to="/products">Productos</Link></li>
                <li className="side-responsive"><Link to="/services">Servicios</Link></li>
                <li className="side-responsive"><Link to="/contact">Contáctenos</Link></li>
                <li className="side-responsive"><Link to="/cart">Carrito</Link></li>
                <li>
                    <MenuButton parentMethod={sideBarOC}/>
                </li>
            </ul>
            <SideBar open={isOpen}> <button className="btn-close-sidebar" onClick={sideBarOC}> X </button></SideBar>
        </nav>
    );
};
