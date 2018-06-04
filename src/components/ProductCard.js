import React from 'react';
import { getIndiv } from '../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductCard extends React.Component {
    clickOnProduct() {
        this.props.getIndiv(this.props.id)
    }
    render() {
        return (
            <div className='Product-Card'>
                <Link to={`/Product/${this.props.id}`}>
                    <button className='thumbnail-background' onClick={() => this.clickOnProduct()}>
                        <img className='thumbnail' src={this.props.thumbnail} alt="" />
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