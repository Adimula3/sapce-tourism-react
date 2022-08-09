import React from "react";
import '../styles/style.css';
import Navbar from "../components/navbar";
import {Col, Row} from "react-bootstrap";
const Home = () => {
    return (
        <div className="home">
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
