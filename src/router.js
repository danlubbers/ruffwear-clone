import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Harnesses from './components/Harnesses';
import Leashes from './components/Leashes';
import Collars from './components/Collars';
import Cart from './components/Cart';
import Boots from './components/Boots';
import Product from './components/Product'

    export default(
        <Switch>
            <Route exact path="/" component={Home} />   
            <Route path="/harnesses" component={Harnesses}/>
            <Route path="/leashes" component={Leashes}/>   
            <Route path="/collars" component={Collars}/>   
            <Route path="/boots" component={Boots}/>   
            <Route path="/Product/:id" component={Product}/>   
            <Route path="/cart" component={Cart}/>         
        </Switch>
    )