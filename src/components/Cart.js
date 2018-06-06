import React from 'react';
import {connect} from 'react-redux';
import {getCart, changeQuantity, deleteFromCart} from '../ducks/reducer';
import CartRow from './CartRow';
import {Link} from 'react-router-dom';
import Checkout from './Checkout';

class Cart extends React.Component{
   componentDidMount(){
       this.props.getCart()
       window.scrollTo(0,0)
   }
   render(){
       let itemNumber = this.props.cart.reduce((prev, next) => {
           return prev + next.quantity
       },0)
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
       },0)

       return(
           <div className="cart-container">
               <div className="basket-header" >
                   <h1>YOUR BASKET</h1>
                   <h2>{itemNumber} items</h2>
               </div>
                    {
                        this.props.cart[0]
                        ?
                        <div className="lower-section">
                            <div className="item-quantity-subtotal" >
                                <div className="columns" >
                                    <p className="column" id="item">ITEM</p>
                                    <p className="column" id="subtotal">SUBTOTAL</p>
                                    <p className="column" id="qty">QUANTITY</p>
                                </div>
                                {cartRows}
                            </div>
                            <div className="order_summary" >
                                <h1>ORDER SUMMARY</h1>
                                <label>SUBTOTAL</label>
                                <p>${subtotal.toFixed(2)}</p>
                                <button className="checkout-btn" ><Checkout amount={getCart}/></button>
                                <Link to='/'>
                                        <button className="continue-btn" >CONTINUE SHOPPING</button>
                                </Link>
                            </div>
                        </div>
                        :
                        <h2>
                            It appears that your cart is currently empty! You can continue browsing
                            &nbsp;
                            <Link to='/'>
                                <u>here</u>.
                            </Link>
                        </h2>
                    }

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
