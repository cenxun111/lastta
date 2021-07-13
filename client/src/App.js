import React from 'react'
import "./App.css"
import Lay from './Lay'
import Nav from './Navbar/Nav'
import FactoryA from './Factory-center/FactoryA'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Development from './Factory-center/branch/Development'
import MakeOne from './Factory-center/branch/MakeOne'
import MakeTwo from './Factory-center/Maketwo/MakeTwo'
import Management from './Factory-center/branch/Management'
import Purchase from './Factory-center/branch/Purchase'
import Sells from './Factory-center/branch/sells'
import NewsUpdate from './update/NewsUpdate'


const App = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Lay />
                </Route>
                <Route exact path="/factorycenter">
                    <FactoryA />
                </Route>
                <Route path="/sells">
                    <Sells />
                </Route>
                <Route path='/factorycenter/purchase'><Purchase /></Route>
                <Route path='/management'><Management /></Route>
                <Route path='/factorycenter/maketwo'><MakeTwo /></Route>
                <Route path="/makeone"><MakeOne /></Route>
                <Route path='/factorycenter/development'><Development /></Route>
                <Route path='/newsupdate'><NewsUpdate/></Route>
            </Switch>
        </Router>
    )
}

export default App;