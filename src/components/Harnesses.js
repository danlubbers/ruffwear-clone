import React from 'react';
import { connect } from 'react-redux';
import Headerimg from '../assets/Header-Image-Harnesses.jpg';
import {getProducts} from '../ducks/reducer';
import ProductCard from './ProductCard'

class Harnesses extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.getProducts('harnesses')
    }

    render(){
        console.log(this.props.products);
        
        let harnessProducts = this.props.products.map((prod, i) => {
           const {product_id, title, subtitle, price, colors, thumbnail} = prod
            return <ProductCard
            key={i}
            id={product_id}
            title={title}
            subtitle={subtitle}
            price={price}
            colors={colors}
            thumbnail={thumbnail}
            prod={prod}
            />
        })
        return(
            <div className='harnesses'>
            <div className='pic-container'>
                <img className='harnesses-pic' src={Headerimg} alt='Harness Header img'/>
                <div className='spotlight-text'>
               <h3 className='shop'> SHOP </h3>
                <h1 className='description'> HARNESSES </h1>
               </div>

            </div>
            {harnessProducts}            
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps, {getProducts})(Harnesses)