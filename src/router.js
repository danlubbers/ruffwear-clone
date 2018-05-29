import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Harnesses from './components/Harnesses/Harnesses';
import Leashes from './components/Leashes/Leashes';
import Collars from './components/Collars/Collars';
import Cart from './components/Cart/Cart';
import Boots from './components/Boots/Boots';
import Product from './components/Product/Product'

    export default(
        <Switch>
            <Route exact path="/" component={Home}/>            
            <Route path="/harnesses" component={Harnesses}/>
            <Route path="/leashes" component={Leashes}/>   
            <Route path="/collars" component={Collars}/>   
            <Route path="/boots" component={Boots}/>   
            <Route path="/Product" component={Product}/>   
            <Route path="/cart" component={Cart}/>               
        </Switch>
    )