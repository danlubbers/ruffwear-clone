import React, {Component} from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {getCart, emptyCart} from '../ducks/reducer';
import {connect} from 'react-redux';

class Checkout extends Component {

   onToken = (token) => {
       token.card = void 0;
       let amount = Math.round(this.props.cart.reduce((acc, product)=>{
            return acc + (product.quantity * product.price)
       }, 0)*100);
       console.log(amount)
       axios.post(`/api/payment`, {token, amount: amount}).then(res => {
           this.props.emptyCart(res.data)
       }).catch(err => console.log(err))
   }

   onClose = () => {
       this.props.getCart();
   }

   render() {
       return(
           <div>
               <StripeCheckout
               token = {this.onToken}
               stripeKey = {process.env.REACT_APP_STRIPE_KEY}
               amount = {this.props.amount}
               closed = {this.onClose}>
               <button className="checkoutBtn">CHECK OUT</button>
               </StripeCheckout>
           </div>
       )
   }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, {getCart, emptyCart})(Checkout);