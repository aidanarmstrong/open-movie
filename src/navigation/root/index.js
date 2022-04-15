import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../../screens/home";
import Search from "../../screens/search";
import Nav from "../navbar";
import Footer from "../footer";
import Show from "../../screens/show";
import FourOFour from "../../screens/404";

const Root = () => {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/search?query=' component={Search}/>
                <Route path='/search' component={ (props) => <Search { ...props }/> } />
                <Route path='/:category/:id/:title/:year' component={ (props) => <Show/> } />
                <Route path="*" component={FourOFour}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Root;