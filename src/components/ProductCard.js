import React from 'react';
import {getIndiv} from '../ducks/reducer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class ProductCard extends React.Component{
    clickOnProduct(){
        this.props.getIndiv(this.props.prod)
    }
    render(){
        return (
            <div>
                <Link to='/Product'>
                    <button onClick={() => this.clickOnProduct()}>
                        <img src={this.props.thumbnail} alt=""/>
                    </button>
                </Link>
                <h3>{this.props.title}</h3>
                <h4>{this.props.subtitle}</h4>
                <p>{this.props.price}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        products: state.propduct
    }
}

export default connect(mapStateToProps, {getIndiv})(ProductCard)