import React from 'react';
import {connect} from 'react-redux'
import {addToCart, getIndiv} from '../ducks/reducer';
import {Link} from 'react-router-dom';

import Cart from 'react-icons/lib/fa/shopping-cart'

class Product extends React.Component{
    constructor(){
        super()

        this.state={
            colorIndex: 0,
            quantity: 1,
            size: '',
        }
    }
    componentDidMount(){
        this.props.getIndiv(this.props.match.params.id)
        window.scroll(0,0)
    }
    changeColorIndex(i){
        this.setState({
            colorIndex: i
        })
    }
    handleQuantity(e){
        this.setState({
            quantity: e
        })
    }
    handleSize(e){
        this.setState({
            size: e
        })
    }
    addToBasket(){        
        if(this.state.size){
            this.props.addToCart(this.props.indiv.product_id, +this.state.quantity, this.state.size, this.state.colorIndex)
            this.props.history.push('/cart')
        }
        else{alert("Please select a size")}
    }
    render(){        
        let {category, title, subtitle, description, price, sizes, colors, imgs} = this.props.indiv

        let sizeOptions= sizes.map(size => { //this creates the options for the select size dropdown
            return <option value={size}>{size}</option>
        })

        let colorCircles = colors.map((color, i) => {
            //I used inline styling just to visualize the concept at firt. anyone can change this
            return (<div style={{background: color[1], height: "20px", width: "20px", borderRadius: "50%", marginRight: '10px'}} onClick={() => this.changeColorIndex(i)}>
            </div>)
        })
        return(
            <div className="product-container" >
                <div className="product-content" >
                   <img className='product-image' src={imgs[this.state.colorIndex]} alt={title}/> 
                   <h3 className='product-description'>{description}</h3>
                </div>
                <aside className="control-panel" >
                    <div className='product-title-subtitle'>
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                        <h2>${price}</h2>
                    </div>
                   <div className='color-container'>
                      <label>COLOR:</label>  <div className='color-text'>{colors[this.state.colorIndex][0]}</div> {/*This Displays the firt color's name, until you click a circle*/}
                   </div>
                   <div className="color-circles" >
                    {colorCircles}
                   </div>
                   <div className='size-quantity-basket'>
                     <div className='size-text'>
                        <label>SIZE:</label>
                        <h5>Refer to Size Selector</h5>
                    </div>
                    <div className='custom-select'>
                        <select onChange={(e) => this.handleSize(e.target.value)}>  {/*this is the select size dropdown*/}
                            <option value="">SELECT SIZE</option>
                            {sizeOptions}
                        </select>
                    </div>
                    <label>QUANTITY:</label>
                        <input type="number" value={this.state.quantity} min={1} onChange={(e) => this.handleQuantity(e.target.value)}/>
                        <button className='basketBtn' onClick={() => this.addToBasket()}><Cart size={20}/> ADD TO BASKET</button>
                    </div>
                </aside>
            </div>
        )
    }
}

function mapStateToProps(state){
   return{ 
       indiv: state.indiv
   }
}

export default connect(mapStateToProps, {addToCart, getIndiv})(Product)