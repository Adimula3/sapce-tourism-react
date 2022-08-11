import React from "react";
import Navbar from "../components/navbar";
import {Col, Row} from "react-bootstrap";
import Commander from '../assets/crew/image-douglas-hurley.png';
import SPECIALIST from '../assets/crew/image-mark-shuttleworth.webp';
import PILOT from '../assets/crew/image-victor-glover.webp';
import ENGINEER from '../assets/crew/image-anousheh-ansari.webp';
import {Link} from "react-router-dom";

export const CrewA = () => {

    return (
        <div className="crewA">
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="crew-left">
                            <h3><b>02</b> Meet your crew</h3>
                            <h4>Commander </h4>
                            <h1>Douglas Hurley</h1>
                            <p>Douglas Gerald Hurley is an American engineer, former<br/>
                                Marine Corps pilot and former NASA astronaut. He<br/>
                                launched into space for the third time as commander of<br/>
                                Crew Dragon Demo-2.</p>
                            <div className="small-circle">
                                <Link to="/crewA" className="buttons"/>
                                <Link to="/crewB" className="button"/>
                                <Link to="/crewC" className="button"/>
                                <Link to="/crewD" className="button"/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="crew-right">
                            <img className="commander" src={Commander} alt="commander"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export const CrewB = () => {
    return (
        <div className="crewA">
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="crew-left">
                            <h3><b>02</b> Meet your crew</h3>
                            <h4>Mission Specialist</h4>
                            <h1>MARK <br/>SHUTTLEWORTH</h1>
                            <p>Mark Richard Shuttleworth is the founder and CEO of <br/>
                                Canonical, the company behind the Linux-based Ubuntu<br/>
                                operating system. Shuttleworth became the first South<br/>
                                African to travel to space as a space tourist.</p>
                            <div className="small-circle">
                                <Link to="/crewA" className="button"/>
                                <Link to="/crewB" className="buttons"/>
                                <Link to="/crewC" className="button"/>
                                <Link to="/crewD" className="button"/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="crew-right">
                            <img className="specialist" src={SPECIALIST} alt="mission-specialist"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export const CrewC = () => {
    return (
        <div className="crewA">
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="crew-left">
                            <h3><b>02</b> Meet your crew</h3>
                            <h4>PILOT</h4>
                            <h1>Victor Glover</h1>
                            <p>Pilot on the first operational flight of the SpaceX Crew  <br/>
                                Dragon to the International Space Station. Glover is a <br/>
                                commander in the U.S. Navy where he pilots an F/A-18.He<br/>
                                was a crew member of Expedition 64, and served as a<br/>
                                station systems flight engineer. </p>
                            <div className="small-circle">
                                <Link to="/crewA" className="button"/>
                                <Link to="/crewB" className="button"/>
                                <Link to="/crewC" className="buttons"/>
                                <Link to="/crewD" className="button"/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="crew-right">
                            <img className="pilot" src={PILOT} alt="pilot"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export const CrewD = () => {
    return (
        <div className="crewA">
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="crew-left">
                            <h3><b>02</b> Meet your crew</h3>
                            <h4>Flight Engineer</h4>
                            <h1>Anousheh Ansari</h1>
                            <p>Anousheh Ansari is an Iranian American engineer and<br/>
                                co-founder of Prodea Systems. Ansari was the fourth<br/>
                                self-funded space tourist, the first self-funded woman to<br/>
                                fly to the ISS, and the first Iranian in space.</p>
                            <div className="small-circle">
                                <Link to="/crewA" className="button"/>
                                <Link to="/crewB" className="button"/>
                                <Link to="/crewC" className="button"/>
                                <Link to="/crewD" className="buttons"/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="crew-right">
                            <img className="engineer" src={ENGINEER} alt="engineer"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}


export default {CrewA,CrewB,CrewC,CrewD};
