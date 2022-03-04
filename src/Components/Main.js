import React from "react"
import { Col, Row, Image } from "react-bootstrap"
import About from "./images/About.jpg"
import Material from "./images/Material.jpeg"
import Methodology from "./images/Methodology.jpg"

export default function Main(){
    return(
        <div className="main">
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
            <div className="whiteBg">
                <Row>
                    <Col>
                        <div className="personalText"> 
                            <h1>Here comes some text about personal learning</h1>
                        </div>
                    </Col>
                    <Col>
                        <div className="methodologyImage">
                            <img src={Methodology}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="methodologyText"> 
                            <h1>Here comes some text about Methodology</h1>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <div className="materialText">
                        <h1>Here comes some text about the Material</h1>
                    </div>
                </Col>
                <Col>
                    <div className="materialImage">
                        <img src={Material}/>
                    </div>
                </Col>
            </Row>
            <div className="whiteBg">
                <Row>
                    <Col>
                        <div className="fourthRowText">
                            <h1>Here comes The Contact Information</h1>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}