import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "../screens/dashboard.screen";
import Search from "../screens/search.screen";
import Nav from "./navbar.navigation";
import Footer from "./footer.navigation";

const Root = () => {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/search?query=' component={Search}/>
                <Route path='/search' component={ (props) => <Search { ...props }/> } />
                <Route path="*" component={() => (<h1>404</h1>)}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Root;
