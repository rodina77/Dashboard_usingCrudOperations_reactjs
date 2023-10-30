import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaArtstation } from "react-icons/fa6";

function NavBar() {
  return (
    <Navbar id='navobar' expand="lg" className="bg-dark text-white">
      <Container>
        <Navbar.Brand className='text-white'><FaArtstation></FaArtstation></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='text-decoration-none text-white'>Product Dashboard</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;