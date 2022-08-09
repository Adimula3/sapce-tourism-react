import React from "react";
import Navbar from "../components/navbar";
import {Col, Row} from "react-bootstrap";
import Commander from '../assets/crew/image-douglas-hurley.png';

const CrewA = () => {
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
                                <span className="dot filled"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="crew-right">
                            <img src={Commander} alt="commander"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default CrewA;
