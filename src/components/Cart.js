import React from 'react';
import {connect} from 'react-redux';
import {getCart, changeQuantity, deleteFromCart} from '../ducks/reducer';
import CartRow from './CartRow';
import {Link} from 'react-router-dom';

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
           <div>
               <div>
                   <h1>YOUR BASKET</h1>
                   <h2>{itemNumber} items</h2>
               </div>
               <div>
                   <p>ITEM</p>
                   <p>QUANTITY</p>
                   <p>SUBTOTAL</p>
               </div>
               {cartRows}
               <div className="Order_summary" >
                   <h1>ORDER SUMMARY</h1>
                   <p>SUBTOTAL</p>
                   <p>${subtotal.toFixed(2)}</p>

                   <Link to='/'>
                        <button>CONTINUE SHOPPING</button>
                   </Link>
               </div>
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
