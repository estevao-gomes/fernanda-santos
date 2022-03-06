import React from "react"
import { Col, Row, Image } from "react-bootstrap"
import About from "./images/About.jpg"
import Material from "./images/Material.jpeg"
import Broward from "./images/Broward.png"

export default function Main(){
    return(
        <div className="main">
            <div className="blueBg">
                <Row>
                    <Col>
                        <div className="aboutText">
                            <h1>Here comes some text about Fernanda Santos</h1>
                        </div>
                    </Col>
                    <Col>
                        <div className="aboutImage">
                            <img  src={About} />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="broward">
                <Row>
                    <Col>
                        <div className="personalText"> 
                            <h1>Here comes some text about being Broward Embassador</h1>
                        </div>
                    </Col>
                    <Col>
                        <div className="methodologyImage">
                            <img src={Broward} />
                        </div>
                    </Col>
                    <Col>
                        <div className="methodologyText"> 
                            <h1>Here comes some text about Methodology implemented about personal learning</h1>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="blueBg2">
                <Row>
                    <Col>
                        <div className="materialImage">
                            <img src={Material}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="materialText">
                            <h1>Here comes some text about the Material</h1>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <div className="fourthRowText">
                        <h1>Here comes The Contact Information</h1>
                    </div>
                </Col>
                <Col>
                    <div className="fourthRowEmail">
                        <h4>Here comes The Email Information</h4>
                    </div>
                    <div className="fourthRowInsta">
                        <h4>Here comes The Instagram Information</h4>
                    </div>
                </Col>
            </Row>
        </div>
    )
}