import React from 'react';
import {connect} from 'react-redux';
import {getCart, changeQuantity, deleteFromCart} from '../ducks/reducer';
import CartRow from './CartRow'

class Cart extends React.Component{
    componentDidMount(){
        this.props.getCart()
    }
    render(){
        let cartRows = this.props.cart.map((prod, i) => {
            return <CartRow 
            key={i}
            cart_id={prod.cart_id}
            product_id={prod.product_id}
            title={prod.title}
            price={prod.price}
            colors={prod.colors}
            imgs={prod.imgs}
            thumbnail={prod.thumbnail}
            qty={prod.quantity}
            size={prod.size}
            colorIndex={prod.color_img_index}
            />
        })        
        var subtotal = this.props.cart.reduce((prev, next) => {
            return prev + (next.price * next.quantity)
        })

        return(
            <div>
                <h1>cart</h1>
                {cartRows}
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