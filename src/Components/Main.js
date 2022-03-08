import React from "react"
import { Col, Row, Image, Container } from "react-bootstrap"
import About from "./images/About.jpg"
import Material from "./images/Material.jpeg"
import Broward from "./images/Broward.png"

export default function Main(){
    return(
        <div className="main">
                <Row className="topMargin">
                    <Col className="blueBg text" xs={12} md={4}>
                            <h1 className="aboutText">Here comes some text about Fernanda Santos</h1>
                    </Col>
                    <Col className="images blueBg" xs={6} md={4}>
                            <Image className="aboutImage" fluid={true}  src={About} />
                    </Col>
                    <Col className="whiteBg"md={true}>
                        </Col>
                </Row>
            
                <Row>
                    <Col className="text" xs={12} md={4}>
                        <h1 className="personalText">Here comes some text about being Broward Embassador</h1>
                    </Col>
                    <Col className="images" xs={12} md={4}>
                        <Image fluid={true} className="methodologyImage" src={Broward} />
                    </Col>
                    <Col className="text" xs={12} md={4}>
                        <h1 className="methodologyText">Here comes some text about Methodology implemented about personal learning</h1>
                    </Col>
                </Row>
            

                <Row className="bottomMargin">
                    <Col className="whiteBg"md={true}>
                        </Col>
                    <Col xs={12} md={4} className="images blueBg2">
                        <Image className="materialImage" fluid={true} src={Material}/>
                    </Col>
                    <Col xs={12} md={4} className="text blueBg2">
                        <h1 className="materialText">Here comes some text about the Material</h1>
                    </Col>
                </Row>
            {/*
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
             </Row> */}
        </div>
    )
}