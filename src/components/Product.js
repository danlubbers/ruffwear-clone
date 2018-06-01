import React from 'react';
import {connect} from 'react-redux'
import {addToCart} from '../ducks/reducer'

class Product extends React.Component{
    render(){
        console.log(this.props.indiv);
        
        const {category, title, subtitle, description, price, sizes, colors, imgs} = this.props.indiv
        return(
            <div>
                <div>
                   <img src={imgs[0]} alt=""/> 
                   <h3>{description}</h3>
                </div>
                <div>
                   <h1>{title}</h1>
                   <h2>{subtitle}</h2>
                   <p>{price}</p>
                   <select name="sizes" id="">
                    <option value="Select Size">Select Size</option>
                   </select>
                   
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
   return{ 
       indiv: state.indiv
   }
}

export default connect(mapStateToProps, {addToCart})(Product)