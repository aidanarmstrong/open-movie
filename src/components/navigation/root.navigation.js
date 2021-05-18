import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "../screens/dashboard.screen";
import Nav from "../navigation/navbar.navigation";

const Root = () => {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path='/' exact component={Dashboard}/>
            </Switch>
        </Router>
    )
}

export default Root;
