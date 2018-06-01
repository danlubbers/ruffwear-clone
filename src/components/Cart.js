import React from 'react';
import {connect} from 'react-redux';
import {getCart, changeQuantity, deleteFromCart} from '../ducks/reducer'

class Cart extends React.Component{
    componentDidMount(){
        this.props.getCart()
    }
    render(){
        console.log(this.props.cart);
        
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
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps, {getCart, changeQuantity, deleteFromCart})(Cart)