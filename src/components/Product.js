import React from 'react';
import {connect} from 'react-redux'
import {addToCart, getIndiv} from '../ducks/reducer';
import {Link} from 'react-router-dom';

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

        let colorCirlces = colors.map((color, i) => {
            //I used inline styling just to visualize the concept at firt. anyone can change this
            return (<div style={{background: color[1], height: "20px", width: "20px", borderRadius: "50%"}} onClick={() => this.changeColorIndex(i)}>
            </div>)
        })
        return(
            <div className="product" >
                <div className="content" >
                   <img src={imgs[this.state.colorIndex]} alt={title}/> 
                   <h3>{description}</h3>
                </div>
                <aside className="control_panel" >
                    <div>
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                        <h2>${price}</h2>
                    </div>
                   <p>
                      COLOR:  {colors[this.state.colorIndex][0]} {/*This Displays the firt color's name, until you click a circle*/}
                   </p>
                   <div className="color_circles" >
                    {colorCirlces}
                   </div>
                   <p>SIZE: refer to size selector</p>
                   <select name="sizes" id="" onChange={(e) => this.handleSize(e.target.value)}>  {/*this is the select size dropdown*/}
                    <option value="">Select Size</option>
                    {sizeOptions}
                   </select>
                   <label>QUANTITY:</label>
                    <input type="number" value={this.state.quantity} min={1} onChange={(e) => this.handleQuantity(e.target.value)}/>
                    <button onClick={() => this.addToBasket()}>ADD TO BASKET</button>
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