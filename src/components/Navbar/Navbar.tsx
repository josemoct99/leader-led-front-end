import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Leader Led S.A.S.</div>
      <ul className="navbar-links">
        <li><Link to="/">Información</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/contact">Contáctenos</Link></li>
      </ul>
    </nav>
  );
};
