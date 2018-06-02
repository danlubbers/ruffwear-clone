import React from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../ducks/reducer'

class Boots extends React.Component{
    componentDidMount(){
        this.props.getProducts('boots')
    }
    render(){
        console.log(this.props.products);
        return(
            <div>
                Boots
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        products: state.products
    }
}

export default connect(mapStateToProps, {getProducts})(Boots)