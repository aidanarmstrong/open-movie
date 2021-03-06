import React, {useState} from 'react';
import {Navbar, Nav, Form, FormControl, Image} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setMovies} from "../../actions/movie.actions";
import logo from '../../assets/imgs/logo.png';


function Navigation() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const history = useHistory();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(searchTerm){
            dispatch(setMovies([]));
            history.push({
                pathname: '/search',
                search: '?query=' + searchTerm.replace(/\s/g, '-'),
            });
        }
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return(
        <Navbar variant="dark" expand="lg" style={styles.navbar}>
            <Navbar.Brand href="/" className="text-white">
                {/* <h2>Open Movie</h2> */}
                <Image alt="Movie Mania" src={logo} style={styles.logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" className="text-white">Home</Nav.Link>
                    <Nav.Link href="/films/" className="text-white">Films</Nav.Link>
                    <Nav.Link href="/tvshows/" className="text-white">Tv Shows</Nav.Link>
                </Nav>
                <Form onSubmit={handleOnSubmit}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 search-bar" onChange={handleOnChange}/>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

const styles = {
    navbar: { backgroundColor: '#282c34'},
    logo: { width: 250 }
};

export default Navigation;
