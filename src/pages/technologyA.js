import React from "react";
import Navbar from "../components/navbar";
import {Col, Row} from "react-bootstrap";
import LaunchVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';

const TechnologyA = () => {
    return (
        <div className="technologyA">
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={7}>
                        <div className="technology-left ">
                            <h3><b>03</b>SPACE LAUNCH 101</h3>
                            <div className="tech d-flex">
                                <div className="big-circle">
                                    <div className="res-circle">
                                        <div className="circle-txt">1</div>
                                    </div>
                                    <div className="res-circles">
                                        <div className="circle-txts">2</div>
                                    </div>
                                    <div className="res-circles">
                                        <div className="circle-txts">3</div>
                                    </div>
                                </div>
                                <div className="tech-content">
                                    <h5>THE TERMINOLOGY…</h5>
                                    <h2>LAUNCH VEHICLE</h2>
                                    <p>A launch vehicle or carrier rocket is a rocket-propelled<br/>
                                        vehicle used to carry a payload from Earth's surface to<br/>
                                        space, usually to Earth orbit or beyond. Our WEB-X<br/>
                                        carrier rocket is the most powerful in operation. Standing<br/>
                                        150 metres tall, it's quite an awe-inspiring sight on the<br/>
                                        launch pad!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="technology-right">
                            <img src={LaunchVehicle} alt="launch-vehicle"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default TechnologyA;
