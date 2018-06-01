import React from 'react';
import {connect} from 'react-redux';
import {changeQuantity, deleteFromCart} from '../ducks/reducer'


class CartRow extends React.Component{
    render(){
        let {cart_id, product_id, title, colors, imgs, qty, price, size, colorIndex} = this.props
        // console.log(cart_id, product_id, title, colors, imgs, qty, price, size, colorIndex);
        console.log(imgs); 
        
        return(
            <div>
                Working on cart rows
                <p>
                {title}
                {price}
                </p>
                {/* <img src={imgs[0]} alt=""/> */}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {changeQuantity, deleteFromCart})(CartRow)