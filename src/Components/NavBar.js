import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";
import "../App.css";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="dark"
          variant="dark"
          className="fixed-top"
        >
          <Navbar.Brand href="/">Bitcoin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto flex-row flex-wrap">
              <Nav.Link
                to="about"
                activeStyle={{ color: "white" }}
                className="mr-2"
                component={Container}
                onClick={function () {
                  document
                    .getElementById("introducao")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                to="about"
                activeStyle={{ color: "white" }}
                className="mr-2"
                component={Container}
                onClick={function () {
                  document
                    .getElementById("introducao")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Introdução
              </Nav.Link>
              <Nav.Link
                to="about"
                activeStyle={{ color: "white" }}
                className="mr-2"
                component={Container}
                onClick={function () {
                  document
                    .getElementById("mineracao")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Mineração
              </Nav.Link>
              <Nav.Link
                to="about"
                activeStyle={{ color: "white" }}
                className="mr-2"
                component={Container}
                onClick={function () {
                  document
                    .getElementById("calculo")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Cálculo
              </Nav.Link>
              <Nav.Link
                to="about"
                activeStyle={{ color: "white" }}
                className="mr-2"
                component={Container}
                onClick={function () {
                  document
                    .getElementById("rentabilidade")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Rentabilidade
              </Nav.Link>
              <Nav.Link
                to="about"
                activeStyle={{ color: "white" }}
                className="mr-2"
                component={Container}
                onClick={function () {
                  document
                    .getElementById("investimento")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Investimento
              </Nav.Link>
              <Nav.Link
                to="about"
                activeStyle={{ color: "white" }}
                className="mr-2"
                component={Container}
                onClick={function () {
                  document
                    .getElementById("exemplo")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Exemplo
              </Nav.Link>
              <Nav.Link
                to="about"
                activeStyle={{ color: "white" }}
                className="mr-2"
                component={Container}
                onClick={function () {
                  document
                    .getElementById("maquina")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Máquina
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
