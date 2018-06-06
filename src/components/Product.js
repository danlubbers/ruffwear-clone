import React from 'react';
import {connect} from 'react-redux'
import {addToCart, getIndiv} from '../ducks/reducer';
// import {Link} from 'react-router-dom';
import Plus from 'react-icons/lib/fa/plus';
import Minus from 'react-icons/lib/fa/minus';
import Cart from 'react-icons/lib/fa/shopping-cart'

class Product extends React.Component{
    constructor(){
        super()

        this.state={
            colorIndex: 0,
            quantity: 1,
            size: '',
            borderStyle:[{border: '2px solid #D0D3D4', borderRadius: "50%"}, {}, {}]
        }
    }
    componentDidMount(){
        this.props.getIndiv(this.props.match.params.id)
        window.scroll(0,0)
    }
    changeColorIndex(i){
        if(i === 0){
            this.setState({
                colorIndex: i,
                borderStyle:[{border: '2px solid #D0D3D4', borderRadius: "50%"}, {}, {}]
            })
        }
        if(i === 1){
            this.setState({
                colorIndex: i,
                borderStyle:[{}, {border: '2px solid #D0D3D4', borderRadius: "50%"}, {}]
            })
        }
        if(i === 2){
            this.setState({
                colorIndex: i,
                borderStyle:[{}, {}, {border: '2px solid #D0D3D4', borderRadius: "50%"}]
            })
        }
    }
    handleQuantity(e){
        let newQuantity = +e
        if(!newQuantity){
            newQuantity = 1
        }
        this.setState({
            quantity: newQuantity
        })
    }
    quantityUp(){
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    quantityDown(){
        let newQuantity = this.state.quantity -1
        if(newQuantity < 1){
            newQuantity= 1
        }
        this.setState({
            quantity: newQuantity
        })
    }
    handleSize(e){
        this.setState({
            size: e
        })
    }
    addToBasket(){      
        console.log(this.props.indiv.sizes);
          
        if(!this.props.user){
            alert("Please login to add items to you basket")

        }
        else if(this.props.user && this.props.indiv.sizes[0] && !this.state.size){
            alert("Please select a size")
        }
        else if (this.props.user && this.props.indiv.sizes[0] && this.state.size){
            this.props.addToCart(this.props.indiv.product_id, +this.state.quantity, this.state.size, this.state.colorIndex)
            this.props.history.push('/cart')
        }
        else if (this.props.user && !this.props.indiv.sizes[0]){
            this.props.addToCart(this.props.indiv.product_id, +this.state.quantity, this.state.size, this.state.colorIndex)
            this.props.history.push('/cart')
        }
    }
    render(){     
        console.log(this.props.indiv.sizes[0]);
           
        let {category, title, subtitle, description, price, sizes, colors, imgs} = this.props.indiv

        let sizeOptions= sizes.map(size => { //this creates the options for the select size dropdown
            return <option value={size}>{size}</option>
        })

        let colorCircles = colors.map((color, i) => {
            //I used inline styling just to visualize the concept at firt. anyone can change this
            return (
            <div style={this.state.borderStyle[i]}>
                <div style={{background: color[1], height: "25px", width: "25px", borderRadius: "50%", margin: '5px'}} onClick={() => this.changeColorIndex(i)}>
                </div>
            </div>)
        })
        return(
            <div className="product-container" >
                <div className="product-content" >
                   <img className='product-image' src={imgs[this.state.colorIndex]} alt={title}/> 
                   <p className='product-description'>{description}</p>
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
                        {
                            sizes[0]
                            ?
                            <div>
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
                            </div>
                            :
                            null
                        }

                        <label>QUANTITY:</label>
                        <div className="quantity-form">
                            <button onClick={() => this.quantityDown()} id="down-btn"><Minus size={20}/></button>
                            <input type="text" value={this.state.quantity} min={1} onChange={(e) => this.handleQuantity(e.target.value)}/>
                            <button  onClick={() => this.quantityUp()} id="up-btn"><Plus size={20}/></button>
                        </div>
                        <button className='basketBtn' onClick={() => this.addToBasket()}><Cart size={20}/> ADD TO BASKET</button>
                    </div>
                </aside>
            </div>
        )
    }
}

function mapStateToProps(state){
   return{ 
       indiv: state.indiv,
       user: state.user
   }
}

export default connect(mapStateToProps, {addToCart, getIndiv})(Product)