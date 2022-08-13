import React from "react";
import '../styles/style.css';
import Brand from '../assets/home/img.png';
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav id="navbar" className="navbar navbar-expand-lg d-flex">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={Brand} alt="brand"/></Link>
                    <hr/>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link to="/"  className="nav-link down-active"><b>00</b>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/destinationA" className="nav-link"><b>01</b>Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/crewA"  className="nav-link"><b>02</b>Crew</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/technologyA"  className="nav-link"><b>03</b>Technology</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
