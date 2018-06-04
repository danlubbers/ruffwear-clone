import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Harnesses from './components/Harnesses';
import Leashes from './components/Leashes';
import Cart from './components/Cart';
import Boots from './components/Boots';
import Product from './components/Product'
import Collections from './components/Collections';

    export default(
        <Switch>
            <Route exact path="/" component={Home} />   
            <Route path="/collections/:product" component={Collections}/>  
            <Route path="/Product/:id" component={Product}/>   
            <Route path="/cart" component={Cart}/>         
        </Switch>
    )