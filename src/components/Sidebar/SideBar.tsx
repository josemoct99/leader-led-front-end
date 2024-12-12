import './Sidebar.css'
import {Link} from "react-router-dom";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    open: boolean;
}

export const SideBar = ({children, open}: Props) => {
    return (
        <div className={`sidebar ${open ? 'open' : 'closed'}`}>
            {children}
            <ul className="navbar-links-sidebar">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/services">Servicios</Link></li>
                <li><Link to="/contact">Contáctenos</Link></li>
                <li><Link to="/cart">Carrito</Link></li>
            </ul>
        </div>
    )
}