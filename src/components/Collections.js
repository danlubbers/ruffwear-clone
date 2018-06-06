import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../ducks/reducer';
import ProductCard from './ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import HARNESSES from '../assets/Header-Image-Harnesses.jpg';
import BOOTS from '../assets/Header-Image-Boots.jpg';
import LEASHES from '../assets/Header-Image-Leashes.jpg';
import PACKS from '../assets/Header-Image-Packs.jpg';
import APPAREL from '../assets/Header-Image-Apparel.jpg';

class Collections extends React.Component {
    constructor(props) {
        super(props)
    
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


    render() {
        console.log(this.props, "what the heck is in props?")
        const { products, match } = this.props
       

        var settings = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          };
           
      

        var category = match.params.product.toUpperCase()


        if (category == "HARNESSES") {
            var img = <img className='header-pic' src={HARNESSES} alt={category} />
        } else if (category == "BOOTS") {
            var img = <img className='header-pic' src={BOOTS} alt={category} />
        } else if (category == "LEASHES") {
            var img = <img className='header-pic' src={LEASHES} alt={category} />
        }  else if (category == "PACKS") {
            var img = <img className='header-pic' src={PACKS} alt={category} />
        } else if (category == "APPAREL"){
            var img = <img className='header-pic' src={APPAREL} alt={category} />
        }

        let ProductItem = products.map((prod, i) => {
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
             
                <div className='product-container'>
                <div className='product-container-container'>
                {ProductItem}
                </div>
                </div>

                          <Slider {...settings}>
                       
        <div>
          <h3>   <img className='carousel-pic' src={HARNESSES} alt={category} /> </h3>
        </div>
        <div>
          <h3>  <img className='carousel-pic' src={BOOTS} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={LEASHES} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={PACKS} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={PACKS} alt={category} /> </h3>
        </div>
        <div>
          <h3>6</h3>
        </div>

                    

        </Slider>

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