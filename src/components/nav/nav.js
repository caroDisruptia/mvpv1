import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

function NavBar() {
  return (
    <Navbar className="color-nav" expand="lg">
    <Container>
      <Navbar.Brand className="link-navi" href="#home">Disruptia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="link-navi" href="#home">Home</Nav.Link>
          <Nav.Link className="link-navi" href="#link">Link</Nav.Link>
          <Nav.Link className="link-navi" href="#About">About</Nav.Link>
          <Nav.Link className="link-navi" href="#Contact">Contact</Nav.Link>          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  
  );
}

export default NavBar;