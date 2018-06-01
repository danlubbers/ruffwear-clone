import React from 'react';
import {connect} from 'react-redux';
import {getCart, changeQuantity, deleteFromCart} from '../ducks/reducer'

class Cart extends React.Component{
    render(){
        var subtotal = this.props.cart.reduce((prev, next) => {
            return prev + (next.price * next.quantity)
        })
        return(
            <div>
                Cart
            </div>
        )
    }
}

function mapStateToProps(state){
    cart: state.cart
}

export default connect(mapStateToProps, {getCart, changeQuantity, deleteFromCart})(Cart)