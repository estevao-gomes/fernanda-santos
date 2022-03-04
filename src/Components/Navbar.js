// import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

export default function Header(){
    return(
        <Navbar expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="#home"><h4 className="brandText">Fernanda Santos</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Item>
                    <Nav.Link href="#home"><h4 className="linkText">Home</h4></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#link"><h4 className="linkText">Contatos</h4></Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}