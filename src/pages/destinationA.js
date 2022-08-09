import React from "react";
import Navbar from "../components/navbar";
import Moon from '../assets/destination/image-moon.webp';
import {Col, Row} from "react-bootstrap";

const DestinationA = () => {
    return (
        <div className="destinationA">
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="moon-left">
                            <h3><b>01</b> Pick your destination</h3>
                            <img  src={Moon} alt="moon"/>
                        </div>

                    </Col>
                    <Col lg={6}>
                        <div className="moon-right">
                            <nav className="nav">
                                <a className="nav-link active" aria-current="page" href="#">Moon</a>
                                <a className="nav-link" href="#">Mars</a>
                                <a className="nav-link" href="#">Europa</a>
                                <a className="nav-link" href="#" >Titan</a>
                            </nav>
                            <h1>MOON</h1>
                            <p>See our planet as you’ve never seen it before. A perfect<br/>
                                relaxing trip away to help regain perspective and come <br/>
                                back refreshed. While you’re there, take in some history<br/>
                                by visiting the Luna 2 and Apollo 11 landing sites.</p>
                            <hr/>
                            <div className="distance d-flex">
                                <p>AVG. DISTANCE</p>
                                <p>AVG. DISTANCE</p>
                            </div>
                            <div className="time d-flex">
                                <p>384,400 km</p>
                                <p>3 days</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );

}
export default DestinationA;
