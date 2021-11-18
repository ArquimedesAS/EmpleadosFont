import React from "react";
import {
  Container,
  DropdownButton,
  Dropdown,
  Nav,
  Navbar,
  Row,

} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import Logo from "../img/logo.png";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="success" variant="dark">
        <Container>
          <img className="logo" src={Logo} /><br />
          {/*<img className="logo" src= "https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"/>*/}
          <Navbar.Brand href="#home">
            Grupo 14 MisionTic <span id="usuario-sub-brand"></span>
          </Navbar.Brand>
          <Navbar.Toggle sria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar.nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Caracteristicas</Nav.Link>
            <Nav.Link href="#pricing">Precio</Nav.Link>*/}
            </Nav>

            <DropdownButton title="Usuario">
              <Dropdown.Header id="Dropdown-Header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>USUARIO</Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
              {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
