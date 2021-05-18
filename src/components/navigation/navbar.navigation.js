import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';


function Navigation() {
    return(
        <Navbar variant="light" expand="lg" style={styles.navbar}>
            <Navbar.Brand href="./" className="text-white">
                Open Movie
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-lg-auto"/>
                <Nav>
                    <Nav.Link href="./" className="text-white">Home</Nav.Link>
                    <Nav.Link href="./" className="text-white">Films</Nav.Link>
                    <Nav.Link href="./" className="text-white">Tv Shows</Nav.Link>
                    <Nav.Link href="./" className="text-white">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const styles = {
    navbar: { backgroundColor: '#434445'}
};

export default Navigation;
