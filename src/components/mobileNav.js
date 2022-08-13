import React from "react";
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";

const MobileNav = () => {
    return (
        <div className="mobile-nav">
            <Menu width={ '260px' }  right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <Link to="/"  className="nav-link"><b>00</b>Home</Link>
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
            </Menu>
        </div>
    );
}
export default MobileNav;
