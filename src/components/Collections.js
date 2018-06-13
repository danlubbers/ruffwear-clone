import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../ducks/reducer';
import ProductCard from './ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import HARNESSES from '../assets/Header-Image-Harnesses.jpg';
import BOOTS from '../assets/Header-Image-Boots.jpg';
import LEASHES from '../assets/Header-Image-Leashes.jpg';
import PACKS from '../assets/Header-Image-Packs.jpg';
import APPAREL from '../assets/Header-Image-Apparel.jpg';
import COLLARS from '../assets/Header-Image-Collars.jpg';
import CHARNESSES from '../assets/navigation-harnesses-image.jpg';
import CBOOTS from '../assets/navigation-boots.jpg';
import CLEASHES from '../assets/navigation-leashes.jpg';
import CPACKS from '../assets/navigation-packs.jpg';
import CAPPAREL from '../assets/navigation-apparel.jpg';
import CBEDS from '../assets/navigation-beds.jpg';
import CBOWLS from '../assets/navigation-bowls.jpg';
import CCOLLARS from '../assets/navigation-collars.jpg';
import CLIFEJACKETS from '../assets/navigation-life-jackets.jpg';
import CSAFETY from '../assets/navigation-safety.jpg';
import CSPECIALS from '../assets/navigation-specials.jpg';
import CTOYS from '../assets/navigation-toys.jpg';
import CTRAVEL from '../assets/navigation-travel-gear.jpg';
import CPARTNERS from '../assets/navigation-partners.jpg';


class Collections extends React.Component {
    componentDidMount() {
        this.props.getProducts(this.props.match.params.product)
        this.aos = AOS;
        this.aos.init({duration: 1000});
        window.scroll(0,0)
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
        dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 1,
      cssEase: "linear",
      pauseOnHover: false
        }
           
      

        var category = match.params.product.toUpperCase()
        var img

        if (category === "HARNESSES") {
             img = <img className='header-pic' src={HARNESSES} alt={category} />
        } else if (category === "BOOTS") {
             img = <img className='header-pic' src={BOOTS} alt={category} />
        } else if (category === "LEASHES") {
             img = <img className='header-pic' src={LEASHES} alt={category} />
        }  else if (category === "PACKS") {
             img = <img className='header-pic' src={PACKS} alt={category} />
        } else if (category === "APPAREL"){
             img = <img className='header-pic' src={APPAREL} alt={category} />
        } else if (category === 'COLLARS'){
             img = <img className='header-pic' src={COLLARS} alt={category} />
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
          <h3>   <img className='carousel-pic' src={CHARNESSES} alt={category} /> </h3>
        </div>
        <div>
          <h3>  <img className='carousel-pic' src={CBOOTS} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={CLEASHES} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={CPACKS} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={CAPPAREL} alt={category} /> </h3>
        </div>
        <div>
          <h3> <img className='carousel-pic' src={CBEDS} alt={category} /> </h3>
          </div>
          <div>
          <h3>   <img className='carousel-pic' src={CBOWLS} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={CCOLLARS} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={CLIFEJACKETS} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={CSAFETY} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={CSPECIALS} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={CTOYS} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={CTRAVEL} alt={category} /> </h3>
        </div>
        <div>
          <h3>   <img className='carousel-pic' src={CPARTNERS} alt={category} /> </h3>
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
