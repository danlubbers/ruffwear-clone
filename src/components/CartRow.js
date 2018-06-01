import React from 'react';
import {connect} from 'react-redux';
import {changeQuantity, deleteFromCart} from '../ducks/reducer'


class CartRow extends React.Component{
    render(){
        return(
            <div>
                cartrow
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