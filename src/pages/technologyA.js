import React from "react";
import Navbar from "../components/navbar";
import {Col, Row} from "react-bootstrap";
import LaunchVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import SPACEPORT from '../assets/technology/image-spaceport-portrait.jpg';
import SpacePort from '../assets/technology/image-spaceport-landscape.jpg';
import LAUNCHING from '../assets/technology/image-launch-vehicle-landscape.jpg';
import CapSule from "../assets/technology/image-space-capsule-landscape.jpg";
import CAPSULE from '../assets/technology/image-space-capsule-portrait.jpg';
import {Link} from "react-router-dom";
import MediaQuery from "react-responsive";
import MobileNav from "../components/mobileNav";

export const TechnologyA = () => {
    return (
        <div className="technologyA">
            <MobileNav />
            <Navbar />
            <div className="container">
                <Row className="row">
                    <Col lg={7}>
                        <div className="technology-left ">
                            <h3><b>03</b>SPACE LAUNCH 101</h3>
                            <div className="tech d-flex">
                                <div className="big-circle">
                                    <Link to="/technologyA" className="my-button">1</Link>
                                    <Link to="/technologyB" className="my-buttons">2</Link>
                                    <Link to="/technologyC" className="my-buttons">3</Link>
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
                            <h3><b>03</b>SPACE LAUNCH 101</h3>
                            <MediaQuery className="firstImageQuery" minDeviceWidth={1224} device={{ deviceWidth: 1440 }}>
                            <img className="LaunchVehicle" src={LaunchVehicle} alt="launch-vehicle"/>
                            </MediaQuery>
                            <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 768 }}>
                                <img className="tablet-image" src={LAUNCHING} alt=""/>
                            </MediaQuery>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export const TechnologyB = () => {
    return (
        <div className="technologyA">
            <MobileNav />
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={7}>
                        <div className="technology-left ">
                            <h3><b>03</b>SPACE LAUNCH 101</h3>
                            <div className="tech d-flex">
                                <div className="big-circle">
                                    <Link to="/technologyA" className="my-buttons">1</Link>
                                    <Link to="/technologyB" className="my-button">2</Link>
                                    <Link to="/technologyC" className="my-buttons">3</Link>
                                </div>
                                <div className="tech-content">
                                    <h5>THE TERMINOLOGY…</h5>
                                    <h2>SPACEPORT</h2>
                                    <p>A spaceport or cosmodrome is a site for launching (or<br/>
                                        receiving) spacecraft, by analogy to the seaport for ships<br/>
                                        or airport for aircraft. Based in the famous Cape <br/>
                                        Canaveral, our spaceport is ideally situated to take <br/>
                                        advantage of the Earth’s rotation for launch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="technology-right">
                            <h3><b>03</b>SPACE LAUNCH 101</h3>
                            <MediaQuery className="firstImageQuery" minDeviceWidth={1224} device={{ deviceWidth: 1440 }}>
                                <img className="space-port" src={SPACEPORT} alt="launch-vehicle"/>
                            </MediaQuery>
                            <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 768 }}>
                                <img className="tablet-image" src={SpacePort} alt=""/>
                            </MediaQuery>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export const TechnologyC = () => {
    return (
        <div className="technologyA">
            <MobileNav />
            <Navbar />
            <div className="container">
                <Row>
                    <Col lg={7}>
                        <div className="technology-left ">
                            <h3><b>03</b>SPACE LAUNCH 101</h3>
                            <div className="tech d-flex">
                                <div className="big-circle">
                                    <Link to="/technologyA" className="my-buttons">1</Link>
                                    <Link to="/technologyB" className="my-buttons">2</Link>
                                    <Link to="/technologyC" className="my-button">3</Link>
                                </div>
                                <div className="tech-content">
                                    <h5>THE TERMINOLOGY…</h5>
                                    <h2>SPACE CAPSULE</h2>
                                    <p>A space capsule is an often-crewed spacecraft that uses <br/>
                                        a blunt-body reentry capsule to reenter the Earth's <br/>
                                        atmosphere without wings. Our capsule is where you'll <br/>
                                        spend your time during the flight. It includes a space <br/>
                                        gym, cinema, and plenty of other activities to keep you <br/>
                                        entertained.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="technology-right">
                            <h3><b>03</b>SPACE LAUNCH 101</h3>
                            <MediaQuery className="firstImageQuery" minDeviceWidth={1224} device={{ deviceWidth: 1440 }}>
                                <img className="capsule" src={CAPSULE} alt="launch-vehicle"/>
                            </MediaQuery>
                            <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 768 }}>
                                <img className="tablet-image" src={CapSule} alt=""/>
                            </MediaQuery>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default {TechnologyA,TechnologyB,TechnologyC};
