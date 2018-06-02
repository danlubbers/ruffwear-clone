import React from 'react';
import { connect } from 'react-redux';
import Headerimg from '../assets/Header-Image-Harnesses.jpg';
import {getProducts} from '../ducks/reducer';
import ProductCard from './ProductCard'


class Collections extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.getProducts('harnesses')
        console.log(this.props, "what the heck is in props?")
        console.log(this.props.match.params.product, "ayyy wats dat collection?")
    }

    render(){
        console.log(this.props.products);
        var category =  this.props.match.params.product.toUpperCase()
        
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
                <h1 className='description'> {category} </h1>
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

export default connect(mapStateToProps, {getProducts})(Collections)

