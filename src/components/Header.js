import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <Navbar bg="primary" data-bs-theme="dark" sticky='top' className='Header'>
            <Container>
                <Navbar.Brand as={NavLink} to="/">PM Tool</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default Header;
