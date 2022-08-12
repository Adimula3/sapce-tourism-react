import React from "react";
import Navbar from "../components/navbar";
import Moon from '../assets/destination/image-moon.webp'
import MARS from '../assets/destination/image-mars.webp';
import EUROPA from '../assets/destination/image-europa.webp';
import TITAN from '../assets/destination/image-titan.webp';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
export const DestinationA = () => {
    return (
        <div className="destinationA">
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="moon-left">
                            <h3><b>01</b>Pick your destination</h3>
                            <img  src={Moon} alt="moon"/>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="moon-right">
                            <nav className="nav">
                                <Link to="/destinationA" className="nav-link down-actives">Moon</Link>
                                <Link to="/mars" className="nav-link">Mars</Link>
                                <Link to="/europa" className="nav-link">Europa</Link>
                                <Link to="/titan" className="nav-link">TITAN</Link>
                            </nav>
                            <h1>MOON</h1>
                            <p>See our planet as you’ve never seen it before. A perfect<br/>
                                relaxing trip away to help regain perspective and come <br/>
                                back refreshed. While you’re there, take in some history<br/>
                                by visiting the Luna 2 and Apollo 11 landing sites.</p>
                            <hr/>
                            <div className="distance d-flex">
                                <p>AVG. DISTANCE</p>
                                <p>EST. TRAVEL TIME</p>
                            </div>
                            <div className="time d-flex">
                                <p>384,400 km</p>
                                <p>3 days</p>
                            </div>
                            <div className="distance2">
                                <p className="avg">AVG. DISTANCE</p>
                                <p className="kilometer">384,400 km</p>
                            </div>
                            <div className="time2">
                                <p className="avg">EST. TRAVEL TIME</p>
                                <p className="kilometer">3 days</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );

}
        export const Mars = () => {
    return (
        <div className="destinationA">
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="moon-left">
                            <h3><b>01</b>Pick your destination</h3>
                            <img  src={MARS} alt="mars"/>
                        </div>

                    </Col>
                    <Col lg={6}>
                        <div className="moon-right">
                            <nav className="nav">
                                <Link to="/destinationA" className="nav-link">Moon</Link>
                                <Link to="/mars" className="nav-link down-actives">Mars</Link>
                                <Link to="/europa" className="nav-link">Europa</Link>
                                <Link to="/titan" className="nav-link">Titan</Link>
                            </nav>
                            <h1>MARS</h1>
                            <p>Don’t forget to pack your hiking boots. You’ll need them to<br/>
                                tackle Olympus Mons, the tallest planetary mountain in <br/>
                                our solar system. It’s two and a half times the size of <br/>
                                Everest!</p>
                            <hr/>
                            <div className="distance d-flex">
                                <p>AVG. DISTANCE</p>
                                <p>EST. TRAVEL TIME</p>
                            </div>
                            <div className="time d-flex">
                                <p>225 MIL. km</p>
                                <p>9 months</p>
                            </div>
                            <div className="distance2">
                                <p className="avg">AVG. DISTANCE</p>
                                <p className="kilometer">225 MIL. km</p>
                            </div>
                            <div className="time2">
                                <p className="avg">EST. TRAVEL TIME</p>
                                <p className="kilometer">9 months</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
        }
export const Europa = () => {
    return (
        <div className="destinationA">
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="moon-left">
                            <h3><b>01</b>Pick your destination</h3>
                            <img  src={EUROPA} alt="europa"/>
                        </div>

                    </Col>
                    <Col lg={6}>
                        <div className="moon-right">
                            <nav className="nav">
                                <Link to="/destinationA" className="nav-link">Moon</Link>
                                <Link to="/mars" className="nav-link">Mars</Link>
                                <Link to="/europa" className="nav-link down-actives">Europa</Link>
                                <Link to="/titan" className="nav-link">Titan</Link>
                            </nav>
                            <h1>EUROPA</h1>
                            <p>The smallest of the four Galilean moons orbiting Jupiter, <br/>
                                Europa is a winter lover’s dream. With an icy surface, it’s  <br/>
                                perfect for a bit of ice skating, curling, hockey, or simple  <br/>
                                relaxation in your snug wintery cabin.</p>
                            <hr/>
                            <div className="distance d-flex">
                                <p>AVG. DISTANCE</p>
                                <p>EST. TRAVEL TIME</p>
                            </div>
                            <div className="time d-flex">
                                <p>628 MIL. km</p>
                                <p>3 years</p>
                            </div>
                            <div className="distance2">
                                <p className="avg">AVG. DISTANCE</p>
                                <p className="kilometer">628 MIL. km</p>
                            </div>
                            <div className="time2">
                                <p className="avg">EST. TRAVEL TIME</p>
                                <p className="kilometer">3 years</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export const Titan = () => {
    return (
        <div className="destinationA">
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="moon-left">
                            <h3><b>01</b>Pick your destination</h3>
                            <img  src={TITAN} alt="titan"/>
                        </div>

                    </Col>
                    <Col lg={6}>
                        <div className="moon-right">
                            <nav className="nav">
                                <Link to="/destinationA" className="nav-link">Moon</Link>
                                <Link to="/mars" className="nav-link">Mars</Link>
                                <Link to="/europa" className="nav-link">Europa</Link>
                                <Link to="/titan" className="nav-link down-actives">Titan</Link>
                            </nav>
                            <h1>TITAN</h1>
                            <p>The only moon known to have a dense atmosphere other  <br/>
                                than Earth, Titan is a home away from home (just a few   <br/>
                                hundred degrees colder!). As a bonus, you get striking   <br/>
                                views of the Rings of Saturn.</p>
                            <hr/>
                            <div className="distance d-flex">
                                <p>AVG. DISTANCE</p>
                                <p>EST. TRAVEL TIME</p>
                            </div>
                            <div className="time d-flex">
                                <p>1.6 BIL. km</p>
                                <p>7 years</p>
                            </div>
                            <div className="distance2">
                                <p className="avg">AVG. DISTANCE</p>
                                <p className="kilometer">1.6 BIL. km</p>
                            </div>
                            <div className="time2">
                                <p className="avg">EST. TRAVEL TIME</p>
                                <p className="kilometer">7 years</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default {DestinationA, Mars, Europa, Titan};
