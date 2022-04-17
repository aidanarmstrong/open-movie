import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../../screens/home";
import Search from "../../screens/search";
import Nav from "../navbar";
import Footer from "../footer";
import Show from "../../screens/show";
import FourOFour from "../../screens/404";
import Films from "../../screens/films";
import TvShows from "../../screens/tv";


const Root = () => {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/search?query=' component={Search}/>
                <Route path='/films' component={Films}/>
                <Route path='/tv' component={TvShows}/>
                <Route path='/search' component={ (props) => <Search { ...props }/> } />
                <Route path='/:category/:id/:title/:year' component={ (props) => <Show/> } />
                <Route path="*" component={FourOFour}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Root;