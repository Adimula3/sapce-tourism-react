import React from "react";
import '../styles/style.css';
import Navbar from "../components/navbar";
import {Col, Row} from "react-bootstrap";
import MobileNav from "../components/mobileNav";
import Brand from '../assets/home/img.png';
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div className="home">
            <Link className="brand" to="/"><img src={Brand} alt="brand"/></Link>
            <MobileNav />
            <Navbar />
            <div className="home-content">
                <Row>
                    <Col lg={6}>
                        <h3>SO, YOU WANT TO TRAVEL TO</h3>
                        <h2>SPACE</h2>
                        <p>Let’s face it; if you want to go to space, you might as well<br/>
                            genuinely go to outer space and not hover kind of on the<br/>
                            edge of it. Well sit back, and relax because we’ll give you a<br/>
                            truly out of this world experience!</p>
                    </Col>
                    <Col lg={6}>
                        <div className="oval">
                            <p>EXPLORE</p>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    );
}
export default Home;
