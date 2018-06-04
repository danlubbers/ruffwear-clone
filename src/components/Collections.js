import React from 'react';
import { connect } from 'react-redux';
import HARNESSES from '../assets/Header-Image-Harnesses.jpg';
import BOOTS from '../assets/Header-Image-boots.jpg';
import { getProducts } from '../ducks/reducer';
import ProductCard from './ProductCard'


class Collections extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props, "what the heck is in props?")
        console.log(this.props.match.params.product, "ayyy wats dat collection?")
    }


    render() {

        var category = this.props.match.params.product.toUpperCase()

        this.props.getProducts(this.props.match.params.product)

        if (category == "HARNESSES") {
            var img = <img className='harnesses-pic' src={HARNESSES} alt={category} />
        } else if (category == "BOOTS") {
            var img = <img className='harnesses-pic' src={BOOTS} alt={category} />
        }

        let harnessProducts = this.props.products.map((prod, i) => {
            const { product_id, title, subtitle, price, colors, thumbnail } = prod
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
        return (
            <div className='Collections'>
                <div className='pic-container'>
                    {img}
                    <div className='spotlight-text'>
                        <h3 className='shop'> SHOP </h3>
                        <h1 className='description'> {category} </h1>
                    </div>

                </div>
                <div className='filter-container'>
                    <span className='filter-by-text'> Filter by: </span>
                    <div className='option-container'>
                        <select className='option-select'> 
                        <option value=""> COLOR </option>
                            <option value="1">Green</option>
                            <option value="2">Blue</option>
                            <option value="3">Yellow</option>
                        </select>
                    </div>
                </div>
                <div className='product-container'>
                <div className='product-container-container'>
                {harnessProducts}
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps, { getProducts })(Collections)

