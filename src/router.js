import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product'
import Collections from './components/Collections';
import Contact from  './components/Contact';

    export default(
        <Switch>
            <Route exact path="/" component={Home} />   
            <Route path="/collections/:product" component={Collections}/>  
            <Route path="/Product/:id" component={Product}/>   
            <Route path="/contact" component={Contact}/>         
            <Route path="/cart" component={Cart}/>         
        </Switch>
    )

    