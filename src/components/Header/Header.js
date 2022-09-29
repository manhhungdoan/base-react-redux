import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">MHUNG</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to="users" className='nav-link'>User</Link>
                        <Link to="admin" className='nav-link'>Admin</Link>
                    </Nav>
                    <nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                        </NavDropdown>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;