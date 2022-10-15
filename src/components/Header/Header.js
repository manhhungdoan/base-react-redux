import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
const Header = () => {
    let navigate = useNavigate();
    const handleLogin = () => {
        navigate("login")
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to='/' className='navbar-brand'>MHUNG</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to="users" className='nav-link'>User</NavLink>
                        <NavLink to="admin" className='nav-link'>Admin</NavLink>
                    </Nav>
                    <Nav>
                        <button className='btn-login' onClick={() => handleLogin()}>Login</button>
                        <button className='btn-signup'>Sign Up</button>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item >Login</NavDropdown.Item>
                            <NavDropdown.Item >Logout</NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;