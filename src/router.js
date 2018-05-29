import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Harnesses from './components/Harnesses/Harnesses';
import Leashes from './components/Leashes/Leashes'

    export default(
        <Switch>
            <Route exact path="/" component={Home}/>            
            <Route path="/harnesses" component={Harnesses}/>
            <Route path="/leashes" component={Leashes}/>            
        </Switch>
    )