import React from 'react';
import { connect } from 'react-redux';
import HARNESSES from '../assets/Header-Image-Harnesses.jpg';
import BOOTS from '../assets/Header-Image-boots.jpg';
import { getProducts } from '../ducks/reducer';
import ProductCard from './ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Collections extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterColor: null
        }
    }

    componentDidMount() {
        this.props.getProducts(this.props.match.params.product)
        this.aos = AOS;
        this.aos.init({duration: 1000});
    }

    componentDidUpdate(){
        this.aos.refresh();
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.product !== nextProps.match.params.product){
      
            this.props.getProducts(nextProps.match.params.product)
            console.log(nextProps)
    }
}

    filterColor(){
        this.setState({
            filterColor: true
        })
    }


    render() {

        // var filterColorList = this.props.product((color, index) => 

        // <li key={product.index} 
        // <div> product </div>
        //   </li>)

        console.log(this.props, "what the heck is in props?")
        // console.log(filterColorList, "whats filtercolorlist ??")

        const { filterColor } = this.state

        var category = this.props.match.params.product.toUpperCase()


        if (category == "HARNESSES") {
            var img = <img className='harnesses-pic' src={HARNESSES} alt={category} />
        } else if (category == "BOOTS") {
            var img = <img className='harnesses-pic' src={BOOTS} alt={category} />
        }

        let ProductItem = this.props.products.map((prod, i) => {
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
                <div data-aos="fade-up" className='pic-container'>
                    {img}
                    <div className='spotlight-text'>
                        <h3 className='shop'> SHOP </h3>
                        <h1 className='description'> {category} </h1>
                    </div>

                </div>
                <div className='filter-container'>
                    <span className='filter-by-text'> Filter by: </span>
                    <div className='option-container'>

                        {filterColor == null ?
                        <button className='option-select' onClick={() => this.filterColor()}>  
                        COLOR
                        </button> :
                        <ul className='filter-color-list'>
                            <li>
                                <button> blue </button> </li>
                             <li>   <button> green </button> </li>
                               

                            </ul>
                         }

                    </div>
                </div>
                <div className='product-container'>
                <div className='product-container-container'>
                {ProductItem}
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

