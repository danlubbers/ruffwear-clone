import React from 'react';
import {connect} from 'react-redux'
import {addToCart, getIndiv} from '../ducks/reducer';
import {Link} from 'react-router-dom';
import Plus from 'react-icons/lib/fa/plus';
import Minus from 'react-icons/lib/fa/minus';
import Cart from 'react-icons/lib/fa/shopping-cart';
import ArrowLeft from 'react-icons/lib/fa/angle-left';
import ArrowRight from 'react-icons/lib/fa/angle-right';



class Product extends React.Component{
    constructor(){
        super()

        this.state={
            colorIndex: 0,
            quantity: 1,
            size: '',
            borderStyle:[{border: '2px solid #D0D3D4', borderRadius: "50%"}, {}, {}],
            selectSize: false,
        }
    }
    componentDidMount(){
        this.props.getIndiv(this.props.match.params.id)
        window.scroll(0,0)
    }
    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.props.getIndiv(this.props.match.params.id)
        } 
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
            size: e,
            selectSize: false
        })
    }
    // leftArrowClick(){
    //     let id = +this.props.match.params.id - 1;
    //     this.props.history.push(`/Product/${id}`)
    // }
    addToBasket(){      
        if(!this.props.user){
            alert("Please login to add items to you basket")

        }
        else if(this.props.user && this.props.indiv.sizes[0] && !this.state.size){
            this.setState({
                selectSize: true,
            })
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
        let {product_id, title, subtitle, description, price, sizes, colors, imgs} = this.props.indiv

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
        let stylz = {}
        if(this.state.selectSize){
            stylz = {border: '3px solid #F75238'}
        }
        if(!this.state.selectSize){
            stylz = {}
        }
        return(
            <div className="product-container" >
                <div className="product-content" >
                   <img className='product-image' src={imgs[this.state.colorIndex]} alt={title}/> 
                   <p className='product-description'>{description}</p>
                </div>
                <aside className="control-panel" >
                    <div className="top-section" >
                        {
                            product_id === 70 || product_id === 89 || product_id === 135 || product_id === 144 || product_id === 156
                            ?
                            null
                            :
                            <Link to={`/Product/${+this.props.match.params.id - 1}`}>                                                    
                                <ArrowLeft className="arrow"/>
                            </Link>
                        }
                        <div className='product-title-subtitle'>
                            <h1>{title}</h1>
                            <p>{subtitle}</p>
                            <h2>${price}</h2>
                        </div>
                        {
                            product_id === 102 || product_id === 81 || product_id === 143 || product_id === 154 || product_id === 162
                            ?
                            null
                            :
                            <Link to={`/Product/${+this.props.match.params.id + 1}`}>                        
                                <ArrowRight className="arrow"/>
                            </Link>                        
                        }
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
                                </div>
                                <div className='custom-select'>
                                <select onChange={(e) => this.handleSize(e.target.value)} style={stylz} >  {/*this is the select size dropdown*/}
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
                        <div className="basketBtn-container">
                            {
                                this.state.selectSize
                                ?
                                <p>Please Select A Size.</p>
                                :
                                null
                            }
                            <button className='basketBtn' onClick={() => this.addToBasket()}><Cart size={20}/> ADD TO BASKET</button>
                        </div>
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