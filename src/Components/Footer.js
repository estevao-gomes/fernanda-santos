import React from "react"
import { Row } from "react-bootstrap"

export default function Footer(){
    return(
        <Row>
            <div className="footer">
            <a href=""><i className="fab fa-linkedin"></i></a>
            <a href="" ><i className="fab fa-facebook-square"></i></a>
            <a href="" ><i className="fab fa-instagram"></i></a>
            </div>
        </Row>
    )
}