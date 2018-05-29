import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Harnesses from './components/Harnesses'

    export default(
        <Switch>
            <Route exact path="/" component={Harnesses}/>            
            <Route path="/harnesses" component={Harnesses}/>
        </Switch>
    )