import React from 'react';
import {connect} from 'react-redux';
import {changeQuantity, deleteFromCart} from '../ducks/reducer'


class CartRow extends React.Component{
   constructor(){
       super()

       this.state={
           qty: 0
       }
   }
   componentDidMount(){
       this.setState({
           qty: this.props.qty
       })
   }
   removeFromCart(){
       this.props.deleteFromCart(this.props.cart_id)
   }
   handleQty(e){
       this.setState({
           qty: +e
       })
       this.props.changeQuantity(this.props.cart_id, +e)
   }
   render(){
       let {cart_id, product_id, title, colors, imgs, qty, price, size, colorIndex} = this.props
       // console.log(cart_id, product_id, title, colors, imgs, qty, price, size, colorIndex);
       console.log(colors);
      
       return(
           <div className="cart_row" >
               <img src={imgs[colorIndex]} alt=""/>
               <div className="prod_info" >
                   <h2>
                       {title}
                   </h2>
                   <p>
                       Color: {colors[colorIndex][0]}
                   </p>
                   {
                       size
                       ?
                       <p>
                           Size: {size}
                       </p>
                       :
                       null
                   }
                   <p onClick={() => this.removeFromCart()} >
                       REMOVE
                   </p>
               </div>
               <div className="qty_input" >
                   <input className="qty_input" type="text" value={this.state.qty} onChange={(e) => this.handleQty(e.target.value)}/>
               </div>
               <div>
               <span>
                   ${price * qty}
               </span>
               </div>
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

