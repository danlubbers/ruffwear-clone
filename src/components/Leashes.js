import React from 'react';
import {connect} from 'react-redux'
import {getProducts} from '../ducks/reducer'

class Leashes extends React.Component{
    componentDidMount(){
        this.props.getProducts('leashes')
    }
    render(){
        return(
            <div>
                Leashes
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        products: state.products
    }
}

export default connect(mapStateToProps, {getProducts})(Leashes)