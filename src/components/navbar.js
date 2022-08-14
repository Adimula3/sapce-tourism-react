import React from "react";
import '../styles/style.css';
import Brand from '../assets/home/img.png';
import {Link, NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav id="navbar" className="navbar navbar-expand-lg d-flex">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={Brand} alt="brand"/></Link>
                    <hr/>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/"  className="nav-link"><b>00</b>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/destinationA" className="nav-link"><b>01</b>Destination</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/crewA"  className="nav-link"><b>02</b>Crew</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/technologyA"  className="nav-link"><b>03</b>Technology</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
