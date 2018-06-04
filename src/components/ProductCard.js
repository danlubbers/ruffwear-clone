import React from 'react';
import { getIndiv } from '../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductCard extends React.Component {
    clickOnProduct() {
        this.props.getIndiv(this.props.id)
    }
    render() {
     
     
        var productColor = this.props.colors.map((color, index) => 
    
       
        <div key={index} style={{background: color[1]}} className='color'>  </div>
  

    )

        
        // let i=0;
        // for(i; i < this.props.colors.length; i++){
        //     productColor.push(this.props.colors[i][1])
        // }
        

        return (
            <div className='Product-Card'>
                <Link to={`/Product/${this.props.id}`}>
                    <button className='thumbnail-background' onClick={() => this.clickOnProduct()}>
                        <img className='thumbnail' src={this.props.thumbnail} alt="" />

                        <div className='color-container'>
                            {productColor}
                            </div>
                    
            
                    </button>
                </Link>
        
                <div className='title'>
                    <h3>{this.props.title}</h3> </div>
                <div className='subtitle'>
                    <h4>{this.props.subtitle}</h4>
                </div>
                <div className='price'>
                    <p>${this.props.price}</p>
                </div>
            
                {productColor}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.propduct
    }
}

export default connect(mapStateToProps, { getIndiv })(ProductCard)