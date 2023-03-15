import {Container, Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

function NavBar() {
  return (
    <Navbar className="color-nav" expand="lg">
    <Container>
      <Navbar.Brand className="link-navi" href={'/'}>Disruptia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="link-navi" href="#home">Empresas</Nav.Link>
          <Nav.Link className="link-navi" href={'/hdv'}>Hoja de vida</Nav.Link>
          <Nav.Link className="link-navi" href="#Contact">Contacto</Nav.Link>          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  
  );
}

export default NavBar;