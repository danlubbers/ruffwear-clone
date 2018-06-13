import React from 'react';
import {connect} from 'react-redux';
import {changeQuantity, deleteFromCart} from '../ducks/reducer';
import { Link } from 'react-router-dom';


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
       let newQuantity = +e;
       if(!newQuantity || newQuantity < 1){
           newQuantity = 0
       }
       this.setState({
           qty: newQuantity
       })
       this.props.changeQuantity(this.props.cart_id, +e)
   }

   capitalizeColor(color){
        return color.replace(/\w\S*/g, 
        function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      })
   }

   render(){
       let { title, colors, imgs, price, size, colorIndex} = this.props
       // console.log(cart_id, product_id, title, colors, imgs, qty, price, size, colorIndex);
    //   console.log(this.props, "whats cart props?")
      

       return(
           <div className="cart_row" >
              <Link to={`/Product/${this.props.product_id}`}> <img src={imgs[colorIndex]} alt=""/> </Link>
               <div className="prod_info" >
                   <h2>
                       {title}
                   </h2>
                   <span className='category'> Color: </span> 
                   <span className='specification'> {this.capitalizeColor(colors[colorIndex][0])} </span>
                   
                   {
                       size
                       ?
                       <div className='size-container'>
                       <span className = 'category'>   Size: </span>
                         <span className = 'specification'> {size} </span>
                        </div>
                       :
                       null
                   }
                   <p className='remove' onClick={() => this.removeFromCart()} >
                       REMOVE
                   </p>
               </div>
               <div className="qty_input" >
                   <input className="qty_input" type="text" value={this.state.qty} onChange={(e) => this.handleQty(e.target.value)}/>
               </div>
               <div className='price'>
               <span >
                   ${(price * this.state.qty).toFixed(2)}
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

