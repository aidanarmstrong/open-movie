import React, {useEffect, useState} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {setMovies} from "../actions/movie.actions";


function Navigation() {

    const API_KEY = "b04a00192fa1aa4a5944c7d44718f987"
    const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=" + API_KEY + "&query=";

    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    // todo: move to api folder
    const getMovies = ( API ) => {
        fetch(API).then(res => res.json())
            .then(data => {
                dispatch(setMovies(data.results));
            });
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            getMovies(SEARCH_API + searchTerm);
            setSearchTerm('');
        }

    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return(
        <Navbar variant="dark" expand="lg" style={styles.navbar}>
            <Navbar.Brand href="./" className="text-white">
                Open Movie
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="./" className="text-white">Home</Nav.Link>
                    <Nav.Link href="./" className="text-white">Films</Nav.Link>
                    <Nav.Link href="./" className="text-white">Tv Shows</Nav.Link>
                    <Nav.Link href="./" className="text-white">Profile</Nav.Link>
                </Nav>
                <Form onSubmit={handleOnSubmit}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 search-bar" onChange={handleOnChange}/>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

const styles = {
    navbar: { backgroundColor: '#282c34'}
};

export default Navigation;
