import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Icon } from "semantic-ui-react";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navBar">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav style={{ textAlign: "center" }}>
            <Nav.Link href="/">
              <Button animated="vertical" inverted color="orange">
                <Button.Content hidden>
                  <Icon name="home" />
                </Button.Content>
                <Button.Content visible>HOME</Button.Content>
              </Button>
            </Nav.Link>
            <Nav.Link href="/products">
              <Button animated="vertical" inverted color="orange">
                <Button.Content hidden>
                  <Icon name="dollar" />
                </Button.Content>
                <Button.Content visible>SHOP</Button.Content>
              </Button>
            </Nav.Link>
            <Nav.Link href="/cart">
              <Button animated="vertical" inverted color="orange">
                <Button.Content hidden>
                  <Icon name="shop" />
                </Button.Content>
                <Button.Content visible>CART</Button.Content>
              </Button>
            </Nav.Link>
            <Nav.Link href="/admin">
              <Button animated="vertical" inverted color="orange">
                <Button.Content hidden>
                  <Icon name="user" />
                </Button.Content>
                <Button.Content visible>ADMIN</Button.Content>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
